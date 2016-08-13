
export default class FacebookManager {
  private permissions = ["email", "user_friends", "public_profile"];


  getPermissions() {
    return this.permissions;
  }



  static instance: FacebookManager = null;
  static getInstance(): FacebookManager {
    if (!this.instance) {
      this.instance = new FacebookManager();
    }
    return this.instance;
  }
}

interface FacebookUser {
  id: string;
  name: string;
  age: number;
  live: string;
  work: string;
}
