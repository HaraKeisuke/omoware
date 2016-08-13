import FirebaseManager from '../FirebaseManager/FirebaseManager';
import LoginManager from '../Login/LoginManager';

export default class OmoiManager {
  constructor() {

  }


  addOmoi(id: string, name: string) {
    console.log("UserId", LoginManager.getInstance().userId);
    return FirebaseManager.getInstance().firebase.database().ref("users/" + LoginManager.getInstance().userId).push({ id: id, name: name });
  }

  getOmoi() {
    return FirebaseManager.getInstance().firebase.database().ref("users/" + LoginManager.getInstance().userId).once('value');
  }



  static instance: OmoiManager = null;
  static getInstance(): OmoiManager {
    if (!this.instance) {
      this.instance = new OmoiManager();
    }
    return this.instance;
  }
}
