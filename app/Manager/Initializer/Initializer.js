"use strict";
class Initializer {
    constructor() {
    }
    initialize() {
        return Promise.resolve();
    }
    static getInstance() {
        if (!this.instanse) {
            this.instanse = new Initializer();
        }
        return this.instanse;
    }
}
Initializer.instanse = null;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Initializer;
