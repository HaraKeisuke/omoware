"use strict";
// import * as Firebase from 'firebase/firebase-node';
const FirebaseManager_1 = require('../FirebaseManager/FirebaseManager');
const StorageManager_1 = require('../Core/StorageManager');
var Firebase = require("firebase");
class LoginManager {
    constructor() {
        this.user = null;
        this.userId = null;
        this.token = null;
    }
    initialize() {
        return StorageManager_1.default.getInstance().get("Credential").then((data) => {
            if (data) {
                this.user = data.user;
                this.token = data.token;
                this.userId = data.userId;
            }
            return Promise.resolve();
        }).catch((e) => {
            return Promise.reject(e);
        });
    }
    login(data) {
        this.userId = data.credentials.userId;
        this.token = data.credentials.token;
        let credential = Firebase.auth.FacebookAuthProvider.credential(data.credentials.token);
        return Firebase.auth().signInWithCredential(credential).then((user) => {
            // console.log("ログインに成功", user);
            this.user = user;
            return StorageManager_1.default.getInstance().set("Credential", {
                user: this.user,
                userId: this.userId,
                token: this.token
            });
        }).catch((e) => {
            console.log("ログイン失敗", e);
            return Promise.reject(e);
        });
    }
    logout() {
        console.log("ログアウトしました");
        this.clearCash();
        FirebaseManager_1.default.getInstance().firebase.auth().signOut();
    }
    clearCash() {
        this.user = null;
        this.userId = null;
        this.token = null;
    }
    facebook() {
    }
    isLogin() {
        return this.token;
    }
    static getInstance() {
        if (!this.instanse) {
            this.instanse = new LoginManager();
        }
        return this.instanse;
    }
}
LoginManager.instanse = null;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = LoginManager;
