/**
 * virusapi
 * The Cloudmersive Virus Scan API lets you scan files and content for viruses and identify security issues with content.
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CloudmersiveVirusApiClient);
  }
}(this, function(expect, CloudmersiveVirusApiClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CloudmersiveVirusApiClient.WebsiteScanResult();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('WebsiteScanResult', function() {
    it('should create an instance of WebsiteScanResult', function() {
      // uncomment below and update the code to test WebsiteScanResult
      //var instane = new CloudmersiveVirusApiClient.WebsiteScanResult();
      //expect(instance).to.be.a(CloudmersiveVirusApiClient.WebsiteScanResult);
    });

    it('should have the property cleanResult (base name: "CleanResult")', function() {
      // uncomment below and update the code to test the property cleanResult
      //var instane = new CloudmersiveVirusApiClient.WebsiteScanResult();
      //expect(instance).to.be();
    });

    it('should have the property websiteThreatType (base name: "WebsiteThreatType")', function() {
      // uncomment below and update the code to test the property websiteThreatType
      //var instane = new CloudmersiveVirusApiClient.WebsiteScanResult();
      //expect(instance).to.be();
    });

  });

}));