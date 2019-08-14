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
import { V1ListMeta } from './v1ListMeta';
import { V1StatusDetails } from './v1StatusDetails';
/**
* Status is a return value for calls that don\'t return other objects.
*/
export declare class V1Status {
    /**
    * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
    */
    'apiVersion'?: string;
    /**
    * Suggested HTTP return code for this status, 0 if not set.
    */
    'code'?: number;
    'details'?: V1StatusDetails;
    /**
    * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
    */
    'kind'?: string;
    /**
    * A human-readable description of the status of this operation.
    */
    'message'?: string;
    'metadata'?: V1ListMeta;
    /**
    * A machine-readable description of why this operation is in the \"Failure\" status. If this value is empty there is no information available. A Reason clarifies an HTTP status code but does not override it.
    */
    'reason'?: string;
    /**
    * Status of the operation. One of: \"Success\" or \"Failure\". More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
    */
    'status'?: string;
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
