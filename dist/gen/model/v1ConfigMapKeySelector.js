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
* Selects a key from a ConfigMap.
*/
class V1ConfigMapKeySelector {
    static getAttributeTypeMap() {
        return V1ConfigMapKeySelector.attributeTypeMap;
    }
}
V1ConfigMapKeySelector.discriminator = undefined;
V1ConfigMapKeySelector.attributeTypeMap = [
    {
        "name": "key",
        "baseName": "key",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "optional",
        "baseName": "optional",
        "type": "boolean"
    }
];
exports.V1ConfigMapKeySelector = V1ConfigMapKeySelector;
//# sourceMappingURL=v1ConfigMapKeySelector.js.map