/// <reference types="node" />
import https = require('https');
import request = require('request');
import { Authenticator } from './auth';
import { User } from './config_types';
export declare class CloudAuth implements Authenticator {
    isAuthProvider(user: User): boolean;
    getToken(user: User): string | null;
    applyAuthentication(user: User, opts: request.Options | https.RequestOptions): void;
    private isExpired;
    private updateAccessToken;
}
