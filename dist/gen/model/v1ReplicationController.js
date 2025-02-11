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
* ReplicationController represents the configuration of a replication controller.
*/
class V1ReplicationController {
    static getAttributeTypeMap() {
        return V1ReplicationController.attributeTypeMap;
    }
}
V1ReplicationController.discriminator = undefined;
V1ReplicationController.attributeTypeMap = [
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
        "type": "V1ReplicationControllerSpec"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "V1ReplicationControllerStatus"
    }
];
exports.V1ReplicationController = V1ReplicationController;
//# sourceMappingURL=v1ReplicationController.js.map