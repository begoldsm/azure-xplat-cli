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
  process.env['AZURE_VM_TEST_LOCATION'] = 'West US';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .get('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/networking/networksecuritygroups/xplatTestNSGNic?detaillevel=Full')
  .reply(200, "<NetworkSecurityGroup xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Name>xplatTestNSGNic</Name><Location>West US</Location><Rules><Rule><Name>ALLOW VNET OUTBOUND</Name><Type>Outbound</Type><Priority>65000</Priority><Action>Allow</Action><SourceAddressPrefix>VIRTUAL_NETWORK</SourceAddressPrefix><SourcePortRange>*</SourcePortRange><DestinationAddressPrefix>VIRTUAL_NETWORK</DestinationAddressPrefix><DestinationPortRange>*</DestinationPortRange><Protocol>*</Protocol><State>Active</State><IsDefault>true</IsDefault></Rule><Rule><Name>ALLOW VNET INBOUND</Name><Type>Inbound</Type><Priority>65000</Priority><Action>Allow</Action><SourceAddressPrefix>VIRTUAL_NETWORK</SourceAddressPrefix><SourcePortRange>*</SourcePortRange><DestinationAddressPrefix>VIRTUAL_NETWORK</DestinationAddressPrefix><DestinationPortRange>*</DestinationPortRange><Protocol>*</Protocol><State>Active</State><IsDefault>true</IsDefault></Rule><Rule><Name>ALLOW AZURE LOAD BALANCER INBOUND</Name><Type>Inbound</Type><Priority>65001</Priority><Action>Allow</Action><SourceAddressPrefix>AZURE_LOADBALANCER</SourceAddressPrefix><SourcePortRange>*</SourcePortRange><DestinationAddressPrefix>*</DestinationAddressPrefix><DestinationPortRange>*</DestinationPortRange><Protocol>*</Protocol><State>Active</State><IsDefault>true</IsDefault></Rule><Rule><Name>ALLOW INTERNET OUTBOUND</Name><Type>Outbound</Type><Priority>65001</Priority><Action>Allow</Action><SourceAddressPrefix>*</SourceAddressPrefix><SourcePortRange>*</SourcePortRange><DestinationAddressPrefix>INTERNET</DestinationAddressPrefix><DestinationPortRange>*</DestinationPortRange><Protocol>*</Protocol><State>Active</State><IsDefault>true</IsDefault></Rule><Rule><Name>DENY ALL OUTBOUND</Name><Type>Outbound</Type><Priority>65500</Priority><Action>Deny</Action><SourceAddressPrefix>*</SourceAddressPrefix><SourcePortRange>*</SourcePortRange><DestinationAddressPrefix>*</DestinationAddressPrefix><DestinationPortRange>*</DestinationPortRange><Protocol>*</Protocol><State>Active</State><IsDefault>true</IsDefault></Rule><Rule><Name>DENY ALL INBOUND</Name><Type>Inbound</Type><Priority>65500</Priority><Action>Deny</Action><SourceAddressPrefix>*</SourceAddressPrefix><SourcePortRange>*</SourcePortRange><DestinationAddressPrefix>*</DestinationAddressPrefix><DestinationPortRange>*</DestinationPortRange><Protocol>*</Protocol><State>Active</State><IsDefault>true</IsDefault></Rule></Rules></NetworkSecurityGroup>", { 'cache-control': 'no-cache',
  'content-length': '2489',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.240 (rd_rdfe_stable.150608-1900) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'usnorth2',
  'x-ms-request-id': '5117bc5a7298bc83873dd7563f447f4b',
  date: 'Fri, 12 Jun 2015 12:48:25 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/networking/networksecuritygroups/xplatTestNSGNic?detaillevel=Full')
  .reply(200, "<NetworkSecurityGroup xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Name>xplatTestNSGNic</Name><Location>West US</Location><Rules><Rule><Name>ALLOW VNET OUTBOUND</Name><Type>Outbound</Type><Priority>65000</Priority><Action>Allow</Action><SourceAddressPrefix>VIRTUAL_NETWORK</SourceAddressPrefix><SourcePortRange>*</SourcePortRange><DestinationAddressPrefix>VIRTUAL_NETWORK</DestinationAddressPrefix><DestinationPortRange>*</DestinationPortRange><Protocol>*</Protocol><State>Active</State><IsDefault>true</IsDefault></Rule><Rule><Name>ALLOW VNET INBOUND</Name><Type>Inbound</Type><Priority>65000</Priority><Action>Allow</Action><SourceAddressPrefix>VIRTUAL_NETWORK</SourceAddressPrefix><SourcePortRange>*</SourcePortRange><DestinationAddressPrefix>VIRTUAL_NETWORK</DestinationAddressPrefix><DestinationPortRange>*</DestinationPortRange><Protocol>*</Protocol><State>Active</State><IsDefault>true</IsDefault></Rule><Rule><Name>ALLOW AZURE LOAD BALANCER INBOUND</Name><Type>Inbound</Type><Priority>65001</Priority><Action>Allow</Action><SourceAddressPrefix>AZURE_LOADBALANCER</SourceAddressPrefix><SourcePortRange>*</SourcePortRange><DestinationAddressPrefix>*</DestinationAddressPrefix><DestinationPortRange>*</DestinationPortRange><Protocol>*</Protocol><State>Active</State><IsDefault>true</IsDefault></Rule><Rule><Name>ALLOW INTERNET OUTBOUND</Name><Type>Outbound</Type><Priority>65001</Priority><Action>Allow</Action><SourceAddressPrefix>*</SourceAddressPrefix><SourcePortRange>*</SourcePortRange><DestinationAddressPrefix>INTERNET</DestinationAddressPrefix><DestinationPortRange>*</DestinationPortRange><Protocol>*</Protocol><State>Active</State><IsDefault>true</IsDefault></Rule><Rule><Name>DENY ALL OUTBOUND</Name><Type>Outbound</Type><Priority>65500</Priority><Action>Deny</Action><SourceAddressPrefix>*</SourceAddressPrefix><SourcePortRange>*</SourcePortRange><DestinationAddressPrefix>*</DestinationAddressPrefix><DestinationPortRange>*</DestinationPortRange><Protocol>*</Protocol><State>Active</State><IsDefault>true</IsDefault></Rule><Rule><Name>DENY ALL INBOUND</Name><Type>Inbound</Type><Priority>65500</Priority><Action>Deny</Action><SourceAddressPrefix>*</SourceAddressPrefix><SourcePortRange>*</SourcePortRange><DestinationAddressPrefix>*</DestinationAddressPrefix><DestinationPortRange>*</DestinationPortRange><Protocol>*</Protocol><State>Active</State><IsDefault>true</IsDefault></Rule></Rules></NetworkSecurityGroup>", { 'cache-control': 'no-cache',
  'content-length': '2489',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.240 (rd_rdfe_stable.150608-1900) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'usnorth2',
  'x-ms-request-id': '5117bc5a7298bc83873dd7563f447f4b',
  date: 'Fri, 12 Jun 2015 12:48:25 GMT',
  connection: 'close' });
 return result; }]];