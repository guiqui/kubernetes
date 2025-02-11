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
* DaemonSetCondition describes the state of a DaemonSet at a certain point.
*/
class V1beta1DaemonSetCondition {
    static getAttributeTypeMap() {
        return V1beta1DaemonSetCondition.attributeTypeMap;
    }
}
V1beta1DaemonSetCondition.discriminator = undefined;
V1beta1DaemonSetCondition.attributeTypeMap = [
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
exports.V1beta1DaemonSetCondition = V1beta1DaemonSetCondition;
//# sourceMappingURL=v1beta1DaemonSetCondition.js.map