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
* ResourceQuota sets aggregate quota restrictions enforced per namespace
*/
class V1ResourceQuota {
    static getAttributeTypeMap() {
        return V1ResourceQuota.attributeTypeMap;
    }
}
V1ResourceQuota.discriminator = undefined;
V1ResourceQuota.attributeTypeMap = [
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
        "type": "V1ResourceQuotaSpec"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "V1ResourceQuotaStatus"
    }
];
exports.V1ResourceQuota = V1ResourceQuota;
//# sourceMappingURL=v1ResourceQuota.js.map