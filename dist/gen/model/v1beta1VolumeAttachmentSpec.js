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
* VolumeAttachmentSpec is the specification of a VolumeAttachment request.
*/
class V1beta1VolumeAttachmentSpec {
    static getAttributeTypeMap() {
        return V1beta1VolumeAttachmentSpec.attributeTypeMap;
    }
}
V1beta1VolumeAttachmentSpec.discriminator = undefined;
V1beta1VolumeAttachmentSpec.attributeTypeMap = [
    {
        "name": "attacher",
        "baseName": "attacher",
        "type": "string"
    },
    {
        "name": "nodeName",
        "baseName": "nodeName",
        "type": "string"
    },
    {
        "name": "source",
        "baseName": "source",
        "type": "V1beta1VolumeAttachmentSource"
    }
];
exports.V1beta1VolumeAttachmentSpec = V1beta1VolumeAttachmentSpec;
//# sourceMappingURL=v1beta1VolumeAttachmentSpec.js.map