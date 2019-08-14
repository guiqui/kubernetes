"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
class OpenIDConnectAuth {
    isAuthProvider(user) {
        if (!user.authProvider) {
            return false;
        }
        return user.authProvider.name === 'oidc';
    }
    getToken(user) {
        if (!user.authProvider.config || !user.authProvider.config['id-token']) {
            return null;
        }
        // TODO: Handle expiration and refresh here...
        // TODO: Extract the 'Bearer ' to config.ts?
        return `Bearer ${user.authProvider.config['id-token']}`;
    }
    applyAuthentication(user, opts) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // pass
        });
    }
}
exports.OpenIDConnectAuth = OpenIDConnectAuth;
//# sourceMappingURL=oidc_auth.js.map