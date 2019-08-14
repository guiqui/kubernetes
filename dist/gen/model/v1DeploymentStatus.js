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
* DeploymentStatus is the most recently observed status of the Deployment.
*/
class V1DeploymentStatus {
    static getAttributeTypeMap() {
        return V1DeploymentStatus.attributeTypeMap;
    }
}
V1DeploymentStatus.discriminator = undefined;
V1DeploymentStatus.attributeTypeMap = [
    {
        "name": "availableReplicas",
        "baseName": "availableReplicas",
        "type": "number"
    },
    {
        "name": "collisionCount",
        "baseName": "collisionCount",
        "type": "number"
    },
    {
        "name": "conditions",
        "baseName": "conditions",
        "type": "Array<V1DeploymentCondition>"
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
        "name": "unavailableReplicas",
        "baseName": "unavailableReplicas",
        "type": "number"
    },
    {
        "name": "updatedReplicas",
        "baseName": "updatedReplicas",
        "type": "number"
    }
];
exports.V1DeploymentStatus = V1DeploymentStatus;
//# sourceMappingURL=v1DeploymentStatus.js.map