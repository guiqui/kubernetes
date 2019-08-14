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
* EventSeries contain information on series of events, i.e. thing that was/is happening continuously for some time.
*/
class V1EventSeries {
    static getAttributeTypeMap() {
        return V1EventSeries.attributeTypeMap;
    }
}
V1EventSeries.discriminator = undefined;
V1EventSeries.attributeTypeMap = [
    {
        "name": "count",
        "baseName": "count",
        "type": "number"
    },
    {
        "name": "lastObservedTime",
        "baseName": "lastObservedTime",
        "type": "Date"
    },
    {
        "name": "state",
        "baseName": "state",
        "type": "string"
    }
];
exports.V1EventSeries = V1EventSeries;
//# sourceMappingURL=v1EventSeries.js.map