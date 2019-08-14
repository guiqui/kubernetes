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
const tslib_1 = require("tslib");
const localVarRequest = require("request");
const models_1 = require("../model/models");
const models_2 = require("../model/models");
let defaultBasePath = 'http://localhost';
// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================
var AuthorizationV1beta1ApiApiKeys;
(function (AuthorizationV1beta1ApiApiKeys) {
    AuthorizationV1beta1ApiApiKeys[AuthorizationV1beta1ApiApiKeys["BearerToken"] = 0] = "BearerToken";
})(AuthorizationV1beta1ApiApiKeys = exports.AuthorizationV1beta1ApiApiKeys || (exports.AuthorizationV1beta1ApiApiKeys = {}));
class AuthorizationV1beta1Api {
    constructor(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new models_1.VoidAuth(),
            'BearerToken': new models_2.ApiKeyAuth('header', 'authorization'),
        };
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    set useQuerystring(value) {
        this._useQuerystring = value;
    }
    set basePath(basePath) {
        this._basePath = basePath;
    }
    get basePath() {
        return this._basePath;
    }
    setDefaultAuthentication(auth) {
        this.authentications.default = auth;
    }
    setApiKey(key, value) {
        this.authentications[AuthorizationV1beta1ApiApiKeys[key]].apiKey = value;
    }
    /**
     * create a LocalSubjectAccessReview
     * @param namespace object name and auth scope, such as for teams and projects
     * @param body
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param includeUninitialized If IncludeUninitialized is specified, the object may be returned without completing initialization.
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     */
    createNamespacedLocalSubjectAccessReview(namespace, body, dryRun, includeUninitialized, pretty, options = { headers: {} }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/apis/authorization.k8s.io/v1beta1/namespaces/{namespace}/localsubjectaccessreviews'
                .replace('{' + 'namespace' + '}', encodeURIComponent(String(namespace)));
            let localVarQueryParameters = {};
            let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
            let localVarFormParams = {};
            // verify required parameter 'namespace' is not null or undefined
            if (namespace === null || namespace === undefined) {
                throw new Error('Required parameter namespace was null or undefined when calling createNamespacedLocalSubjectAccessReview.');
            }
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new Error('Required parameter body was null or undefined when calling createNamespacedLocalSubjectAccessReview.');
            }
            if (dryRun !== undefined) {
                localVarQueryParameters['dryRun'] = models_1.ObjectSerializer.serialize(dryRun, "string");
            }
            if (includeUninitialized !== undefined) {
                localVarQueryParameters['includeUninitialized'] = models_1.ObjectSerializer.serialize(includeUninitialized, "boolean");
            }
            if (pretty !== undefined) {
                localVarQueryParameters['pretty'] = models_1.ObjectSerializer.serialize(pretty, "string");
            }
            Object.assign(localVarHeaderParams, options.headers);
            let localVarUseFormData = false;
            let localVarRequestOptions = {
                method: 'POST',
                qs: localVarQueryParameters,
                headers: localVarHeaderParams,
                uri: localVarPath,
                useQuerystring: this._useQuerystring,
                json: true,
                body: models_1.ObjectSerializer.serialize(body, "V1beta1LocalSubjectAccessReview")
            };
            this.authentications.BearerToken.applyToRequest(localVarRequestOptions);
            this.authentications.default.applyToRequest(localVarRequestOptions);
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    localVarRequestOptions.formData = localVarFormParams;
                }
                else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        body = models_1.ObjectSerializer.deserialize(body, "V1beta1LocalSubjectAccessReview");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        }
                        else {
                            reject({ response: response, body: body });
                        }
                    }
                });
            });
        });
    }
    /**
     * create a SelfSubjectAccessReview
     * @param body
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param includeUninitialized If IncludeUninitialized is specified, the object may be returned without completing initialization.
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     */
    createSelfSubjectAccessReview(body, dryRun, includeUninitialized, pretty, options = { headers: {} }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/apis/authorization.k8s.io/v1beta1/selfsubjectaccessreviews';
            let localVarQueryParameters = {};
            let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
            let localVarFormParams = {};
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new Error('Required parameter body was null or undefined when calling createSelfSubjectAccessReview.');
            }
            if (dryRun !== undefined) {
                localVarQueryParameters['dryRun'] = models_1.ObjectSerializer.serialize(dryRun, "string");
            }
            if (includeUninitialized !== undefined) {
                localVarQueryParameters['includeUninitialized'] = models_1.ObjectSerializer.serialize(includeUninitialized, "boolean");
            }
            if (pretty !== undefined) {
                localVarQueryParameters['pretty'] = models_1.ObjectSerializer.serialize(pretty, "string");
            }
            Object.assign(localVarHeaderParams, options.headers);
            let localVarUseFormData = false;
            let localVarRequestOptions = {
                method: 'POST',
                qs: localVarQueryParameters,
                headers: localVarHeaderParams,
                uri: localVarPath,
                useQuerystring: this._useQuerystring,
                json: true,
                body: models_1.ObjectSerializer.serialize(body, "V1beta1SelfSubjectAccessReview")
            };
            this.authentications.BearerToken.applyToRequest(localVarRequestOptions);
            this.authentications.default.applyToRequest(localVarRequestOptions);
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    localVarRequestOptions.formData = localVarFormParams;
                }
                else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        body = models_1.ObjectSerializer.deserialize(body, "V1beta1SelfSubjectAccessReview");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        }
                        else {
                            reject({ response: response, body: body });
                        }
                    }
                });
            });
        });
    }
    /**
     * create a SelfSubjectRulesReview
     * @param body
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param includeUninitialized If IncludeUninitialized is specified, the object may be returned without completing initialization.
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     */
    createSelfSubjectRulesReview(body, dryRun, includeUninitialized, pretty, options = { headers: {} }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/apis/authorization.k8s.io/v1beta1/selfsubjectrulesreviews';
            let localVarQueryParameters = {};
            let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
            let localVarFormParams = {};
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new Error('Required parameter body was null or undefined when calling createSelfSubjectRulesReview.');
            }
            if (dryRun !== undefined) {
                localVarQueryParameters['dryRun'] = models_1.ObjectSerializer.serialize(dryRun, "string");
            }
            if (includeUninitialized !== undefined) {
                localVarQueryParameters['includeUninitialized'] = models_1.ObjectSerializer.serialize(includeUninitialized, "boolean");
            }
            if (pretty !== undefined) {
                localVarQueryParameters['pretty'] = models_1.ObjectSerializer.serialize(pretty, "string");
            }
            Object.assign(localVarHeaderParams, options.headers);
            let localVarUseFormData = false;
            let localVarRequestOptions = {
                method: 'POST',
                qs: localVarQueryParameters,
                headers: localVarHeaderParams,
                uri: localVarPath,
                useQuerystring: this._useQuerystring,
                json: true,
                body: models_1.ObjectSerializer.serialize(body, "V1beta1SelfSubjectRulesReview")
            };
            this.authentications.BearerToken.applyToRequest(localVarRequestOptions);
            this.authentications.default.applyToRequest(localVarRequestOptions);
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    localVarRequestOptions.formData = localVarFormParams;
                }
                else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        body = models_1.ObjectSerializer.deserialize(body, "V1beta1SelfSubjectRulesReview");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        }
                        else {
                            reject({ response: response, body: body });
                        }
                    }
                });
            });
        });
    }
    /**
     * create a SubjectAccessReview
     * @param body
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param includeUninitialized If IncludeUninitialized is specified, the object may be returned without completing initialization.
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     */
    createSubjectAccessReview(body, dryRun, includeUninitialized, pretty, options = { headers: {} }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/apis/authorization.k8s.io/v1beta1/subjectaccessreviews';
            let localVarQueryParameters = {};
            let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
            let localVarFormParams = {};
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new Error('Required parameter body was null or undefined when calling createSubjectAccessReview.');
            }
            if (dryRun !== undefined) {
                localVarQueryParameters['dryRun'] = models_1.ObjectSerializer.serialize(dryRun, "string");
            }
            if (includeUninitialized !== undefined) {
                localVarQueryParameters['includeUninitialized'] = models_1.ObjectSerializer.serialize(includeUninitialized, "boolean");
            }
            if (pretty !== undefined) {
                localVarQueryParameters['pretty'] = models_1.ObjectSerializer.serialize(pretty, "string");
            }
            Object.assign(localVarHeaderParams, options.headers);
            let localVarUseFormData = false;
            let localVarRequestOptions = {
                method: 'POST',
                qs: localVarQueryParameters,
                headers: localVarHeaderParams,
                uri: localVarPath,
                useQuerystring: this._useQuerystring,
                json: true,
                body: models_1.ObjectSerializer.serialize(body, "V1beta1SubjectAccessReview")
            };
            this.authentications.BearerToken.applyToRequest(localVarRequestOptions);
            this.authentications.default.applyToRequest(localVarRequestOptions);
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    localVarRequestOptions.formData = localVarFormParams;
                }
                else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        body = models_1.ObjectSerializer.deserialize(body, "V1beta1SubjectAccessReview");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        }
                        else {
                            reject({ response: response, body: body });
                        }
                    }
                });
            });
        });
    }
    /**
     * get available resources
     */
    getAPIResources(options = { headers: {} }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/apis/authorization.k8s.io/v1beta1/';
            let localVarQueryParameters = {};
            let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
            let localVarFormParams = {};
            Object.assign(localVarHeaderParams, options.headers);
            let localVarUseFormData = false;
            let localVarRequestOptions = {
                method: 'GET',
                qs: localVarQueryParameters,
                headers: localVarHeaderParams,
                uri: localVarPath,
                useQuerystring: this._useQuerystring,
                json: true,
            };
            this.authentications.BearerToken.applyToRequest(localVarRequestOptions);
            this.authentications.default.applyToRequest(localVarRequestOptions);
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    localVarRequestOptions.formData = localVarFormParams;
                }
                else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        body = models_1.ObjectSerializer.deserialize(body, "V1APIResourceList");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        }
                        else {
                            reject({ response: response, body: body });
                        }
                    }
                });
            });
        });
    }
}
exports.AuthorizationV1beta1Api = AuthorizationV1beta1Api;
//# sourceMappingURL=authorizationV1beta1Api.js.map