// import * as Firebase from 'firebase/firebase-node';
import config from "./config";

var Firebase = require("firebase");

export default class FirebaseManager {
  firebase = null;
  provider = null;
  constructor() {
    this.firebase = Firebase.initializeApp(config);
    this.provider = new Firebase.auth.FacebookAuthProvider();
  }

  initialize() {
    return Promise.resolve();
  }


  static instanse: FirebaseManager = null;
  static getInstance(): FirebaseManager {
    if (!this.instanse) {
      this.instanse = new FirebaseManager();
    }
    return this.instanse;
  }
}
