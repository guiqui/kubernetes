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
* Event represents a single event to a watched resource.
*/
class V1WatchEvent {
    static getAttributeTypeMap() {
        return V1WatchEvent.attributeTypeMap;
    }
}
V1WatchEvent.discriminator = undefined;
V1WatchEvent.attributeTypeMap = [
    {
        "name": "object",
        "baseName": "object",
        "type": "RuntimeRawExtension"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    }
];
exports.V1WatchEvent = V1WatchEvent;
//# sourceMappingURL=v1WatchEvent.js.map