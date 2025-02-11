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
* WebhookThrottleConfig holds the configuration for throttling events
*/
export declare class V1alpha1WebhookThrottleConfig {
    /**
    * ThrottleBurst is the maximum number of events sent at the same moment default 15 QPS
    */
    'burst'?: number;
    /**
    * ThrottleQPS maximum number of batches per second default 10 QPS
    */
    'qps'?: number;
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
