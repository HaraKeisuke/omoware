import FirebaseManager from '../FirebaseManager/FirebaseManager';
import LoginManager from '../Login/LoginManager';

export default class Initializer {
  constructor() {

  }

  initialize() {
    return Promise.all([
      FirebaseManager.getInstance().initialize(),
      LoginManager.getInstance().initialize()
    ]).catch((e) => {
      console.log(e);
    })
  }


  static instanse: Initializer = null;
  static getInstance(): Initializer {
    if (!this.instanse) {
      this.instanse = new Initializer();
    }
    return this.instanse;
  }
}
