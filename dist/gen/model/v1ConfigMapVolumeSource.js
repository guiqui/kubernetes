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
* Adapts a ConfigMap into a volume.  The contents of the target ConfigMap\'s Data field will be presented in a volume as files using the keys in the Data field as the file names, unless the items element is populated with specific mappings of keys to paths. ConfigMap volumes support ownership management and SELinux relabeling.
*/
class V1ConfigMapVolumeSource {
    static getAttributeTypeMap() {
        return V1ConfigMapVolumeSource.attributeTypeMap;
    }
}
V1ConfigMapVolumeSource.discriminator = undefined;
V1ConfigMapVolumeSource.attributeTypeMap = [
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
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "optional",
        "baseName": "optional",
        "type": "boolean"
    }
];
exports.V1ConfigMapVolumeSource = V1ConfigMapVolumeSource;
//# sourceMappingURL=v1ConfigMapVolumeSource.js.map