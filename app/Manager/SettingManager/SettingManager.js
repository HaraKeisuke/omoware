"use strict";
const StorageManager_1 = require('../Core/StorageManager');
const UserData_1 = require('./UserData');
const SettingData_1 = require('./SettingData');
class SettingManager {
    constructor() {
        this.userData = null;
        this.settingData = null;
    }
    initialize() {
        return Promise.all([this.loadUserData.bind(this), this.loadUserData.bind(this)]);
    }
    loadSettingData() {
        return StorageManager_1.default.getInstance().get("SettingData").then((settingData) => {
            if (settingData) {
                this.settingData = settingData;
            }
            this.settingData = new SettingData_1.default();
            return Promise.resolve();
        }).catch((e) => {
            console.log("LoadSettingData Error", e);
        });
    }
    loadUserData() {
        return StorageManager_1.default.getInstance().get("UserData").then((userData) => {
            if (userData) {
                this.userData = userData;
            }
            this.userData = new UserData_1.default();
            return Promise.resolve();
        }).catch((e) => {
            console.log("LoadUserData Error", e);
        });
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new SettingManager();
        }
        return this.instance;
    }
}
SettingManager.instance = null;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SettingManager;
