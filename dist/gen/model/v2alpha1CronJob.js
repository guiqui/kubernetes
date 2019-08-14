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
* CronJob represents the configuration of a single cron job.
*/
class V2alpha1CronJob {
    static getAttributeTypeMap() {
        return V2alpha1CronJob.attributeTypeMap;
    }
}
V2alpha1CronJob.discriminator = undefined;
V2alpha1CronJob.attributeTypeMap = [
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
        "type": "V2alpha1CronJobSpec"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "V2alpha1CronJobStatus"
    }
];
exports.V2alpha1CronJob = V2alpha1CronJob;
//# sourceMappingURL=v2alpha1CronJob.js.map