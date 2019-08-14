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
var RbacAuthorizationApiApiKeys;
(function (RbacAuthorizationApiApiKeys) {
    RbacAuthorizationApiApiKeys[RbacAuthorizationApiApiKeys["BearerToken"] = 0] = "BearerToken";
})(RbacAuthorizationApiApiKeys = exports.RbacAuthorizationApiApiKeys || (exports.RbacAuthorizationApiApiKeys = {}));
class RbacAuthorizationApi {
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
        this.authentications[RbacAuthorizationApiApiKeys[key]].apiKey = value;
    }
    /**
     * get information of a group
     */
    getAPIGroup(options = { headers: {} }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/apis/rbac.authorization.k8s.io/';
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
                        body = models_1.ObjectSerializer.deserialize(body, "V1APIGroup");
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
exports.RbacAuthorizationApi = RbacAuthorizationApi;
//# sourceMappingURL=rbacAuthorizationApi.js.map