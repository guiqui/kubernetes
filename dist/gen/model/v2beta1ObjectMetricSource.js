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
* ObjectMetricSource indicates how to scale on a metric describing a kubernetes object (for example, hits-per-second on an Ingress object).
*/
class V2beta1ObjectMetricSource {
    static getAttributeTypeMap() {
        return V2beta1ObjectMetricSource.attributeTypeMap;
    }
}
V2beta1ObjectMetricSource.discriminator = undefined;
V2beta1ObjectMetricSource.attributeTypeMap = [
    {
        "name": "averageValue",
        "baseName": "averageValue",
        "type": "string"
    },
    {
        "name": "metricName",
        "baseName": "metricName",
        "type": "string"
    },
    {
        "name": "selector",
        "baseName": "selector",
        "type": "V1LabelSelector"
    },
    {
        "name": "target",
        "baseName": "target",
        "type": "V2beta1CrossVersionObjectReference"
    },
    {
        "name": "targetValue",
        "baseName": "targetValue",
        "type": "string"
    }
];
exports.V2beta1ObjectMetricSource = V2beta1ObjectMetricSource;
//# sourceMappingURL=v2beta1ObjectMetricSource.js.map