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
* NamespaceStatus is information about the current status of a Namespace.
*/
class V1NamespaceStatus {
    static getAttributeTypeMap() {
        return V1NamespaceStatus.attributeTypeMap;
    }
}
V1NamespaceStatus.discriminator = undefined;
V1NamespaceStatus.attributeTypeMap = [
    {
        "name": "phase",
        "baseName": "phase",
        "type": "string"
    }
];
exports.V1NamespaceStatus = V1NamespaceStatus;
//# sourceMappingURL=v1NamespaceStatus.js.map