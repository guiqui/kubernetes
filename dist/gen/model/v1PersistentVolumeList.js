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
* PersistentVolumeList is a list of PersistentVolume items.
*/
class V1PersistentVolumeList {
    static getAttributeTypeMap() {
        return V1PersistentVolumeList.attributeTypeMap;
    }
}
V1PersistentVolumeList.discriminator = undefined;
V1PersistentVolumeList.attributeTypeMap = [
    {
        "name": "apiVersion",
        "baseName": "apiVersion",
        "type": "string"
    },
    {
        "name": "items",
        "baseName": "items",
        "type": "Array<V1PersistentVolume>"
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
exports.V1PersistentVolumeList = V1PersistentVolumeList;
//# sourceMappingURL=v1PersistentVolumeList.js.map