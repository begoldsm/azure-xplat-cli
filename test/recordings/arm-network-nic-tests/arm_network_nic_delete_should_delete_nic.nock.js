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
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkInterfaces/xplatTestNic?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplatTestNic\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkInterfaces/xplatTestNic\",\r\n  \"etag\": \"W/\\\"57730fef-696e-4a3e-9054-c94ba204e856\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"f6d1f485-6862-4468-b6f6-546cccc430f6\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"NIC-config\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkInterfaces/xplatTestNic/ipConfigurations/NIC-config\",\r\n        \"etag\": \"W/\\\"57730fef-696e-4a3e-9054-c94ba204e856\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.31.254.254\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/virtualNetworks/xplatTestVnetNIc/subnets/xplatTestSubnetNIc\"\r\n          },\r\n          \"loadBalancerBackendAddressPools\": [\r\n            {\r\n              \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic/backendAddressPools/LBAddPollnic\"\r\n            }\r\n          ],\r\n          \"loadBalancerInboundNatRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic/inboundNatRules/xplattestInboundnic\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"internalDnsNameLabel\": \"internlDnsN\",\r\n      \"internalFqdn\": \"internlDnsN.3xxufv0w0iiuxl1gmhwlqdqwoc.bx.internal.cloudapp.net\"\r\n    },\r\n    \"enableIPForwarding\": false,\r\n    \"networkSecurityGroup\": {\r\n      \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkSecurityGroups/xplatTestNSGNic\"\r\n    }\r\n  },\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"priority\": \"high\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2188',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"57730fef-696e-4a3e-9054-c94ba204e856"',
  'x-ms-request-id': '9c139a21-0b93-4404-b659-0e04e037b493',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-correlation-request-id': '913dc1ab-f903-4110-a961-acc3cd97e0b2',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150723T063410Z:913dc1ab-f903-4110-a961-acc3cd97e0b2',
  date: 'Thu, 23 Jul 2015 06:34:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkInterfaces/xplatTestNic?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplatTestNic\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkInterfaces/xplatTestNic\",\r\n  \"etag\": \"W/\\\"57730fef-696e-4a3e-9054-c94ba204e856\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"f6d1f485-6862-4468-b6f6-546cccc430f6\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"NIC-config\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkInterfaces/xplatTestNic/ipConfigurations/NIC-config\",\r\n        \"etag\": \"W/\\\"57730fef-696e-4a3e-9054-c94ba204e856\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.31.254.254\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/virtualNetworks/xplatTestVnetNIc/subnets/xplatTestSubnetNIc\"\r\n          },\r\n          \"loadBalancerBackendAddressPools\": [\r\n            {\r\n              \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic/backendAddressPools/LBAddPollnic\"\r\n            }\r\n          ],\r\n          \"loadBalancerInboundNatRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic/inboundNatRules/xplattestInboundnic\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"internalDnsNameLabel\": \"internlDnsN\",\r\n      \"internalFqdn\": \"internlDnsN.3xxufv0w0iiuxl1gmhwlqdqwoc.bx.internal.cloudapp.net\"\r\n    },\r\n    \"enableIPForwarding\": false,\r\n    \"networkSecurityGroup\": {\r\n      \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkSecurityGroups/xplatTestNSGNic\"\r\n    }\r\n  },\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"priority\": \"high\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2188',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"57730fef-696e-4a3e-9054-c94ba204e856"',
  'x-ms-request-id': '9c139a21-0b93-4404-b659-0e04e037b493',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-correlation-request-id': '913dc1ab-f903-4110-a961-acc3cd97e0b2',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150723T063410Z:913dc1ab-f903-4110-a961-acc3cd97e0b2',
  date: 'Thu, 23 Jul 2015 06:34:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkInterfaces/xplatTestNic?api-version=2015-05-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operationResults/cbe8b88c-8177-408f-b3b5-f30aa8348c51?api-version=2015-05-01-preview',
  'retry-after': '10',
  'x-ms-request-id': 'cbe8b88c-8177-408f-b3b5-f30aa8348c51',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/cbe8b88c-8177-408f-b3b5-f30aa8348c51?api-version=2015-05-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '984abec5-7b96-4bbe-9539-20c0ebaba58f',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150723T063412Z:984abec5-7b96-4bbe-9539-20c0ebaba58f',
  date: 'Thu, 23 Jul 2015 06:34:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkInterfaces/xplatTestNic?api-version=2015-05-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operationResults/cbe8b88c-8177-408f-b3b5-f30aa8348c51?api-version=2015-05-01-preview',
  'retry-after': '10',
  'x-ms-request-id': 'cbe8b88c-8177-408f-b3b5-f30aa8348c51',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/cbe8b88c-8177-408f-b3b5-f30aa8348c51?api-version=2015-05-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '984abec5-7b96-4bbe-9539-20c0ebaba58f',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150723T063412Z:984abec5-7b96-4bbe-9539-20c0ebaba58f',
  date: 'Thu, 23 Jul 2015 06:34:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/cbe8b88c-8177-408f-b3b5-f30aa8348c51?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '09308eb2-d2f5-491a-bec2-c789aaca1947',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-correlation-request-id': '52a70cc2-e4bf-4d13-a8f9-8e196405e7b7',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150723T063424Z:52a70cc2-e4bf-4d13-a8f9-8e196405e7b7',
  date: 'Thu, 23 Jul 2015 06:34:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/cbe8b88c-8177-408f-b3b5-f30aa8348c51?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '09308eb2-d2f5-491a-bec2-c789aaca1947',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-correlation-request-id': '52a70cc2-e4bf-4d13-a8f9-8e196405e7b7',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150723T063424Z:52a70cc2-e4bf-4d13-a8f9-8e196405e7b7',
  date: 'Thu, 23 Jul 2015 06:34:23 GMT',
  connection: 'close' });
 return result; }]];