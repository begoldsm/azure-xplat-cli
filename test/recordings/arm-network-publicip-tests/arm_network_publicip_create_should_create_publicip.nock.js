// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
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
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplat-test-public-ip?api-version=2016-02-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplat-test-public-ip' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14976',
  'x-ms-request-id': 'a1b5ca69-7b62-4ffc-a8ca-bb9669fdb19d',
  'x-ms-correlation-request-id': 'a1b5ca69-7b62-4ffc-a8ca-bb9669fdb19d',
  'x-ms-routing-request-id': 'WESTEUROPE:20160815T154022Z:a1b5ca69-7b62-4ffc-a8ca-bb9669fdb19d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 15 Aug 2016 15:40:21 GMT',
  'content-length': '112' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplat-test-public-ip?api-version=2016-02-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip\",\"name\":\"xplat-test-public-ip\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '203',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1195',
  'x-ms-request-id': '0b7e0820-3085-4636-8003-4f0b661ada9e',
  'x-ms-correlation-request-id': '0b7e0820-3085-4636-8003-4f0b661ada9e',
  'x-ms-routing-request-id': 'WESTEUROPE:20160815T154024Z:0b7e0820-3085-4636-8003-4f0b661ada9e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 15 Aug 2016 15:40:23 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/test-ip?api-version=2016-06-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/publicIPAddresses/test-ip' under resource group 'xplat-test-public-ip' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '9127e607-7fe1-4c34-a29c-412add92de93',
  'x-ms-correlation-request-id': '9127e607-7fe1-4c34-a29c-412add92de93',
  'x-ms-routing-request-id': 'WESTEUROPE:20160815T154025Z:9127e607-7fe1-4c34-a29c-412add92de93',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 15 Aug 2016 15:40:24 GMT',
  'content-length': '167' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/test-ip?api-version=2016-06-01', '*')
  .reply(201, "{\r\n  \"name\": \"test-ip\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/test-ip\",\r\n  \"etag\": \"W/\\\"d53ebbfa-fee2-4cce-864b-cf82a3ff1695\\\"\",\r\n  \"type\": \"Microsoft.Network/publicIPAddresses\",\r\n  \"location\": \"westus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"6bb7d7de-8ec8-4689-9b09-484f60392f96\",\r\n    \"publicIPAddressVersion\": \"IPv4\",\r\n    \"publicIPAllocationMethod\": \"Static\",\r\n    \"idleTimeoutInMinutes\": 4,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"foo-domain8425\",\r\n      \"fqdn\": \"foo-domain8425.westus.validation.cloudapp.azure.com\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '749',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '43d6cc0e-33fd-4a4e-8eca-9688143ad24e',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/43d6cc0e-33fd-4a4e-8eca-9688143ad24e?api-version=2016-06-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1195',
  'x-ms-correlation-request-id': '3fa38d39-cf33-4156-ab2b-a92aef455cb7',
  'x-ms-routing-request-id': 'WESTEUROPE:20160815T154030Z:3fa38d39-cf33-4156-ab2b-a92aef455cb7',
  date: 'Mon, 15 Aug 2016 15:40:29 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/43d6cc0e-33fd-4a4e-8eca-9688143ad24e?api-version=2016-06-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '03fa1ba5-004e-4b0a-be82-16ebd7e2b836',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14979',
  'x-ms-correlation-request-id': '47220e8b-a9f9-43c0-ae80-ea6a25d6e333',
  'x-ms-routing-request-id': 'WESTEUROPE:20160815T154101Z:47220e8b-a9f9-43c0-ae80-ea6a25d6e333',
  date: 'Mon, 15 Aug 2016 15:41:00 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/test-ip?api-version=2016-06-01')
  .reply(200, "{\r\n  \"name\": \"test-ip\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/test-ip\",\r\n  \"etag\": \"W/\\\"df462d8d-04ae-401f-842e-e11dc1294dd2\\\"\",\r\n  \"type\": \"Microsoft.Network/publicIPAddresses\",\r\n  \"location\": \"westus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"6bb7d7de-8ec8-4689-9b09-484f60392f96\",\r\n    \"ipAddress\": \"137.116.28.33\",\r\n    \"publicIPAddressVersion\": \"IPv4\",\r\n    \"publicIPAllocationMethod\": \"Static\",\r\n    \"idleTimeoutInMinutes\": 4,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"foo-domain8425\",\r\n      \"fqdn\": \"foo-domain8425.westus.validation.cloudapp.azure.com\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '785',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"df462d8d-04ae-401f-842e-e11dc1294dd2"',
  'x-ms-request-id': '61900e60-7321-4eaf-9a4d-813cdaf67c4b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14981',
  'x-ms-correlation-request-id': '5cf0b7eb-4a5d-4d4f-aae6-1dbe79ecfbcd',
  'x-ms-routing-request-id': 'WESTEUROPE:20160815T154102Z:5cf0b7eb-4a5d-4d4f-aae6-1dbe79ecfbcd',
  date: 'Mon, 15 Aug 2016 15:41:01 GMT' });
 return result; }]];