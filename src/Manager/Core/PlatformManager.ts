
var {Dimensions} = require('react-native');

export default class PlatformManager {
  private os: OSEnum = OSEnum.Unknown;
  private width: number = null;
  private height: number = null;
  constructor() {
    var {height, width} = Dimensions.get('window');
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

  getWidth(): number {
    return this.width;
  }

  getHeight(): number {
    return this.height;
  }

  isIOS() {
    return this.os === OSEnum.IOS;
  }

  isAndroid() {
    return this.os === OSEnum.Android;
  }

  static instance: PlatformManager = null;
  static getInstance() {
    if (!this.instance) {
      this.instance = new PlatformManager();
    }
    return this.instance;
  }
}


export enum OSEnum {
  IOS, Android, Unknown
}
