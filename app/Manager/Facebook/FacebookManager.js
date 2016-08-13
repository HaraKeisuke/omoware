"use strict";
class FacebookManager {
    constructor() {
        this.permissions = ["email", "user_friends", "public_profile"];
    }
    getPermissions() {
        return this.permissions;
    }
    searchUserFromName(name) {
        fetch();
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new FacebookManager();
        }
        return this.instance;
    }
}
FacebookManager.instance = null;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FacebookManager;
