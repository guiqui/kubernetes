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
* LocalSubjectAccessReview checks whether or not a user or group can perform an action in a given namespace. Having a namespace scoped resource makes it much easier to grant namespace scoped policy that includes permissions checking.
*/
class V1LocalSubjectAccessReview {
    static getAttributeTypeMap() {
        return V1LocalSubjectAccessReview.attributeTypeMap;
    }
}
V1LocalSubjectAccessReview.discriminator = undefined;
V1LocalSubjectAccessReview.attributeTypeMap = [
    {
        "name": "apiVersion",
        "baseName": "apiVersion",
        "type": "string"
    },
    {
        "name": "kind",
        "baseName": "kind",
        "type": "string"
    },
    {
        "name": "metadata",
        "baseName": "metadata",
        "type": "V1ObjectMeta"
    },
    {
        "name": "spec",
        "baseName": "spec",
        "type": "V1SubjectAccessReviewSpec"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "V1SubjectAccessReviewStatus"
    }
];
exports.V1LocalSubjectAccessReview = V1LocalSubjectAccessReview;
//# sourceMappingURL=v1LocalSubjectAccessReview.js.map