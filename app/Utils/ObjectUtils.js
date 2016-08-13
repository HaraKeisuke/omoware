"use strict";
class ObjectUtils {
    static convertArray(obj) {
        let array = [];
        Object.keys(obj).map((val) => {
            array.push(val);
        });
        return array;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ObjectUtils;
