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
  // Account Management (category of 'Account')
  // FileSystem Management (category of 'FileSystem')
  // FileSystem Permissions Management (category of 'Permissions')
 
  var dataLakeFileSystem = cli.category('datalakefilesystem')
    .description($('Commands to manage your Data Lake FileSystem'));
  
  dataLakeFileSystem.command('list [dataLakeAccountName] [path]')
    .description($('Lists the contents of the .'))
	.usage('[options] <dataLakeAccountName> <path> <destination> <force>')
	.option('-n --dataLakeAccountName <dataLakeAccountName>', $('the Data Lake account name to execute the action on'))
	.option('-p --path <path>', $('the full path to the folder to list (e.g. /someFolder or /someFolder/someNestedFolder)'))
    .execute(function (dataLakeAccountName, path, options, _) {
	  if (!dataLakeAccountName) {
        return cli.missingArgument('dataLakeAccountName');
      }
	  
	  if (!path) {
        return cli.missingArgument('path');
      }
	  
	  var subscription = profile.current.getSubscription(options.subscription);
	  var client = utils.createDataLakeFileSystemManagementClient(subscription);
	  var parameters = {
		  top: 100 // we will always return the top 100 file entries in the path. In the future this should change to have a next link to return everything.
	  };
	  
	  var fileStatuses = client.fileSystem.listFileStatus(path, dataLakeAccountName, parameters, _).fileStatuses.fileStatus;
	  cli.interaction.formatOutput(fileStatuses, function (data) {
        if (data.length === 0) {
          log.info($('The folder is empty or a file was selected, which has no child items'));
        } else {
          log.table(data, function (row, fileStatusProperties) {
            row.cell($('Mode:            '), fileStatusProperties.permission);
            row.cell($('Last write time: '), fileStatusProperties.modificationTime);            
            row.cell($('Length:          '), fileStatusProperties.length);
			row.cell($('Name:            '), fileStatusProperties.pathSuffix);
			row.cell($('Type:            '), fileStatusProperties.type);
          });                     
        }
      }); 
	});
	
	dataLakeFileSystem.command('create [dataLakeAccountName] [path] [value] [folder] [force]')
    .description($('Appends the specified content to the end of the Data Lake file path specified.'))
	.usage('[options] <dataLakeAccountName> <path> <value>')
	.option('-n --dataLakeAccountName <dataLakeAccountName>', $('the Data Lake account name to execute the action on'))
	.option('-p --path <path>', $('the full path to the file to add content to (e.g. /someFolder/someFile.txt)'))
	.option('-v --value <value>', $('optional indicates the contents (as a string) to create the file with. NOTE: This parameter cannot be specified with --folder (-d)'))
	.option('-d --folder <folder>', $('optionally specify that the item being created is a folder, not a file. If this is not specified, a file will be created. NOTE: This parameter cannot be specified with --encoding (-e) or --value (-v)'))
	.option('-f --force <force>', $('optionally indicates that the file or folder being created can overwrite the file or folder at path if it already exists (default is false). \'true\' must be passed in for the overwrite to work'))
    .execute(function (dataLakeAccountName, path, value, folder, force, options, _) {
	  if (!dataLakeAccountName) {
        return cli.missingArgument('dataLakeAccountName');
      }
	  
	  if (!path) {
        return cli.missingArgument('path');
      }
	  
	  if((value && folder)) {
		  throw new Error($('--folder cannot be specified with --value'));
	  }
	  
	  var subscription = profile.current.getSubscription(options.subscription);
	  var client = utils.createDataLakeFileSystemManagementClient(subscription);
	  
	  if(folder) {
		  log.info('about to call mkdir');
		  var result = client.fileSystem.mkdirs(path, dataLakeAccountName, null, _).operationResult;
		  log.info('value of result: ' + result);
		  if (result !== true) { // we pass in null for permissions because permission setting is not supported in public preview.
			 throw new Error($('Failed to create the desired directory!'));
		  }
	  }
	  else {
		   var byteArray = [];
		   if (value) {
		      byteArray = convertStringToByteArray(value);
		  }
		  
		  var parameters = {};
		  
		  if(force) {
			  parameters.overwrite = true;
		  }
		  else {
			  parameters.overwrite = false;
		  }
		  
		  parameters.permission = null;
		  
		  var response = client.fileSystem.internalBeginCreate(path, dataLakeAccountName, parameters, _);
		  client.fileSystem.create(response.location, byteArray, _);
	  }
	  
	  log.info($('Successfully created the specified item at path:  ') + path);
	});
  
  /*
  dataLakeFileSystem.command('addcontent [dataLakeAccountName] [path] [value] [encoding]')
    .description($('Appends the specified content to the end of the Data Lake file path specified.'))
	.usage('[options] <dataLakeAccountName> <path> <value> <encoding>')
	.option('-n --dataLakeAccountName <dataLakeAccountName>', $('the Data Lake account name to execute the action on'))
	.option('-p --path <path>', $('the full path to the file to add content to (e.g. /someFolder/someFile.txt)'))
	.option('-v --value <value>', $('the contents to append to the file'))
	.option('-e --encoding <encoding>', $('optionally specify the encoding type for the value passed in. Valid values are \'string\' and \'byte\'. The default is \'string\''))
    .execute(function (dataLakeAccountName, path, value, encoding, options, _) {
		
  }
  
  dataLakeFileSystem.command('exportitem [dataLakeAccountName] [path] [destination] [force]')
    .description($('Downloads the specified Data Lake file to the local path specified.'))
	.usage('[options] <dataLakeAccountName> <path> <destination> <force>')
	.option('-n --dataLakeAccountName <dataLakeAccountName>', $('the Data Lake account name to execute the action on'))
	.option('-p --path <path>', $('the full path to the file to download (e.g. /someFolder/someFile.txt)'))
	.option('-d --destination <destination>', $('the destination to download to (e.g. C:\somefolder\somefile.txt)'))
	.option('-f --force <force>', $('optionally indicates that the file being downloaded can overwrite the destination if it already exists (default is false). \'true\' must be passed in for the overwrite to work'))
    .execute(function (dataLakeAccountName, path, destination, force, options, _) {
		
  }
  
  var dataLakeFileSystemPermissions = cli.category('datalakepermissions')
    .description($('Commands to manage your Data Lake FileSystem Permissions'));
 
 */
 
  var dataLakeAccount = cli.category('datalakeaccount')
    .description($('Commands to manage your Data Lake accounts'));
 
  dataLakeAccount.command('list [resourceGroup]')
    .description($('List all Data Lake accounts available for your subscription or subscription and resource group'))
    .usage('[options] <resourceGroup>')
    .option('-g --resourceGroup <resourceGroup>', $('the optional resource group to list the accounts in'))
    .execute(function (resourceGroup, options, _) {
      var subscription = profile.current.getSubscription(options.subscription);
      var accounts = listAllDataLakeAccounts(subscription, resourceGroup, _);
      cli.interaction.formatOutput(accounts, function (data) {
        if (data.length === 0) {
          log.info($('No Data Lake accounts were found'));
        } else {
          log.table(data, function (row, dataLakeAccount) {
            row.cell($('Data Lake Account Name:  '), dataLakeAccount.name);
            row.cell($('Data Lake Account Id:    '), dataLakeAccount.id);            
            row.cell($('Data Lake Account State: '), dataLakeAccount.properties.provisioningState);
          });                     
        }
      });            
    });

  dataLakeAccount.command('show [dataLakeAccountName] [resourceGroup]')
    .description($('Shows a Data Lake Account based on account name'))
    .usage('[options] <dataLakeAccountName> <resourceGroup>')
    .option('-n --dataLakeAccountName <dataLakeAccountName>', $('the dataLakeAccount name'))
	.option('-g --resourceGroup <resourceGroup>', $('the optional resource group to list the accounts in'))
    .execute(function (dataLakeAccountName, resourceGroup, options, _) {
      if (!dataLakeAccountName) {
        return cli.missingArgument('dataLakeAccountName');
      }
	  
      var subscription = profile.current.getSubscription(options.subscription);
      var client = utils.createDataLakeManagementClient(subscription);
      
	  if(!resourceGroup)
	  {
		  resourceGroup = getResrouceGroupByAccountName(subscription, resourceGroup, dataLakeAccountName, _);
	  }
	  
      var dataLakeAccount = client.dataLakeAccount.get(resourceGroup, dataLakeAccountName, _).dataLakeAccount;

      cli.interaction.formatOutput(dataLakeAccount, function (data) {
        if (!data) {
          log.info($('No such Data Lake account was found'));
        } else {
          log.data($('Data Lake Account Name:  ') + data.name);
          log.data($('Data Lake Account Id:    ') + data.id);
          log.data($('Data Lake Account State: ') + data.properties.provisioningState);
        }
      });      
    });
	
	dataLakeAccount.command('delete [dataLakeAccountName] [resourceGroup]')
    .description($('Deletes a Data Lake Account based on account name'))
    .usage('[options] <dataLakeAccountName> <resourceGroup>')
    .option('-n --dataLakeAccountName <dataLakeAccountName>', $('the dataLakeAccount name'))
	.option('-g --resourceGroup <resourceGroup>', $('the optional resource group to force the command to find the Data Lake account to delete in.'))
	.option('-q, --quiet', $('quiet mode (do not ask for delete confirmation)'))
    .execute(function (dataLakeAccountName, resourceGroup, options, _) {
      if (!dataLakeAccountName) {
        return cli.missingArgument('dataLakeAccountName');
      }
	  
	  if (!options.quiet && !cli.interaction.confirm(util.format($('Delete Data Lake Account %s? [y/n] '), dataLakeAccountName), _)) {
        return;
      }
	  
      var subscription = profile.current.getSubscription(options.subscription);
      var client = utils.createDataLakeManagementClient(subscription);
      
	  if(!resourceGroup)
	  {
		  resourceGroup = getResrouceGroupByAccountName(subscription, resourceGroup, dataLakeAccountName, _);
	  }
	  
      var response = client.dataLakeAccount.delete(resourceGroup, dataLakeAccountName, _);
	  
	  if (response.Status !== 'Succeeded') {
		 throw new Error(util.format($('Data Lake account operation failed with the following error code: %s and message: %s', response.error.code, response.error.message)));
	  }
    });
	
	dataLakeAccount.command('create [dataLakeAccountName] [location] [resourceGroup] [defaultGroup] [tags]')
    .description($('Creates a Data Lake Account'))
    .usage('[options] <dataLakeAccountName> <location> <resourceGroup> <defaultGroup> <tags>')
    .option('-n --dataLakeAccountName <dataLakeAccountName>', $('The Data Lake account name to create'))
	.option('-l --location <location>', $('the location the Data Lake account will be created in. Valid values are: North Central US, South Central US, Central US, West Europe, North Europe, West US, East US, East US 2, Japan East, Japan West, Brazil South, Southeast Asia, East Asia, Australia East, Australia Southeast'))
	.option('-g --resourceGroup <resourceGroup>', $('the resource group to create the account in'))
	.option('-d --defaultGroup <defaultGroup>', $('the optional default permissions group to add to the account when created'))
	.option('-t --tags <tags>', $('the optional key, value paired set of tags to associate with this account resource.'))
    .execute(function (dataLakeAccountName, location, resourceGroup, defaultGroup, tags, options, _) {
      var subscription = profile.current.getSubscription(options.subscription);
      var dataLakeAccount = createOrUpdateDataLakeAccount(subscription, dataLakeAccountName, resourceGroup, location, defaultGroup, tags, _);
      cli.interaction.formatOutput(dataLakeAccount, function (data) {
        if (!data) {
          throw new Error($('Failed to create and retrieve the Data Lake account.'));
        } else {
          log.data($('Data Lake Account Name:  ') + data.name);
          log.data($('Data Lake Account Id:    ') + data.id);
          log.data($('Data Lake Account State: ') + data.properties.provisioningState);
        }
      });      
    });
  
	dataLakeAccount.command('set [dataLakeAccountName] [resourceGroup] [defaultGroup] [tags]')
    .description($('Creates a Data Lake Account'))
    .usage('[options] <dataLakeAccountName> <resourceGroup> <defaultGroup> <tags>')
    .option('-n --dataLakeAccountName <dataLakeAccountName>', $('The Data Lake account name to update with new tags and/or default permissions group'))
	.option('-g --resourceGroup <resourceGroup>', $('the optional resource group to forcibly look for the account to update in'))
	.option('-d --defaultGroup <defaultGroup>', $('the optional default permissions group to set in the existing account'))
	.option('-t --tags <tags>', $('the optional key, value paired set of tags to associate with this account resource.'))
    .execute(function (dataLakeAccountName, resourceGroup, defaultGroup, tags, options, _) {
      var subscription = profile.current.getSubscription(options.subscription);
	  var client = utils.createDataLakeManagementClient(subscription);
	  
	  if (!resourceGroup) {
		  resourceGroup = getResrouceGroupByAccountName(subscription, resourceGroup, dataLakeAccountName, _);
	  }
	  
	  var dataLakeAccount = client.dataLakeAccount.get(resourceGroup, dataLakeAccountName, _).dataLakeAccount;
	  
	  if (!defaultGroup) {
		  defaultGroup = dataLakeAccount.properties.configuration.defaultGroup;
	  }
	  if(!tags) {
		  tags = dataLakeAccount.tags;
	  }
	  
      dataLakeAccount  = createOrUpdateDataLakeAccount(subscription, dataLakeAccountName, resourceGroup, dataLakeAccount.location, defaultGroup, tags, _);
      cli.interaction.formatOutput(dataLakeAccount, function (data) {
        if (!data) {
          throw new Error($('Failed to create and retrieve the Data Lake account.'));
        } else {
          log.data($('Data Lake Account Name:  ') + data.name);
          log.data($('Data Lake Account Id:    ') + data.id);
          log.data($('Data Lake Account State: ') + data.properties.provisioningState);
        }
      });      
    });
	
  function createOrUpdateDataLakeAccount(subscription, dataLakeAccountName, resourceGroup, location, defaultGroup, tags, _) {
	  if (!dataLakeAccountName) {
        return cli.missingArgument('dataLakeAccountName');
      }
	  if (!location) {
        return cli.missingArgument('location');
      }
	  if (!resourceGroup) {
        return cli.missingArgument('resourceGroup');
      }
	  
	  var client = utils.createDataLakeManagementClient(subscription);
	  var create = false;
	  try {
		var dataLakeAccount = client.dataLakeAccount.get(resourceGroup, dataLakeAccountName, _);
	  }
	  catch(err){
		create = true;
	  }
	  
	  var accountParams = {
		  dataLakeAccount: {
			  name: dataLakeAccountName,
			  location: location,
			  properties: {
				  configuration: {
					  defaultGroup: defaultGroup
				  }
			  },
			  tags: tags
		  }
	  }
	  
	  if(create) {
		  var response = client.dataLakeAccount.create(resourceGroup, accountParams, _);
	  }
	  else {
		  var response = client.dataLakeAccount.update(resourceGroup, accountParams, _);
	  }
	  
	  if (response.status !== 'Succeeded') {
		 throw new Error(util.format($('Data Lake account operation failed with the following error code: %s and message: %s', response.error.code, response.error.message)));
	  }
	  
	  return client.dataLakeAccount.get(resourceGroup, dataLakeAccountName, _).dataLakeAccount;
  }
  
  function listAllDataLakeAccounts(subscription, resourceGroup, _) {
	var client = utils.createDataLakeManagementClient(subscription);
	var response = client.dataLakeAccount.list(resourceGroup, _);
	var accounts = response.value;
	while (response.nextLink)
	{
		response = client.dataLakeAccount.listNext(response.nextLink);
		accounts.push.apply(accounts, response.value);
	}
	
	return accounts;
  }
  
  function getResrouceGroupByAccountName(subscription, resourceGroup, name, _) {
    var accounts = listAllDataLakeAccounts(subscription, resourceGroup, _);
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