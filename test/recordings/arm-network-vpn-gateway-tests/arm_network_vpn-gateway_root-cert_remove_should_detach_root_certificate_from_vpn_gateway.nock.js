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
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'westeurope';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualnetworkgateways/test-vpn-gateway?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"test-vpn-gateway\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway\",\r\n  \"etag\": \"W/\\\"a69108c1-362a-4888-ab70-660f0fba0ea4\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworkGateways\",\r\n  \"location\": \"westeurope\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"4624dde8-6407-4d14-a0cc-bfa2038c6234\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"ip-config\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway/ipConfigurations/ip-config\",\r\n        \"etag\": \"W/\\\"a69108c1-362a-4888-ab70-660f0fba0ea4\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.1.0.12\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/GatewaySubnet\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"sku\": {\r\n      \"name\": \"Standard\",\r\n      \"tier\": \"Standard\",\r\n      \"capacity\": 2\r\n    },\r\n    \"gatewayType\": \"Vpn\",\r\n    \"vpnType\": \"RouteBased\",\r\n    \"enableBgp\": false,\r\n    \"vpnClientConfiguration\": {\r\n      \"vpnClientAddressPool\": {\r\n        \"addressPrefixes\": [\r\n          \"10.0.0.0/24\"\r\n        ]\r\n      },\r\n      \"vpnClientRootCertificates\": [\r\n        {\r\n          \"name\": \"test-root-cert\",\r\n          \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway/vpnClientRootCertificates/test-root-cert\",\r\n          \"etag\": \"W/\\\"a69108c1-362a-4888-ab70-660f0fba0ea4\\\"\",\r\n          \"properties\": {\r\n            \"provisioningState\": \"Succeeded\",\r\n            \"publicCertData\": \"LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tDQpNSUlEalRDQ0FuV2dBd0lCQWdJQkFEQU5CZ2txaGtpRzl3MEJBUXNGQURCaE1Rc3dDUVlEVlFRR0V3SlZVekVMDQpNQWtHQTFVRUNBd0NUbGt4Q3pBSkJnTlZCQWNNQWs1Wk1Rc3dDUVlEVlFRS0RBSk9XVEVMTUFrR0ExVUVDd3dDDQpUbGt4Q3pBSkJnTlZCQU1NQW01NU1SRXdEd1lKS29aSWh2Y05BUWtCRmdKdWVUQWVGdzB4TmpBek1qTXhNREU0DQpNRGhhRncweE56QXpNak14TURFNE1EaGFNR0V4Q3pBSkJnTlZCQVlUQWxWVE1Rc3dDUVlEVlFRSURBSk9XVEVMDQpNQWtHQTFVRUJ3d0NUbGt4Q3pBSkJnTlZCQW9NQWs1Wk1Rc3dDUVlEVlFRTERBSk9XVEVMTUFrR0ExVUVBd3dDDQpibmt4RVRBUEJna3Foa2lHOXcwQkNRRVdBbTU1TUlJQklqQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FROEFNSUlCDQpDZ0tDQVFFQXl3RHhtclU5WE1nTVdxTHpldjNoS2FmWVIySUtpdUFWanFWcGZKRDhpQThsTmxVOU1HaDZHc0JyDQpmOGduaVNLNDBWbUdtalQ1NlBVdEl1cmdVaUNkaWFGc1dkZVVGc3BVWnRFaXY2SkNrM28rR24xdWdmbjRXQjllDQpCSDlROHFraDkzSWZVWnE2VmtlYUx0b1NZRGZacko2azBCQVNGZ2hFb2F0cm1RTG1jU25hT2ZnNjNGYTVtNlFhDQptQ1Z3RWppOENnaUJHUGIvVkdRTEZubE56UVc5dy9QTzlWb3Y5UGJKeU95THNiM3RvM3gyM3c2N2pGODI0M21iDQpJK0xGUFl4SEpYY0Q0N1h6bFI0VGg4SVRPQzZFYVZoeG1BeEtlcEpWWVZHM3J1SHdEYkFyYzFUOFhmQlFmdlpHDQp2M1VuSlp5NWZDb3lRTjMySXdJQnRpS1Nwd05VNHdJREFRQUJvMUF3VGpBZEJnTlZIUTRFRmdRVUJyeUdReDlUDQorbXVhbjJKVG13a3RZQlFMWUFjd0h3WURWUjBqQkJnd0ZvQVVCcnlHUXg5VCttdWFuMkpUbXdrdFlCUUxZQWN3DQpEQVlEVlIwVEJBVXdBd0VCL3pBTkJna3Foa2lHOXcwQkFRc0ZBQU9DQVFFQXNFbTdVQ0E1ZW80OENDNC8zUG9mDQovWjVzVkdtZ2xzbE1XdmgxVzlxV2VxRVBFUnREMHZIUWRzdWRKUmw4R2I2SzJSblN4dDNlVHlNTzhhdDVwZXVBDQpsajlMNnZrMjIvLzE5SXFkZ3pEaHp1MUIzQmhNWDlnUmpXYlBkS0h1MzZleGVYWDFQK1lDbmNPQ0Exa3dUYVJrDQpZRFJKZ2FvQ0pjaUNyaVRSckVDeG9xWkszK0FiSG5RTFFEMmJGUGdJSUI3Vm0wUjdpM0c5MWNDbkx2Rkh0MERMDQpmc3BkUENYQU1OcDBmTERXdXRxOWVtTXVYbDJsUVVDUWcybGNNemQ2eERxc0dTR0pZMGtpbGlmOEt3TUkwS0R1DQpJbDFvdzB1a2tGTHNxZWVjZWIvdjRGNDNwVWtqUkxNM1pzUW1DOHNoMlR4cnZGaG5PbHZLZVhRZDJKbDN5c2paDQp2Zz09DQotLS0tLUVORCBDRVJUSUZJQ0FURS0tLS0t\"\r\n          }\r\n        }\r\n      ],\r\n      \"vpnClientRevokedCertificates\": [],\r\n      \"vpnClientConnectionHealth\": {\r\n        \"vpnClientConnectionsCount\": 0,\r\n        \"allocatedIpAddresses\": [],\r\n        \"totalIngressBytesTransferred\": 0,\r\n        \"totalEgressBytesTransferred\": 0\r\n      }\r\n    },\r\n    \"bgpSettings\": {\r\n      \"asn\": 65515,\r\n      \"bgpPeeringAddress\": \"10.1.0.14\",\r\n      \"peerWeight\": 0\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '4467',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'feb6efaf-9440-4d22-b3ec-e831813c19b1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '9af665d4-386c-431a-bf34-13b2d1834615',
  'x-ms-routing-request-id': 'WESTEUROPE:20160331T092209Z:9af665d4-386c-431a-bf34-13b2d1834615',
  date: 'Thu, 31 Mar 2016 09:22:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualnetworkgateways/test-vpn-gateway?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"test-vpn-gateway\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway\",\r\n  \"etag\": \"W/\\\"a69108c1-362a-4888-ab70-660f0fba0ea4\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworkGateways\",\r\n  \"location\": \"westeurope\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"4624dde8-6407-4d14-a0cc-bfa2038c6234\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"ip-config\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway/ipConfigurations/ip-config\",\r\n        \"etag\": \"W/\\\"a69108c1-362a-4888-ab70-660f0fba0ea4\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.1.0.12\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/GatewaySubnet\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"sku\": {\r\n      \"name\": \"Standard\",\r\n      \"tier\": \"Standard\",\r\n      \"capacity\": 2\r\n    },\r\n    \"gatewayType\": \"Vpn\",\r\n    \"vpnType\": \"RouteBased\",\r\n    \"enableBgp\": false,\r\n    \"vpnClientConfiguration\": {\r\n      \"vpnClientAddressPool\": {\r\n        \"addressPrefixes\": [\r\n          \"10.0.0.0/24\"\r\n        ]\r\n      },\r\n      \"vpnClientRootCertificates\": [\r\n        {\r\n          \"name\": \"test-root-cert\",\r\n          \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway/vpnClientRootCertificates/test-root-cert\",\r\n          \"etag\": \"W/\\\"a69108c1-362a-4888-ab70-660f0fba0ea4\\\"\",\r\n          \"properties\": {\r\n            \"provisioningState\": \"Succeeded\",\r\n            \"publicCertData\": \"LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tDQpNSUlEalRDQ0FuV2dBd0lCQWdJQkFEQU5CZ2txaGtpRzl3MEJBUXNGQURCaE1Rc3dDUVlEVlFRR0V3SlZVekVMDQpNQWtHQTFVRUNBd0NUbGt4Q3pBSkJnTlZCQWNNQWs1Wk1Rc3dDUVlEVlFRS0RBSk9XVEVMTUFrR0ExVUVDd3dDDQpUbGt4Q3pBSkJnTlZCQU1NQW01NU1SRXdEd1lKS29aSWh2Y05BUWtCRmdKdWVUQWVGdzB4TmpBek1qTXhNREU0DQpNRGhhRncweE56QXpNak14TURFNE1EaGFNR0V4Q3pBSkJnTlZCQVlUQWxWVE1Rc3dDUVlEVlFRSURBSk9XVEVMDQpNQWtHQTFVRUJ3d0NUbGt4Q3pBSkJnTlZCQW9NQWs1Wk1Rc3dDUVlEVlFRTERBSk9XVEVMTUFrR0ExVUVBd3dDDQpibmt4RVRBUEJna3Foa2lHOXcwQkNRRVdBbTU1TUlJQklqQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FROEFNSUlCDQpDZ0tDQVFFQXl3RHhtclU5WE1nTVdxTHpldjNoS2FmWVIySUtpdUFWanFWcGZKRDhpQThsTmxVOU1HaDZHc0JyDQpmOGduaVNLNDBWbUdtalQ1NlBVdEl1cmdVaUNkaWFGc1dkZVVGc3BVWnRFaXY2SkNrM28rR24xdWdmbjRXQjllDQpCSDlROHFraDkzSWZVWnE2VmtlYUx0b1NZRGZacko2azBCQVNGZ2hFb2F0cm1RTG1jU25hT2ZnNjNGYTVtNlFhDQptQ1Z3RWppOENnaUJHUGIvVkdRTEZubE56UVc5dy9QTzlWb3Y5UGJKeU95THNiM3RvM3gyM3c2N2pGODI0M21iDQpJK0xGUFl4SEpYY0Q0N1h6bFI0VGg4SVRPQzZFYVZoeG1BeEtlcEpWWVZHM3J1SHdEYkFyYzFUOFhmQlFmdlpHDQp2M1VuSlp5NWZDb3lRTjMySXdJQnRpS1Nwd05VNHdJREFRQUJvMUF3VGpBZEJnTlZIUTRFRmdRVUJyeUdReDlUDQorbXVhbjJKVG13a3RZQlFMWUFjd0h3WURWUjBqQkJnd0ZvQVVCcnlHUXg5VCttdWFuMkpUbXdrdFlCUUxZQWN3DQpEQVlEVlIwVEJBVXdBd0VCL3pBTkJna3Foa2lHOXcwQkFRc0ZBQU9DQVFFQXNFbTdVQ0E1ZW80OENDNC8zUG9mDQovWjVzVkdtZ2xzbE1XdmgxVzlxV2VxRVBFUnREMHZIUWRzdWRKUmw4R2I2SzJSblN4dDNlVHlNTzhhdDVwZXVBDQpsajlMNnZrMjIvLzE5SXFkZ3pEaHp1MUIzQmhNWDlnUmpXYlBkS0h1MzZleGVYWDFQK1lDbmNPQ0Exa3dUYVJrDQpZRFJKZ2FvQ0pjaUNyaVRSckVDeG9xWkszK0FiSG5RTFFEMmJGUGdJSUI3Vm0wUjdpM0c5MWNDbkx2Rkh0MERMDQpmc3BkUENYQU1OcDBmTERXdXRxOWVtTXVYbDJsUVVDUWcybGNNemQ2eERxc0dTR0pZMGtpbGlmOEt3TUkwS0R1DQpJbDFvdzB1a2tGTHNxZWVjZWIvdjRGNDNwVWtqUkxNM1pzUW1DOHNoMlR4cnZGaG5PbHZLZVhRZDJKbDN5c2paDQp2Zz09DQotLS0tLUVORCBDRVJUSUZJQ0FURS0tLS0t\"\r\n          }\r\n        }\r\n      ],\r\n      \"vpnClientRevokedCertificates\": [],\r\n      \"vpnClientConnectionHealth\": {\r\n        \"vpnClientConnectionsCount\": 0,\r\n        \"allocatedIpAddresses\": [],\r\n        \"totalIngressBytesTransferred\": 0,\r\n        \"totalEgressBytesTransferred\": 0\r\n      }\r\n    },\r\n    \"bgpSettings\": {\r\n      \"asn\": 65515,\r\n      \"bgpPeeringAddress\": \"10.1.0.14\",\r\n      \"peerWeight\": 0\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '4467',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'feb6efaf-9440-4d22-b3ec-e831813c19b1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '9af665d4-386c-431a-bf34-13b2d1834615',
  'x-ms-routing-request-id': 'WESTEUROPE:20160331T092209Z:9af665d4-386c-431a-bf34-13b2d1834615',
  date: 'Thu, 31 Mar 2016 09:22:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualnetworkgateways/test-vpn-gateway?api-version=2016-03-30', '*')
  .reply(200, "{\r\n  \"name\": \"test-vpn-gateway\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway\",\r\n  \"etag\": \"W/\\\"13867165-f40d-4112-9df3-73c2680ce27d\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworkGateways\",\r\n  \"location\": \"westeurope\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"4624dde8-6407-4d14-a0cc-bfa2038c6234\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"ip-config\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway/ipConfigurations/ip-config\",\r\n        \"etag\": \"W/\\\"13867165-f40d-4112-9df3-73c2680ce27d\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Updating\",\r\n          \"privateIPAddress\": \"10.1.0.12\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/GatewaySubnet\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"sku\": {\r\n      \"name\": \"Standard\",\r\n      \"tier\": \"Standard\",\r\n      \"capacity\": 2\r\n    },\r\n    \"gatewayType\": \"Vpn\",\r\n    \"vpnType\": \"RouteBased\",\r\n    \"enableBgp\": false,\r\n    \"vpnClientConfiguration\": {\r\n      \"vpnClientAddressPool\": {\r\n        \"addressPrefixes\": [\r\n          \"10.0.0.0/24\"\r\n        ]\r\n      },\r\n      \"vpnClientRootCertificates\": [],\r\n      \"vpnClientRevokedCertificates\": []\r\n    },\r\n    \"bgpSettings\": {\r\n      \"asn\": 65515,\r\n      \"bgpPeeringAddress\": \"10.1.0.14\",\r\n      \"peerWeight\": 0\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2029',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '96a233d3-030f-4bea-a858-bf434f212f83',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westeurope/operations/96a233d3-030f-4bea-a858-bf434f212f83?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '829b85fd-8212-4814-856d-e8931cb0b364',
  'x-ms-routing-request-id': 'WESTEUROPE:20160331T092210Z:829b85fd-8212-4814-856d-e8931cb0b364',
  date: 'Thu, 31 Mar 2016 09:22:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualnetworkgateways/test-vpn-gateway?api-version=2016-03-30', '*')
  .reply(200, "{\r\n  \"name\": \"test-vpn-gateway\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway\",\r\n  \"etag\": \"W/\\\"13867165-f40d-4112-9df3-73c2680ce27d\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworkGateways\",\r\n  \"location\": \"westeurope\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"4624dde8-6407-4d14-a0cc-bfa2038c6234\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"ip-config\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway/ipConfigurations/ip-config\",\r\n        \"etag\": \"W/\\\"13867165-f40d-4112-9df3-73c2680ce27d\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Updating\",\r\n          \"privateIPAddress\": \"10.1.0.12\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/GatewaySubnet\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"sku\": {\r\n      \"name\": \"Standard\",\r\n      \"tier\": \"Standard\",\r\n      \"capacity\": 2\r\n    },\r\n    \"gatewayType\": \"Vpn\",\r\n    \"vpnType\": \"RouteBased\",\r\n    \"enableBgp\": false,\r\n    \"vpnClientConfiguration\": {\r\n      \"vpnClientAddressPool\": {\r\n        \"addressPrefixes\": [\r\n          \"10.0.0.0/24\"\r\n        ]\r\n      },\r\n      \"vpnClientRootCertificates\": [],\r\n      \"vpnClientRevokedCertificates\": []\r\n    },\r\n    \"bgpSettings\": {\r\n      \"asn\": 65515,\r\n      \"bgpPeeringAddress\": \"10.1.0.14\",\r\n      \"peerWeight\": 0\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2029',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '96a233d3-030f-4bea-a858-bf434f212f83',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westeurope/operations/96a233d3-030f-4bea-a858-bf434f212f83?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '829b85fd-8212-4814-856d-e8931cb0b364',
  'x-ms-routing-request-id': 'WESTEUROPE:20160331T092210Z:829b85fd-8212-4814-856d-e8931cb0b364',
  date: 'Thu, 31 Mar 2016 09:22:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westeurope/operations/96a233d3-030f-4bea-a858-bf434f212f83?api-version=2016-03-30')
  .reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '30',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e58b8697-afd6-4881-86c5-52622713163d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '74ad9a4c-8d8e-4a4b-838c-4f3dade60db3',
  'x-ms-routing-request-id': 'WESTEUROPE:20160331T092240Z:74ad9a4c-8d8e-4a4b-838c-4f3dade60db3',
  date: 'Thu, 31 Mar 2016 09:22:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westeurope/operations/96a233d3-030f-4bea-a858-bf434f212f83?api-version=2016-03-30')
  .reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '30',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e58b8697-afd6-4881-86c5-52622713163d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '74ad9a4c-8d8e-4a4b-838c-4f3dade60db3',
  'x-ms-routing-request-id': 'WESTEUROPE:20160331T092240Z:74ad9a4c-8d8e-4a4b-838c-4f3dade60db3',
  date: 'Thu, 31 Mar 2016 09:22:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westeurope/operations/96a233d3-030f-4bea-a858-bf434f212f83?api-version=2016-03-30')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f0b28299-f368-4f1e-a0cb-ff381c862a0f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': 'f74a14fb-993f-4c3d-b121-7800cf2ecc68',
  'x-ms-routing-request-id': 'WESTEUROPE:20160331T092311Z:f74a14fb-993f-4c3d-b121-7800cf2ecc68',
  date: 'Thu, 31 Mar 2016 09:23:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westeurope/operations/96a233d3-030f-4bea-a858-bf434f212f83?api-version=2016-03-30')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f0b28299-f368-4f1e-a0cb-ff381c862a0f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': 'f74a14fb-993f-4c3d-b121-7800cf2ecc68',
  'x-ms-routing-request-id': 'WESTEUROPE:20160331T092311Z:f74a14fb-993f-4c3d-b121-7800cf2ecc68',
  date: 'Thu, 31 Mar 2016 09:23:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualnetworkgateways/test-vpn-gateway?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"test-vpn-gateway\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway\",\r\n  \"etag\": \"W/\\\"2fa9a7cb-55f2-4b44-bfbf-b47c5dd43196\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworkGateways\",\r\n  \"location\": \"westeurope\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"4624dde8-6407-4d14-a0cc-bfa2038c6234\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"ip-config\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway/ipConfigurations/ip-config\",\r\n        \"etag\": \"W/\\\"2fa9a7cb-55f2-4b44-bfbf-b47c5dd43196\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.1.0.12\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/GatewaySubnet\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"sku\": {\r\n      \"name\": \"Standard\",\r\n      \"tier\": \"Standard\",\r\n      \"capacity\": 2\r\n    },\r\n    \"gatewayType\": \"Vpn\",\r\n    \"vpnType\": \"RouteBased\",\r\n    \"enableBgp\": false,\r\n    \"vpnClientConfiguration\": {\r\n      \"vpnClientAddressPool\": {\r\n        \"addressPrefixes\": [\r\n          \"10.0.0.0/24\"\r\n        ]\r\n      },\r\n      \"vpnClientRootCertificates\": [],\r\n      \"vpnClientRevokedCertificates\": [],\r\n      \"vpnClientConnectionHealth\": {\r\n        \"vpnClientConnectionsCount\": 0,\r\n        \"allocatedIpAddresses\": [],\r\n        \"totalIngressBytesTransferred\": 0,\r\n        \"totalEgressBytesTransferred\": 0\r\n      }\r\n    },\r\n    \"bgpSettings\": {\r\n      \"asn\": 65515,\r\n      \"bgpPeeringAddress\": \"10.1.0.14\",\r\n      \"peerWeight\": 0\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2243',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'ceb7bbad-9581-45dd-8fc4-d05f8e3b6b82',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': '859de6c2-2ed7-4001-abc2-5f6169cc44b9',
  'x-ms-routing-request-id': 'WESTEUROPE:20160331T092312Z:859de6c2-2ed7-4001-abc2-5f6169cc44b9',
  date: 'Thu, 31 Mar 2016 09:23:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualnetworkgateways/test-vpn-gateway?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"test-vpn-gateway\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway\",\r\n  \"etag\": \"W/\\\"2fa9a7cb-55f2-4b44-bfbf-b47c5dd43196\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworkGateways\",\r\n  \"location\": \"westeurope\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"4624dde8-6407-4d14-a0cc-bfa2038c6234\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"ip-config\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway/ipConfigurations/ip-config\",\r\n        \"etag\": \"W/\\\"2fa9a7cb-55f2-4b44-bfbf-b47c5dd43196\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.1.0.12\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/GatewaySubnet\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"sku\": {\r\n      \"name\": \"Standard\",\r\n      \"tier\": \"Standard\",\r\n      \"capacity\": 2\r\n    },\r\n    \"gatewayType\": \"Vpn\",\r\n    \"vpnType\": \"RouteBased\",\r\n    \"enableBgp\": false,\r\n    \"vpnClientConfiguration\": {\r\n      \"vpnClientAddressPool\": {\r\n        \"addressPrefixes\": [\r\n          \"10.0.0.0/24\"\r\n        ]\r\n      },\r\n      \"vpnClientRootCertificates\": [],\r\n      \"vpnClientRevokedCertificates\": [],\r\n      \"vpnClientConnectionHealth\": {\r\n        \"vpnClientConnectionsCount\": 0,\r\n        \"allocatedIpAddresses\": [],\r\n        \"totalIngressBytesTransferred\": 0,\r\n        \"totalEgressBytesTransferred\": 0\r\n      }\r\n    },\r\n    \"bgpSettings\": {\r\n      \"asn\": 65515,\r\n      \"bgpPeeringAddress\": \"10.1.0.14\",\r\n      \"peerWeight\": 0\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2243',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'ceb7bbad-9581-45dd-8fc4-d05f8e3b6b82',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': '859de6c2-2ed7-4001-abc2-5f6169cc44b9',
  'x-ms-routing-request-id': 'WESTEUROPE:20160331T092312Z:859de6c2-2ed7-4001-abc2-5f6169cc44b9',
  date: 'Thu, 31 Mar 2016 09:23:12 GMT',
  connection: 'close' });
 return result; }]];