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
    define(['ApiClient', 'model/AdditionalAdvancedScanInformation', 'model/CloudStorageVirusFound'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AdditionalAdvancedScanInformation'), require('./CloudStorageVirusFound'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveVirusApiClient) {
      root.CloudmersiveVirusApiClient = {};
    }
    root.CloudmersiveVirusApiClient.CloudStorageAdvancedVirusScanResult = factory(root.CloudmersiveVirusApiClient.ApiClient, root.CloudmersiveVirusApiClient.AdditionalAdvancedScanInformation, root.CloudmersiveVirusApiClient.CloudStorageVirusFound);
  }
}(this, function(ApiClient, AdditionalAdvancedScanInformation, CloudStorageVirusFound) {
  'use strict';




  /**
   * The CloudStorageAdvancedVirusScanResult model module.
   * @module model/CloudStorageAdvancedVirusScanResult
   * @version 1.2.6
   */

  /**
   * Constructs a new <code>CloudStorageAdvancedVirusScanResult</code>.
   * Result of running an advanced virus scan on cloud storage
   * @alias module:model/CloudStorageAdvancedVirusScanResult
   * @class
   */
  var exports = function() {
    var _this = this;














  };

  /**
   * Constructs a <code>CloudStorageAdvancedVirusScanResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CloudStorageAdvancedVirusScanResult} obj Optional instance to populate.
   * @return {module:model/CloudStorageAdvancedVirusScanResult} The populated <code>CloudStorageAdvancedVirusScanResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Successful')) {
        obj['Successful'] = ApiClient.convertToType(data['Successful'], 'Boolean');
      }
      if (data.hasOwnProperty('CleanResult')) {
        obj['CleanResult'] = ApiClient.convertToType(data['CleanResult'], 'Boolean');
      }
      if (data.hasOwnProperty('ContainsExecutable')) {
        obj['ContainsExecutable'] = ApiClient.convertToType(data['ContainsExecutable'], 'Boolean');
      }
      if (data.hasOwnProperty('ContainsInvalidFile')) {
        obj['ContainsInvalidFile'] = ApiClient.convertToType(data['ContainsInvalidFile'], 'Boolean');
      }
      if (data.hasOwnProperty('ContainsScript')) {
        obj['ContainsScript'] = ApiClient.convertToType(data['ContainsScript'], 'Boolean');
      }
      if (data.hasOwnProperty('ContainsPasswordProtectedFile')) {
        obj['ContainsPasswordProtectedFile'] = ApiClient.convertToType(data['ContainsPasswordProtectedFile'], 'Boolean');
      }
      if (data.hasOwnProperty('ContainsRestrictedFileFormat')) {
        obj['ContainsRestrictedFileFormat'] = ApiClient.convertToType(data['ContainsRestrictedFileFormat'], 'Boolean');
      }
      if (data.hasOwnProperty('ContainsMacros')) {
        obj['ContainsMacros'] = ApiClient.convertToType(data['ContainsMacros'], 'Boolean');
      }
      if (data.hasOwnProperty('VerifiedFileFormat')) {
        obj['VerifiedFileFormat'] = ApiClient.convertToType(data['VerifiedFileFormat'], 'String');
      }
      if (data.hasOwnProperty('FoundViruses')) {
        obj['FoundViruses'] = ApiClient.convertToType(data['FoundViruses'], [CloudStorageVirusFound]);
      }
      if (data.hasOwnProperty('ErrorDetailedDescription')) {
        obj['ErrorDetailedDescription'] = ApiClient.convertToType(data['ErrorDetailedDescription'], 'String');
      }
      if (data.hasOwnProperty('FileSize')) {
        obj['FileSize'] = ApiClient.convertToType(data['FileSize'], 'Number');
      }
      if (data.hasOwnProperty('ContentInformation')) {
        obj['ContentInformation'] = AdditionalAdvancedScanInformation.constructFromObject(data['ContentInformation']);
      }
    }
    return obj;
  }

  /**
   * True if the operation of retrieving the file, and scanning it were successfully completed, false if the file could not be downloaded from cloud storage, or if the file could not be scanned.  Note that successful completion does not mean the file is clean; for the output of the virus scanning operation itself, use the CleanResult and FoundViruses parameters.
   * @member {Boolean} Successful
   */
  exports.prototype['Successful'] = undefined;
  /**
   * True if the scan contained no viruses, false otherwise
   * @member {Boolean} CleanResult
   */
  exports.prototype['CleanResult'] = undefined;
  /**
   * True if the scan contained an executable (application code), which can be a significant risk factor
   * @member {Boolean} ContainsExecutable
   */
  exports.prototype['ContainsExecutable'] = undefined;
  /**
   * True if the scan contained an invalid file (such as a PDF that is not a valid PDF, Word Document that is not a valid Word Document, etc.), which can be a significant risk factor
   * @member {Boolean} ContainsInvalidFile
   */
  exports.prototype['ContainsInvalidFile'] = undefined;
  /**
   * True if the scan contained a script (such as a PHP script, Python script, etc.) which can be a significant risk factor
   * @member {Boolean} ContainsScript
   */
  exports.prototype['ContainsScript'] = undefined;
  /**
   * True if the scan contained a password protected or encrypted file, which can be a significant risk factor
   * @member {Boolean} ContainsPasswordProtectedFile
   */
  exports.prototype['ContainsPasswordProtectedFile'] = undefined;
  /**
   * True if the uploaded file is of a type that is not allowed based on the optional restrictFileTypes parameter, false otherwise; if restrictFileTypes is not set, this will always be false
   * @member {Boolean} ContainsRestrictedFileFormat
   */
  exports.prototype['ContainsRestrictedFileFormat'] = undefined;
  /**
   * True if the uploaded file contains embedded Macros of other embedded threats within the document, which can be a significant risk factor
   * @member {Boolean} ContainsMacros
   */
  exports.prototype['ContainsMacros'] = undefined;
  /**
   * For file format verification-supported file formats, the contents-verified file format of the file.  Null indicates that the file format is not supported for contents verification.  If a Virus or Malware is found, this field will always be set to Null.
   * @member {String} VerifiedFileFormat
   */
  exports.prototype['VerifiedFileFormat'] = undefined;
  /**
   * Array of viruses found, if any
   * @member {Array.<module:model/CloudStorageVirusFound>} FoundViruses
   */
  exports.prototype['FoundViruses'] = undefined;
  /**
   * Detailed error message if the operation was not successful
   * @member {String} ErrorDetailedDescription
   */
  exports.prototype['ErrorDetailedDescription'] = undefined;
  /**
   * Size in bytes of the file that was retrieved and scanned
   * @member {Number} FileSize
   */
  exports.prototype['FileSize'] = undefined;
  /**
   * Contains additional non-threat content verification information
   * @member {module:model/AdditionalAdvancedScanInformation} ContentInformation
   */
  exports.prototype['ContentInformation'] = undefined;



  return exports;
}));


