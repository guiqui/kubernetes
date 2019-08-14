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
* RuleWithOperations is a tuple of Operations and Resources. It is recommended to make sure that all the tuple expansions are valid.
*/
export declare class V1beta1RuleWithOperations {
    /**
    * APIGroups is the API groups the resources belong to. \'*\' is all groups. If \'*\' is present, the length of the slice must be one. Required.
    */
    'apiGroups'?: Array<string>;
    /**
    * APIVersions is the API versions the resources belong to. \'*\' is all versions. If \'*\' is present, the length of the slice must be one. Required.
    */
    'apiVersions'?: Array<string>;
    /**
    * Operations is the operations the admission hook cares about - CREATE, UPDATE, or * for all operations. If \'*\' is present, the length of the slice must be one. Required.
    */
    'operations'?: Array<string>;
    /**
    * Resources is a list of resources this rule applies to.  For example: \'pods\' means pods. \'pods/log\' means the log subresource of pods. \'*\' means all resources, but not subresources. \'pods/_*\' means all subresources of pods. \'*_/scale\' means all scale subresources. \'*_/_*\' means all resources and their subresources.  If wildcard is present, the validation rule will ensure resources do not overlap with each other.  Depending on the enclosing object, subresources might not be allowed. Required.
    */
    'resources'?: Array<string>;
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