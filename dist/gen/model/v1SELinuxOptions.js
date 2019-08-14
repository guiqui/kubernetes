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
* SELinuxOptions are the labels to be applied to the container
*/
class V1SELinuxOptions {
    static getAttributeTypeMap() {
        return V1SELinuxOptions.attributeTypeMap;
    }
}
V1SELinuxOptions.discriminator = undefined;
V1SELinuxOptions.attributeTypeMap = [
    {
        "name": "level",
        "baseName": "level",
        "type": "string"
    },
    {
        "name": "role",
        "baseName": "role",
        "type": "string"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    },
    {
        "name": "user",
        "baseName": "user",
        "type": "string"
    }
];
exports.V1SELinuxOptions = V1SELinuxOptions;
//# sourceMappingURL=v1SELinuxOptions.js.map