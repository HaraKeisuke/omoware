"use strict";
class StringUtils {
    static isNullOrEmpty(str) {
        if (str && str.length > 0) {
            return false;
        }
        return true;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = StringUtils;
