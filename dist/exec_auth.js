"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const execa = require("execa");
class ExecAuth {
    constructor() {
        this.tokenCache = {};
        this.execFn = execa.sync;
    }
    isAuthProvider(user) {
        if (!user) {
            return false;
        }
        if (user.exec) {
            return true;
        }
        if (!user.authProvider) {
            return false;
        }
        return (user.authProvider.name === 'exec' || !!(user.authProvider.config && user.authProvider.config.exec));
    }
    getToken(user) {
        const credential = this.getCredential(user);
        if (!credential) {
            return null;
        }
        if (credential.status.token) {
            return `Bearer ${credential.status.token}`;
        }
        return null;
    }
    applyAuthentication(user, opts) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const credential = this.getCredential(user);
            if (!credential) {
                return;
            }
            if (credential.status.clientCertificateData) {
                opts.cert = credential.status.clientCertificateData;
            }
            if (credential.status.clientKeyData) {
                opts.key = credential.status.clientKeyData;
            }
        });
    }
    getCredential(user) {
        // TODO: Add a unit test for token caching.
        const cachedToken = this.tokenCache[user.name];
        if (cachedToken) {
            const date = Date.parse(cachedToken.status.expirationTimestamp);
            if (date > Date.now()) {
                return cachedToken;
            }
            this.tokenCache[user.name] = null;
        }
        let exec = null;
        if (user.authProvider && user.authProvider.config) {
            exec = user.authProvider.config.exec;
        }
        if (user.exec) {
            exec = user.exec;
        }
        if (!exec) {
            return null;
        }
        if (!exec.command) {
            throw new Error('No command was specified for exec authProvider!');
        }
        let opts = {};
        if (exec.env) {
            const env = process.env;
            exec.env.forEach((elt) => (env[elt.name] = elt.value));
            opts = Object.assign({}, opts, { env });
        }
        const result = this.execFn(exec.command, exec.args, opts);
        if (result.code === 0) {
            const obj = JSON.parse(result.stdout);
            this.tokenCache[user.name] = obj;
            return obj;
        }
        throw new Error(result.stderr);
    }
}
exports.ExecAuth = ExecAuth;
//# sourceMappingURL=exec_auth.js.map