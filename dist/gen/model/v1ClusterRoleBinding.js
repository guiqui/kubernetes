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
* ClusterRoleBinding references a ClusterRole, but not contain it.  It can reference a ClusterRole in the global namespace, and adds who information via Subject.
*/
class V1ClusterRoleBinding {
    static getAttributeTypeMap() {
        return V1ClusterRoleBinding.attributeTypeMap;
    }
}
V1ClusterRoleBinding.discriminator = undefined;
V1ClusterRoleBinding.attributeTypeMap = [
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
        "name": "roleRef",
        "baseName": "roleRef",
        "type": "V1RoleRef"
    },
    {
        "name": "subjects",
        "baseName": "subjects",
        "type": "Array<V1Subject>"
    }
];
exports.V1ClusterRoleBinding = V1ClusterRoleBinding;
//# sourceMappingURL=v1ClusterRoleBinding.js.map