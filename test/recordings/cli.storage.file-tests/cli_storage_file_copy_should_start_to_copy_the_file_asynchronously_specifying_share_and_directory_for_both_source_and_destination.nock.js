// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'ce4a7590-4722-4bcf-a2c6-e473e9f11778',
    name: 'Azure Storage DM Test',
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
  process.env['AZURE_STORAGE_CONNECTION_STRING'] = 'DefaultEndpointsProtocol=https;AccountName=xplat;AccountKey=null';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplat.file.core.windows.net:443')
  .get('/testfilecopysourceshare?restype=share&comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers />", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  'last-modified': 'Tue, 14 Feb 2017 06:24:54 GMT',
  etag: '"0x8D454A2308DDCD6"',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '43c8b1d5-001a-002b-4d8b-86e2bf000000',
  'x-ms-version': '2016-05-31',
  date: 'Tue, 14 Feb 2017 06:25:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.file.core.windows.net:443')
  .get('/testfilecopysourceshare?restype=share&comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers />", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  'last-modified': 'Tue, 14 Feb 2017 06:24:54 GMT',
  etag: '"0x8D454A2308DDCD6"',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '43c8b1d5-001a-002b-4d8b-86e2bf000000',
  'x-ms-version': '2016-05-31',
  date: 'Tue, 14 Feb 2017 06:25:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.file.core.windows.net:443')
  .put('/testfilecopydestshare/testfilecopydestdir/toCopy')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Tue, 14 Feb 2017 06:25:02 GMT',
  etag: '"0x8D454A2357D8B97"',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'dd375a27-001a-0001-458b-8697fa000000',
  'x-ms-version': '2016-05-31',
  'x-ms-copy-id': 'bdf81c1b-a85a-4280-8784-06dc666a168b',
  'x-ms-copy-status': 'success',
  date: 'Tue, 14 Feb 2017 06:25:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.file.core.windows.net:443')
  .put('/testfilecopydestshare/testfilecopydestdir/toCopy')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Tue, 14 Feb 2017 06:25:02 GMT',
  etag: '"0x8D454A2357D8B97"',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'dd375a27-001a-0001-458b-8697fa000000',
  'x-ms-version': '2016-05-31',
  'x-ms-copy-id': 'bdf81c1b-a85a-4280-8784-06dc666a168b',
  'x-ms-copy-status': 'success',
  date: 'Tue, 14 Feb 2017 06:25:02 GMT',
  connection: 'close' });
 return result; }]];