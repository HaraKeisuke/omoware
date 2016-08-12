"use strict";
const react_native_1 = require('react-native');
class StorageManager {
    get(key) {
        return react_native_1.AsyncStorage.getItem(key).then((data) => {
            return Promise.resolve(JSON.parse(data));
        });
    }
    set(key, value) {
        return react_native_1.AsyncStorage.setItem(key, JSON.stringify(value));
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new StorageManager();
        }
        return this.instance;
    }
}
StorageManager.instance = null;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = StorageManager;
