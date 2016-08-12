import {AsyncStorage} from 'react-native';

export default class StorageManager {
  get(key: string) {
    return AsyncStorage.getItem(key).then((data: string) => {
      return Promise.resolve(JSON.parse(data));
    });
  }

  set(key: string, value: any) {
    return AsyncStorage.setItem(key, JSON.stringify(value));
  }

  static instance: StorageManager = null;
  static getInstance(): StorageManager {
    if (!this.instance) {
      this.instance = new StorageManager();
    }
    return this.instance;
  }
}
