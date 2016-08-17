import LoginManager from '../Login/LoginManager';

export default class FacebookManager {
  private permissions = ["email", "user_friends", "public_profile"];


  getPermissions() {
    return this.permissions;
  }


  searchUserFromName(name: string) {
    return fetch("https://graph.facebook.com/search?q=" + name + "&type=user&access_token=" + LoginManager.getInstance().token).then((result) => {
      console.log(result);
      return result.json();
    }).then((obj) => {
      console.log("結果" + JSON.stringify(obj));

      return Promise.resolve(obj.data);
    }).catch((e) => {
      return Promise.reject(e);
    });
  }


  getUserThumb(userId: string, type?: "small" | "normal" | "album" | "large" | "square") {
    if (!type) { type = "large" }
    return "https://graph.facebook.com/" + userId + "/picture?type=" + type + "&access_token=" + LoginManager.getInstance().token;
  }

  //https://graph.facebook.com/search?q=kimurashigeki&type=user&access_token=EAART9AAOEqYBACmFOdjarpZAcXbJideblIsclzXWYwBFvq2FGAyHLZCyvGtPXZAazZA10G4PZAfS7xQ3XoPQW92lJN5gYFnsFLm7ZCyszfU7uL1ZBTZBOSzyLx3n2gqgLByNaboAIAKWobZAMQEoADBOelfceZAbtZA663ke8VN7PjitEtRYz2qKYHcnY77B45w8z3eOcjv5L8ZBVwZDZD&fields=name
  //https://graph.facebook.com/1163216933740664?access_token=EAART9AAOEqYBACmFOdjarpZAcXbJideblIsclzXWYwBFvq2FGAyHLZCyvGtPXZAazZA10G4PZAfS7xQ3XoPQW92lJN5gYFnsFLm7ZCyszfU7uL1ZBTZBOSzyLx3n2gqgLByNaboAIAKWobZAMQEoADBOelfceZAbtZA663ke8VN7PjitEtRYz2qKYHcnY77B45w8z3eOcjv5L8ZBVwZDZD&fields=first_name
  //graph.facebook.com/1163216933740664/picture?access_token=EAART9AAOEqYBACmFOdjarpZAcXbJideblIsclzXWYwBFvq2FGAyHLZCyvGtPXZAazZA10G4PZAfS7xQ3XoPQW92lJN5gYFnsFLm7ZCyszfU7uL1ZBTZBOSzyLx3n2gqgLByNaboAIAKWobZAMQEoADBOelfceZAbtZA663ke8VN7PjitEtRYz2qKYHcnY77B45w8z3eOcjv5L8ZBVwZDZD&fields=first_name


  static instance: FacebookManager = null;
  static getInstance(): FacebookManager {
    if (!this.instance) {
      this.instance = new FacebookManager();
    }
    return this.instance;
  }
}

export interface FacebookUser {
  id: string;
  name: string;
  age?: number;
  live?: string;
  work?: string;
}
