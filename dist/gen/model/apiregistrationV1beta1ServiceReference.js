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
* ServiceReference holds a reference to Service.legacy.k8s.io
*/
class ApiregistrationV1beta1ServiceReference {
    static getAttributeTypeMap() {
        return ApiregistrationV1beta1ServiceReference.attributeTypeMap;
    }
}
ApiregistrationV1beta1ServiceReference.discriminator = undefined;
ApiregistrationV1beta1ServiceReference.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "namespace",
        "baseName": "namespace",
        "type": "string"
    }
];
exports.ApiregistrationV1beta1ServiceReference = ApiregistrationV1beta1ServiceReference;
//# sourceMappingURL=apiregistrationV1beta1ServiceReference.js.map