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
import { V1IPBlock } from './v1IPBlock';
import { V1LabelSelector } from './v1LabelSelector';
/**
* NetworkPolicyPeer describes a peer to allow traffic from. Only certain combinations of fields are allowed
*/
export declare class V1NetworkPolicyPeer {
    'ipBlock'?: V1IPBlock;
    'namespaceSelector'?: V1LabelSelector;
    'podSelector'?: V1LabelSelector;
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
