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
* CustomResourceDefinitionSpec describes how a user wants their resource to appear
*/
class V1beta1CustomResourceDefinitionSpec {
    static getAttributeTypeMap() {
        return V1beta1CustomResourceDefinitionSpec.attributeTypeMap;
    }
}
V1beta1CustomResourceDefinitionSpec.discriminator = undefined;
V1beta1CustomResourceDefinitionSpec.attributeTypeMap = [
    {
        "name": "additionalPrinterColumns",
        "baseName": "additionalPrinterColumns",
        "type": "Array<V1beta1CustomResourceColumnDefinition>"
    },
    {
        "name": "conversion",
        "baseName": "conversion",
        "type": "V1beta1CustomResourceConversion"
    },
    {
        "name": "group",
        "baseName": "group",
        "type": "string"
    },
    {
        "name": "names",
        "baseName": "names",
        "type": "V1beta1CustomResourceDefinitionNames"
    },
    {
        "name": "scope",
        "baseName": "scope",
        "type": "string"
    },
    {
        "name": "subresources",
        "baseName": "subresources",
        "type": "V1beta1CustomResourceSubresources"
    },
    {
        "name": "validation",
        "baseName": "validation",
        "type": "V1beta1CustomResourceValidation"
    },
    {
        "name": "version",
        "baseName": "version",
        "type": "string"
    },
    {
        "name": "versions",
        "baseName": "versions",
        "type": "Array<V1beta1CustomResourceDefinitionVersion>"
    }
];
exports.V1beta1CustomResourceDefinitionSpec = V1beta1CustomResourceDefinitionSpec;
//# sourceMappingURL=v1beta1CustomResourceDefinitionSpec.js.map