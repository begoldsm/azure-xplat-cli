// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    name: 'CollaberaInteropTest',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestRtTblRoutes?api-version=2014-04-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplatTestRtTblRoutes' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-request-id': '024dd2ed-0b91-4d42-915d-23f04d51ac4e',
  'x-ms-correlation-request-id': '024dd2ed-0b91-4d42-915d-23f04d51ac4e',
  'x-ms-routing-request-id': 'WESTUS:20150723T230754Z:024dd2ed-0b91-4d42-915d-23f04d51ac4e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 23 Jul 2015 23:07:53 GMT',
  connection: 'close',
  'content-length': '112' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestRtTblRoutes?api-version=2014-04-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplatTestRtTblRoutes' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-request-id': '024dd2ed-0b91-4d42-915d-23f04d51ac4e',
  'x-ms-correlation-request-id': '024dd2ed-0b91-4d42-915d-23f04d51ac4e',
  'x-ms-routing-request-id': 'WESTUS:20150723T230754Z:024dd2ed-0b91-4d42-915d-23f04d51ac4e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 23 Jul 2015 23:07:53 GMT',
  connection: 'close',
  'content-length': '112' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestRtTblRoutes?api-version=2014-04-01-preview', '*')
  .reply(201, "{\"id\":\"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRtTblRoutes\",\"name\":\"xplatTestRtTblRoutes\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '203',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-request-id': '0216f889-fb39-49c7-8de8-3c69560d5cef',
  'x-ms-correlation-request-id': '0216f889-fb39-49c7-8de8-3c69560d5cef',
  'x-ms-routing-request-id': 'WESTUS:20150723T230754Z:0216f889-fb39-49c7-8de8-3c69560d5cef',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 23 Jul 2015 23:07:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestRtTblRoutes?api-version=2014-04-01-preview', '*')
  .reply(201, "{\"id\":\"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRtTblRoutes\",\"name\":\"xplatTestRtTblRoutes\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '203',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-request-id': '0216f889-fb39-49c7-8de8-3c69560d5cef',
  'x-ms-correlation-request-id': '0216f889-fb39-49c7-8de8-3c69560d5cef',
  'x-ms-routing-request-id': 'WESTUS:20150723T230754Z:0216f889-fb39-49c7-8de8-3c69560d5cef',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 23 Jul 2015 23:07:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRtTblRoutes/providers/Microsoft.Network/routeTables/ArmRtTblRoute?api-version=2015-05-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/routeTables/ArmRtTblRoute' under resource group 'xplatTestRtTblRoutes' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '5694846b-6fc2-4d53-8a0c-27af6bdb114d',
  'x-ms-correlation-request-id': '5694846b-6fc2-4d53-8a0c-27af6bdb114d',
  'x-ms-routing-request-id': 'WESTUS:20150723T230754Z:5694846b-6fc2-4d53-8a0c-27af6bdb114d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 23 Jul 2015 23:07:53 GMT',
  connection: 'close',
  'content-length': '167' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRtTblRoutes/providers/Microsoft.Network/routeTables/ArmRtTblRoute?api-version=2015-05-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/routeTables/ArmRtTblRoute' under resource group 'xplatTestRtTblRoutes' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '5694846b-6fc2-4d53-8a0c-27af6bdb114d',
  'x-ms-correlation-request-id': '5694846b-6fc2-4d53-8a0c-27af6bdb114d',
  'x-ms-routing-request-id': 'WESTUS:20150723T230754Z:5694846b-6fc2-4d53-8a0c-27af6bdb114d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 23 Jul 2015 23:07:53 GMT',
  connection: 'close',
  'content-length': '167' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRtTblRoutes/providers/Microsoft.Network/routeTables/ArmRtTblRoute?api-version=2015-05-01-preview', '*')
  .reply(201, "{\r\n  \"name\": \"ArmRtTblRoute\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRtTblRoutes/providers/Microsoft.Network/routeTables/ArmRtTblRoute\",\r\n  \"etag\": \"W/\\\"8ff35890-399f-4f6b-941b-01acf6ff8097\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\"\r\n  },\r\n  \"location\": \"westus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '329',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'd242fae7-feba-472f-bfbe-b6f77b2f4b89',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/d242fae7-feba-472f-bfbe-b6f77b2f4b89?api-version=2015-05-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'b00321b8-31df-4a01-ad53-0f6d2326be23',
  'x-ms-routing-request-id': 'WESTUS:20150723T230755Z:b00321b8-31df-4a01-ad53-0f6d2326be23',
  date: 'Thu, 23 Jul 2015 23:07:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRtTblRoutes/providers/Microsoft.Network/routeTables/ArmRtTblRoute?api-version=2015-05-01-preview', '*')
  .reply(201, "{\r\n  \"name\": \"ArmRtTblRoute\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRtTblRoutes/providers/Microsoft.Network/routeTables/ArmRtTblRoute\",\r\n  \"etag\": \"W/\\\"8ff35890-399f-4f6b-941b-01acf6ff8097\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\"\r\n  },\r\n  \"location\": \"westus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '329',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'd242fae7-feba-472f-bfbe-b6f77b2f4b89',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/d242fae7-feba-472f-bfbe-b6f77b2f4b89?api-version=2015-05-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'b00321b8-31df-4a01-ad53-0f6d2326be23',
  'x-ms-routing-request-id': 'WESTUS:20150723T230755Z:b00321b8-31df-4a01-ad53-0f6d2326be23',
  date: 'Thu, 23 Jul 2015 23:07:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/d242fae7-feba-472f-bfbe-b6f77b2f4b89?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'ba599c4f-b8a1-4c8f-9d74-c4687251daaa',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'ea244bf0-fad3-4192-8091-796de33750c1',
  'x-ms-routing-request-id': 'WESTUS:20150723T230805Z:ea244bf0-fad3-4192-8091-796de33750c1',
  date: 'Thu, 23 Jul 2015 23:08:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/d242fae7-feba-472f-bfbe-b6f77b2f4b89?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'ba599c4f-b8a1-4c8f-9d74-c4687251daaa',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'ea244bf0-fad3-4192-8091-796de33750c1',
  'x-ms-routing-request-id': 'WESTUS:20150723T230805Z:ea244bf0-fad3-4192-8091-796de33750c1',
  date: 'Thu, 23 Jul 2015 23:08:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRtTblRoutes/providers/Microsoft.Network/routeTables/ArmRtTblRoute?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"ArmRtTblRoute\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRtTblRoutes/providers/Microsoft.Network/routeTables/ArmRtTblRoute\",\r\n  \"etag\": \"W/\\\"20c63cc9-5734-48d8-97ea-1d8c4ba69d9a\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"location\": \"westus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '330',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"20c63cc9-5734-48d8-97ea-1d8c4ba69d9a"',
  'x-ms-request-id': '235290b0-7fc9-4e12-8336-1a0e36ede236',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '3e8858a9-d9ad-4092-846e-ca30558d4760',
  'x-ms-routing-request-id': 'WESTUS:20150723T230806Z:3e8858a9-d9ad-4092-846e-ca30558d4760',
  date: 'Thu, 23 Jul 2015 23:08:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRtTblRoutes/providers/Microsoft.Network/routeTables/ArmRtTblRoute?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"ArmRtTblRoute\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRtTblRoutes/providers/Microsoft.Network/routeTables/ArmRtTblRoute\",\r\n  \"etag\": \"W/\\\"20c63cc9-5734-48d8-97ea-1d8c4ba69d9a\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"location\": \"westus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '330',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"20c63cc9-5734-48d8-97ea-1d8c4ba69d9a"',
  'x-ms-request-id': '235290b0-7fc9-4e12-8336-1a0e36ede236',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '3e8858a9-d9ad-4092-846e-ca30558d4760',
  'x-ms-routing-request-id': 'WESTUS:20150723T230806Z:3e8858a9-d9ad-4092-846e-ca30558d4760',
  date: 'Thu, 23 Jul 2015 23:08:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRtTblRoutes/providers/Microsoft.Network/routeTables/ArmRtTblRoute/routes/ArmRoute?api-version=2015-05-01-preview')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRtTblRoutes/providers/Microsoft.Network/routeTables/ArmRtTblRoute/routes/ArmRoute not found.\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '244',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'cfe011a6-8f44-4b92-86c7-0ec0307774eb',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '03d1092a-f584-4d90-bd9a-5659d8c91c7a',
  'x-ms-routing-request-id': 'WESTUS:20150723T230806Z:03d1092a-f584-4d90-bd9a-5659d8c91c7a',
  date: 'Thu, 23 Jul 2015 23:08:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRtTblRoutes/providers/Microsoft.Network/routeTables/ArmRtTblRoute/routes/ArmRoute?api-version=2015-05-01-preview')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRtTblRoutes/providers/Microsoft.Network/routeTables/ArmRtTblRoute/routes/ArmRoute not found.\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '244',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'cfe011a6-8f44-4b92-86c7-0ec0307774eb',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '03d1092a-f584-4d90-bd9a-5659d8c91c7a',
  'x-ms-routing-request-id': 'WESTUS:20150723T230806Z:03d1092a-f584-4d90-bd9a-5659d8c91c7a',
  date: 'Thu, 23 Jul 2015 23:08:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRtTblRoutes/providers/Microsoft.Network/routeTables/ArmRtTblRoute/routes/ArmRoute?api-version=2015-05-01-preview', '*')
  .reply(201, "{\r\n  \"name\": \"ArmRoute\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRtTblRoutes/providers/Microsoft.Network/routeTables/ArmRtTblRoute/routes/ArmRoute\",\r\n  \"etag\": \"W/\\\"044473bb-e8d4-438f-8c3a-6ce16748333c\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"addressPrefix\": \"10.0.0.0/23\",\r\n    \"nextHopType\": \"VnetLocal\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '385',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'd231de44-9757-46f5-8fa3-10d6e29e4049',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/d231de44-9757-46f5-8fa3-10d6e29e4049?api-version=2015-05-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '30d0baaa-8680-47ae-bf9e-c1e9136d8eb3',
  'x-ms-routing-request-id': 'WESTUS:20150723T230807Z:30d0baaa-8680-47ae-bf9e-c1e9136d8eb3',
  date: 'Thu, 23 Jul 2015 23:08:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRtTblRoutes/providers/Microsoft.Network/routeTables/ArmRtTblRoute/routes/ArmRoute?api-version=2015-05-01-preview', '*')
  .reply(201, "{\r\n  \"name\": \"ArmRoute\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRtTblRoutes/providers/Microsoft.Network/routeTables/ArmRtTblRoute/routes/ArmRoute\",\r\n  \"etag\": \"W/\\\"044473bb-e8d4-438f-8c3a-6ce16748333c\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"addressPrefix\": \"10.0.0.0/23\",\r\n    \"nextHopType\": \"VnetLocal\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '385',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'd231de44-9757-46f5-8fa3-10d6e29e4049',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/d231de44-9757-46f5-8fa3-10d6e29e4049?api-version=2015-05-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '30d0baaa-8680-47ae-bf9e-c1e9136d8eb3',
  'x-ms-routing-request-id': 'WESTUS:20150723T230807Z:30d0baaa-8680-47ae-bf9e-c1e9136d8eb3',
  date: 'Thu, 23 Jul 2015 23:08:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/d231de44-9757-46f5-8fa3-10d6e29e4049?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f4ba3774-21d6-4d0a-aede-de75fb7511ea',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'b8899a72-4933-4687-a147-d752c71244a4',
  'x-ms-routing-request-id': 'WESTUS:20150723T230817Z:b8899a72-4933-4687-a147-d752c71244a4',
  date: 'Thu, 23 Jul 2015 23:08:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/d231de44-9757-46f5-8fa3-10d6e29e4049?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f4ba3774-21d6-4d0a-aede-de75fb7511ea',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'b8899a72-4933-4687-a147-d752c71244a4',
  'x-ms-routing-request-id': 'WESTUS:20150723T230817Z:b8899a72-4933-4687-a147-d752c71244a4',
  date: 'Thu, 23 Jul 2015 23:08:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRtTblRoutes/providers/Microsoft.Network/routeTables/ArmRtTblRoute/routes/ArmRoute?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"ArmRoute\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRtTblRoutes/providers/Microsoft.Network/routeTables/ArmRtTblRoute/routes/ArmRoute\",\r\n  \"etag\": \"W/\\\"95633e6b-e2c5-496a-ab45-b0e70ba49022\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"10.0.0.0/23\",\r\n    \"nextHopType\": \"VnetLocal\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '386',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"95633e6b-e2c5-496a-ab45-b0e70ba49022"',
  'x-ms-request-id': 'b7ed42df-a48b-4b3e-8207-31272568059d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': 'cabb4354-dacc-47a2-b56b-dc96bb0de52f',
  'x-ms-routing-request-id': 'WESTUS:20150723T230817Z:cabb4354-dacc-47a2-b56b-dc96bb0de52f',
  date: 'Thu, 23 Jul 2015 23:08:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRtTblRoutes/providers/Microsoft.Network/routeTables/ArmRtTblRoute/routes/ArmRoute?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"ArmRoute\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRtTblRoutes/providers/Microsoft.Network/routeTables/ArmRtTblRoute/routes/ArmRoute\",\r\n  \"etag\": \"W/\\\"95633e6b-e2c5-496a-ab45-b0e70ba49022\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"10.0.0.0/23\",\r\n    \"nextHopType\": \"VnetLocal\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '386',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"95633e6b-e2c5-496a-ab45-b0e70ba49022"',
  'x-ms-request-id': 'b7ed42df-a48b-4b3e-8207-31272568059d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': 'cabb4354-dacc-47a2-b56b-dc96bb0de52f',
  'x-ms-routing-request-id': 'WESTUS:20150723T230817Z:cabb4354-dacc-47a2-b56b-dc96bb0de52f',
  date: 'Thu, 23 Jul 2015 23:08:16 GMT',
  connection: 'close' });
 return result; }]];