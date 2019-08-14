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
* VolumeMount describes a mounting of a Volume within a container.
*/
class V1VolumeMount {
    static getAttributeTypeMap() {
        return V1VolumeMount.attributeTypeMap;
    }
}
V1VolumeMount.discriminator = undefined;
V1VolumeMount.attributeTypeMap = [
    {
        "name": "mountPath",
        "baseName": "mountPath",
        "type": "string"
    },
    {
        "name": "mountPropagation",
        "baseName": "mountPropagation",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "readOnly",
        "baseName": "readOnly",
        "type": "boolean"
    },
    {
        "name": "subPath",
        "baseName": "subPath",
        "type": "string"
    }
];
exports.V1VolumeMount = V1VolumeMount;
//# sourceMappingURL=v1VolumeMount.js.map