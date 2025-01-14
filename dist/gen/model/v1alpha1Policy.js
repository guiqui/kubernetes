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
* Policy defines the configuration of how audit events are logged
*/
class V1alpha1Policy {
    static getAttributeTypeMap() {
        return V1alpha1Policy.attributeTypeMap;
    }
}
V1alpha1Policy.discriminator = undefined;
V1alpha1Policy.attributeTypeMap = [
    {
        "name": "level",
        "baseName": "level",
        "type": "string"
    },
    {
        "name": "stages",
        "baseName": "stages",
        "type": "Array<string>"
    }
];
exports.V1alpha1Policy = V1alpha1Policy;
//# sourceMappingURL=v1alpha1Policy.js.map