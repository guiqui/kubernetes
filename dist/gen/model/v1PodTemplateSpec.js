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
* PodTemplateSpec describes the data a pod should have when created from a template
*/
class V1PodTemplateSpec {
    static getAttributeTypeMap() {
        return V1PodTemplateSpec.attributeTypeMap;
    }
}
V1PodTemplateSpec.discriminator = undefined;
V1PodTemplateSpec.attributeTypeMap = [
    {
        "name": "metadata",
        "baseName": "metadata",
        "type": "V1ObjectMeta"
    },
    {
        "name": "spec",
        "baseName": "spec",
        "type": "V1PodSpec"
    }
];
exports.V1PodTemplateSpec = V1PodTemplateSpec;
//# sourceMappingURL=v1PodTemplateSpec.js.map