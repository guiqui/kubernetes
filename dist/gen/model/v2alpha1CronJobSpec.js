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
* CronJobSpec describes how the job execution will look like and when it will actually run.
*/
class V2alpha1CronJobSpec {
    static getAttributeTypeMap() {
        return V2alpha1CronJobSpec.attributeTypeMap;
    }
}
V2alpha1CronJobSpec.discriminator = undefined;
V2alpha1CronJobSpec.attributeTypeMap = [
    {
        "name": "concurrencyPolicy",
        "baseName": "concurrencyPolicy",
        "type": "string"
    },
    {
        "name": "failedJobsHistoryLimit",
        "baseName": "failedJobsHistoryLimit",
        "type": "number"
    },
    {
        "name": "jobTemplate",
        "baseName": "jobTemplate",
        "type": "V2alpha1JobTemplateSpec"
    },
    {
        "name": "schedule",
        "baseName": "schedule",
        "type": "string"
    },
    {
        "name": "startingDeadlineSeconds",
        "baseName": "startingDeadlineSeconds",
        "type": "number"
    },
    {
        "name": "successfulJobsHistoryLimit",
        "baseName": "successfulJobsHistoryLimit",
        "type": "number"
    },
    {
        "name": "suspend",
        "baseName": "suspend",
        "type": "boolean"
    }
];
exports.V2alpha1CronJobSpec = V2alpha1CronJobSpec;
//# sourceMappingURL=v2alpha1CronJobSpec.js.map