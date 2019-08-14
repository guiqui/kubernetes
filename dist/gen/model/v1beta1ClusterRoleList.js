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
* ClusterRoleList is a collection of ClusterRoles
*/
class V1beta1ClusterRoleList {
    static getAttributeTypeMap() {
        return V1beta1ClusterRoleList.attributeTypeMap;
    }
}
V1beta1ClusterRoleList.discriminator = undefined;
V1beta1ClusterRoleList.attributeTypeMap = [
    {
        "name": "apiVersion",
        "baseName": "apiVersion",
        "type": "string"
    },
    {
        "name": "items",
        "baseName": "items",
        "type": "Array<V1beta1ClusterRole>"
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
exports.V1beta1ClusterRoleList = V1beta1ClusterRoleList;
//# sourceMappingURL=v1beta1ClusterRoleList.js.map