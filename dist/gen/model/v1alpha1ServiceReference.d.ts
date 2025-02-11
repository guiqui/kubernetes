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
/**
* ServiceReference holds a reference to Service.legacy.k8s.io
*/
export declare class V1alpha1ServiceReference {
    /**
    * `name` is the name of the service. Required
    */
    'name': string;
    /**
    * `namespace` is the namespace of the service. Required
    */
    'namespace': string;
    /**
    * `path` is an optional URL path which will be sent in any request to this service.
    */
    'path'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
