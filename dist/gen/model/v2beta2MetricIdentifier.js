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
* MetricIdentifier defines the name and optionally selector for a metric
*/
class V2beta2MetricIdentifier {
    static getAttributeTypeMap() {
        return V2beta2MetricIdentifier.attributeTypeMap;
    }
}
V2beta2MetricIdentifier.discriminator = undefined;
V2beta2MetricIdentifier.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "selector",
        "baseName": "selector",
        "type": "V1LabelSelector"
    }
];
exports.V2beta2MetricIdentifier = V2beta2MetricIdentifier;
//# sourceMappingURL=v2beta2MetricIdentifier.js.map