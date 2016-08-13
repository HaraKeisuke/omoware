
export default class ObjectUtils {
  static convertArray(obj: any) {
    let array = [];
    Object.keys(obj).map((val) => {
      array.push(val);
    });
    return array;
  }
}
