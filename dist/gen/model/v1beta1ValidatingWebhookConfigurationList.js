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
* ValidatingWebhookConfigurationList is a list of ValidatingWebhookConfiguration.
*/
class V1beta1ValidatingWebhookConfigurationList {
    static getAttributeTypeMap() {
        return V1beta1ValidatingWebhookConfigurationList.attributeTypeMap;
    }
}
V1beta1ValidatingWebhookConfigurationList.discriminator = undefined;
V1beta1ValidatingWebhookConfigurationList.attributeTypeMap = [
    {
        "name": "apiVersion",
        "baseName": "apiVersion",
        "type": "string"
    },
    {
        "name": "items",
        "baseName": "items",
        "type": "Array<V1beta1ValidatingWebhookConfiguration>"
    },
    {
        "name": "kind",
        "baseName": "kind",
        "type": "string"
    },
    {
        "name": "metadata",
        "baseName": "metadata",
        "type": "V1ListMeta"
    }
];
exports.V1beta1ValidatingWebhookConfigurationList = V1beta1ValidatingWebhookConfigurationList;
//# sourceMappingURL=v1beta1ValidatingWebhookConfigurationList.js.map