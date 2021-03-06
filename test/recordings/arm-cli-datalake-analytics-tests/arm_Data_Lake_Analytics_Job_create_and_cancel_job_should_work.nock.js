// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '53d9063d-87ae-4ea8-be90-3686c3b8669f',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '6e606ece-3a5a-4674-a654-d6b02bc5a51b',
    name: 'Visual Studio Ultimate with MSDN',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplattestadla8046.azuredatalakeanalytics.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/Jobs/5b8f41fb-fe45-416f-8796-5048e2c3e261?api-version=2016-11-01', '*')
  .reply(200, "{\"jobId\":\"5b8f41fb-fe45-416f-8796-5048e2c3e261\",\"name\":\"xplattestjob\",\"type\":\"USql\",\"submitter\":\"adlsvc01@benwgoldoutlook.onmicrosoft.com\",\"degreeOfParallelism\":1,\"priority\":1000,\"submitTime\":\"2017-03-13T23:52:03.8137+00:00\",\"state\":\"Compiling\",\"result\":\"None\",\"stateAuditRecords\":[{\"newState\":\"New\",\"timeStamp\":\"2017-03-13T23:52:03.8137+00:00\",\"details\":\"userName:;submitMachine:N/A\"}],\"properties\":{\"owner\":\"adlsvc01@benwgoldoutlook.onmicrosoft.com\",\"resources\":[],\"runtimeVersion\":\"default\",\"rootProcessNodeId\":\"00000000-0000-0000-0000-000000000000\",\"algebraFilePath\":\"adl://xplattestadls2718.azuredatalakestore.net/system/jobservice/jobs/Usql/2017/03/13/23/52/5b8f41fb-fe45-416f-8796-5048e2c3e261/algebra.xml\",\"compileMode\":\"Semantic\",\"errorSource\":\"Unknown\",\"totalCompilationTime\":\"PT0S\",\"totalPausedTime\":\"PT0S\",\"totalQueuedTime\":\"PT0S\",\"totalRunningTime\":\"PT0S\",\"expirationTimeUtc\":\"0001-01-01T00:00:00Z\",\"type\":\"USql\"}}", { 'cache-control': 'private, no-cache, no-store, max-age=0',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '01f769df-e745-4052-b43d-2c808daf744b',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 13 Mar 2017 23:52:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadla8046.azuredatalakeanalytics.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/Jobs/5b8f41fb-fe45-416f-8796-5048e2c3e261?api-version=2016-11-01', '*')
  .reply(200, "{\"jobId\":\"5b8f41fb-fe45-416f-8796-5048e2c3e261\",\"name\":\"xplattestjob\",\"type\":\"USql\",\"submitter\":\"adlsvc01@benwgoldoutlook.onmicrosoft.com\",\"degreeOfParallelism\":1,\"priority\":1000,\"submitTime\":\"2017-03-13T23:52:03.8137+00:00\",\"state\":\"Compiling\",\"result\":\"None\",\"stateAuditRecords\":[{\"newState\":\"New\",\"timeStamp\":\"2017-03-13T23:52:03.8137+00:00\",\"details\":\"userName:;submitMachine:N/A\"}],\"properties\":{\"owner\":\"adlsvc01@benwgoldoutlook.onmicrosoft.com\",\"resources\":[],\"runtimeVersion\":\"default\",\"rootProcessNodeId\":\"00000000-0000-0000-0000-000000000000\",\"algebraFilePath\":\"adl://xplattestadls2718.azuredatalakestore.net/system/jobservice/jobs/Usql/2017/03/13/23/52/5b8f41fb-fe45-416f-8796-5048e2c3e261/algebra.xml\",\"compileMode\":\"Semantic\",\"errorSource\":\"Unknown\",\"totalCompilationTime\":\"PT0S\",\"totalPausedTime\":\"PT0S\",\"totalQueuedTime\":\"PT0S\",\"totalRunningTime\":\"PT0S\",\"expirationTimeUtc\":\"0001-01-01T00:00:00Z\",\"type\":\"USql\"}}", { 'cache-control': 'private, no-cache, no-store, max-age=0',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '01f769df-e745-4052-b43d-2c808daf744b',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 13 Mar 2017 23:52:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadla8046.azuredatalakeanalytics.net:443')
  .post('/Jobs/5b8f41fb-fe45-416f-8796-5048e2c3e261/CancelJob?api-version=2016-11-01')
  .reply(200, "", { 'cache-control': 'private, no-cache, no-store, max-age=0',
  'transfer-encoding': 'chunked',
  expires: '-1',
  'x-ms-request-id': '6b0e6078-71f2-4478-9cc9-1bbec1bf2a1f',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 13 Mar 2017 23:52:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadla8046.azuredatalakeanalytics.net:443')
  .post('/Jobs/5b8f41fb-fe45-416f-8796-5048e2c3e261/CancelJob?api-version=2016-11-01')
  .reply(200, "", { 'cache-control': 'private, no-cache, no-store, max-age=0',
  'transfer-encoding': 'chunked',
  expires: '-1',
  'x-ms-request-id': '6b0e6078-71f2-4478-9cc9-1bbec1bf2a1f',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 13 Mar 2017 23:52:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadla8046.azuredatalakeanalytics.net:443')
  .get('/Jobs/5b8f41fb-fe45-416f-8796-5048e2c3e261?api-version=2016-11-01')
  .reply(200, "{\"jobId\":\"5b8f41fb-fe45-416f-8796-5048e2c3e261\",\"name\":\"xplattestjob\",\"type\":\"USql\",\"submitter\":\"adlsvc01@benwgoldoutlook.onmicrosoft.com\",\"degreeOfParallelism\":1,\"priority\":1000,\"submitTime\":\"2017-03-13T23:52:03.8137+00:00\",\"endTime\":\"2017-03-13T23:52:04.5793481+00:00\",\"state\":\"Ended\",\"result\":\"Cancelled\",\"errorMessage\":[{\"errorId\":\"I_USER_CJS_CANCELEDBYUSER\",\"name\":\"CANCELED_BY_USER\",\"severity\":\"Info\",\"source\":\"User\",\"component\":\"CJS\",\"message\":\"Job was cancelled.\",\"details\":\"\",\"description\":\"Job was cancelled by adlsvc01@benwgoldoutlook.onmicrosoft.com.\",\"resolution\":\"\",\"helpLink\":\"\",\"innerError\":null}],\"stateAuditRecords\":[{\"newState\":\"New\",\"timeStamp\":\"2017-03-13T23:52:03.8137+00:00\",\"details\":\"userName:;submitMachine:N/A\"},{\"newState\":\"Compiling\",\"timeStamp\":\"2017-03-13T23:52:03.9543349+00:00\",\"details\":\"CcsAttempts:1;Status:Dispatched\"},{\"newState\":\"Ended\",\"timeStamp\":\"2017-03-13T23:52:04.5793481+00:00\",\"details\":\"result:CanceledByUser\"}],\"properties\":{\"owner\":\"adlsvc01@benwgoldoutlook.onmicrosoft.com\",\"resources\":[{\"name\":\"Profile\",\"resourcePath\":\"adl://xplattestadls2718.azuredatalakestore.net/system/jobservice/jobs/Usql/2017/03/13/23/52/5b8f41fb-fe45-416f-8796-5048e2c3e261/profile\",\"type\":\"StatisticsResource\"},{\"name\":\"__ScopeRuntimeStatistics__.xml\",\"resourcePath\":\"adl://xplattestadls2718.azuredatalakestore.net/system/jobservice/jobs/Usql/2017/03/13/23/52/5b8f41fb-fe45-416f-8796-5048e2c3e261/__ScopeRuntimeStatistics__.xml\",\"type\":\"StatisticsResource\"}],\"runtimeVersion\":\"default\",\"rootProcessNodeId\":\"00000000-0000-0000-0000-000000000000\",\"script\":\"DROP DATABASE IF EXISTS FOO; CREATE DATABASE FOO; DROP DATABASE IF EXISTS FOO;\",\"algebraFilePath\":\"adl://xplattestadls2718.azuredatalakestore.net/system/jobservice/jobs/Usql/2017/03/13/23/52/5b8f41fb-fe45-416f-8796-5048e2c3e261/algebra.xml\",\"compileMode\":\"Semantic\",\"errorSource\":\"UserError\",\"totalCompilationTime\":\"PT0.6250132S\",\"totalPausedTime\":\"PT0S\",\"totalQueuedTime\":\"PT0S\",\"totalRunningTime\":\"PT0S\",\"expirationTimeUtc\":\"0001-01-01T00:00:00\",\"type\":\"USql\"}}", { 'cache-control': 'private, no-cache, no-store, max-age=0',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '8f712216-4ff8-4693-a1e5-7ca052306c5f',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 13 Mar 2017 23:52:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadla8046.azuredatalakeanalytics.net:443')
  .get('/Jobs/5b8f41fb-fe45-416f-8796-5048e2c3e261?api-version=2016-11-01')
  .reply(200, "{\"jobId\":\"5b8f41fb-fe45-416f-8796-5048e2c3e261\",\"name\":\"xplattestjob\",\"type\":\"USql\",\"submitter\":\"adlsvc01@benwgoldoutlook.onmicrosoft.com\",\"degreeOfParallelism\":1,\"priority\":1000,\"submitTime\":\"2017-03-13T23:52:03.8137+00:00\",\"endTime\":\"2017-03-13T23:52:04.5793481+00:00\",\"state\":\"Ended\",\"result\":\"Cancelled\",\"errorMessage\":[{\"errorId\":\"I_USER_CJS_CANCELEDBYUSER\",\"name\":\"CANCELED_BY_USER\",\"severity\":\"Info\",\"source\":\"User\",\"component\":\"CJS\",\"message\":\"Job was cancelled.\",\"details\":\"\",\"description\":\"Job was cancelled by adlsvc01@benwgoldoutlook.onmicrosoft.com.\",\"resolution\":\"\",\"helpLink\":\"\",\"innerError\":null}],\"stateAuditRecords\":[{\"newState\":\"New\",\"timeStamp\":\"2017-03-13T23:52:03.8137+00:00\",\"details\":\"userName:;submitMachine:N/A\"},{\"newState\":\"Compiling\",\"timeStamp\":\"2017-03-13T23:52:03.9543349+00:00\",\"details\":\"CcsAttempts:1;Status:Dispatched\"},{\"newState\":\"Ended\",\"timeStamp\":\"2017-03-13T23:52:04.5793481+00:00\",\"details\":\"result:CanceledByUser\"}],\"properties\":{\"owner\":\"adlsvc01@benwgoldoutlook.onmicrosoft.com\",\"resources\":[{\"name\":\"Profile\",\"resourcePath\":\"adl://xplattestadls2718.azuredatalakestore.net/system/jobservice/jobs/Usql/2017/03/13/23/52/5b8f41fb-fe45-416f-8796-5048e2c3e261/profile\",\"type\":\"StatisticsResource\"},{\"name\":\"__ScopeRuntimeStatistics__.xml\",\"resourcePath\":\"adl://xplattestadls2718.azuredatalakestore.net/system/jobservice/jobs/Usql/2017/03/13/23/52/5b8f41fb-fe45-416f-8796-5048e2c3e261/__ScopeRuntimeStatistics__.xml\",\"type\":\"StatisticsResource\"}],\"runtimeVersion\":\"default\",\"rootProcessNodeId\":\"00000000-0000-0000-0000-000000000000\",\"script\":\"DROP DATABASE IF EXISTS FOO; CREATE DATABASE FOO; DROP DATABASE IF EXISTS FOO;\",\"algebraFilePath\":\"adl://xplattestadls2718.azuredatalakestore.net/system/jobservice/jobs/Usql/2017/03/13/23/52/5b8f41fb-fe45-416f-8796-5048e2c3e261/algebra.xml\",\"compileMode\":\"Semantic\",\"errorSource\":\"UserError\",\"totalCompilationTime\":\"PT0.6250132S\",\"totalPausedTime\":\"PT0S\",\"totalQueuedTime\":\"PT0S\",\"totalRunningTime\":\"PT0S\",\"expirationTimeUtc\":\"0001-01-01T00:00:00\",\"type\":\"USql\"}}", { 'cache-control': 'private, no-cache, no-store, max-age=0',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '8f712216-4ff8-4693-a1e5-7ca052306c5f',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 13 Mar 2017 23:52:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadla8046.azuredatalakeanalytics.net:443')
  .get('/Jobs/5b8f41fb-fe45-416f-8796-5048e2c3e261/GetStatistics?api-version=2016-11-01')
  .reply(400, "{\"error\":{\"code\":\"JobHasNeverRun\",\"message\":\"Cannot find job debugging data or job statistics. Trace: d4dd67b5-dbdc-4ef3-ad3f-023d924817d7 Time: 2017-03-13T16:52:06.1286653-07:00\"}}", { 'cache-control': 'private, no-cache, no-store, max-age=0',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'd4dd67b5-dbdc-4ef3-ad3f-023d924817d7',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 13 Mar 2017 23:52:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadla8046.azuredatalakeanalytics.net:443')
  .get('/Jobs/5b8f41fb-fe45-416f-8796-5048e2c3e261/GetStatistics?api-version=2016-11-01')
  .reply(400, "{\"error\":{\"code\":\"JobHasNeverRun\",\"message\":\"Cannot find job debugging data or job statistics. Trace: d4dd67b5-dbdc-4ef3-ad3f-023d924817d7 Time: 2017-03-13T16:52:06.1286653-07:00\"}}", { 'cache-control': 'private, no-cache, no-store, max-age=0',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'd4dd67b5-dbdc-4ef3-ad3f-023d924817d7',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 13 Mar 2017 23:52:05 GMT',
  connection: 'close' });
 return result; }]];
 exports.uuidsGenerated = function() { return ['5b8f41fb-fe45-416f-8796-5048e2c3e261'];};