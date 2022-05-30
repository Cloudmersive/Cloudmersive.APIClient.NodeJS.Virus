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
    instance = new CloudmersiveVirusApiClient.AdditionalAdvancedScanInformation();
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

  describe('AdditionalAdvancedScanInformation', function() {
    it('should create an instance of AdditionalAdvancedScanInformation', function() {
      // uncomment below and update the code to test AdditionalAdvancedScanInformation
      //var instane = new CloudmersiveVirusApiClient.AdditionalAdvancedScanInformation();
      //expect(instance).to.be.a(CloudmersiveVirusApiClient.AdditionalAdvancedScanInformation);
    });

    it('should have the property containsJSON (base name: "ContainsJSON")', function() {
      // uncomment below and update the code to test the property containsJSON
      //var instane = new CloudmersiveVirusApiClient.AdditionalAdvancedScanInformation();
      //expect(instance).to.be();
    });

    it('should have the property containsXML (base name: "ContainsXML")', function() {
      // uncomment below and update the code to test the property containsXML
      //var instane = new CloudmersiveVirusApiClient.AdditionalAdvancedScanInformation();
      //expect(instance).to.be();
    });

    it('should have the property containsImage (base name: "ContainsImage")', function() {
      // uncomment below and update the code to test the property containsImage
      //var instane = new CloudmersiveVirusApiClient.AdditionalAdvancedScanInformation();
      //expect(instance).to.be();
    });

  });

}));
