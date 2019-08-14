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
import { PolicyV1beta1IDRange } from './policyV1beta1IDRange';
/**
* RunAsGroupStrategyOptions defines the strategy type and any options used to create the strategy.
*/
export declare class PolicyV1beta1RunAsGroupStrategyOptions {
    /**
    * ranges are the allowed ranges of gids that may be used. If you would like to force a single gid then supply a single range with the same start and end. Required for MustRunAs.
    */
    'ranges'?: Array<PolicyV1beta1IDRange>;
    /**
    * rule is the strategy that will dictate the allowable RunAsGroup values that may be set.
    */
    'rule': string;
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
