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
    root.CloudmersiveVirusApiClient.VirusFound = factory(root.CloudmersiveVirusApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The VirusFound model module.
   * @module model/VirusFound
   * @version 1.3.0
   */

  /**
   * Constructs a new <code>VirusFound</code>.
   * Virus positively identified
   * @alias module:model/VirusFound
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>VirusFound</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VirusFound} obj Optional instance to populate.
   * @return {module:model/VirusFound} The populated <code>VirusFound</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('FileName')) {
        obj['FileName'] = ApiClient.convertToType(data['FileName'], 'String');
      }
      if (data.hasOwnProperty('VirusName')) {
        obj['VirusName'] = ApiClient.convertToType(data['VirusName'], 'String');
      }
    }
    return obj;
  }

  /**
   * Name of the file containing the virus
   * @member {String} FileName
   */
  exports.prototype['FileName'] = undefined;
  /**
   * Name of the virus that was found
   * @member {String} VirusName
   */
  exports.prototype['VirusName'] = undefined;



  return exports;
}));


