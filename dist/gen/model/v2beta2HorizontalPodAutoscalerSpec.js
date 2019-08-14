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
* HorizontalPodAutoscalerSpec describes the desired functionality of the HorizontalPodAutoscaler.
*/
class V2beta2HorizontalPodAutoscalerSpec {
    static getAttributeTypeMap() {
        return V2beta2HorizontalPodAutoscalerSpec.attributeTypeMap;
    }
}
V2beta2HorizontalPodAutoscalerSpec.discriminator = undefined;
V2beta2HorizontalPodAutoscalerSpec.attributeTypeMap = [
    {
        "name": "maxReplicas",
        "baseName": "maxReplicas",
        "type": "number"
    },
    {
        "name": "metrics",
        "baseName": "metrics",
        "type": "Array<V2beta2MetricSpec>"
    },
    {
        "name": "minReplicas",
        "baseName": "minReplicas",
        "type": "number"
    },
    {
        "name": "scaleTargetRef",
        "baseName": "scaleTargetRef",
        "type": "V2beta2CrossVersionObjectReference"
    }
];
exports.V2beta2HorizontalPodAutoscalerSpec = V2beta2HorizontalPodAutoscalerSpec;
//# sourceMappingURL=v2beta2HorizontalPodAutoscalerSpec.js.map