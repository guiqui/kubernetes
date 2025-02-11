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
* This information is immutable after the request is created. Only the Request and Usages fields can be set on creation, other fields are derived by Kubernetes and cannot be modified by users.
*/
class V1beta1CertificateSigningRequestSpec {
    static getAttributeTypeMap() {
        return V1beta1CertificateSigningRequestSpec.attributeTypeMap;
    }
}
V1beta1CertificateSigningRequestSpec.discriminator = undefined;
V1beta1CertificateSigningRequestSpec.attributeTypeMap = [
    {
        "name": "extra",
        "baseName": "extra",
        "type": "{ [key: string]: Array<string>; }"
    },
    {
        "name": "groups",
        "baseName": "groups",
        "type": "Array<string>"
    },
    {
        "name": "request",
        "baseName": "request",
        "type": "string"
    },
    {
        "name": "uid",
        "baseName": "uid",
        "type": "string"
    },
    {
        "name": "usages",
        "baseName": "usages",
        "type": "Array<string>"
    },
    {
        "name": "username",
        "baseName": "username",
        "type": "string"
    }
];
exports.V1beta1CertificateSigningRequestSpec = V1beta1CertificateSigningRequestSpec;
//# sourceMappingURL=v1beta1CertificateSigningRequestSpec.js.map