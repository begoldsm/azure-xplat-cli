// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'CollaberaInteropTest',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGCreateDR?api-version=2014-04-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplatTestGCreateDR' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-request-id': '3e30bbd2-d119-48b3-b6ae-acb51892e0ad',
  'x-ms-correlation-request-id': '3e30bbd2-d119-48b3-b6ae-acb51892e0ad',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150629T063146Z:3e30bbd2-d119-48b3-b6ae-acb51892e0ad',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 29 Jun 2015 06:31:46 GMT',
  connection: 'close',
  'content-length': '110' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGCreateDR?api-version=2014-04-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplatTestGCreateDR' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-request-id': '3e30bbd2-d119-48b3-b6ae-acb51892e0ad',
  'x-ms-correlation-request-id': '3e30bbd2-d119-48b3-b6ae-acb51892e0ad',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150629T063146Z:3e30bbd2-d119-48b3-b6ae-acb51892e0ad',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 29 Jun 2015 06:31:46 GMT',
  connection: 'close',
  'content-length': '110' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGCreateDR?api-version=2014-04-01-preview', '*')
  .reply(201, "{\"id\":\"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateDR\",\"name\":\"xplatTestGCreateDR\",\"location\":\"eastus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '199',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '734c2bec-20b0-44f2-8181-c0497e7b0f10',
  'x-ms-correlation-request-id': '734c2bec-20b0-44f2-8181-c0497e7b0f10',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150629T063149Z:734c2bec-20b0-44f2-8181-c0497e7b0f10',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 29 Jun 2015 06:31:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGCreateDR?api-version=2014-04-01-preview', '*')
  .reply(201, "{\"id\":\"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateDR\",\"name\":\"xplatTestGCreateDR\",\"location\":\"eastus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '199',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '734c2bec-20b0-44f2-8181-c0497e7b0f10',
  'x-ms-correlation-request-id': '734c2bec-20b0-44f2-8181-c0497e7b0f10',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150629T063149Z:734c2bec-20b0-44f2-8181-c0497e7b0f10',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 29 Jun 2015 06:31:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateDR/providers/Microsoft.Network/dnszones/xplattestgcreatedr.xplattestdrs?api-version=2015-05-04-preview', '*')
  .reply(201, "{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplatTestGCreateDR\\/providers\\/Microsoft.Network\\/dnszones\\/xplattestgcreatedr.xplattestdrs\",\"name\":\"xplattestgcreatedr.xplattestdrs\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"fe84f281-dd22-4018-8819-2aac636abd51\",\"location\":\"global\",\"properties\":{}}", { 'cache-control': 'private',
  'content-length': '331',
  'content-type': 'application/json; charset=utf-8',
  etag: 'fe84f281-dd22-4018-8819-2aac636abd51',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': 'b4e58b90-1477-44df-800e-3aca999c7cc3',
  server: 'Microsoft-IIS/7.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '2efbdaae-cee4-45ad-9dab-4c3754e14926',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150629T063157Z:2efbdaae-cee4-45ad-9dab-4c3754e14926',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 29 Jun 2015 06:31:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateDR/providers/Microsoft.Network/dnszones/xplattestgcreatedr.xplattestdrs?api-version=2015-05-04-preview', '*')
  .reply(201, "{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplatTestGCreateDR\\/providers\\/Microsoft.Network\\/dnszones\\/xplattestgcreatedr.xplattestdrs\",\"name\":\"xplattestgcreatedr.xplattestdrs\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"fe84f281-dd22-4018-8819-2aac636abd51\",\"location\":\"global\",\"properties\":{}}", { 'cache-control': 'private',
  'content-length': '331',
  'content-type': 'application/json; charset=utf-8',
  etag: 'fe84f281-dd22-4018-8819-2aac636abd51',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': 'b4e58b90-1477-44df-800e-3aca999c7cc3',
  server: 'Microsoft-IIS/7.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '2efbdaae-cee4-45ad-9dab-4c3754e14926',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150629T063157Z:2efbdaae-cee4-45ad-9dab-4c3754e14926',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 29 Jun 2015 06:31:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateDR/providers/Microsoft.Network/dnszones/xplattestgcreatedr.xplattestdrs?api-version=2015-05-04-preview')
  .reply(200, "{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplatTestGCreateDR\\/providers\\/Microsoft.Network\\/dnszones\\/xplattestgcreatedr.xplattestdrs\",\"name\":\"xplattestgcreatedr.xplattestdrs\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"fe84f281-dd22-4018-8819-2aac636abd51\",\"location\":\"global\",\"properties\":{\"maxNumberOfRecordSets\":1000,\"numberOfRecordSets\":2}}", { 'cache-control': 'private',
  'content-length': '382',
  'content-type': 'application/json; charset=utf-8',
  etag: 'fe84f281-dd22-4018-8819-2aac636abd51',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '63cb6126-8cfd-4e3e-a1c7-eb73ac42e943',
  server: 'Microsoft-IIS/7.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '06633b5d-106e-4933-9b68-9fc2fbb02f18',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150629T063200Z:06633b5d-106e-4933-9b68-9fc2fbb02f18',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 29 Jun 2015 06:31:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateDR/providers/Microsoft.Network/dnszones/xplattestgcreatedr.xplattestdrs?api-version=2015-05-04-preview')
  .reply(200, "{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplatTestGCreateDR\\/providers\\/Microsoft.Network\\/dnszones\\/xplattestgcreatedr.xplattestdrs\",\"name\":\"xplattestgcreatedr.xplattestdrs\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"fe84f281-dd22-4018-8819-2aac636abd51\",\"location\":\"global\",\"properties\":{\"maxNumberOfRecordSets\":1000,\"numberOfRecordSets\":2}}", { 'cache-control': 'private',
  'content-length': '382',
  'content-type': 'application/json; charset=utf-8',
  etag: 'fe84f281-dd22-4018-8819-2aac636abd51',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '63cb6126-8cfd-4e3e-a1c7-eb73ac42e943',
  server: 'Microsoft-IIS/7.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '06633b5d-106e-4933-9b68-9fc2fbb02f18',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150629T063200Z:06633b5d-106e-4933-9b68-9fc2fbb02f18',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 29 Jun 2015 06:31:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateDR/providers/Microsoft.Network/dnszones/xplattestgcreatedr.xplattestdrs/A/xplattestdnsrecord?api-version=2015-05-04-preview', '*')
  .reply(201, "{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplatTestGCreateDR\\/providers\\/Microsoft.Network\\/dnszones\\/xplattestgcreatedr.xplattestdrs\\/A\\/xplattestdnsrecord\",\"name\":\"xplattestdnsrecord\",\"type\":\"Microsoft.Network\\/dnszones\\/A\",\"etag\":\"d0458516-9ce9-48d9-abe5-2984df0554be\",\"location\":\"global\",\"tags\":{},\"properties\":{\"TTL\":4}}", { 'cache-control': 'private',
  'content-length': '361',
  'content-type': 'application/json; charset=utf-8',
  etag: 'd0458516-9ce9-48d9-abe5-2984df0554be',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '6c5ca906-2601-4d40-ad7f-1f09f68aebc9',
  server: 'Microsoft-IIS/7.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11998',
  'x-ms-correlation-request-id': '4e80902b-5441-46f4-adba-126f0ab90593',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150629T063207Z:4e80902b-5441-46f4-adba-126f0ab90593',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 29 Jun 2015 06:32:07 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateDR/providers/Microsoft.Network/dnszones/xplattestgcreatedr.xplattestdrs/A/xplattestdnsrecord?api-version=2015-05-04-preview', '*')
  .reply(201, "{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplatTestGCreateDR\\/providers\\/Microsoft.Network\\/dnszones\\/xplattestgcreatedr.xplattestdrs\\/A\\/xplattestdnsrecord\",\"name\":\"xplattestdnsrecord\",\"type\":\"Microsoft.Network\\/dnszones\\/A\",\"etag\":\"d0458516-9ce9-48d9-abe5-2984df0554be\",\"location\":\"global\",\"tags\":{},\"properties\":{\"TTL\":4}}", { 'cache-control': 'private',
  'content-length': '361',
  'content-type': 'application/json; charset=utf-8',
  etag: 'd0458516-9ce9-48d9-abe5-2984df0554be',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '6c5ca906-2601-4d40-ad7f-1f09f68aebc9',
  server: 'Microsoft-IIS/7.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11998',
  'x-ms-correlation-request-id': '4e80902b-5441-46f4-adba-126f0ab90593',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150629T063207Z:4e80902b-5441-46f4-adba-126f0ab90593',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 29 Jun 2015 06:32:07 GMT',
  connection: 'close' });
 return result; }]];