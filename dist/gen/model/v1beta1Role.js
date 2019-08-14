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
* Role is a namespaced, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding.
*/
class V1beta1Role {
    static getAttributeTypeMap() {
        return V1beta1Role.attributeTypeMap;
    }
}
V1beta1Role.discriminator = undefined;
V1beta1Role.attributeTypeMap = [
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
        "name": "rules",
        "baseName": "rules",
        "type": "Array<V1beta1PolicyRule>"
    }
];
exports.V1beta1Role = V1beta1Role;
//# sourceMappingURL=v1beta1Role.js.map