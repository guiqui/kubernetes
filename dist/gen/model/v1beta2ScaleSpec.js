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
* ScaleSpec describes the attributes of a scale subresource
*/
class V1beta2ScaleSpec {
    static getAttributeTypeMap() {
        return V1beta2ScaleSpec.attributeTypeMap;
    }
}
V1beta2ScaleSpec.discriminator = undefined;
V1beta2ScaleSpec.attributeTypeMap = [
    {
        "name": "replicas",
        "baseName": "replicas",
        "type": "number"
    }
];
exports.V1beta2ScaleSpec = V1beta2ScaleSpec;
//# sourceMappingURL=v1beta2ScaleSpec.js.map