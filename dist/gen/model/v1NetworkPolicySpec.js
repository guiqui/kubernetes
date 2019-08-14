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
* NetworkPolicySpec provides the specification of a NetworkPolicy
*/
class V1NetworkPolicySpec {
    static getAttributeTypeMap() {
        return V1NetworkPolicySpec.attributeTypeMap;
    }
}
V1NetworkPolicySpec.discriminator = undefined;
V1NetworkPolicySpec.attributeTypeMap = [
    {
        "name": "egress",
        "baseName": "egress",
        "type": "Array<V1NetworkPolicyEgressRule>"
    },
    {
        "name": "ingress",
        "baseName": "ingress",
        "type": "Array<V1NetworkPolicyIngressRule>"
    },
    {
        "name": "podSelector",
        "baseName": "podSelector",
        "type": "V1LabelSelector"
    },
    {
        "name": "policyTypes",
        "baseName": "policyTypes",
        "type": "Array<string>"
    }
];
exports.V1NetworkPolicySpec = V1NetworkPolicySpec;
//# sourceMappingURL=v1NetworkPolicySpec.js.map