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
var konaUtils = require('./kona.utils');
var $ = utils.getLocaleString;

exports.init = function (cli) {
  var log = cli.output;
  var withProgress = cli.interaction.withProgress.bind(cli.interaction);

  // This includes the following three categories:
  // Account Management (category of 'konaaccount')
  // Job Management (category of 'konajob')
  // Catalog Management (category of 'konacatlog')

  var konaJob = cli.category('konajob')
    .description($('Commands to manage your Kona Jobs'));
  
  konaJob.command('create [konaAccountName] [jobName] [script] [runtime] [compileMode] [compileOnly] [degreeOfParallelism] [priority] [resourceGroup]' )
    .description($('Submits a job to the specified Kona account.'))
	.usage('[options] <konaAccountName> <jobName> <script> <runtime> <compileMode> <compileOnly> <degreeOfParallelism> <priority> <resourceGroup>')
	.option('-n --konaAccountName <konaAccountName>', $('the Kona account name to execute the action on'))
	.option('-j --jobName <jobName>', $('the name for this job submission'))
	.option('-s --script <script>', $('the script to run'))
	.option('-r --runtime <runtime>', $('optionally indicates the runtime to use. Default is the current default runtime.'))
	.option('-m --compileMode <compileMode>', $('optionally specify the type of compilation to do. Valid values are \'Semantic\', \'Full\', and \'SingleBox\' Default is Full.'))
	.option('-c --compileOnly <compileOnly>', $('optionally indicates that this job should only be compiled and not run.'))
	.option('-d --degreeOfParallelism <degreeOfParallelism>', $('optionally specify the degree of parallelism for the job in a range from 1 to 50. Default value is 1.'))
	.option('-p --priority <priority>', $('optionally specify the priority for the job. Default value is 1000, with lower values having higher priority.'))
	.option('-g --resourceGroup <resourceGroup>', $('the optional resource group to force lookup of the Kona account in.'))
    .execute(function (konaAccountName, jobName, script, runtime, compileMode, compileOnly, degreeOfParallelism, priority, resourceGroup, options, _) {
      var subscription = profile.current.getSubscription(options.subscription);
      var client = utils.createKonaJobManagementClient(subscription);
      
	  if (!konaAccountName) {
        return cli.missingArgument('konaAccountName');
      }
	  
	  if (!jobName) {
        return cli.missingArgument('jobName');
      }
	  
	  if (!script) {
        return cli.missingArgument('script');
      }
	  
	  if(!resourceGroup)
	  {
		  resourceGroup = getResrouceGroupByAccountName(subscription, resourceGroup, konaAccountName, _);
	  }
	  
	  if(!degreeOfParallelism) {
		  degreeOfParallelism = 1;
	  }
	  
	  if(!priority) {
		  priority = 1000;
	  }
	  
	  var job = {
		  jobId: utils.uuidGen(),
		  name: jobName,
		  type: 'SqlIP', // NOTE: We do not support hive jobs yet.
		  degreeOfParallelism: degreeOfParallelism,
		  priority: priority
	  };
	  
	  var properties = {
		  type: 'SqlIP',
		  script: script
	  };
	  
	  if(compileMode) {
		  properties.compileMode = compileMode;
	  }
	  
	  if(runtime) {
		  properties.runtimeVersion = runtime;
	  }
	  
	  job.properties = properties;
	  var parameters = {
	      job: job
	  };
	  var jobResponse = {};
	  if(compileOnly) {
		  jobResponse = client.jobs.build(resourceGroup, konaAccountName, parameters, _).job;
	  }
	  else {
		  jobResponse = client.jobs.create(resourceGroup, konaAccountName, parameters, _).job;
	  }
	  
	  konaUtils.formatOutput(cli, log, options, jobResponse);
  });
  
  konaJob.command('get [konaAccountName] [jobId] [includeDebugInfo] [includeStatistics] [resourceGroup]' )
    .description($('Gets the specified job and additional data if desired.'))
	.usage('[options] <konaAccountName> <jobId> <includeDebugInfo> <includeStatistics> <resourceGroup>')
	.option('-n --konaAccountName <konaAccountName>', $('the Kona account name to execute the action on'))
	.option('-j --jobId <jobId>', $('the job ID of the job to retrieve.'))
	.option('-d --includeDebugInfo', $('optionally indicates that debug info should be output for the job as well.'))
	.option('-s --includeStatistics', $('optionally indicates that statistics for the job should be output as well.'))
	.option('-g --resourceGroup <resourceGroup>', $('the optional resource group to force lookup of the Kona account in.'))
    .execute(function (konaAccountName, jobId, includeDebugInfo, includeStatistics, resourceGroup, options, _) {
      var subscription = profile.current.getSubscription(options.subscription);
      var client = utils.createKonaJobManagementClient(subscription);
      
	  if (!konaAccountName) {
        return cli.missingArgument('konaAccountName');
      }
	  
	  if (!jobId) {
        return cli.missingArgument('jobId');
      }
	  
	  if(!resourceGroup)
	  {
		  resourceGroup = getResrouceGroupByAccountName(subscription, resourceGroup, konaAccountName, _);
	  }
	  
	  var jobResponse = client.jobs.get(resourceGroup, konaAccountName, jobId, _).job;
	  
	  konaUtils.formatOutput(cli, log, options, jobResponse);
	  
	  if(includeStatistics) {
		  try {
		    var statistics = client.jobs.getStatistics(resourceGroup, konaAccountName, jobId, _).statistics;
			log.data('Statistics:');
            log.data('  lastUpdateTimeUtc: ' + statistics.lastUpdateTimeUtc);
			konaUtils.formatOutputList(cli, log, options, statistics.stages);
		  }
		  catch (err) {
			log.info('Could not recover statistics info for the job. This happens if the job failed to start. Error reported: ' + err);
		  }
	  }
	  
	  if(includeDebugInfo) {
		log.info('made it in here');
		try {
		  var debugData = client.jobs.getDebugDataPath(resourceGroup, konaAccountName, jobId, _).jobData.paths;
		  log.data('Debug Data Paths:');
		  konaUtils.formatOutputList(cli, log, options, debugData);
		}
		catch (err) {
			log.info('Could not recover debug info for the job. This happens if the job completed successfully. Error reported: ' + err);
		}
	  }
  });
  
  konaJob.command('cancel [konaAccountName] [jobId] [resourceGroup]' )
    .description($('cancels the specified job.'))
	.usage('[options] <konaAccountName> <jobId> <includeDebugInfo> <includeStatistics> <resourceGroup>')
	.option('-n --konaAccountName <konaAccountName>', $('the Kona account name to execute the action on'))
	.option('-j --jobId <jobId>', $('the job ID of the job to retrieve.'))
	.option('-q, --quiet', $('quiet mode (do not ask for cancel confirmation)'))
	.option('-g --resourceGroup <resourceGroup>', $('the optional resource group to force lookup of the Kona account in.'))
    .execute(function (konaAccountName, jobId, includeDebugInfo, includeStatistics, resourceGroup, options, _) {
      var subscription = profile.current.getSubscription(options.subscription);
      var client = utils.createKonaJobManagementClient(subscription);
      
	  if (!konaAccountName) {
        return cli.missingArgument('konaAccountName');
      }
	  
	  if (!jobId) {
        return cli.missingArgument('jobId');
      }
	  
	  if (!options.quiet && !cli.interaction.confirm(util.format($('Cancel Job with id %s in account %s? [y/n] '), jobId, konaAccountName), _)) {
        return;
      }
	  
	  if(!resourceGroup)
	  {
		  resourceGroup = getResrouceGroupByAccountName(subscription, resourceGroup, konaAccountName, _);
	  }
	  
	  client.jobs.cancel(resourceGroup, konaAccountName, jobId);
	  
	  log.data($('Successfully canceled the job with ID: ' + jobId));
  });
  
  konaJob.command('list [konaAccountName] [jobName] [submitter] [submittedAfter] [submittedBefore] [state] [result] [resourceGroup]' )
    .description($('cancels the specified job.'))
	.usage('[options] <konaAccountName> <jobId> <includeDebugInfo> <includeStatistics> <resourceGroup>')
	.option('-n --konaAccountName <konaAccountName>', $('the Kona account name to execute the action on'))
	.option('-j --jobName <jobName>', $('An optional filter which returns jobs with only the specified friendly name.'))
	.option('-s, --submitter <submitter>', $('An optional filter which returns jobs only by the specified submitter.'))
	.option('-a, --submittedAfter <submittedAfter>', $('An optional filter which returns jobs only submitted after the specified time (as a date time offset).'))
	.option('-b, --submittedBefore <submittedAfter>', $('An optional filter which returns jobs only submitted before the specified time (as a date time offset).'))
	.option('-t, --state <state[]>', $('An optional filter which returns jobs with only the specified states (as an array)'))
	.option('-r, --result <result[]>', $('An optional filter which returns jobs with only the specified states (as an array)'))
	.option('-g --resourceGroup <resourceGroup>', $('the optional resource group to force lookup of the Kona account in.'))
    .execute(function (konaAccountName, jobName, submitter, submittedAfter, submittedBefore, state, result, resourceGroup, options, _) {
      var subscription = profile.current.getSubscription(options.subscription);
      var client = utils.createKonaJobManagementClient(subscription);
      
	  if (!konaAccountName) {
        return cli.missingArgument('konaAccountName');
      }
	  
	  if(!resourceGroup)
	  {
		  resourceGroup = getResrouceGroupByAccountName(subscription, resourceGroup, konaAccountName, _);
	  }
	  
	  var filter = [];
	  if(submitter) {
		  filter.push('Submitter eq \'' + submitter + '\'');
	  }
	  
	  if(jobName) {
		  filter.push('Name eq \'' + jobName + '\'');
	  }
	  
	  if(submittedAfter) {
		  filter.push('SubmitTime ge datetimeoffset\'' + submittedAfter + '\'');
	  }
	  
	  if(submittedBefore) {
		  filter.push('SubmitTime lt datetimeoffset\'' + submittedBefore + '\'');
	  }
	  
	  if(state && state.length > 0) {
		  var stateString = '(';
		  var stateArray = [];
		  for(var i = 0; i < state.length; i++) {
			  stateArray.push('State eq \'' + state[i] + '\'');
		  }
		  
		  stateString += stateArray.join(" or ") + ')';
		  filter.push(stateString);
	  }
	  
	  if(result && result.length > 0) {
		  var resultString = '(';
		  var resultArray = [];
		  for(var i = 0; i < result.length; i++) {
			  resultArray.push('Result eq \'' + result[i] + '\'');
		  }
		  
		  resultString += resultArray.join(" or ") + ')';
		  filter.push(resultString);
	  }
	  
	  if(filter && filter.length > 0) {
	    var filterString = filter.join(" and ");
	    var parameters = {
		  filter: filterstring
	    };
	  }
	  var response = client.jobs.list(resourceGroup, konaAccountName, parameters, _);
	  var jobList = response.value;
	  
	  while(response.nextLink && response.nextLink.length > 0) {
		  response = client.jobs.listNext(response.nextLink, resourceGroup, _);
		  response.value.forEach(function(eachValue) {jobList.push(eachValue)}, jobList);
	  }
	  
	  konaUtils.formatOutputList(cli, log, options, jobList);
  });
  
  var konaCatalog = cli.category('konacatalog')
    .description($('Commands to manage your Kona Catalog'));
 
  konaCatalog.command('list [konaAccountName] [catalogItemType] [catalogItemPath] [resourceGroup]')
    .description($('Lists all of the specified catalog item type under the path or, if the full path is give, just the single catalog item at that path.'))
    .usage('[options] <konaAccountName> <catalogItemType> <catalogItemPath> <resourceGroup>')
	.option('-n --konaAccountName <konaAccountName>', $('The Kona account name to perform the action on.'))
	.option('-t --catalogItemType <catalogItemType>', $('The catalog item type to return. Valid values are (case insensitive): database, schema, assembly, externaldatasource, table, tablevaluedfunction or tablestatistics'))
	.option('-p --catalogItemPath <catalogItemPath>', $('The path to the catalog item(s) to get or list in the format: <FirstPart>.<OptionalSecondPart>.<OptionalThirdPart>.<OptionalFourthPart>.'))
    .option('-g --resourceGroup <resourceGroup>', $('the optional resource group to list the accounts in'))
    .execute(function (konaAccountName, catalogItemType, catalogItemPath, resourceGroup, options, _) {
      if (!konaAccountName) {
        return cli.missingArgument('konaAccountName');
      }
	  
	  if (!catalogItemType) {
        return cli.missingArgument('catalogItemType');
      }
	  
	  var subscription = profile.current.getSubscription(options.subscription);
      
	  if(!resourceGroup)
	  {
		  resourceGroup = getResrouceGroupByAccountName(subscription, resourceGroup, konaAccountName, _);
	  }
	  
	  var output = getCatalogItem(subscription, resourceGroup, konaAccountName, catalogItemPath, catalogItemType, _);
      konaUtils.formatOutputList(cli, log, options, output);
    });
	
  konaCatalog.command('createsecret [konaAccountName] [databaseName] [hostUri] [secretName] [resourceGroup]')
    .description($('Creates the specified secret for the specified database.'))
    .usage('[options] <konaAccountName> <databaseName> <hostUri> <secretName> <resourceGroup>')
	.option('-n --konaAccountName <konaAccountName>', $('The Kona account name to perform the action on.'))
	.option('-d --databaseName <databaseName>', $('The name of the database to create the secret in.'))
	.option('-h --hostUri <hostUri>', $('The full host URI associated with the external data source the secret will be used with.'))
	.option('-s --secretName <secretName>', $('secret name, will prompt if not given'))
	.option('-p --password <password>', $('secret password, will prompt if not given'))
    .option('-g --resourceGroup <resourceGroup>', $('the optional resource group to list the accounts in'))
    .execute(function (konaAccountName, databaseName, hostUri, secretName, resourceGroup, options, _) {
      if (!konaAccountName) {
        return cli.missingArgument('konaAccountName');
      }
	  
	  if (!databaseName) {
        return cli.missingArgument('databaseName');
      }
	  
	  if (!hostUri) {
        return cli.missingArgument('hostUri');
      }
	  
	  var subscription = profile.current.getSubscription(options.subscription);
	  
	  if(!resourceGroup)
	  {
		  resourceGroup = getResrouceGroupByAccountName(subscription, resourceGroup, konaAccountName, _);
	  }
	  
	  secretName = cli.interaction.promptIfNotGiven('SecretName: ', secretName, _);
	  var password = cli.interaction.promptPasswordOnceIfNotGiven('Password: ', options.password, _);
	  
	  var client = utils.createKonaCatalogManagementClient(subscription);
	  var params = {
		  secretName: secretName,
		  password: password,
		  uri: hostUri
	  };
	  
	  var response = client.catalog.createSecret(resourceGroup, konaAccountName, databaseName, params, _).secret;
	  konaUtils.formatOutput(cli, log, options, response);
    });
	
	konaCatalog.command('setsecret [konaAccountName] [databaseName] [hostUri] [secretName] [resourceGroup]')
    .description($('Updates the password and/or hostUri of the specified secret in the specified database.'))
    .usage('[options] <konaAccountName> <databaseName> <hostUri> <secretName> <resourceGroup>')
	.option('-n --konaAccountName <konaAccountName>', $('The Kona account name to perform the action on.'))
	.option('-d --databaseName <databaseName>', $('The name of the database to create the secret in.'))
	.option('-h --hostUri <hostUri>', $('The full host URI associated with the external data source the secret will be used with.'))
	.option('-s --secretName <secretName>', $('secret name, will prompt if not given'))
	.option('-p --password <password>', $('secret password, will prompt if not given'))
    .option('-g --resourceGroup <resourceGroup>', $('the optional resource group to list the accounts in'))
    .execute(function (konaAccountName, databaseName, hostUri, secretName, resourceGroup, options, _) {
      if (!konaAccountName) {
        return cli.missingArgument('konaAccountName');
      }
	  
	  if (!databaseName) {
        return cli.missingArgument('databaseName');
      }
	  
	  if (!hostUri) {
        return cli.missingArgument('hostUri');
      }
	  
	  var subscription = profile.current.getSubscription(options.subscription);
	  
	  if(!resourceGroup)
	  {
		  resourceGroup = getResrouceGroupByAccountName(subscription, resourceGroup, konaAccountName, _);
	  }
	  
	  secretName = cli.interaction.promptIfNotGiven('SecretName: ', secretName, _);
	  var password = cli.interaction.promptPasswordOnceIfNotGiven('Password: ', options.password, _);
	  
	  var client = utils.createKonaCatalogManagementClient(subscription);
	  var params = {
		  secretName: secretName,
		  password: password,
		  uri: hostUri
	  };
	  
	  var response = client.catalog.updateSecret(konaAccountName, resourceGroup, databaseName, params, _).secret;
	  konaUtils.formatOutput(cli, log, options, response);
    });
	
	konaCatalog.command('deletesecret [konaAccountName] [databaseName] [secretName] [resourceGroup]')
    .description($('Updates the password and/or hostUri of the specified secret in the specified database.'))
    .usage('[options] <konaAccountName> <databaseName> <hostUri> <secretName> <resourceGroup>')
	.option('-n --konaAccountName <konaAccountName>', $('The Kona account name to perform the action on.'))
	.option('-d --databaseName <databaseName>', $('The name of the database to create the secret in.'))
	.option('-s --secretName <secretName>', $('Optional secret name to delete, if not specified will delete all secrets'))
	.option('-q, --quiet', $('quiet mode (do not ask for delete confirmation)'))
    .option('-g --resourceGroup <resourceGroup>', $('the optional resource group to list the accounts in'))
    .execute(function (konaAccountName, databaseName, secretName, resourceGroup, options, _) {
      if (!konaAccountName) {
        return cli.missingArgument('konaAccountName');
      }
	  
	  if (!databaseName) {
        return cli.missingArgument('databaseName');
      }
	  
	  if (!options.quiet && !cli.interaction.confirm(util.format($('Delete Secret(s) in database %s? [y/n] '), databaseName), _)) {
        return;
      }
	  
	  var subscription = profile.current.getSubscription(options.subscription);
	  
	  if(!resourceGroup)
	  {
		  resourceGroup = getResrouceGroupByAccountName(subscription, resourceGroup, konaAccountName, _);
	  }
	  
	  var client = utils.createKonaCatalogManagementClient(subscription);
	  
	  client.catalog.deleteSecret(resourceGroup, konaAccountName, databaseName, secretName, _);
	  
    });
	
  var konaAccount = cli.category('konaaccount')
    .description($('Commands to manage your Kona accounts'));
 
  konaAccount.command('list [resourceGroup]')
    .description($('List all Kona accounts available for your subscription or subscription and resource group'))
    .usage('[options] <resourceGroup>')
    .option('-g --resourceGroup <resourceGroup>', $('the optional resource group to list the accounts in'))
    .execute(function (resourceGroup, options, _) {
      var subscription = profile.current.getSubscription(options.subscription);
      var accounts = listAllKonaAccounts(subscription, resourceGroup, _);
      konaUtils.formatOutputList(cli, log, options, accounts);
    });

  konaAccount.command('show [konaAccountName] [resourceGroup]')
    .description($('Shows a Kona Account based on account name'))
    .usage('[options] <konaAccountName> <resourceGroup>')
    .option('-n --konaAccountName <konaAccountName>', $('the Kona account name to retrieve'))
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
	  konaUtils.formatOutput(cli, log, options, konaAccount);
    });
	
	konaAccount.command('delete [konaAccountName] [resourceGroup]')
    .description($('Deletes a Kona Account based on account name'))
    .usage('[options] <konaAccountName> <resourceGroup>')
    .option('-n --konaAccountName <konaAccountName>', $('the Kona account name to delete'))
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
	  
	  log.info($('Successfully deleted the specified Kona account.'));
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
      konaUtils.formatOutput(cli, log, options, konaAccount);
    });
  
	konaAccount.command('set [konaAccountName] [resourceGroup] [defaultDataLake] [tags]')
    .description($('Creates a Kona Account'))
    .usage('[options] <konaAccountName> <resourceGroup> <defaultDataLake> <tags>')
    .option('-n --konaAccountName <konaAccountName>', $('The Kona account name to perform the action on.'))
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
      konaUtils.formatOutput(cli, log, options, konaAccount);    
    });
	
	konaAccount.command('adddatasource [konaAccountName] [dataLake] [isDefaultDataLake] [azureBlob] [accessKey] [resourceGroup]')
    .description($('Adds an existing data source (Data Lake or Azure Blob) to the kona account'))
    .usage('[options] <konaAccountName> <dataLake> <isDefaultDataLake> <azureBlob> <accessKey> <resourceGroup>')
    .option('-n --konaAccountName <konaAccountName>', $('The Kona account name to perform the action on.'))
	.option('-l --dataLake <dataLake>', $('the data lake to add. NOTE: this argument and --isDefaultDataLake are part of a parameter set, and cannot be specified with --azureBlob and --accessKey.'))
	.option('-d --isDefaultDataLake <isDefaultDataLake>', $('the optional switch to indicate that the data lake being added should be the default data lake. NOTE: this argument and --dataLake are part of a parameter set, and cannot be specified with --azureBlob and --accessKey.'))
	.option('-b --azureBlob <azureBlob>', $('the azure blob to add to the account. NOTE: this argument and --accessKey are part of a parameter set, and cannot be specified with --dataLake and --isDefaultDataLake.'))
	.option('-k --accessKey <accessKey>', $('the access key associated with the azureBlob. NOTE: this argument and --azureBlob are part of a parameter set, and cannot be specified with --dataLake and --isDefaultDataLake.'))
	.option('-g --resourceGroup <resourceGroup>', $('the optional resource group to forcibly look for the account to update in'))
    .execute(function (konaAccountName, resourceGroup, defaultDataLake, tags, options, _) {
      var subscription = profile.current.getSubscription(options.subscription);
	  var client = utils.createKonaManagementClient(subscription);
	  
	  if(!dataLake && !azureBlob) {
		  throw new Error($('Either --dataLake or --azureBlob and --accessKey must be specified. They are two separate options and cannot all be specified at once.'));
	  }
	  
	  if(dataLake && azureBlob) {
		  throw new Error($('Either --dataLake or --azureBlob and --accessKey must be specified. They are two separate options and cannot all be specified at once.'));
	  }
	  
	  if(dataLake && accessKey) {
		  throw new Error($('--accessKey can only be specified with --azureBlob.'));
	  }
	  
	  if(azureBlob && !accessKey) {
		  throw new Error($('--accessKey must be specified with --azureBlob.'));
	  }
	  
	  if(azureBlob && isDefaultDataLake) {
		  throw new Error($('--isDefaultDataLake can only be specified with the --dataLake parameter.'))
	  }
	  
	  if (!resourceGroup) {
		  resourceGroup = getResrouceGroupByAccountName(subscription, resourceGroup, konaAccountName, _);
	  }
	  
	  var parameters = {};
	  var storageAccount = {};
	  var storageList = [];
	  if (dataLake) {
		storageAccount.accountName = dataLake;
		storageAccount.type = 'DataLake';
	  }
	  else {
		storageAccount.accountName = azureBlob;
		storageAccount.type = 'AzureBlob';
		storageAccount.accessKey = accessKey;
	  }
	  
	  storageList.push(storageAccount);
	  parameters.value = storageList;
	  
	  client.konaAccount.addDataSource(resourceGroup, konaAccountName, parameters);
	  
	  if(isDefaultDataLake) {
		var defaultParams = {
			defaultStorage: storageAccount
		};
		
		client.konaAccount.setDefaultDataSource(resourceGroup, konaAccountName, defaultParams);
	  }
	  
	  log.info($('Successfully added the storage account specified to Kona account: ' + konaAccountName));
    });
	
	konaAccount.command('removedatasource [konaAccountName] [dataLake] [azureBlob] [resourceGroup]')
    .description($('removes a data source (Data Lake or Azure Blob) from the kona account'))
    .usage('[options] <konaAccountName> <dataLake> <azureBlob> <resourceGroup>')
    .option('-n --konaAccountName <konaAccountName>', $('The Kona account name to perform the action on.'))
	.option('-l --dataLake <dataLake>', $('the data lake to remove from the account. NOTE: this argument is part of a parameter set, and cannot be specified with --azureBlob.'))
	.option('-b --azureBlob <azureBlob>', $('the azure blob to remove from the account. NOTE: this argument is part of a parameter set, and cannot be specified with --dataLake.'))
	.option('-g --resourceGroup <resourceGroup>', $('the optional resource group to forcibly look for the account to update in'))
    .execute(function (konaAccountName, resourceGroup, defaultDataLake, tags, options, _) {
      var subscription = profile.current.getSubscription(options.subscription);
	  var client = utils.createKonaManagementClient(subscription);
	  
	  if(!dataLake && !azureBlob) {
		  throw new Error($('Either --dataLake or --azureBlob and --accessKey must be specified. They are two separate options and cannot all be specified at once.'));
	  }
	  
	  if(dataLake && azureBlob) {
		  throw new Error($('Either --dataLake or --azureBlob and --accessKey must be specified. They are two separate options and cannot all be specified at once.'));
	  }
	  
	  if (!resourceGroup) {
		  resourceGroup = getResrouceGroupByAccountName(subscription, resourceGroup, konaAccountName, _);
	  }
	  
	  var parameters = {};
	  var storageAccount = {};
	  var storageList = [];
	  if (dataLake) {
		storageAccount.accountName = dataLake;
		storageAccount.type = 'DataLake';
	  }
	  else {
		storageAccount.accountName = azureBlob;
		storageAccount.type = 'AzureBlob';
	  }
	  
	  storageList.push(storageAccount);
	  parameters.value = storageList;
	  
	  client.konaAccount.removeDataSource(resourceGroup, konaAccountName, parameters);
	  log.info($('Successfully removed the storage account specified from Kona account: ' + konaAccountName));
    });
	
	konaAccount.command('setdatasource [konaAccountName] [dataLake] [isDefaultDataLake] [azureBlob] [accessKey] [resourceGroup]')
    .description($('Sets an existing data source (Data Lake or Azure Blob) in the kona account. Typically used to set the data source as default (for Data Lake) or update the access key (for Azure Blob)'))
    .usage('[options] <konaAccountName> <dataLake> <isDefaultDataLake> <azureBlob> <accessKey> <resourceGroup>')
    .option('-n --konaAccountName <konaAccountName>', $('The Kona account name to perform the action on.'))
	.option('-l --dataLake <dataLake>', $('the data lake to set. NOTE: this argument and --isDefaultDataLake are part of a parameter set, and cannot be specified with --azureBlob and --accessKey.'))
	.option('-d --isDefaultDataLake <isDefaultDataLake>', $('the optional switch to indicate that the data lake being set should be the default data lake. NOTE: this argument and --dataLake are part of a parameter set, and cannot be specified with --azureBlob and --accessKey.'))
	.option('-b --azureBlob <azureBlob>', $('the azure blob to set in the account. NOTE: this argument and --accessKey are part of a parameter set, and cannot be specified with --dataLake and --isDefaultDataLake.'))
	.option('-k --accessKey <accessKey>', $('the access key associated with the azureBlob to update. NOTE: this argument and --azureBlob are part of a parameter set, and cannot be specified with --dataLake and --isDefaultDataLake.'))
	.option('-g --resourceGroup <resourceGroup>', $('the optional resource group to forcibly look for the account to update in'))
    .execute(function (konaAccountName, resourceGroup, defaultDataLake, tags, options, _) {
      var subscription = profile.current.getSubscription(options.subscription);
	  var client = utils.createKonaManagementClient(subscription);
	  
	  if(!dataLake && !azureBlob) {
		  throw new Error($('Either --dataLake or --azureBlob and --accessKey must be specified. They are two separate options and cannot all be specified at once.'));
	  }
	  
	  if(dataLake && azureBlob) {
		  throw new Error($('Either --dataLake or --azureBlob and --accessKey must be specified. They are two separate options and cannot all be specified at once.'));
	  }
	  
	  if(dataLake && accessKey) {
		  throw new Error($('--accessKey can only be specified with --azureBlob.'));
	  }
	  
	  if(azureBlob && !accessKey) {
		  throw new Error($('--accessKey must be specified with --azureBlob.'));
	  }
	  
	  if(azureBlob && isDefaultDataLake) {
		  throw new Error($('--isDefaultDataLake can only be specified with the --dataLake parameter.'))
	  }
	  
	  if (!resourceGroup) {
		  resourceGroup = getResrouceGroupByAccountName(subscription, resourceGroup, konaAccountName, _);
	  }
	  
	  var parameters = {};
	  var storageAccount = {};
	  var storageList = [];
	  if (dataLake) {
		storageAccount.accountName = dataLake;
		storageAccount.type = 'DataLake';
	  }
	  else {
		storageAccount.accountName = azureBlob;
		storageAccount.type = 'AzureBlob';
		storageAccount.accessKey = accessKey;
	  }
	  
	  storageList.push(storageAccount);
	  parameters.value = storageList;
	  
	  client.konaAccount.setDataSource(resourceGroup, konaAccountName, parameters);
	  
	  if(isDefaultDataLake) {
		var defaultParams = {
			defaultStorage: storageAccount
		};
		
		client.konaAccount.setDefaultDataSource(resourceGroup, konaAccountName, defaultParams);
	  }
	  
	  log.info($('Successfully added the storage account specified to Kona account: ' + konaAccountName));
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
  
  function getCatalogItem(subscription, resourceGroup, konaAccountName, catalogItemPath, catalogItemType, _) {
	  if(!resourceGroup) {
		  resourceGroup = getResrouceGroupByAccountName(subscription, resourceGroup, konaAccountName, _);
	  }
	  
	  var isList = isCatalogItemOrList(catalogItemPath, catalogItemType);
	  var client = utils.createKonaCatalogManagementClient(subscription);
	  var catologItem = getCatalogItemObject(catalogItemPath);
	  var toReturn = [];
	  
	  switch (catalogItemType.toLowerCase()) {
		  case "database":
		    if(isList) {
				toReturn = client.catalog.listDatabases(resourceGroup, konaAccountName, _).databaseList.value;
			}
			else {
				toReturn.push(client.catalog.getDatabase(resourceGroup, konaAccountName, catologItem.databaseName, _).database);
			}
			break;
		  case "schema":
		    if(isList) {
				toReturn = client.catalog.listSchemas(resourceGroup, konaAccountName, catalogItem.databaseName, _).schemaList.value;
			}
			else {
				toReturn.push(client.catalog.getDatabase(resourceGroup, konaAccountName, catologItem.databaseName, catalogItem.schemaAssemblyOrExternalDataSourceName, _).schema);
			}
			break;
		  case "assembly":
		    if(isList) {
				toReturn = client.catalog.listAssemblies(resourceGroup, konaAccountName, catalogItem.databaseName, _).assemblyList.value;
			}
			else {
				toReturn.push(client.catalog.getDatabase(resourceGroup, konaAccountName, catologItem.databaseName, catalogItem.schemaAssemblyOrExternalDataSourceName, _).assembly);
			}
			break;
		  case "externaldatasource":
		    if(isList) {
				toReturn = client.catalog.listDatabases(resourceGroup, konaAccountName, catalogItem.databaseName, _).externalDataSourceList.value;
			}
			else {
				toReturn.push(client.catalog.getDatabase(resourceGroup, konaAccountName, catologItem.databaseName, catalogItem.schemaAssemblyOrExternalDataSourceName, _).externalDataSource);
			}
			break;
		  case "table":
		    if(isList) {
				toReturn = client.catalog.listDatabases(resourceGroup, konaAccountName, catalogItem.databaseName, catalogItem.schemaAssemblyOrExternalDataSourceName, _).tableList.value;
			}
			else {
				toReturn.push(client.catalog.getDatabase(resourceGroup, konaAccountName, catologItem.databaseName, catalogItem.schemaAssemblyOrExternalDataSourceName, catalogItem.tableOrTableValuedFunctionName, _).table);
			}
			break;
		  case "tablevaluedfunction":
		    if(isList) {
				toReturn = client.catalog.listDatabases(resourceGroup, konaAccountName, catalogItem.databaseName, catalogItem.schemaAssemblyOrExternalDataSourceName, _).tableValuedFunctionList.value;
			}
			else {
				toReturn.push(client.catalog.getDatabase(resourceGroup, konaAccountName, catologItem.databaseName, catalogItem.schemaAssemblyOrExternalDataSourceName, catalogItem.tableOrTableValuedFunctionName, _).tableValuedFunction);
			}
			break;
		  case "tablestatistics":
		    if(isList) {
				toReturn = client.catalog.listDatabases(resourceGroup, konaAccountName, catalogItem.databaseName, catalogItem.schemaAssemblyOrExternalDataSourceName, catalogItem.tableOrTableValuedFunctionName, _).statisticsList.value;
			}
			else {
				toReturn.push(client.catalog.getDatabase(resourceGroup, konaAccountName, catologItem.databaseName, catalogItem.schemaAssemblyOrExternalDataSourceName, catalogItem.tableOrTableValuedFunctionName, catalogItem.tableStatisticsName, _).statistics);
			}
			break;
		  default:
		    throw new Error($('Invalid catalog item type: ' + catalogItemType + ' specified. Valid values are (case insensitive): database, schema, assembly, externaldatasource, table, tablevaluedfunction or tablestatistics'));
	  }
	  
	  return toReturn;
  }
  
  function isCatalogItemOrList(catalogItemPath, catalogItemType) {
	  var isList = false;
	  if(!catalogItemPath || catalogItemPath === "") {
		  // in this case, it is a list of ALL catalog items of the specified type across the entire catalog.
		  return true;
	  }
	  
	  var catalogItem = getCatalogItemObject(catalogItemPath);
	  switch (catalogItemType.toLowerCase()) {
		  case "database":
		    if(!catalogItem.databaseName) {
				isList = true;
			}
			break;
		  case "schema":
		  case "assembly":
		  case "externaldatasource":
		    if(!catalogItem.databaseName) {
				throw new Error($('Invalid catalog path: ' + catalogItemPath + 
							'. A catalog path must be in the following format with no empty internal elements:' +
							' <FirstPart>.<OptionalSecondPart>.<OptionalThirdPart>.<OptionalFourthPart>. For example: Master.dbo.tableName.tableStatisticsName'));
			}
			
			if(!catalogItem.schemaAssemblyOrExternalDataSourceName) {
				isList = true;
			}
			break;
		  case "table":
		  case "tablevaluedfunction":
		    if(!catalogItem.databaseName || !catalogItem.schemaAssemblyOrExternalDataSourceName) {
				throw new Error($('Invalid catalog path: ' + catalogItemPath + 
							'. A catalog path must be in the following format with no empty internal elements:' +
							' <FirstPart>.<OptionalSecondPart>.<OptionalThirdPart>.<OptionalFourthPart>. For example: Master.dbo.tableName.tableStatisticsName'));
			}
			
			if(!catalogItem.tableOrTableValuedFunctionName) {
				isList = true;
			}
			break;
		  case "tablestatistics":
		    if(!catalogItem.databaseName || !catalogItem.schemaAssemblyOrExternalDataSourceName || !catalogItem.tableOrTableValuedFunctionName) {
				throw new Error($('Invalid catalog path: ' + catalogItemPath + 
							'. A catalog path must be in the following format with no empty internal elements:' +
							' <FirstPart>.<OptionalSecondPart>.<OptionalThirdPart>.<OptionalFourthPart>. For example: Master.dbo.tableName.tableStatisticsName'));
			}
			
			if(!catalogItem.tableStatisticsName) {
				isList = true;
			}
			break;
	  }
	  
	  return isList;
  }
  
  function getCatalogItemObject(catalogItemPath) {
	  var toReturn = {
		  fullCatalogItemPath: catalogItemPath
	  };
	  
	  if(!catalogItemPath || !catalogItemPath.contains(".")) {
		  toReturn.databaseName = catalogItemPath;
		  return toReturn;
	  }
	  
	  var regexPattern = /^(\w+|\[.+\])?(\.(\w+|\[.+\]))?(\.(\w+|\[.+\]))?(\.(\w+|\[.+\]))?$/;
	  var matches = regexPatter.exec(catalogItemPath);
	  if(!matches) {
		  throw new Error($('Invalid catalog path: ' + catalogItemPath + 
							'. A catalog path must be in the following format with no empty internal elements:' +
							' <FirstPart>.<OptionalSecondPart>.<OptionalThirdPart>.<OptionalFourthPart>. For example: Master.dbo.tableName.tableStatisticsName'));
	  }
	  
	  var firstPart = sanitizeCatalogItemPath(matches[1], catalogItemPath);
	  var secondPart = sanitizeCatalogItemPath(matches[3], catalogItemPath);
	  var thirdPart = sanitizeCatalogItemPath(matches[5], catalogItemPath);
	  var fourthPart = sanitizeCatalogItemPath(matches[7], catalogItemPath);
	  
	  toReturn.databaseName = firstPart;
	  toReturn.schemaAssemblyOrExternalDataSourceName = secondPart;
	  toReturn.tableOrTableValuedFunctionName = thirdPart;
	  toReturn.tableStatisticsName = fourthPart;
	  
	  return toReturn;
  }
  
  function sanitizeCatalogItemPath(path, fullPath) {
	  if(!path) {
		  return path;
	  }
	  
	  if(path.startsWith("[") && path.endsWith("]")) {
		  path = path.substring(1);
		  path = path.substring(0, path.length -1);
	  }
	  
	  if(path.length < 1) {
		  throw new Error($('Invalid catalog path: ' + fullPath + 
							'. A catalog path must be in the following format with no empty internal elements:' +
							' <FirstPart>.<OptionalSecondPart>.<OptionalThirdPart>.<OptionalFourthPart>. For example: Master.dbo.tableName.tableStatisticsName'));
	  }
	  
	  return path;
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