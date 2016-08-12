import StorageManager from '../Core/StorageManager';
import UserData from './UserData';
import SettingData from './SettingData';

export default class SettingManager {
  userData: UserData = null;
  settingData: SettingData = null;
  constructor() {

  }

  initialize(): Promise<any> {
    return Promise.all([this.loadUserData.bind(this), this.loadUserData.bind(this)])
  }


  loadSettingData() {
    return StorageManager.getInstance().get("SettingData").then((settingData) => {
      if (settingData) {
        this.settingData = settingData;
      }
      this.settingData = new SettingData();
      return Promise.resolve();
    }).catch((e) => {
      console.log("LoadSettingData Error", e);
    });
  }

  loadUserData() {
    return StorageManager.getInstance().get("UserData").then((userData) => {
      if (userData) {
        this.userData = userData;
      }
      this.userData = new UserData();
      return Promise.resolve();
    }).catch((e) => {
      console.log("LoadUserData Error", e);
    });
  }


  static instance: SettingManager = null;
  static getInstance(): SettingManager {
    if (!this.instance) {
      this.instance = new SettingManager();
    }
    return this.instance;
  }
}
