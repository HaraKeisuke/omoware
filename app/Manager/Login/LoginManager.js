"use strict";
const Firebase = require('firebase');
const FirebaseManager_1 = require('../FirebaseManager/FirebaseManager');
class LoginManager {
    constructor() {
        this.user = null;
        this.token = null;
    }
    login(data) {
        // console.log("ログインしました", data);
        this.token = data.credentials.token;
        let credential = Firebase.auth.FacebookAuthProvider.credential(data.credentials.token);
        return Firebase.auth().signInWithCredential(credential).then((user) => {
            // console.log("ログインに成功", user);
            this.user = user;
            return Promise.resolve();
        }).catch((e) => {
            console.log("ログイン失敗", e);
            return Promise.reject(e);
        });
    }
    logout() {
        console.log("ログアウトしました");
        FirebaseManager_1.default.getInstance().firebase.auth().signOut();
    }
    facebook() {
    }
    isLogin() {
        return true;
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
