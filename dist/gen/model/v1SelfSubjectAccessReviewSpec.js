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
* SelfSubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set
*/
class V1SelfSubjectAccessReviewSpec {
    static getAttributeTypeMap() {
        return V1SelfSubjectAccessReviewSpec.attributeTypeMap;
    }
}
V1SelfSubjectAccessReviewSpec.discriminator = undefined;
V1SelfSubjectAccessReviewSpec.attributeTypeMap = [
    {
        "name": "nonResourceAttributes",
        "baseName": "nonResourceAttributes",
        "type": "V1NonResourceAttributes"
    },
    {
        "name": "resourceAttributes",
        "baseName": "resourceAttributes",
        "type": "V1ResourceAttributes"
    }
];
exports.V1SelfSubjectAccessReviewSpec = V1SelfSubjectAccessReviewSpec;
//# sourceMappingURL=v1SelfSubjectAccessReviewSpec.js.map