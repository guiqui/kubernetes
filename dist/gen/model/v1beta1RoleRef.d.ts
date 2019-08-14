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
* RoleRef contains information that points to the role being used
*/
export declare class V1beta1RoleRef {
    /**
    * APIGroup is the group for the resource being referenced
    */
    'apiGroup': string;
    /**
    * Kind is the type of resource being referenced
    */
    'kind': string;
    /**
    * Name is the name of resource being referenced
    */
    'name': string;
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
