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
* Represents a StorageOS persistent volume resource.
*/
class V1StorageOSPersistentVolumeSource {
    static getAttributeTypeMap() {
        return V1StorageOSPersistentVolumeSource.attributeTypeMap;
    }
}
V1StorageOSPersistentVolumeSource.discriminator = undefined;
V1StorageOSPersistentVolumeSource.attributeTypeMap = [
    {
        "name": "fsType",
        "baseName": "fsType",
        "type": "string"
    },
    {
        "name": "readOnly",
        "baseName": "readOnly",
        "type": "boolean"
    },
    {
        "name": "secretRef",
        "baseName": "secretRef",
        "type": "V1ObjectReference"
    },
    {
        "name": "volumeName",
        "baseName": "volumeName",
        "type": "string"
    },
    {
        "name": "volumeNamespace",
        "baseName": "volumeNamespace",
        "type": "string"
    }
];
exports.V1StorageOSPersistentVolumeSource = V1StorageOSPersistentVolumeSource;
//# sourceMappingURL=v1StorageOSPersistentVolumeSource.js.map