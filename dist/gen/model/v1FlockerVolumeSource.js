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
* Represents a Flocker volume mounted by the Flocker agent. One and only one of datasetName and datasetUUID should be set. Flocker volumes do not support ownership management or SELinux relabeling.
*/
class V1FlockerVolumeSource {
    static getAttributeTypeMap() {
        return V1FlockerVolumeSource.attributeTypeMap;
    }
}
V1FlockerVolumeSource.discriminator = undefined;
V1FlockerVolumeSource.attributeTypeMap = [
    {
        "name": "datasetName",
        "baseName": "datasetName",
        "type": "string"
    },
    {
        "name": "datasetUUID",
        "baseName": "datasetUUID",
        "type": "string"
    }
];
exports.V1FlockerVolumeSource = V1FlockerVolumeSource;
//# sourceMappingURL=v1FlockerVolumeSource.js.map