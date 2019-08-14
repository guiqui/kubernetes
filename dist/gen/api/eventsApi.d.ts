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
/// <reference types="node" />
import http = require('http');
import { V1APIGroup } from '../model/v1APIGroup';
import { Authentication } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum EventsApiApiKeys {
    BearerToken = 0
}
export declare class EventsApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'BearerToken': ApiKeyAuth;
    };
    constructor(basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: EventsApiApiKeys, value: string): void;
    /**
     * get information of a group
     */
    getAPIGroup(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: V1APIGroup;
    }>;
}
