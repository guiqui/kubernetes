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
* IDRange provides a min/max of an allowed range of IDs.
*/
class PolicyV1beta1IDRange {
    static getAttributeTypeMap() {
        return PolicyV1beta1IDRange.attributeTypeMap;
    }
}
PolicyV1beta1IDRange.discriminator = undefined;
PolicyV1beta1IDRange.attributeTypeMap = [
    {
        "name": "max",
        "baseName": "max",
        "type": "number"
    },
    {
        "name": "min",
        "baseName": "min",
        "type": "number"
    }
];
exports.PolicyV1beta1IDRange = PolicyV1beta1IDRange;
//# sourceMappingURL=policyV1beta1IDRange.js.map