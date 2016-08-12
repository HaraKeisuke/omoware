"use strict";
const React = require('react');
const react_native_1 = require('react-native');
const FacebookButton_1 = require('../Component/Button/FacebookButton');
class Templete extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement(react_native_1.View, {style: { marginTop: 20, padding: 100 }}, React.createElement(react_native_1.Text, null, "ログイン画面"), React.createElement(FacebookButton_1.default, {navigator: this.props.navigator})));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Templete;
