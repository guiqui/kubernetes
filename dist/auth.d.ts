/// <reference types="node" />
import https = require('https');
import request = require('request');
import { User } from './config_types';
export interface Authenticator {
    isAuthProvider(user: User): boolean;
    getToken(user: User): string | null;
    applyAuthentication(user: User, opts: request.Options | https.RequestOptions): any;
}
