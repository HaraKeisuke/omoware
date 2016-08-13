"use strict";
const FirebaseManager_1 = require('../FirebaseManager/FirebaseManager');
const LoginManager_1 = require('../Login/LoginManager');
class Initializer {
    constructor() {
    }
    initialize() {
        return Promise.all([
            FirebaseManager_1.default.getInstance().initialize(),
            LoginManager_1.default.getInstance().initialize()
        ]).catch((e) => {
            console.log(e);
        });
    }
    static getInstance() {
        if (!this.instanse) {
            this.instanse = new Initializer();
        }
        return this.instanse;
    }
}
Initializer.instanse = null;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Initializer;
