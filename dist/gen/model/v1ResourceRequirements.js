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
* ResourceRequirements describes the compute resource requirements.
*/
class V1ResourceRequirements {
    static getAttributeTypeMap() {
        return V1ResourceRequirements.attributeTypeMap;
    }
}
V1ResourceRequirements.discriminator = undefined;
V1ResourceRequirements.attributeTypeMap = [
    {
        "name": "limits",
        "baseName": "limits",
        "type": "{ [key: string]: string; }"
    },
    {
        "name": "requests",
        "baseName": "requests",
        "type": "{ [key: string]: string; }"
    }
];
exports.V1ResourceRequirements = V1ResourceRequirements;
//# sourceMappingURL=v1ResourceRequirements.js.map