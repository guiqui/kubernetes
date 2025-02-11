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
* ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
*/
class V1ObjectMeta {
    static getAttributeTypeMap() {
        return V1ObjectMeta.attributeTypeMap;
    }
}
V1ObjectMeta.discriminator = undefined;
V1ObjectMeta.attributeTypeMap = [
    {
        "name": "annotations",
        "baseName": "annotations",
        "type": "{ [key: string]: string; }"
    },
    {
        "name": "clusterName",
        "baseName": "clusterName",
        "type": "string"
    },
    {
        "name": "creationTimestamp",
        "baseName": "creationTimestamp",
        "type": "Date"
    },
    {
        "name": "deletionGracePeriodSeconds",
        "baseName": "deletionGracePeriodSeconds",
        "type": "number"
    },
    {
        "name": "deletionTimestamp",
        "baseName": "deletionTimestamp",
        "type": "Date"
    },
    {
        "name": "finalizers",
        "baseName": "finalizers",
        "type": "Array<string>"
    },
    {
        "name": "generateName",
        "baseName": "generateName",
        "type": "string"
    },
    {
        "name": "generation",
        "baseName": "generation",
        "type": "number"
    },
    {
        "name": "initializers",
        "baseName": "initializers",
        "type": "V1Initializers"
    },
    {
        "name": "labels",
        "baseName": "labels",
        "type": "{ [key: string]: string; }"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "namespace",
        "baseName": "namespace",
        "type": "string"
    },
    {
        "name": "ownerReferences",
        "baseName": "ownerReferences",
        "type": "Array<V1OwnerReference>"
    },
    {
        "name": "resourceVersion",
        "baseName": "resourceVersion",
        "type": "string"
    },
    {
        "name": "selfLink",
        "baseName": "selfLink",
        "type": "string"
    },
    {
        "name": "uid",
        "baseName": "uid",
        "type": "string"
    }
];
exports.V1ObjectMeta = V1ObjectMeta;
//# sourceMappingURL=v1ObjectMeta.js.map