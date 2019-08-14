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
* SecurityContext holds security configuration that will be applied to a container. Some fields are present in both SecurityContext and PodSecurityContext.  When both are set, the values in SecurityContext take precedence.
*/
class V1SecurityContext {
    static getAttributeTypeMap() {
        return V1SecurityContext.attributeTypeMap;
    }
}
V1SecurityContext.discriminator = undefined;
V1SecurityContext.attributeTypeMap = [
    {
        "name": "allowPrivilegeEscalation",
        "baseName": "allowPrivilegeEscalation",
        "type": "boolean"
    },
    {
        "name": "capabilities",
        "baseName": "capabilities",
        "type": "V1Capabilities"
    },
    {
        "name": "privileged",
        "baseName": "privileged",
        "type": "boolean"
    },
    {
        "name": "procMount",
        "baseName": "procMount",
        "type": "string"
    },
    {
        "name": "readOnlyRootFilesystem",
        "baseName": "readOnlyRootFilesystem",
        "type": "boolean"
    },
    {
        "name": "runAsGroup",
        "baseName": "runAsGroup",
        "type": "number"
    },
    {
        "name": "runAsNonRoot",
        "baseName": "runAsNonRoot",
        "type": "boolean"
    },
    {
        "name": "runAsUser",
        "baseName": "runAsUser",
        "type": "number"
    },
    {
        "name": "seLinuxOptions",
        "baseName": "seLinuxOptions",
        "type": "V1SELinuxOptions"
    }
];
exports.V1SecurityContext = V1SecurityContext;
//# sourceMappingURL=v1SecurityContext.js.map