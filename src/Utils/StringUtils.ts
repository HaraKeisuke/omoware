
export default class StringUtils {
  static isNullOrEmpty(str: string) {
    if (str && str.length > 0) {
      return false;
    }
    return true;
  }
}
