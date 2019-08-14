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
* The node this Taint is attached to has the \"effect\" on any pod that does not tolerate the Taint.
*/
class V1Taint {
    static getAttributeTypeMap() {
        return V1Taint.attributeTypeMap;
    }
}
V1Taint.discriminator = undefined;
V1Taint.attributeTypeMap = [
    {
        "name": "effect",
        "baseName": "effect",
        "type": "string"
    },
    {
        "name": "key",
        "baseName": "key",
        "type": "string"
    },
    {
        "name": "timeAdded",
        "baseName": "timeAdded",
        "type": "Date"
    },
    {
        "name": "value",
        "baseName": "value",
        "type": "string"
    }
];
exports.V1Taint = V1Taint;
//# sourceMappingURL=v1Taint.js.map