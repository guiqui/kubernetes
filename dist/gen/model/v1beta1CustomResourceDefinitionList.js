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
* CustomResourceDefinitionList is a list of CustomResourceDefinition objects.
*/
class V1beta1CustomResourceDefinitionList {
    static getAttributeTypeMap() {
        return V1beta1CustomResourceDefinitionList.attributeTypeMap;
    }
}
V1beta1CustomResourceDefinitionList.discriminator = undefined;
V1beta1CustomResourceDefinitionList.attributeTypeMap = [
    {
        "name": "apiVersion",
        "baseName": "apiVersion",
        "type": "string"
    },
    {
        "name": "items",
        "baseName": "items",
        "type": "Array<V1beta1CustomResourceDefinition>"
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
exports.V1beta1CustomResourceDefinitionList = V1beta1CustomResourceDefinitionList;
//# sourceMappingURL=v1beta1CustomResourceDefinitionList.js.map