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
* PriorityClassList is a collection of priority classes.
*/
class V1beta1PriorityClassList {
    static getAttributeTypeMap() {
        return V1beta1PriorityClassList.attributeTypeMap;
    }
}
V1beta1PriorityClassList.discriminator = undefined;
V1beta1PriorityClassList.attributeTypeMap = [
    {
        "name": "apiVersion",
        "baseName": "apiVersion",
        "type": "string"
    },
    {
        "name": "items",
        "baseName": "items",
        "type": "Array<V1beta1PriorityClass>"
    },
    {
        "name": "kind",
        "baseName": "kind",
        "type": "string"
    },
    {
        "name": "metadata",
        "baseName": "metadata",
        "type": "V1ListMeta"
    }
];
exports.V1beta1PriorityClassList = V1beta1PriorityClassList;
//# sourceMappingURL=v1beta1PriorityClassList.js.map