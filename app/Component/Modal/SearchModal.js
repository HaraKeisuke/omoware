"use strict";
const React = require('react');
const react_native_1 = require('react-native');
const PlatformManager_1 = require('../../Manager/Core/PlatformManager');
class SearchModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = { users: [{ name: "太郎 山田", live: "東京都 世田谷区" }] };
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
            flex: 1, flexDirection: "column",
            backgroundColor: "white", width: PlatformManager_1.default.getInstance().getWidth() * 4 / 5,
            height: PlatformManager_1.default.getInstance().getHeight() * 2 / 4,
        }}, React.createElement(react_native_1.TouchableOpacity, {onPress: this.props.onClose.bind(this)}, React.createElement(react_native_1.View, {style: { flex: 1, flexDirection: "row", justifyContent: "flex-end", padding: 10 }}, React.createElement(react_native_1.Text, null, "閉じる"))), React.createElement(react_native_1.Text, null, "ユーザ名を検索"), React.createElement(react_native_1.View, {style: { padding: 10 }}, React.createElement(react_native_1.TextInput, {editable: true, maxLength: 40, style: {
            height: 26,
            borderWidth: 0.5,
            borderColor: '#0f0f0f',
            fontSize: 13,
            padding: 4,
        }})), React.createElement(react_native_1.ScrollView, {style: { flex: 1, flexDirection: "column", borderWidth: 1, }}, this.state.users.map((user, index) => {
            return (React.createElement(react_native_1.View, {key: index, style: { flex: 1, flexDirection: "row", borderWidth: 1, borderColor: 'gray', padding: 5 }}, React.createElement(react_native_1.View, {style: { marginLeft: 10, flex: 1 }}, React.createElement(react_native_1.View, {style: { width: 50, height: 50, backgroundColor: "red" }})), React.createElement(react_native_1.View, {style: { flexDirection: 'column', flex: 5, justifyContent: 'center' }}, React.createElement(react_native_1.View, {style: { flexDirection: 'row', marginLeft: 10 }}, React.createElement(react_native_1.Text, {style: { fontSize: 16 }}, user.name)), (() => {
                if (user.live) {
                    return (React.createElement(react_native_1.View, {style: { flexDirection: 'row', marginLeft: 10 }}, React.createElement(react_native_1.Text, {style: { color: 'gray' }}, user.live)));
                }
            })()), React.createElement(react_native_1.View, {style: { flex: 1, justifyContent: "center", alignItems: "center", borderWidth: 1, }}, React.createElement(react_native_1.TouchableOpacity, null, React.createElement(react_native_1.View, null, React.createElement(react_native_1.Text, null, "追加"))))));
        }))))));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SearchModal;
