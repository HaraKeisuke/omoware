"use strict";
const LoginManager_1 = require('../Login/LoginManager');
class FacebookManager {
    constructor() {
        this.permissions = ["email", "user_friends", "public_profile"];
    }
    getPermissions() {
        return this.permissions;
    }
    searchUserFromName(name) {
        return fetch("https://graph.facebook.com/search?q=" + name + "&type=user&access_token=" + LoginManager_1.default.getInstance().token).then((result) => {
            console.log(result);
            return result.json();
        }).then((obj) => {
            console.log("結果" + JSON.stringify(obj));
            return Promise.resolve(obj.data);
        }).catch((e) => {
            return Promise.reject(e);
        });
    }
    getUserThumb(userId, type) {
        if (!type) {
            type = "large";
        }
        return "https://graph.facebook.com/" + userId + "/picture?type=" + type + "&access_token=" + LoginManager_1.default.getInstance().token;
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new FacebookManager();
        }
        return this.instance;
    }
}
//https://graph.facebook.com/search?q=kimurashigeki&type=user&access_token=EAART9AAOEqYBACmFOdjarpZAcXbJideblIsclzXWYwBFvq2FGAyHLZCyvGtPXZAazZA10G4PZAfS7xQ3XoPQW92lJN5gYFnsFLm7ZCyszfU7uL1ZBTZBOSzyLx3n2gqgLByNaboAIAKWobZAMQEoADBOelfceZAbtZA663ke8VN7PjitEtRYz2qKYHcnY77B45w8z3eOcjv5L8ZBVwZDZD&fields=name
//https://graph.facebook.com/1163216933740664?access_token=EAART9AAOEqYBACmFOdjarpZAcXbJideblIsclzXWYwBFvq2FGAyHLZCyvGtPXZAazZA10G4PZAfS7xQ3XoPQW92lJN5gYFnsFLm7ZCyszfU7uL1ZBTZBOSzyLx3n2gqgLByNaboAIAKWobZAMQEoADBOelfceZAbtZA663ke8VN7PjitEtRYz2qKYHcnY77B45w8z3eOcjv5L8ZBVwZDZD&fields=first_name
//graph.facebook.com/1163216933740664/picture?access_token=EAART9AAOEqYBACmFOdjarpZAcXbJideblIsclzXWYwBFvq2FGAyHLZCyvGtPXZAazZA10G4PZAfS7xQ3XoPQW92lJN5gYFnsFLm7ZCyszfU7uL1ZBTZBOSzyLx3n2gqgLByNaboAIAKWobZAMQEoADBOelfceZAbtZA663ke8VN7PjitEtRYz2qKYHcnY77B45w8z3eOcjv5L8ZBVwZDZD&fields=first_name
FacebookManager.instance = null;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FacebookManager;
