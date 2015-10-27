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

var should = require('should');
var util = require('util');
var testUtils = require('../util/util');
var CLITest = require('../framework/cli-test');
var networkTestUtil = require('../util/asmNetworkTestUtil');
var testprefix = 'cli.network.application.gateway.config-tests.js';

var location, appGatePrefix = 'CliTestAppGate',
    vnetPrefix = 'CliTestVnet',
    subnetPrefix = 'CliTestSubnet',
	importPath = 'test/data/appgatewayconfig.json',
	exportPath = 'test/data/appgatewayexport.json',
    backAddPool = '10.0.0.10',
	backAddPoolName = 'clitestaddpool';
var instanceCount = '3',
    instanceCountNew = '4',
    gatewaySize = 'Medium',
    gatewaySizeNew = 'Small',
    description = 'Testing App Gateway';
var httpSettingName = 'httpSetting',
	protocol = 'Http',
	port = '80',
	cookieBasedAffinity = 'Disabled';
var frontIpName = 'fipConfig',
	oldFip = 'fip1',
	type = 'Private',
	staticIp = '10.0.0.10',
	frontEndPortName = 'frontEndPort';
var httpListenerName = 'httpListener',
	LBRuleName = 'LBRule',
	LBType = 'Basic';
var requiredEnvironment = [{
    name: 'AZURE_VM_TEST_LOCATION',
    defaultValue: 'West US'
}];


describe('cli', function() {
    describe('network', function() {
        var suite, retry = 5;
        var networkUtil = new networkTestUtil();

        before(function(done) {
            suite = new CLITest(this, testprefix, requiredEnvironment);
            suite.setupSuite(function() {
                vnetPrefix = suite.isMocked ? vnetPrefix : suite.generateId(vnetPrefix, null);
                subnetPrefix = suite.isMocked ? subnetPrefix : suite.generateId(subnetPrefix, null);
                appGatePrefix = suite.isMocked ? appGatePrefix : suite.generateId(appGatePrefix, null);
				backAddPoolName = suite.isMocked ? backAddPoolName : suite.generateId(backAddPoolName, null);
				httpSettingName = suite.isMocked ? httpSettingName : suite.generateId(httpSettingName, null);
				frontIpName = suite.isMocked ? frontIpName : suite.generateId(frontIpName, null);
				frontEndPortName = suite.isMocked ? frontEndPortName : suite.generateId(frontEndPortName, null);
				httpListenerName = suite.isMocked ? httpListenerName : suite.generateId(httpListenerName, null);
				LBRuleName = suite.isMocked ? LBRuleName : suite.generateId(LBRuleName, null);
                location = process.env.AZURE_VM_TEST_LOCATION;
                done();
            });
        });
        after(function(done) {
			networkUtil.deleteVnet(vnetPrefix, suite, function() {
				networkUtil.deleteGateway(appGatePrefix, suite, function() {
					suite.teardownSuite(done);
				});
			});
        });
        beforeEach(function(done) {
            suite.setupTest(done);
        });
        afterEach(function(done) {
            suite.teardownTest(done);
        });

        describe('application-gateway', function() {

            it('config import should pass', function(done) {
                networkUtil.createEmptySubVnet(vnetPrefix, subnetPrefix, location, suite, function() {
					networkUtil.createGateway(appGatePrefix, vnetPrefix, subnetPrefix, instanceCount, gatewaySize, description, suite, function () {
						var cmd = util.format('network application-gateway config import %s -t %s --json',
							appGatePrefix, importPath).split(' ');
						testUtils.executeCommand(suite, retry, cmd, function(result) {
							result.exitStatus.should.equal(0);
							done();
						});
					});
                });
            });
			it('config show should pass', function(done) {
				var cmd = util.format('network application-gateway config show %s --json', appGatePrefix).split(' ');
				testUtils.executeCommand(suite, retry, cmd, function(result) {
					result.exitStatus.should.equal(0);
					done();
				});
            });
			// Functionality not implemented, Issue No 242
			// it('start should start an application-gateway', function (done) {
				// var cmd = util.format('network application-gateway start -n %s --json', appGatePrefix).split(' ');
					// testUtils.executeCommand(suite, retry, cmd, function (result) {
					// result.exitStatus.should.equal(0);
					// done();
				// });
            // });
            // it('stop should stop an application-gateway', function(done) {
                // var cmd = util.format('network application-gateway stop -n %s --json', appGatePrefix).split(' ');
                // testUtils.executeCommand(suite, retry, cmd, function(result) {
                    // result.exitStatus.should.equal(0);
                    // done();
                // });
            // });
			it('address-pool add should pass', function(done) {
				var cmd = util.format('network application-gateway address-pool add -w %s -n %s -r %s --json',
					appGatePrefix, backAddPoolName, backAddPool).split(' ');
				testUtils.executeCommand(suite, retry, cmd, function(result) {
					result.exitStatus.should.equal(0);
					done();
				});
            });
            it('http-settings add should pass', function(done) {
                var cmd = util.format('network application-gateway http-settings add %s %s -p %s -o %s -c %s --json',
                    appGatePrefix, httpSettingName, protocol, port, cookieBasedAffinity).split(' ');
                testUtils.executeCommand(suite, retry, cmd, function(result) {
                    result.exitStatus.should.equal(0);
                    done();
                });
            });
			// Functionality not yet implemented, Issue No. 293
			// it('frontend-ip remove should pass', function(done) {
                // var cmd = util.format('network application-gateway frontend-ip remove %s %s --quiet --json',
                    // appGatePrefix, oldFip).split(' ');
                // testUtils.executeCommand(suite, retry, cmd, function(result) {
                    // result.exitStatus.should.equal(0);
                    // done();
                // });
            // });
            it('frontend-ip add should pass', function(done) {
                var cmd = util.format('network application-gateway frontend-ip add %s %s -t %s -i %s --json',
                    appGatePrefix, frontIpName, type, staticIp).split(' ');
                testUtils.executeCommand(suite, retry, cmd, function(result) {
                    result.exitStatus.should.equal(0);
                    done();
                });
            });
			it('frontend-port add should pass', function(done) {
                var cmd = util.format('network application-gateway frontend-port add %s %s -o %s --json',
                    appGatePrefix, frontEndPortName, port).split(' ');
                testUtils.executeCommand(suite, retry, cmd, function(result) {
                    result.exitStatus.should.equal(0);
                    done();
                });
            });
			it('http-listener add should pass', function(done) {
                var cmd = util.format('network application-gateway http-listener add %s %s -i %s -p %s -t %s --json',
                    appGatePrefix, httpListenerName, frontIpName, frontEndPortName, protocol).split(' ');
                testUtils.executeCommand(suite, retry, cmd, function(result) {
                    result.exitStatus.should.equal(0);
                    done();
                });
            });
			it('lb-rule add should pass', function(done) {
                var cmd = util.format('network application-gateway lb-rule add %s %s -i %s -l %s -p %s -t %s --json',
                    appGatePrefix, LBRuleName, httpSettingName, httpListenerName, backAddPoolName, LBType).split(' ');
                testUtils.executeCommand(suite, retry, cmd, function(result) {
                    result.exitStatus.should.equal(0);
                    done();
                });
            });
			it('config export should pass', function(done) {
                var cmd = util.format('network application-gateway config export %s -t %s --json',
                    appGatePrefix, exportPath).split(' ');
                testUtils.executeCommand(suite, retry, cmd, function(result) {
                    result.exitStatus.should.equal(0);
                    done();
                });
            });
			it('lb-rule remove should pass', function(done) {
                var cmd = util.format('network application-gateway lb-rule remove %s %s --quiet --json',
                    appGatePrefix, LBRuleName).split(' ');
                testUtils.executeCommand(suite, retry, cmd, function(result) {
                    result.exitStatus.should.equal(0);
                    done();
                });
            });
			it('http-listener remove should pass', function(done) {
                var cmd = util.format('network application-gateway http-listener remove %s %s --quiet --json',
                    appGatePrefix, httpListenerName).split(' ');
                testUtils.executeCommand(suite, retry, cmd, function(result) {
                    result.exitStatus.should.equal(0);
                    done();
                });
            });
			it('frontend-port remove should pass', function(done) {
                var cmd = util.format('network application-gateway frontend-port remove %s %s --quiet --json',
                    appGatePrefix, frontEndPortName).split(' ');
                testUtils.executeCommand(suite, retry, cmd, function(result) {
                    result.exitStatus.should.equal(0);
                    done();
                });
            });
			it('http-settings remove should pass', function(done) {
                var cmd = util.format('network application-gateway http-settings remove %s %s --quiet --json',
                    appGatePrefix, httpSettingName).split(' ');
                testUtils.executeCommand(suite, retry, cmd, function(result) {
                    result.exitStatus.should.equal(0);
                    done();
                });
            });
			it('address-pool remove should pass', function(done) {
                var cmd = util.format('network application-gateway address-pool remove %s %s --quiet --json',
                    appGatePrefix, backAddPoolName).split(' ');
                testUtils.executeCommand(suite, retry, cmd, function(result) {
                    result.exitStatus.should.equal(0);
                    done();
                });
            });
            
        });

    });
});