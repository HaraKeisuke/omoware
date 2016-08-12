"use strict";
const React = require('react');
const LoginManager_1 = require('../../Manager/Login/LoginManager');
const MainScreen_1 = require('../../View/MainScreen');
var { FBLogin, FBLoginManager } = require('react-native-facebook-login');
class FacebookButton extends React.Component {
    constructor(props) {
        super(props);
        this.fbLogin = null;
    }
    render() {
        let _this = this;
        return (React.createElement(FBLogin, {style: { marginBottom: 10, }, ref: (fbLogin) => { this.fbLogin = fbLogin; }, permissions: ["email", "user_friends", "public_profile"], loginBehavior: FBLoginManager.LoginBehaviors.Native, onLogin: (data) => {
            LoginManager_1.default.getInstance().login(data).then(() => {
                this.props.navigator.push({
                    title: "MainScreen",
                    component: MainScreen_1.default
                });
            });
        }, onLogout: function () {
            LoginManager_1.default.getInstance().logout();
        }, onLoginFound: function (data) {
            console.log("Existing login found.");
            console.log(data);
        }, onLoginNotFound: function () {
            console.log("No user logged in.");
        }, onError: function (data) {
            console.log("ERROR");
            console.log(data);
        }, onCancel: function () {
            console.log("User cancelled.");
        }, onPermissionsMissing: function (data) {
            console.log("Check permissions!");
            console.log(data);
        }}));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FacebookButton;
