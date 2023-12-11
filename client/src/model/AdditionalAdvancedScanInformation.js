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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveVirusApiClient) {
      root.CloudmersiveVirusApiClient = {};
    }
    root.CloudmersiveVirusApiClient.AdditionalAdvancedScanInformation = factory(root.CloudmersiveVirusApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AdditionalAdvancedScanInformation model module.
   * @module model/AdditionalAdvancedScanInformation
   * @version 1.3.0
   */

  /**
   * Constructs a new <code>AdditionalAdvancedScanInformation</code>.
   * Additional non-threat content verification information
   * @alias module:model/AdditionalAdvancedScanInformation
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>AdditionalAdvancedScanInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AdditionalAdvancedScanInformation} obj Optional instance to populate.
   * @return {module:model/AdditionalAdvancedScanInformation} The populated <code>AdditionalAdvancedScanInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ContainsJSON')) {
        obj['ContainsJSON'] = ApiClient.convertToType(data['ContainsJSON'], 'Boolean');
      }
      if (data.hasOwnProperty('ContainsXML')) {
        obj['ContainsXML'] = ApiClient.convertToType(data['ContainsXML'], 'Boolean');
      }
      if (data.hasOwnProperty('ContainsImage')) {
        obj['ContainsImage'] = ApiClient.convertToType(data['ContainsImage'], 'Boolean');
      }
      if (data.hasOwnProperty('RelevantSubfileName')) {
        obj['RelevantSubfileName'] = ApiClient.convertToType(data['RelevantSubfileName'], 'String');
      }
    }
    return obj;
  }

  /**
   * True if the input file contains JSON data, false otherwise; this is not a threat signal
   * @member {Boolean} ContainsJSON
   */
  exports.prototype['ContainsJSON'] = undefined;
  /**
   * True if the input file contains XML data, false otherwise; this is not a threat signal
   * @member {Boolean} ContainsXML
   */
  exports.prototype['ContainsXML'] = undefined;
  /**
   * True if the input file contains an image
   * @member {Boolean} ContainsImage
   */
  exports.prototype['ContainsImage'] = undefined;
  /**
   * Relevant subfile name in an archive format for identified threats, if any
   * @member {String} RelevantSubfileName
   */
  exports.prototype['RelevantSubfileName'] = undefined;



  return exports;
}));


