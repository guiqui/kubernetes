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
* NodeAddress contains information for the node\'s address.
*/
class V1NodeAddress {
    static getAttributeTypeMap() {
        return V1NodeAddress.attributeTypeMap;
    }
}
V1NodeAddress.discriminator = undefined;
V1NodeAddress.attributeTypeMap = [
    {
        "name": "address",
        "baseName": "address",
        "type": "string"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    }
];
exports.V1NodeAddress = V1NodeAddress;
//# sourceMappingURL=v1NodeAddress.js.map