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
* Adapts a Secret into a volume.  The contents of the target Secret\'s Data field will be presented in a volume as files using the keys in the Data field as the file names. Secret volumes support ownership management and SELinux relabeling.
*/
class V1SecretVolumeSource {
    static getAttributeTypeMap() {
        return V1SecretVolumeSource.attributeTypeMap;
    }
}
V1SecretVolumeSource.discriminator = undefined;
V1SecretVolumeSource.attributeTypeMap = [
    {
        "name": "defaultMode",
        "baseName": "defaultMode",
        "type": "number"
    },
    {
        "name": "items",
        "baseName": "items",
        "type": "Array<V1KeyToPath>"
    },
    {
        "name": "optional",
        "baseName": "optional",
        "type": "boolean"
    },
    {
        "name": "secretName",
        "baseName": "secretName",
        "type": "string"
    }
];
exports.V1SecretVolumeSource = V1SecretVolumeSource;
//# sourceMappingURL=v1SecretVolumeSource.js.map