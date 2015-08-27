/**
* Copyright (c) Microsoft.  All rights reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';
var util = require('util');

var profile = require('../../../util/profile');
var utils = require('../../../util/utils');
var $ = utils.getLocaleString;

exports.init = function (cli) {
  var log = cli.output;
  var withProgress = cli.interaction.withProgress.bind(cli.interaction);

  // This includes the following three categories:
  // Account Management (category of 'konaaccount')
  // Job Management (category of 'konajob')
  // Catalog Management (category of 'konacatlog')
 
 /*
  var konaJob = cli.category('konajob')
    .description($('Commands to manage your Kona Jobs'));
  
  konaJob.command('addcontent [konaAccountName] [path] [value] [encoding]')
    .description($('Appends the specified content to the end of the Kona file path specified.'))
	.usage('[options] <konaAccountName> <path> <value> <encoding>')
	.option('-n --konaAccountName <konaAccountName>', $('the Kona account name to execute the action on'))
	.option('-p --path <path>', $('the full path to the file to add content to (e.g. /someFolder/someFile.txt)'))
	.option('-v --value <value>', $('the contents to append to the file'))
	.option('-e --encoding <encoding>', $('optionally specify the encoding type for the value passed in. Valid values are \'string\' and \'byte\'. The default is \'string\''))
    .execute(function (konaAccountName, path, value, encoding, options, _) {
		
  }
  
  konaJob.command('exportitem [konaAccountName] [path] [destination] [force]')
    .description($('Downloads the specified Kona file to the local path specified.'))
	.usage('[options] <konaAccountName> <path> <destination> <force>')
	.option('-n --konaAccountName <konaAccountName>', $('the Kona account name to execute the action on'))
	.option('-p --path <path>', $('the full path to the file to download (e.g. /someFolder/someFile.txt)'))
	.option('-d --destination <destination>', $('the destination to download to (e.g. C:\somefolder\somefile.txt)'))
	.option('-f --force <force>', $('optionally indicates that the file being downloaded can overwrite the destination if it already exists (default is false). \'true\' must be passed in for the overwrite to work'))
    .execute(function (konaAccountName, path, destination, force, options, _) {
		
  }
  
  konaJob.command('list [konaAccountName] [path]')
    .description($('Lists the contents of the .'))
	.usage('[options] <konaAccountName> <path> <destination> <force>')
	.option('-n --konaAccountName <konaAccountName>', $('the Kona account name to execute the action on'))
	.option('-p --path <path>', $('the full path to the file or folder to list (e.g. /someFolder or /someFolder/someFile.txt)'))
    .execute(function (konaAccountName, path, options, _) {
		
  }
  
  var konaCatalog = cli.category('konacatalog')
    .description($('Commands to manage your Kona Catalog'));
 
 */
 
  var konaAccount = cli.category('konaaccount')
    .description($('Commands to manage your Kona accounts'));
 
  konaAccount.command('list [resourceGroup]')
    .description($('List all Kona accounts available for your subscription or subscription and resource group'))
    .usage('[options] <resourceGroup>')
    .option('-g --resourceGroup <resourceGroup>', $('the optional resource group to list the accounts in'))
    .execute(function (resourceGroup, options, _) {
      var subscription = profile.current.getSubscription(options.subscription);
      var accounts = listAllKonaAccounts(subscription, resourceGroup, _);
      cli.interaction.formatOutput(accounts, function (data) {
        if (data.length === 0) {
          log.info($('No Kona accounts were found'));
        } else {
          log.table(data, function (row, konaAccount) {
            row.cell($('Kona Account Name:  '), konaAccount.name);
            row.cell($('Kona Account Id:    '), konaAccount.id);            
            row.cell($('Kona Account State: '), konaAccount.properties.provisioningState);
          });                     
        }
      });            
    });

  konaAccount.command('show [konaAccountName] [resourceGroup]')
    .description($('Shows a Kona Account based on account name'))
    .usage('[options] <konaAccountName> <resourceGroup>')
    .option('-n --konaAccountName <konaAccountName>', $('the konaAccount name'))
	.option('-g --resourceGroup <resourceGroup>', $('the optional resource group to list the accounts in'))
    .execute(function (konaAccountName, resourceGroup, options, _) {
      if (!konaAccountName) {
        return cli.missingArgument('konaAccountName');
      }
	  
      var subscription = profile.current.getSubscription(options.subscription);
      var client = utils.createKonaManagementClient(subscription);
      
	  if(!resourceGroup)
	  {
		  resourceGroup = getResrouceGroupByAccountName(subscription, resourceGroup, konaAccountName, _);
	  }
	  
      var konaAccount = client.konaAccount.get(resourceGroup, konaAccountName, _).konaAccount;

      cli.interaction.formatOutput(konaAccount, function (data) {
        if (!data) {
          log.info($('No such Kona account was found'));
        } else {
          log.data($('Kona Account Name:  ') + data.name);
          log.data($('Kona Account Id:    ') + data.id);
          log.data($('Kona Account State: ') + data.properties.provisioningState);
        }
      });      
    });
	
	konaAccount.command('delete [konaAccountName] [resourceGroup]')
    .description($('Deletes a Kona Account based on account name'))
    .usage('[options] <konaAccountName> <resourceGroup>')
    .option('-n --konaAccountName <konaAccountName>', $('the konaAccount name'))
	.option('-g --resourceGroup <resourceGroup>', $('the optional resource group to force the command to find the Kona account to delete in.'))
	.option('-q, --quiet', $('quiet mode (do not ask for delete confirmation)'))
    .execute(function (konaAccountName, resourceGroup, options, _) {
      if (!konaAccountName) {
        return cli.missingArgument('konaAccountName');
      }
	  
	  if (!options.quiet && !cli.interaction.confirm(util.format($('Delete Kona Account %s? [y/n] '), konaAccountName), _)) {
        return;
      }
	  
      var subscription = profile.current.getSubscription(options.subscription);
      var client = utils.createKonaManagementClient(subscription);
      
	  if(!resourceGroup)
	  {
		  resourceGroup = getResrouceGroupByAccountName(subscription, resourceGroup, konaAccountName, _);
	  }
	  
      var response = client.konaAccount.delete(resourceGroup, konaAccountName, _);
	  
	  if (response.Status !== 'Succeeded') {
		 throw new Error(util.format($('Kona account operation failed with the following error code: %s and message: %s', response.error.code, response.error.message)));
	  }
    });
	
	konaAccount.command('create [konaAccountName] [location] [resourceGroup] [defaultDataLake] [tags]')
    .description($('Creates a Kona Account'))
    .usage('[options] <konaAccountName> <location> <resourceGroup> <defaultGroup> <tags>')
    .option('-n --konaAccountName <konaAccountName>', $('The Kona account name to create'))
	.option('-l --location <location>', $('the location the Kona account will be created in. Valid values are: North Central US, South Central US, Central US, West Europe, North Europe, West US, East US, East US 2, Japan East, Japan West, Brazil South, Southeast Asia, East Asia, Australia East, Australia Southeast'))
	.option('-g --resourceGroup <resourceGroup>', $('the resource group to create the account in'))
	.option('-d --defaultDataLake <defaultDataLake>', $('the default Data Lake to associate with this account.'))
	.option('-t --tags <tags>', $('the optional key, value paired set of tags to associate with this account resource.'))
    .execute(function (konaAccountName, location, resourceGroup, defaultDataLake, tags, options, _) {
      var subscription = profile.current.getSubscription(options.subscription);
      var konaAccount = createOrUpdateKonaAccount(subscription, konaAccountName, resourceGroup, location, defaultDataLake, tags, _);
      cli.interaction.formatOutput(konaAccount, function (data) {
        if (!data) {
          throw new Error($('Failed to create and retrieve the Kona account.'));
        } else {
          log.data($('Kona Account Name:  ') + data.name);
          log.data($('Kona Account Id:    ') + data.id);
          log.data($('Kona Account State: ') + data.properties.provisioningState);
        }
      });      
    });
  
	konaAccount.command('set [konaAccountName] [resourceGroup] [defaultDataLake] [tags]')
    .description($('Creates a Kona Account'))
    .usage('[options] <konaAccountName> <resourceGroup> <defaultDataLake> <tags>')
    .option('-n --konaAccountName <konaAccountName>', $('The Kona account name to update with new tags and/or default permissions group'))
	.option('-g --resourceGroup <resourceGroup>', $('the optional resource group to forcibly look for the account to update in'))
	.option('-d --defaultDataLake <defaultDataLake>', $('the optional new default Data Lake to set for this account'))
	.option('-t --tags <tags>', $('the optional key, value paired set of tags to associate with this account resource.'))
    .execute(function (konaAccountName, resourceGroup, defaultDataLake, tags, options, _) {
      var subscription = profile.current.getSubscription(options.subscription);
	  var client = utils.createKonaManagementClient(subscription);
	  
	  if (!resourceGroup) {
		  resourceGroup = getResrouceGroupByAccountName(subscription, resourceGroup, konaAccountName, _);
	  }
	  
	  var konaAccount = client.konaAccount.get(resourceGroup, konaAccountName, _).konaAccount;
	  
	  if (!defaultDataLake) {
		  defaultDataLake = konaAccount.properties.configuration.defaultStorage;
	  }
	  if(!tags) {
		  tags = konaAccount.tags;
	  }
	  
      konaAccount  = createOrUpdateKonaAccount(subscription, konaAccountName, resourceGroup, konaAccount.location, defaultDataLake, tags, _);
      cli.interaction.formatOutput(konaAccount, function (data) {
        if (!data) {
          throw new Error($('Failed to create and retrieve the Kona account.'));
        } else {
          log.data($('Kona Account Name:  ') + data.name);
          log.data($('Kona Account Id:    ') + data.id);
          log.data($('Kona Account State: ') + data.properties.provisioningState);
        }
      });      
    });
	
  function createOrUpdateKonaAccount(subscription, konaAccountName, resourceGroup, location, defaultDataLake, tags, _) {
	  if (!konaAccountName) {
        return cli.missingArgument('konaAccountName');
      }
	  if (!location) {
        return cli.missingArgument('location');
      }
	  if (!resourceGroup) {
        return cli.missingArgument('resourceGroup');
      }
	  
	  if (!defaultDataLake) {
        return cli.missingArgument('defaultDataLake');
      }
	  
	  var client = utils.createKonaManagementClient(subscription);
	  var create = false;
	  try {
		var konaAccount = client.konaAccount.get(resourceGroup, konaAccountName, _);
	  }
	  catch(err){
		create = true;
	  }
	  
	  var accountParams = {
		  konaAccount: {
			  name: konaAccountName,
			  location: location,
			  properties: {
				  configuration: {
					  defaultStorage: defaultDataLake
				  }
			  },
			  tags: tags
		  }
	  }
	  
	  if(create) {
		  var response = client.konaAccount.create(resourceGroup, accountParams, _);
	  }
	  else {
		  var response = client.konaAccount.update(resourceGroup, accountParams, _);
	  }
	  
	  if (response.status !== 'Succeeded') {
		 throw new Error(util.format($('Kona account operation failed with the following error code: %s and message: %s', response.error.code, response.error.message)));
	  }
	  
	  return client.konaAccount.get(resourceGroup, konaAccountName, _).konaAccount;
  }
  
  function listAllKonaAccounts(subscription, resourceGroup, _) {
	var client = utils.createKonaManagementClient(subscription);
	var response = client.konaAccount.list(resourceGroup, _);
	var accounts = response.value;
	while (response.nextLink)
	{
		response = client.konaAccount.listNext(response.nextLink);
		accounts.push.apply(accounts, response.value);
	}
	
	return accounts;
  }
  
  function getResrouceGroupByAccountName(subscription, resourceGroup, name, _) {
    var accounts = listAllKonaAccounts(subscription, resourceGroup, _);
	for (var i = 0; i < accounts.length; i++)
	{
		if (accounts[i].name === name)
		{
			var acctId = accounts[i].id;
			var rgStart = acctId.indexOf('resourceGroups/') + ('resourceGroups/'.length);
			var rgEnd = acctId.indexOf('/providers/');
			return acctId.substring(rgStart, rgEnd);
		}
	}
	
	throw new Error($('Could not find account: ' + name + ' in any resource group in subscription: ' + subscription ));
  }
  
  function convertStringToByteArray(str) {
	var result = [];
	for (var i = 0; i < str.length; i++) {
		result.push(str.charCodeAt(i).toString(2));
	}
	return result;
  }
  
  function convertByteArrayToString(array) {
    var result = "";
    for (var i = 0; i < array.length; i++) {
      result += String.fromCharCode(parseInt(array[i], 2));
    }
    return result;
  }
};