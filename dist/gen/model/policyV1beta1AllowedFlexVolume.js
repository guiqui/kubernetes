"use strict";
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.13.9
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
* AllowedFlexVolume represents a single Flexvolume that is allowed to be used.
*/
class PolicyV1beta1AllowedFlexVolume {
    static getAttributeTypeMap() {
        return PolicyV1beta1AllowedFlexVolume.attributeTypeMap;
    }
}
PolicyV1beta1AllowedFlexVolume.discriminator = undefined;
PolicyV1beta1AllowedFlexVolume.attributeTypeMap = [
    {
        "name": "driver",
        "baseName": "driver",
        "type": "string"
    }
];
exports.PolicyV1beta1AllowedFlexVolume = PolicyV1beta1AllowedFlexVolume;
//# sourceMappingURL=policyV1beta1AllowedFlexVolume.js.map