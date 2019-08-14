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
* CustomResourceDefinitionVersion describes a version for CRD.
*/
class V1beta1CustomResourceDefinitionVersion {
    static getAttributeTypeMap() {
        return V1beta1CustomResourceDefinitionVersion.attributeTypeMap;
    }
}
V1beta1CustomResourceDefinitionVersion.discriminator = undefined;
V1beta1CustomResourceDefinitionVersion.attributeTypeMap = [
    {
        "name": "additionalPrinterColumns",
        "baseName": "additionalPrinterColumns",
        "type": "Array<V1beta1CustomResourceColumnDefinition>"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "schema",
        "baseName": "schema",
        "type": "V1beta1CustomResourceValidation"
    },
    {
        "name": "served",
        "baseName": "served",
        "type": "boolean"
    },
    {
        "name": "storage",
        "baseName": "storage",
        "type": "boolean"
    },
    {
        "name": "subresources",
        "baseName": "subresources",
        "type": "V1beta1CustomResourceSubresources"
    }
];
exports.V1beta1CustomResourceDefinitionVersion = V1beta1CustomResourceDefinitionVersion;
//# sourceMappingURL=v1beta1CustomResourceDefinitionVersion.js.map