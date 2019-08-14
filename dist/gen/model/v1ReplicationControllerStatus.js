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
* ReplicationControllerStatus represents the current status of a replication controller.
*/
class V1ReplicationControllerStatus {
    static getAttributeTypeMap() {
        return V1ReplicationControllerStatus.attributeTypeMap;
    }
}
V1ReplicationControllerStatus.discriminator = undefined;
V1ReplicationControllerStatus.attributeTypeMap = [
    {
        "name": "availableReplicas",
        "baseName": "availableReplicas",
        "type": "number"
    },
    {
        "name": "conditions",
        "baseName": "conditions",
        "type": "Array<V1ReplicationControllerCondition>"
    },
    {
        "name": "fullyLabeledReplicas",
        "baseName": "fullyLabeledReplicas",
        "type": "number"
    },
    {
        "name": "observedGeneration",
        "baseName": "observedGeneration",
        "type": "number"
    },
    {
        "name": "readyReplicas",
        "baseName": "readyReplicas",
        "type": "number"
    },
    {
        "name": "replicas",
        "baseName": "replicas",
        "type": "number"
    }
];
exports.V1ReplicationControllerStatus = V1ReplicationControllerStatus;
//# sourceMappingURL=v1ReplicationControllerStatus.js.map