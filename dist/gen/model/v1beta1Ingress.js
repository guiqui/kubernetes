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
* Ingress is a collection of rules that allow inbound connections to reach the endpoints defined by a backend. An Ingress can be configured to give services externally-reachable urls, load balance traffic, terminate SSL, offer name based virtual hosting etc.
*/
class V1beta1Ingress {
    static getAttributeTypeMap() {
        return V1beta1Ingress.attributeTypeMap;
    }
}
V1beta1Ingress.discriminator = undefined;
V1beta1Ingress.attributeTypeMap = [
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
        "type": "V1beta1IngressSpec"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "V1beta1IngressStatus"
    }
];
exports.V1beta1Ingress = V1beta1Ingress;
//# sourceMappingURL=v1beta1Ingress.js.map