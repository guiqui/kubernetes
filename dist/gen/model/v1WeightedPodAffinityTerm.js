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
* The weights of all of the matched WeightedPodAffinityTerm fields are added per-node to find the most preferred node(s)
*/
class V1WeightedPodAffinityTerm {
    static getAttributeTypeMap() {
        return V1WeightedPodAffinityTerm.attributeTypeMap;
    }
}
V1WeightedPodAffinityTerm.discriminator = undefined;
V1WeightedPodAffinityTerm.attributeTypeMap = [
    {
        "name": "podAffinityTerm",
        "baseName": "podAffinityTerm",
        "type": "V1PodAffinityTerm"
    },
    {
        "name": "weight",
        "baseName": "weight",
        "type": "number"
    }
];
exports.V1WeightedPodAffinityTerm = V1WeightedPodAffinityTerm;
//# sourceMappingURL=v1WeightedPodAffinityTerm.js.map