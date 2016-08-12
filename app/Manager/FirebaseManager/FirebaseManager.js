"use strict";
const Firebase = require('firebase');
const config_1 = require("./config");
var firebase = require("firebase");
class FirebaseManager {
    constructor() {
        this.firebase = null;
        this.provider = null;
        this.firebase = Firebase.initializeApp(config_1.default);
        this.provider = new Firebase.auth.FacebookAuthProvider();
    }
    static getInstance() {
        if (!this.instanse) {
            this.instanse = new FirebaseManager();
        }
        return this.instanse;
    }
}
FirebaseManager.instanse = null;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FirebaseManager;
