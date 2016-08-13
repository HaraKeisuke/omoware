// import * as Firebase from 'firebase/firebase-node';
import FirebaseManager from '../FirebaseManager/FirebaseManager';
import StorageManager from '../Core/StorageManager';

var Firebase = require("firebase");

export default class LoginManager {
  user: any = null;
  userId: string = null;
  token: string = null;

  constructor() {

  }

  initialize() {
    return StorageManager.getInstance().get("Credential").then((data) => {
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

  login(data: FacebookLoginData) {
    this.userId = data.credentials.userId;
    this.token = data.credentials.token;
    let credential = Firebase.auth.FacebookAuthProvider.credential(data.credentials.token);
    return Firebase.auth().signInWithCredential(credential).then((user) => {
      // console.log("ログインに成功", user);
      this.user = user;
      return StorageManager.getInstance().set("Credential", {
        user: this.user,
        userId: this.userId,
        token: this.token
      })
    }).catch((e) => {
      console.log("ログイン失敗", e);
      return Promise.reject(e);
    });
  }

  logout() {
    console.log("ログアウトしました");
    this.clearCash();
    FirebaseManager.getInstance().firebase.auth().signOut();
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


  static instanse: LoginManager = null;
  static getInstance(): LoginManager {
    if (!this.instanse) {
      this.instanse = new LoginManager();
    }
    return this.instanse;
  }
}

export interface FacebookLoginData {
  declinedPermissions: any[],
  missingPermissions: any[],
  credentials:
  {
    tokenExpirationDate: string,
    permissions: string[],
    userId: string,
    token: string
  }
}
