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
* ContainerStateWaiting is a waiting state of a container.
*/
class V1ContainerStateWaiting {
    static getAttributeTypeMap() {
        return V1ContainerStateWaiting.attributeTypeMap;
    }
}
V1ContainerStateWaiting.discriminator = undefined;
V1ContainerStateWaiting.attributeTypeMap = [
    {
        "name": "message",
        "baseName": "message",
        "type": "string"
    },
    {
        "name": "reason",
        "baseName": "reason",
        "type": "string"
    }
];
exports.V1ContainerStateWaiting = V1ContainerStateWaiting;
//# sourceMappingURL=v1ContainerStateWaiting.js.map