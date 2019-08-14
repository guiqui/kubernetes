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
* Info contains versioning information. how we\'ll want to distribute that information.
*/
class VersionInfo {
    static getAttributeTypeMap() {
        return VersionInfo.attributeTypeMap;
    }
}
VersionInfo.discriminator = undefined;
VersionInfo.attributeTypeMap = [
    {
        "name": "buildDate",
        "baseName": "buildDate",
        "type": "string"
    },
    {
        "name": "compiler",
        "baseName": "compiler",
        "type": "string"
    },
    {
        "name": "gitCommit",
        "baseName": "gitCommit",
        "type": "string"
    },
    {
        "name": "gitTreeState",
        "baseName": "gitTreeState",
        "type": "string"
    },
    {
        "name": "gitVersion",
        "baseName": "gitVersion",
        "type": "string"
    },
    {
        "name": "goVersion",
        "baseName": "goVersion",
        "type": "string"
    },
    {
        "name": "major",
        "baseName": "major",
        "type": "string"
    },
    {
        "name": "minor",
        "baseName": "minor",
        "type": "string"
    },
    {
        "name": "platform",
        "baseName": "platform",
        "type": "string"
    }
];
exports.VersionInfo = VersionInfo;
//# sourceMappingURL=versionInfo.js.map