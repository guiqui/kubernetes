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
* PriorityClass defines mapping from a priority class name to the priority integer value. The value can be any valid integer.
*/
class V1beta1PriorityClass {
    static getAttributeTypeMap() {
        return V1beta1PriorityClass.attributeTypeMap;
    }
}
V1beta1PriorityClass.discriminator = undefined;
V1beta1PriorityClass.attributeTypeMap = [
    {
        "name": "apiVersion",
        "baseName": "apiVersion",
        "type": "string"
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string"
    },
    {
        "name": "globalDefault",
        "baseName": "globalDefault",
        "type": "boolean"
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
        "name": "value",
        "baseName": "value",
        "type": "number"
    }
];
exports.V1beta1PriorityClass = V1beta1PriorityClass;
//# sourceMappingURL=v1beta1PriorityClass.js.map