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
* Job represents the configuration of a single job.
*/
class V1Job {
    static getAttributeTypeMap() {
        return V1Job.attributeTypeMap;
    }
}
V1Job.discriminator = undefined;
V1Job.attributeTypeMap = [
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
        "type": "V1JobSpec"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "V1JobStatus"
    }
];
exports.V1Job = V1Job;
//# sourceMappingURL=v1Job.js.map