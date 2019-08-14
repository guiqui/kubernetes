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
* JobStatus represents the current state of a Job.
*/
class V1JobStatus {
    static getAttributeTypeMap() {
        return V1JobStatus.attributeTypeMap;
    }
}
V1JobStatus.discriminator = undefined;
V1JobStatus.attributeTypeMap = [
    {
        "name": "active",
        "baseName": "active",
        "type": "number"
    },
    {
        "name": "completionTime",
        "baseName": "completionTime",
        "type": "Date"
    },
    {
        "name": "conditions",
        "baseName": "conditions",
        "type": "Array<V1JobCondition>"
    },
    {
        "name": "failed",
        "baseName": "failed",
        "type": "number"
    },
    {
        "name": "startTime",
        "baseName": "startTime",
        "type": "Date"
    },
    {
        "name": "succeeded",
        "baseName": "succeeded",
        "type": "number"
    }
];
exports.V1JobStatus = V1JobStatus;
//# sourceMappingURL=v1JobStatus.js.map