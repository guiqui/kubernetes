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
* LimitRangeItem defines a min/max usage limit for any resource that matches on kind.
*/
class V1LimitRangeItem {
    static getAttributeTypeMap() {
        return V1LimitRangeItem.attributeTypeMap;
    }
}
V1LimitRangeItem.discriminator = undefined;
V1LimitRangeItem.attributeTypeMap = [
    {
        "name": "_default",
        "baseName": "default",
        "type": "{ [key: string]: string; }"
    },
    {
        "name": "defaultRequest",
        "baseName": "defaultRequest",
        "type": "{ [key: string]: string; }"
    },
    {
        "name": "max",
        "baseName": "max",
        "type": "{ [key: string]: string; }"
    },
    {
        "name": "maxLimitRequestRatio",
        "baseName": "maxLimitRequestRatio",
        "type": "{ [key: string]: string; }"
    },
    {
        "name": "min",
        "baseName": "min",
        "type": "{ [key: string]: string; }"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    }
];
exports.V1LimitRangeItem = V1LimitRangeItem;
//# sourceMappingURL=v1LimitRangeItem.js.map