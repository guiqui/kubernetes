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
* ReplicaSetSpec is the specification of a ReplicaSet.
*/
class V1beta2ReplicaSetSpec {
    static getAttributeTypeMap() {
        return V1beta2ReplicaSetSpec.attributeTypeMap;
    }
}
V1beta2ReplicaSetSpec.discriminator = undefined;
V1beta2ReplicaSetSpec.attributeTypeMap = [
    {
        "name": "minReadySeconds",
        "baseName": "minReadySeconds",
        "type": "number"
    },
    {
        "name": "replicas",
        "baseName": "replicas",
        "type": "number"
    },
    {
        "name": "selector",
        "baseName": "selector",
        "type": "V1LabelSelector"
    },
    {
        "name": "template",
        "baseName": "template",
        "type": "V1PodTemplateSpec"
    }
];
exports.V1beta2ReplicaSetSpec = V1beta2ReplicaSetSpec;
//# sourceMappingURL=v1beta2ReplicaSetSpec.js.map