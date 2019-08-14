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
* represents a scaling request for a resource.
*/
class ExtensionsV1beta1Scale {
    static getAttributeTypeMap() {
        return ExtensionsV1beta1Scale.attributeTypeMap;
    }
}
ExtensionsV1beta1Scale.discriminator = undefined;
ExtensionsV1beta1Scale.attributeTypeMap = [
    {
        "name": "apiVersion",
        "baseName": "apiVersion",
        "type": "string"
    },
    {
        "name": "kind",
        "baseName": "kind",
        "type": "string"
    },
    {
        "name": "metadata",
        "baseName": "metadata",
        "type": "V1ObjectMeta"
    },
    {
        "name": "spec",
        "baseName": "spec",
        "type": "ExtensionsV1beta1ScaleSpec"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "ExtensionsV1beta1ScaleStatus"
    }
];
exports.ExtensionsV1beta1Scale = ExtensionsV1beta1Scale;
//# sourceMappingURL=extensionsV1beta1Scale.js.map