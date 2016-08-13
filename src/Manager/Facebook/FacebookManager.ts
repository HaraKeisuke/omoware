
export default class FacebookManager {
  private permissions = ["email", "user_friends", "public_profile"];


  getPermissions() {
    return this.permissions;
  }


  searchUserFromName(name: string) {
    fetch("http://")
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
  id: number;
  name: string;
  age?: number;
  live?: string;
  work?: string;
}
