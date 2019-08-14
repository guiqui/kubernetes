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
* ClusterRoleBindingList is a collection of ClusterRoleBindings
*/
class V1ClusterRoleBindingList {
    static getAttributeTypeMap() {
        return V1ClusterRoleBindingList.attributeTypeMap;
    }
}
V1ClusterRoleBindingList.discriminator = undefined;
V1ClusterRoleBindingList.attributeTypeMap = [
    {
        "name": "apiVersion",
        "baseName": "apiVersion",
        "type": "string"
    },
    {
        "name": "items",
        "baseName": "items",
        "type": "Array<V1ClusterRoleBinding>"
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
exports.V1ClusterRoleBindingList = V1ClusterRoleBindingList;
//# sourceMappingURL=v1ClusterRoleBindingList.js.map