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
* NonResourceAttributes includes the authorization attributes available for non-resource requests to the Authorizer interface
*/
class V1beta1NonResourceAttributes {
    static getAttributeTypeMap() {
        return V1beta1NonResourceAttributes.attributeTypeMap;
    }
}
V1beta1NonResourceAttributes.discriminator = undefined;
V1beta1NonResourceAttributes.attributeTypeMap = [
    {
        "name": "path",
        "baseName": "path",
        "type": "string"
    },
    {
        "name": "verb",
        "baseName": "verb",
        "type": "string"
    }
];
exports.V1beta1NonResourceAttributes = V1beta1NonResourceAttributes;
//# sourceMappingURL=v1beta1NonResourceAttributes.js.map