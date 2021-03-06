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
    instance = new CloudmersiveVirusApiClient.ScanApi();
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

  describe('ScanApi', function() {
    describe('scanFile', function() {
      it('should call scanFile successfully', function(done) {
        //uncomment below and update the code to test scanFile
        //instance.scanFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('scanFileAdvanced', function() {
      it('should call scanFileAdvanced successfully', function(done) {
        //uncomment below and update the code to test scanFileAdvanced
        //instance.scanFileAdvanced(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('scanWebsite', function() {
      it('should call scanWebsite successfully', function(done) {
        //uncomment below and update the code to test scanWebsite
        //instance.scanWebsite(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
