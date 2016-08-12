/// <reference path="../typings/index.d.ts"/>
"use strict";
const React = require('react');
const react_native_1 = require('react-native');
const LoginManager_1 = require('./Manager/Login/LoginManager');
const LoginView_1 = require('./View/LoginView');
const MainScreen_1 = require('./View/MainScreen');
class Application extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement(react_native_1.Navigator, {initialRoute: { title: 'First Scene' }, renderScene: (route, navigator) => {
            console.log("[Route]", route.component, route.title);
            if (route.title === 'First Scene') {
                if (LoginManager_1.default.getInstance().isLogin()) {
                    return React.createElement(MainScreen_1.default, {navigator: navigator});
                }
                else {
                    return React.createElement(LoginView_1.default, {navigator: navigator});
                }
            }
            else {
                switch (route.title) {
                    case "MainScreen":
                        return React.createElement(MainScreen_1.default, {navigator: navigator});
                    default:
                }
            }
        }}));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Application;
