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
  .get('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/networking/networksecuritygroups/CliTestNsg8453?detaillevel=Full')
  .reply(200, "<NetworkSecurityGroup xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Name>CliTestNsg8453</Name><Location>West US</Location><Rules><Rule><Name>ALLOW VNET OUTBOUND</Name><Type>Outbound</Type><Priority>65000</Priority><Action>Allow</Action><SourceAddressPrefix>VIRTUAL_NETWORK</SourceAddressPrefix><SourcePortRange>*</SourcePortRange><DestinationAddressPrefix>VIRTUAL_NETWORK</DestinationAddressPrefix><DestinationPortRange>*</DestinationPortRange><Protocol>*</Protocol><State>Active</State><IsDefault>true</IsDefault></Rule><Rule><Name>ALLOW VNET INBOUND</Name><Type>Inbound</Type><Priority>65000</Priority><Action>Allow</Action><SourceAddressPrefix>VIRTUAL_NETWORK</SourceAddressPrefix><SourcePortRange>*</SourcePortRange><DestinationAddressPrefix>VIRTUAL_NETWORK</DestinationAddressPrefix><DestinationPortRange>*</DestinationPortRange><Protocol>*</Protocol><State>Active</State><IsDefault>true</IsDefault></Rule><Rule><Name>ALLOW AZURE LOAD BALANCER INBOUND</Name><Type>Inbound</Type><Priority>65001</Priority><Action>Allow</Action><SourceAddressPrefix>AZURE_LOADBALANCER</SourceAddressPrefix><SourcePortRange>*</SourcePortRange><DestinationAddressPrefix>*</DestinationAddressPrefix><DestinationPortRange>*</DestinationPortRange><Protocol>*</Protocol><State>Active</State><IsDefault>true</IsDefault></Rule><Rule><Name>ALLOW INTERNET OUTBOUND</Name><Type>Outbound</Type><Priority>65001</Priority><Action>Allow</Action><SourceAddressPrefix>*</SourceAddressPrefix><SourcePortRange>*</SourcePortRange><DestinationAddressPrefix>INTERNET</DestinationAddressPrefix><DestinationPortRange>*</DestinationPortRange><Protocol>*</Protocol><State>Active</State><IsDefault>true</IsDefault></Rule><Rule><Name>DENY ALL OUTBOUND</Name><Type>Outbound</Type><Priority>65500</Priority><Action>Deny</Action><SourceAddressPrefix>*</SourceAddressPrefix><SourcePortRange>*</SourcePortRange><DestinationAddressPrefix>*</DestinationAddressPrefix><DestinationPortRange>*</DestinationPortRange><Protocol>*</Protocol><State>Active</State><IsDefault>true</IsDefault></Rule><Rule><Name>DENY ALL INBOUND</Name><Type>Inbound</Type><Priority>65500</Priority><Action>Deny</Action><SourceAddressPrefix>*</SourceAddressPrefix><SourcePortRange>*</SourcePortRange><DestinationAddressPrefix>*</DestinationAddressPrefix><DestinationPortRange>*</DestinationPortRange><Protocol>*</Protocol><State>Active</State><IsDefault>true</IsDefault></Rule></Rules></NetworkSecurityGroup>", { 'cache-control': 'no-cache',
  'content-length': '2488',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.243 (rd_rdfe_stable.150618-1025) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'usnorth2',
  'x-ms-request-id': '22476ecc8389bfed80a1ce54a1a9f351',
  date: 'Thu, 25 Jun 2015 13:28:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/networking/networksecuritygroups/CliTestNsg8453?detaillevel=Full')
  .reply(200, "<NetworkSecurityGroup xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Name>CliTestNsg8453</Name><Location>West US</Location><Rules><Rule><Name>ALLOW VNET OUTBOUND</Name><Type>Outbound</Type><Priority>65000</Priority><Action>Allow</Action><SourceAddressPrefix>VIRTUAL_NETWORK</SourceAddressPrefix><SourcePortRange>*</SourcePortRange><DestinationAddressPrefix>VIRTUAL_NETWORK</DestinationAddressPrefix><DestinationPortRange>*</DestinationPortRange><Protocol>*</Protocol><State>Active</State><IsDefault>true</IsDefault></Rule><Rule><Name>ALLOW VNET INBOUND</Name><Type>Inbound</Type><Priority>65000</Priority><Action>Allow</Action><SourceAddressPrefix>VIRTUAL_NETWORK</SourceAddressPrefix><SourcePortRange>*</SourcePortRange><DestinationAddressPrefix>VIRTUAL_NETWORK</DestinationAddressPrefix><DestinationPortRange>*</DestinationPortRange><Protocol>*</Protocol><State>Active</State><IsDefault>true</IsDefault></Rule><Rule><Name>ALLOW AZURE LOAD BALANCER INBOUND</Name><Type>Inbound</Type><Priority>65001</Priority><Action>Allow</Action><SourceAddressPrefix>AZURE_LOADBALANCER</SourceAddressPrefix><SourcePortRange>*</SourcePortRange><DestinationAddressPrefix>*</DestinationAddressPrefix><DestinationPortRange>*</DestinationPortRange><Protocol>*</Protocol><State>Active</State><IsDefault>true</IsDefault></Rule><Rule><Name>ALLOW INTERNET OUTBOUND</Name><Type>Outbound</Type><Priority>65001</Priority><Action>Allow</Action><SourceAddressPrefix>*</SourceAddressPrefix><SourcePortRange>*</SourcePortRange><DestinationAddressPrefix>INTERNET</DestinationAddressPrefix><DestinationPortRange>*</DestinationPortRange><Protocol>*</Protocol><State>Active</State><IsDefault>true</IsDefault></Rule><Rule><Name>DENY ALL OUTBOUND</Name><Type>Outbound</Type><Priority>65500</Priority><Action>Deny</Action><SourceAddressPrefix>*</SourceAddressPrefix><SourcePortRange>*</SourcePortRange><DestinationAddressPrefix>*</DestinationAddressPrefix><DestinationPortRange>*</DestinationPortRange><Protocol>*</Protocol><State>Active</State><IsDefault>true</IsDefault></Rule><Rule><Name>DENY ALL INBOUND</Name><Type>Inbound</Type><Priority>65500</Priority><Action>Deny</Action><SourceAddressPrefix>*</SourceAddressPrefix><SourcePortRange>*</SourcePortRange><DestinationAddressPrefix>*</DestinationAddressPrefix><DestinationPortRange>*</DestinationPortRange><Protocol>*</Protocol><State>Active</State><IsDefault>true</IsDefault></Rule></Rules></NetworkSecurityGroup>", { 'cache-control': 'no-cache',
  'content-length': '2488',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.243 (rd_rdfe_stable.150618-1025) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'usnorth2',
  'x-ms-request-id': '22476ecc8389bfed80a1ce54a1a9f351',
  date: 'Thu, 25 Jun 2015 13:28:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .get('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/networking/media')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n<NetworkConfiguration xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns=\"http://schemas.microsoft.com/ServiceHosting/2011/07/NetworkConfiguration\">\r\n  <VirtualNetworkConfiguration>\r\n    <Dns />\r\n    <LocalNetworkSites>\r\n      <LocalNetworkSite name=\"CliTestlocNet7759\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.0/19</AddressPrefix>\r\n        </AddressSpace>\r\n        <VPNGatewayAddress>20.20.20.20</VPNGatewayAddress>\r\n      </LocalNetworkSite>\r\n      <LocalNetworkSite name=\"LocalNetwork\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.16.0.45/29</AddressPrefix>\r\n        </AddressSpace>\r\n        <VPNGatewayAddress>191.236.86.5</VPNGatewayAddress>\r\n      </LocalNetworkSite>\r\n      <LocalNetworkSite name=\"vnet1lnet\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.1.0.0/16</AddressPrefix>\r\n        </AddressSpace>\r\n        <VPNGatewayAddress>100.100.100.100</VPNGatewayAddress>\r\n      </LocalNetworkSite>\r\n      <LocalNetworkSite name=\"vnet2lnet\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.2.0.0/16</AddressPrefix>\r\n        </AddressSpace>\r\n        <VPNGatewayAddress>200.200.200.200</VPNGatewayAddress>\r\n      </LocalNetworkSite>\r\n      <LocalNetworkSite name=\"Vpn\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.16.0.0/27</AddressPrefix>\r\n        </AddressSpace>\r\n        <VPNGatewayAddress>10.32.0.0</VPNGatewayAddress>\r\n      </LocalNetworkSite>\r\n    </LocalNetworkSites>\r\n    <VirtualNetworkSites>\r\n      <VirtualNetworkSite name=\"CliTestVnett9964\" Location=\"West US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.0/20</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.0.0.0/23</AddressPrefix>\r\n          </Subnet>\r\n          <Subnet name=\"CliTestSubnett6314\">\r\n            <AddressPrefix>10.0.4.0/23</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"Group armresgrpeastustest1 TestArmVMList\" Location=\"West US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.0/16</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.0.0.0/24</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"mynetwork\" AffinityGroup=\"affinity1\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.4.0.0/16</AddressPrefix>\r\n          <AddressPrefix>10.1.0.0/16</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.4.2.0/19</AddressPrefix>\r\n          </Subnet>\r\n          <Subnet name=\"GatewaySubnet\">\r\n            <AddressPrefix>10.4.32.0/29</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"ne@@wvnet$$%10\" AffinityGroup=\"NewAffinityGroup01\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.8.7/24</AddressPrefix>\r\n        </AddressSpace>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"newvnet$$%10\" AffinityGroup=\"NewAffinityGroup01\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.8.7/24</AddressPrefix>\r\n        </AddressSpace>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"testy\" AffinityGroup=\"affinity1\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.11/8</AddressPrefix>\r\n          <AddressPrefix>172.16.77.0/12</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.0.0.0/11</AddressPrefix>\r\n          </Subnet>\r\n          <Subnet name=\"GatewaySubnet\">\r\n            <AddressPrefix>10.32.0.0/29</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"Vnet\" AffinityGroup=\"EastAsia\">\r\n        <AddressSpace>\r\n          <AddressPrefix>172.16.0.0/28</AddressPrefix>\r\n          <AddressPrefix>192.168.29.0/24</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>172.16.0.0/29</AddressPrefix>\r\n          </Subnet>\r\n          <Subnet name=\"GatewaySubnet\">\r\n            <AddressPrefix>172.16.0.8/29</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"vnet1\" AffinityGroup=\"AG-CLI-2ad0a8d6c97f0a8f\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.0/8</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.0.0.0/11</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"vnet2\" Location=\"West US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.2.0.0/16</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"subnet-1\">\r\n            <AddressPrefix>10.2.0.0/19</AddressPrefix>\r\n          </Subnet>\r\n          <Subnet name=\"Subnet-2\">\r\n            <AddressPrefix>10.2.32.8/29</AddressPrefix>\r\n          </Subnet>\r\n          <Subnet name=\"GatewaySubnet\">\r\n            <AddressPrefix>10.2.32.0/29</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"Vnet28\" Location=\"West US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.16.0.32/27</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.16.0.32/29</AddressPrefix>\r\n          </Subnet>\r\n          <Subnet name=\"GatewaySubnet\">\r\n            <AddressPrefix>10.16.0.40/29</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n    </VirtualNetworkSites>\r\n  </VirtualNetworkConfiguration>\r\n</NetworkConfiguration>", { 'cache-control': 'no-cache',
  'content-length': '5921',
  'content-type': 'text/plain',
  server: '1.0.6198.243 (rd_rdfe_stable.150618-1025) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'usnorth2',
  'x-ms-request-id': '6d3d7b0f2547bc9ab674afb38a05105f',
  date: 'Thu, 25 Jun 2015 13:28:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/networking/media')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n<NetworkConfiguration xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns=\"http://schemas.microsoft.com/ServiceHosting/2011/07/NetworkConfiguration\">\r\n  <VirtualNetworkConfiguration>\r\n    <Dns />\r\n    <LocalNetworkSites>\r\n      <LocalNetworkSite name=\"CliTestlocNet7759\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.0/19</AddressPrefix>\r\n        </AddressSpace>\r\n        <VPNGatewayAddress>20.20.20.20</VPNGatewayAddress>\r\n      </LocalNetworkSite>\r\n      <LocalNetworkSite name=\"LocalNetwork\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.16.0.45/29</AddressPrefix>\r\n        </AddressSpace>\r\n        <VPNGatewayAddress>191.236.86.5</VPNGatewayAddress>\r\n      </LocalNetworkSite>\r\n      <LocalNetworkSite name=\"vnet1lnet\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.1.0.0/16</AddressPrefix>\r\n        </AddressSpace>\r\n        <VPNGatewayAddress>100.100.100.100</VPNGatewayAddress>\r\n      </LocalNetworkSite>\r\n      <LocalNetworkSite name=\"vnet2lnet\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.2.0.0/16</AddressPrefix>\r\n        </AddressSpace>\r\n        <VPNGatewayAddress>200.200.200.200</VPNGatewayAddress>\r\n      </LocalNetworkSite>\r\n      <LocalNetworkSite name=\"Vpn\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.16.0.0/27</AddressPrefix>\r\n        </AddressSpace>\r\n        <VPNGatewayAddress>10.32.0.0</VPNGatewayAddress>\r\n      </LocalNetworkSite>\r\n    </LocalNetworkSites>\r\n    <VirtualNetworkSites>\r\n      <VirtualNetworkSite name=\"CliTestVnett9964\" Location=\"West US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.0/20</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.0.0.0/23</AddressPrefix>\r\n          </Subnet>\r\n          <Subnet name=\"CliTestSubnett6314\">\r\n            <AddressPrefix>10.0.4.0/23</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"Group armresgrpeastustest1 TestArmVMList\" Location=\"West US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.0/16</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.0.0.0/24</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"mynetwork\" AffinityGroup=\"affinity1\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.4.0.0/16</AddressPrefix>\r\n          <AddressPrefix>10.1.0.0/16</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.4.2.0/19</AddressPrefix>\r\n          </Subnet>\r\n          <Subnet name=\"GatewaySubnet\">\r\n            <AddressPrefix>10.4.32.0/29</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"ne@@wvnet$$%10\" AffinityGroup=\"NewAffinityGroup01\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.8.7/24</AddressPrefix>\r\n        </AddressSpace>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"newvnet$$%10\" AffinityGroup=\"NewAffinityGroup01\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.8.7/24</AddressPrefix>\r\n        </AddressSpace>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"testy\" AffinityGroup=\"affinity1\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.11/8</AddressPrefix>\r\n          <AddressPrefix>172.16.77.0/12</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.0.0.0/11</AddressPrefix>\r\n          </Subnet>\r\n          <Subnet name=\"GatewaySubnet\">\r\n            <AddressPrefix>10.32.0.0/29</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"Vnet\" AffinityGroup=\"EastAsia\">\r\n        <AddressSpace>\r\n          <AddressPrefix>172.16.0.0/28</AddressPrefix>\r\n          <AddressPrefix>192.168.29.0/24</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>172.16.0.0/29</AddressPrefix>\r\n          </Subnet>\r\n          <Subnet name=\"GatewaySubnet\">\r\n            <AddressPrefix>172.16.0.8/29</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"vnet1\" AffinityGroup=\"AG-CLI-2ad0a8d6c97f0a8f\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.0.0.0/8</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.0.0.0/11</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"vnet2\" Location=\"West US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.2.0.0/16</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"subnet-1\">\r\n            <AddressPrefix>10.2.0.0/19</AddressPrefix>\r\n          </Subnet>\r\n          <Subnet name=\"Subnet-2\">\r\n            <AddressPrefix>10.2.32.8/29</AddressPrefix>\r\n          </Subnet>\r\n          <Subnet name=\"GatewaySubnet\">\r\n            <AddressPrefix>10.2.32.0/29</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n      <VirtualNetworkSite name=\"Vnet28\" Location=\"West US\">\r\n        <AddressSpace>\r\n          <AddressPrefix>10.16.0.32/27</AddressPrefix>\r\n        </AddressSpace>\r\n        <Subnets>\r\n          <Subnet name=\"Subnet-1\">\r\n            <AddressPrefix>10.16.0.32/29</AddressPrefix>\r\n          </Subnet>\r\n          <Subnet name=\"GatewaySubnet\">\r\n            <AddressPrefix>10.16.0.40/29</AddressPrefix>\r\n          </Subnet>\r\n        </Subnets>\r\n      </VirtualNetworkSite>\r\n    </VirtualNetworkSites>\r\n  </VirtualNetworkConfiguration>\r\n</NetworkConfiguration>", { 'cache-control': 'no-cache',
  'content-length': '5921',
  'content-type': 'text/plain',
  server: '1.0.6198.243 (rd_rdfe_stable.150618-1025) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'usnorth2',
  'x-ms-request-id': '6d3d7b0f2547bc9ab674afb38a05105f',
  date: 'Thu, 25 Jun 2015 13:28:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .delete('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/networking/virtualnetwork/CliTestVnett9964/subnets/CliTestSubnett6314/networksecuritygroups/CliTestNsg8453')
  .reply(202, "", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  server: '1.0.6198.243 (rd_rdfe_stable.150618-1025) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'usnorth2',
  'x-ms-request-id': 'ff81cbda16e5b200b30ea8ee6b7faefa',
  date: 'Thu, 25 Jun 2015 13:28:25 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .delete('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/networking/virtualnetwork/CliTestVnett9964/subnets/CliTestSubnett6314/networksecuritygroups/CliTestNsg8453')
  .reply(202, "", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  server: '1.0.6198.243 (rd_rdfe_stable.150618-1025) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'usnorth2',
  'x-ms-request-id': 'ff81cbda16e5b200b30ea8ee6b7faefa',
  date: 'Thu, 25 Jun 2015 13:28:25 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .get('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/operations/ff81cbda16e5b200b30ea8ee6b7faefa')
  .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>ff81cbda-16e5-b200-b30e-a8ee6b7faefa</ID><Status>Succeeded</Status><HttpStatusCode>200</HttpStatusCode></Operation>", { 'cache-control': 'no-cache',
  'content-length': '232',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.243 (rd_rdfe_stable.150618-1025) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'usnorth2',
  'x-ms-request-id': 'f37cedd89634b9b48f3b402c63dceb01',
  date: 'Thu, 25 Jun 2015 13:28:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/operations/ff81cbda16e5b200b30ea8ee6b7faefa')
  .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>ff81cbda-16e5-b200-b30e-a8ee6b7faefa</ID><Status>Succeeded</Status><HttpStatusCode>200</HttpStatusCode></Operation>", { 'cache-control': 'no-cache',
  'content-length': '232',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.243 (rd_rdfe_stable.150618-1025) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'usnorth2',
  'x-ms-request-id': 'f37cedd89634b9b48f3b402c63dceb01',
  date: 'Thu, 25 Jun 2015 13:28:57 GMT',
  connection: 'close' });
 return result; }]];