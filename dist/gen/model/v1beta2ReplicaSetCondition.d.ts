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
* ReplicaSetCondition describes the state of a replica set at a certain point.
*/
export declare class V1beta2ReplicaSetCondition {
    /**
    * The last time the condition transitioned from one status to another.
    */
    'lastTransitionTime'?: Date;
    /**
    * A human readable message indicating details about the transition.
    */
    'message'?: string;
    /**
    * The reason for the condition\'s last transition.
    */
    'reason'?: string;
    /**
    * Status of the condition, one of True, False, Unknown.
    */
    'status': string;
    /**
    * Type of replica set condition.
    */
    'type': string;
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
