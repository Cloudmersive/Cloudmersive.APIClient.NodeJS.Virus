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
    define(['ApiClient', 'model/VirusFound'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./VirusFound'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveVirusApiClient) {
      root.CloudmersiveVirusApiClient = {};
    }
    root.CloudmersiveVirusApiClient.VirusScanResult = factory(root.CloudmersiveVirusApiClient.ApiClient, root.CloudmersiveVirusApiClient.VirusFound);
  }
}(this, function(ApiClient, VirusFound) {
  'use strict';




  /**
   * The VirusScanResult model module.
   * @module model/VirusScanResult
   * @version 1.2.7
   */

  /**
   * Constructs a new <code>VirusScanResult</code>.
   * Result of running a virus scan
   * @alias module:model/VirusScanResult
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>VirusScanResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VirusScanResult} obj Optional instance to populate.
   * @return {module:model/VirusScanResult} The populated <code>VirusScanResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('CleanResult')) {
        obj['CleanResult'] = ApiClient.convertToType(data['CleanResult'], 'Boolean');
      }
      if (data.hasOwnProperty('FoundViruses')) {
        obj['FoundViruses'] = ApiClient.convertToType(data['FoundViruses'], [VirusFound]);
      }
    }
    return obj;
  }

  /**
   * True if the scan contained no viruses, false otherwise
   * @member {Boolean} CleanResult
   */
  exports.prototype['CleanResult'] = undefined;
  /**
   * Array of viruses found, if any
   * @member {Array.<module:model/VirusFound>} FoundViruses
   */
  exports.prototype['FoundViruses'] = undefined;



  return exports;
}));


