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
* PodDNSConfig defines the DNS parameters of a pod in addition to those generated from DNSPolicy.
*/
class V1PodDNSConfig {
    static getAttributeTypeMap() {
        return V1PodDNSConfig.attributeTypeMap;
    }
}
V1PodDNSConfig.discriminator = undefined;
V1PodDNSConfig.attributeTypeMap = [
    {
        "name": "nameservers",
        "baseName": "nameservers",
        "type": "Array<string>"
    },
    {
        "name": "options",
        "baseName": "options",
        "type": "Array<V1PodDNSConfigOption>"
    },
    {
        "name": "searches",
        "baseName": "searches",
        "type": "Array<string>"
    }
];
exports.V1PodDNSConfig = V1PodDNSConfig;
//# sourceMappingURL=v1PodDNSConfig.js.map