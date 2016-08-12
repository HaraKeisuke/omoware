"use strict";
const React = require('react');
const react_native_1 = require('react-native');
const PlatformManager_1 = require('../../Manager/Core/PlatformManager');
class SearchModal extends React.Component {
    constructor(props) {
        super(props);
        this.style = {
            background: {
                marginTop: 22, height: PlatformManager_1.default.getInstance().getHeight(), width: PlatformManager_1.default.getInstance().getWidth(),
            }
        };
    }
    render() {
        return (React.createElement(react_native_1.Modal, {animationType: "slide", transparent: false, visible: this.props.isShow, onRequestClose: () => { alert("Modal has been closed."); }}, React.createElement(react_native_1.View, {style: [
            this.style.background, {
                position: "absolute", top: 0, backgroundColor: "gray", opacity: 0.3,
            }]}), React.createElement(react_native_1.View, {style: [
            this.style.background, {
                flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center",
            }]}, React.createElement(react_native_1.View, {style: {
            backgroundColor: "white", width: PlatformManager_1.default.getInstance().getWidth() * 4 / 5,
            height: PlatformManager_1.default.getInstance().getHeight() * 2 / 4,
        }}, React.createElement(react_native_1.Text, null, "Hello World!"), React.createElement(react_native_1.TextInput, {editable: true, maxLength: 40, style: {
            height: 26,
            borderWidth: 0.5,
            borderColor: '#0f0f0f',
            fontSize: 13,
            padding: 4,
        }})))));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SearchModal;
