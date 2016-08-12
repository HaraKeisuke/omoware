import FirebaseManager from '../FirebaseManager/FirebaseManager';

export default class Initializer {
  constructor() {

  }

  initialize(){
    return Promise.resolve();
  }


  static instanse: Initializer = null;
  static getInstance(): Initializer {
    if (!this.instanse) {
      this.instanse = new Initializer();
    }
    return this.instanse;
  }
}
