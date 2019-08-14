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
* StatefulSetStatus represents the current state of a StatefulSet.
*/
class V1StatefulSetStatus {
    static getAttributeTypeMap() {
        return V1StatefulSetStatus.attributeTypeMap;
    }
}
V1StatefulSetStatus.discriminator = undefined;
V1StatefulSetStatus.attributeTypeMap = [
    {
        "name": "collisionCount",
        "baseName": "collisionCount",
        "type": "number"
    },
    {
        "name": "conditions",
        "baseName": "conditions",
        "type": "Array<V1StatefulSetCondition>"
    },
    {
        "name": "currentReplicas",
        "baseName": "currentReplicas",
        "type": "number"
    },
    {
        "name": "currentRevision",
        "baseName": "currentRevision",
        "type": "string"
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
    },
    {
        "name": "updateRevision",
        "baseName": "updateRevision",
        "type": "string"
    },
    {
        "name": "updatedReplicas",
        "baseName": "updatedReplicas",
        "type": "number"
    }
];
exports.V1StatefulSetStatus = V1StatefulSetStatus;
//# sourceMappingURL=v1StatefulSetStatus.js.map