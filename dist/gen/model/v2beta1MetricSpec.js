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
* MetricSpec specifies how to scale based on a single metric (only `type` and one other matching field should be set at once).
*/
class V2beta1MetricSpec {
    static getAttributeTypeMap() {
        return V2beta1MetricSpec.attributeTypeMap;
    }
}
V2beta1MetricSpec.discriminator = undefined;
V2beta1MetricSpec.attributeTypeMap = [
    {
        "name": "external",
        "baseName": "external",
        "type": "V2beta1ExternalMetricSource"
    },
    {
        "name": "object",
        "baseName": "object",
        "type": "V2beta1ObjectMetricSource"
    },
    {
        "name": "pods",
        "baseName": "pods",
        "type": "V2beta1PodsMetricSource"
    },
    {
        "name": "resource",
        "baseName": "resource",
        "type": "V2beta1ResourceMetricSource"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    }
];
exports.V2beta1MetricSpec = V2beta1MetricSpec;
//# sourceMappingURL=v2beta1MetricSpec.js.map