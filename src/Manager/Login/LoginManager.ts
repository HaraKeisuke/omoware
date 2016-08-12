import * as Firebase from 'firebase';
import FirebaseManager from '../FirebaseManager/FirebaseManager';


export default class LoginManager {
  user: Firebase.User = null;
  token: string = null;

  constructor() {

  }

  login(data: FacebookLoginData) {
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
    FirebaseManager.getInstance().firebase.auth().signOut();
  }

  facebook() {

  }

  isLogin() {
    return true;
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
