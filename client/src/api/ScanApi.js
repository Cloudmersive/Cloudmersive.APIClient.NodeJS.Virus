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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/VirusScanAdvancedResult', 'model/VirusScanResult', 'model/WebsiteScanRequest', 'model/WebsiteScanResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/VirusScanAdvancedResult'), require('../model/VirusScanResult'), require('../model/WebsiteScanRequest'), require('../model/WebsiteScanResult'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveVirusApiClient) {
      root.CloudmersiveVirusApiClient = {};
    }
    root.CloudmersiveVirusApiClient.ScanApi = factory(root.CloudmersiveVirusApiClient.ApiClient, root.CloudmersiveVirusApiClient.VirusScanAdvancedResult, root.CloudmersiveVirusApiClient.VirusScanResult, root.CloudmersiveVirusApiClient.WebsiteScanRequest, root.CloudmersiveVirusApiClient.WebsiteScanResult);
  }
}(this, function(ApiClient, VirusScanAdvancedResult, VirusScanResult, WebsiteScanRequest, WebsiteScanResult) {
  'use strict';

  /**
   * Scan service.
   * @module api/ScanApi
   * @version 1.2.4
   */

  /**
   * Constructs a new ScanApi. 
   * @alias module:api/ScanApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the scanFile operation.
     * @callback module:api/ScanApi~scanFileCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VirusScanResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Scan a file for viruses
     * Scan files and content for viruses. Leverage continuously updated signatures for millions of threats, and advanced high-performance scanning capabilities.  Over 17 million virus and malware signatures.  Continuous cloud-based updates.  Wide file format support including Office, PDF, HTML, Flash.  Zip support including .Zip, .Rar, .DMG, .Tar, and other archive formats.  Multi-threat scanning across viruses, malware, trojans, ransomware, and spyware.  High-speed in-memory scanning delivers subsecond typical response time.
     * @param {File} inputFile Input file to perform the operation on.
     * @param {module:api/ScanApi~scanFileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VirusScanResult}
     */
    this.scanFile = function(inputFile, callback) {
      var postBody = null;

      // verify the required parameter 'inputFile' is set
      if (inputFile === undefined || inputFile === null) {
        throw new Error("Missing the required parameter 'inputFile' when calling scanFile");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'inputFile': inputFile
      };

      var authNames = ['Apikey'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = VirusScanResult;

      return this.apiClient.callApi(
        '/virus/scan/file', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the scanFileAdvanced operation.
     * @callback module:api/ScanApi~scanFileAdvancedCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VirusScanAdvancedResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Advanced Scan a file for viruses
     * Advanced Scan files with 360-degree Content Protection across Viruses and Malware, executables, invalid files, scripts, and even restrictions on accepted file types with complete content verification. Customize threat rules to your needs. Leverage continuously updated signatures for millions of threats, and advanced high-performance scanning capabilities.  Over 17 million virus and malware signatures.  Continuous cloud-based updates.  Block threats beyond viruses including executables, scripts, invalid files, and more.  Optionally limit input files to a specific set of file types (e.g. PDF and Word Documents only).  Wide file format support including Office, PDF, HTML, Flash.  Zip support including .Zip, .Rar, .DMG, .Tar, and other archive formats.  Multi-threat scanning across viruses, malware, trojans, ransomware, and spyware.  High-speed in-memory scanning delivers subsecond typical response time.
     * @param {File} inputFile Input file to perform the operation on.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.allowExecutables Set to false to block executable files (program code) from being allowed in the input file.  Default is false (recommended).
     * @param {Boolean} opts.allowInvalidFiles Set to false to block invalid files, such as a PDF file that is not really a valid PDF file, or a Word Document that is not a valid Word Document.  Default is false (recommended).
     * @param {Boolean} opts.allowScripts Set to false to block script files, such as a PHP files, Python scripts, and other malicious content or security threats that can be embedded in the file.  Set to true to allow these file types.  Default is false (recommended).
     * @param {Boolean} opts.allowPasswordProtectedFiles Set to false to block password protected and encrypted files, such as encrypted zip and rar files, and other files that seek to circumvent scanning through passwords.  Set to true to allow these file types.  Default is false (recommended).
     * @param {Boolean} opts.allowMacros Set to false to block macros and other threats embedded in document files, such as Word, Excel and PowerPoint embedded Macros, and other files that contain embedded content threats.  Set to true to allow these file types.  Default is false (recommended).
     * @param {Boolean} opts.allowXmlExternalEntities Set to false to block XML External Entities and other threats embedded in XML files, and other files that contain embedded content threats.  Set to true to allow these file types.  Default is false (recommended).
     * @param {String} opts.restrictFileTypes Specify a restricted set of file formats to allow as clean as a comma-separated list of file formats, such as .pdf,.docx,.png would allow only PDF, PNG and Word document files.  All files must pass content verification against this list of file formats, if they do not, then the result will be returned as CleanResult&#x3D;false.  Set restrictFileTypes parameter to null or empty string to disable; default is disabled.
     * @param {module:api/ScanApi~scanFileAdvancedCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VirusScanAdvancedResult}
     */
    this.scanFileAdvanced = function(inputFile, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'inputFile' is set
      if (inputFile === undefined || inputFile === null) {
        throw new Error("Missing the required parameter 'inputFile' when calling scanFileAdvanced");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'allowExecutables': opts['allowExecutables'],
        'allowInvalidFiles': opts['allowInvalidFiles'],
        'allowScripts': opts['allowScripts'],
        'allowPasswordProtectedFiles': opts['allowPasswordProtectedFiles'],
        'allowMacros': opts['allowMacros'],
        'allowXmlExternalEntities': opts['allowXmlExternalEntities'],
        'restrictFileTypes': opts['restrictFileTypes']
      };
      var formParams = {
        'inputFile': inputFile
      };

      var authNames = ['Apikey'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = VirusScanAdvancedResult;

      return this.apiClient.callApi(
        '/virus/scan/file/advanced', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the scanWebsite operation.
     * @callback module:api/ScanApi~scanWebsiteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WebsiteScanResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Scan a website for malicious content and threats
     * Operation includes scanning the content of the URL for various types of malicious content and threats, including viruses and threats (including Phishing).
     * @param {module:model/WebsiteScanRequest} input 
     * @param {module:api/ScanApi~scanWebsiteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WebsiteScanResult}
     */
    this.scanWebsite = function(input, callback) {
      var postBody = input;

      // verify the required parameter 'input' is set
      if (input === undefined || input === null) {
        throw new Error("Missing the required parameter 'input' when calling scanWebsite");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Apikey'];
      var contentTypes = ['application/json', 'text/json', 'application/xml', 'text/xml', 'application/x-www-form-urlencoded'];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = WebsiteScanResult;

      return this.apiClient.callApi(
        '/virus/scan/website', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
