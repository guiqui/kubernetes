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
* FSGroupStrategyOptions defines the strategy type and options used to create the strategy.
*/
class PolicyV1beta1FSGroupStrategyOptions {
    static getAttributeTypeMap() {
        return PolicyV1beta1FSGroupStrategyOptions.attributeTypeMap;
    }
}
PolicyV1beta1FSGroupStrategyOptions.discriminator = undefined;
PolicyV1beta1FSGroupStrategyOptions.attributeTypeMap = [
    {
        "name": "ranges",
        "baseName": "ranges",
        "type": "Array<PolicyV1beta1IDRange>"
    },
    {
        "name": "rule",
        "baseName": "rule",
        "type": "string"
    }
];
exports.PolicyV1beta1FSGroupStrategyOptions = PolicyV1beta1FSGroupStrategyOptions;
//# sourceMappingURL=policyV1beta1FSGroupStrategyOptions.js.map