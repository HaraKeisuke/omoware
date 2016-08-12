"use strict";
var { Dimensions } = require('react-native');
class PlatformManager {
    constructor() {
        this.os = OSEnum.Unknown;
        this.width = null;
        this.height = null;
        var { height, width } = Dimensions.get('window');
        this.height = height;
        this.width = width;
        switch (require("react-native").Platform.OS) {
            case "ios":
                this.os = OSEnum.IOS;
                break;
            case "android":
                this.os = OSEnum.Android;
                break;
            default:
                this.os = OSEnum.Unknown;
                break;
        }
    }
    getPlatform() {
        return this.os;
    }
    getPlatformName() {
        return require("react-native").Platform.OS;
    }
    getWidth() {
        return this.width;
    }
    getHeight() {
        return this.height;
    }
    isIOS() {
        return this.os === OSEnum.IOS;
    }
    isAndroid() {
        return this.os === OSEnum.Android;
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new PlatformManager();
        }
        return this.instance;
    }
}
PlatformManager.instance = null;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PlatformManager;
(function (OSEnum) {
    OSEnum[OSEnum["IOS"] = 0] = "IOS";
    OSEnum[OSEnum["Android"] = 1] = "Android";
    OSEnum[OSEnum["Unknown"] = 2] = "Unknown";
})(exports.OSEnum || (exports.OSEnum = {}));
var OSEnum = exports.OSEnum;
