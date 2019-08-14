"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const proc = require("child_process");
const jsonpath = require("jsonpath-plus");
class CloudAuth {
    isAuthProvider(user) {
        if (!user || !user.authProvider) {
            return false;
        }
        return user.authProvider.name === 'azure' || user.authProvider.name === 'gcp';
    }
    getToken(user) {
        const config = user.authProvider.config;
        if (this.isExpired(config)) {
            this.updateAccessToken(config);
        }
        return 'Bearer ' + config['access-token'];
    }
    applyAuthentication(user, opts) {
        // pass
    }
    isExpired(config) {
        const token = config['access-token'];
        const expiry = config.expiry;
        if (!token) {
            return true;
        }
        if (!expiry) {
            return false;
        }
        const expiration = Date.parse(expiry);
        if (expiration < Date.now()) {
            return true;
        }
        return false;
    }
    updateAccessToken(config) {
        let cmd = config['cmd-path'];
        if (!cmd) {
            throw new Error('Token is expired!');
        }
        const args = config['cmd-args'];
        if (args) {
            cmd = cmd + ' ' + args;
        }
        // TODO: Cache to file?
        // TODO: do this asynchronously
        let output;
        try {
            output = proc.execSync(cmd);
        }
        catch (err) {
            throw new Error('Failed to refresh token: ' + err.message);
        }
        const resultObj = JSON.parse(output);
        const tokenPathKeyInConfig = config['token-key'];
        const expiryPathKeyInConfig = config['expiry-key'];
        // Format in file is {<query>}, so slice it out and add '$'
        const tokenPathKey = '$' + tokenPathKeyInConfig.slice(1, -1);
        const expiryPathKey = '$' + expiryPathKeyInConfig.slice(1, -1);
        config['access-token'] = jsonpath.JSONPath(tokenPathKey, resultObj);
        config.expiry = jsonpath.JSONPath(expiryPathKey, resultObj);
    }
}
exports.CloudAuth = CloudAuth;
//# sourceMappingURL=cloud_auth.js.map