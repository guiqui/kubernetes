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
* ContainerStatus contains details for the current status of this container.
*/
class V1ContainerStatus {
    static getAttributeTypeMap() {
        return V1ContainerStatus.attributeTypeMap;
    }
}
V1ContainerStatus.discriminator = undefined;
V1ContainerStatus.attributeTypeMap = [
    {
        "name": "containerID",
        "baseName": "containerID",
        "type": "string"
    },
    {
        "name": "image",
        "baseName": "image",
        "type": "string"
    },
    {
        "name": "imageID",
        "baseName": "imageID",
        "type": "string"
    },
    {
        "name": "lastState",
        "baseName": "lastState",
        "type": "V1ContainerState"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "ready",
        "baseName": "ready",
        "type": "boolean"
    },
    {
        "name": "restartCount",
        "baseName": "restartCount",
        "type": "number"
    },
    {
        "name": "state",
        "baseName": "state",
        "type": "V1ContainerState"
    }
];
exports.V1ContainerStatus = V1ContainerStatus;
//# sourceMappingURL=v1ContainerStatus.js.map