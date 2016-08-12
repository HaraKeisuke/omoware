"use strict";
const React = require('react');
const react_native_1 = require('react-native');
const Header_1 = require('../Common/Header');
class MainScreen extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement(react_native_1.View, null, React.createElement(Header_1.default, {rightComponent: React.createElement(react_native_1.TouchableOpacity, null, React.createElement(react_native_1.Text, null, "+"))}), React.createElement(react_native_1.Text, null, "ABC")));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MainScreen;
