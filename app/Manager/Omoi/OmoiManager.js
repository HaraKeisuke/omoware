"use strict";
const FirebaseManager_1 = require('../FirebaseManager/FirebaseManager');
const LoginManager_1 = require('../Login/LoginManager');
class OmoiManager {
    constructor() {
    }
    addOmoi(id, name) {
        console.log("UserId", LoginManager_1.default.getInstance().userId);
        return FirebaseManager_1.default.getInstance().firebase.database().ref("users/" + LoginManager_1.default.getInstance().userId).push({ id: id, name: name });
    }
    getOmoi() {
        return FirebaseManager_1.default.getInstance().firebase.database().ref("users/" + LoginManager_1.default.getInstance().userId).once('value');
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new OmoiManager();
        }
        return this.instance;
    }
}
OmoiManager.instance = null;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = OmoiManager;
