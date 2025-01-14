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
* ResourceMetricStatus indicates the current value of a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the \"pods\" source.
*/
class V2beta1ResourceMetricStatus {
    static getAttributeTypeMap() {
        return V2beta1ResourceMetricStatus.attributeTypeMap;
    }
}
V2beta1ResourceMetricStatus.discriminator = undefined;
V2beta1ResourceMetricStatus.attributeTypeMap = [
    {
        "name": "currentAverageUtilization",
        "baseName": "currentAverageUtilization",
        "type": "number"
    },
    {
        "name": "currentAverageValue",
        "baseName": "currentAverageValue",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    }
];
exports.V2beta1ResourceMetricStatus = V2beta1ResourceMetricStatus;
//# sourceMappingURL=v2beta1ResourceMetricStatus.js.map