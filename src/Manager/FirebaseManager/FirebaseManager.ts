import * as Firebase from 'firebase';
import config from "./config";

var firebase = require("firebase");

export default class FirebaseManager {
  firebase: Firebase.app.App = null;
  provider: Firebase.auth.FacebookAuthProvider = null;
  constructor() {
    this.firebase = Firebase.initializeApp(config);
    this.provider = new Firebase.auth.FacebookAuthProvider();
  }




  static instanse: FirebaseManager = null;
  static getInstance(): FirebaseManager {
    if (!this.instanse) {
      this.instanse = new FirebaseManager();
    }
    return this.instanse;
  }
}
