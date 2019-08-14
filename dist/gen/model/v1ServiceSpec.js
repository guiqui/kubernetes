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
* ServiceSpec describes the attributes that a user creates on a service.
*/
class V1ServiceSpec {
    static getAttributeTypeMap() {
        return V1ServiceSpec.attributeTypeMap;
    }
}
V1ServiceSpec.discriminator = undefined;
V1ServiceSpec.attributeTypeMap = [
    {
        "name": "clusterIP",
        "baseName": "clusterIP",
        "type": "string"
    },
    {
        "name": "externalIPs",
        "baseName": "externalIPs",
        "type": "Array<string>"
    },
    {
        "name": "externalName",
        "baseName": "externalName",
        "type": "string"
    },
    {
        "name": "externalTrafficPolicy",
        "baseName": "externalTrafficPolicy",
        "type": "string"
    },
    {
        "name": "healthCheckNodePort",
        "baseName": "healthCheckNodePort",
        "type": "number"
    },
    {
        "name": "loadBalancerIP",
        "baseName": "loadBalancerIP",
        "type": "string"
    },
    {
        "name": "loadBalancerSourceRanges",
        "baseName": "loadBalancerSourceRanges",
        "type": "Array<string>"
    },
    {
        "name": "ports",
        "baseName": "ports",
        "type": "Array<V1ServicePort>"
    },
    {
        "name": "publishNotReadyAddresses",
        "baseName": "publishNotReadyAddresses",
        "type": "boolean"
    },
    {
        "name": "selector",
        "baseName": "selector",
        "type": "{ [key: string]: string; }"
    },
    {
        "name": "sessionAffinity",
        "baseName": "sessionAffinity",
        "type": "string"
    },
    {
        "name": "sessionAffinityConfig",
        "baseName": "sessionAffinityConfig",
        "type": "V1SessionAffinityConfig"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    }
];
exports.V1ServiceSpec = V1ServiceSpec;
//# sourceMappingURL=v1ServiceSpec.js.map