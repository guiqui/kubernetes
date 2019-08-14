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
* PodCondition contains details for the current condition of this pod.
*/
class V1PodCondition {
    static getAttributeTypeMap() {
        return V1PodCondition.attributeTypeMap;
    }
}
V1PodCondition.discriminator = undefined;
V1PodCondition.attributeTypeMap = [
    {
        "name": "lastProbeTime",
        "baseName": "lastProbeTime",
        "type": "Date"
    },
    {
        "name": "lastTransitionTime",
        "baseName": "lastTransitionTime",
        "type": "Date"
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "string"
    },
    {
        "name": "reason",
        "baseName": "reason",
        "type": "string"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "string"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    }
];
exports.V1PodCondition = V1PodCondition;
//# sourceMappingURL=v1PodCondition.js.map