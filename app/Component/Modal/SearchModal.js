"use strict";
const React = require('react');
const react_native_1 = require('react-native');
const PlatformManager_1 = require('../../Manager/Core/PlatformManager');
const FacebookManager_1 = require('../../Manager/Facebook/FacebookManager');
const StringUtils_1 = require('../../Utils/StringUtils');
const OmoiManager_1 = require('../../Manager/Omoi/OmoiManager');
class SearchModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = { users: [], searchName: "" };
        this.style = {
            background: {
                marginTop: 22, height: PlatformManager_1.default.getInstance().getHeight(), width: PlatformManager_1.default.getInstance().getWidth(),
            }
        };
    }
    render() {
        return (React.createElement(react_native_1.Modal, {animationType: "slide", transparent: false, visible: this.props.isShow, onRequestClose: () => { alert("Modal has been closed."); }}, React.createElement(react_native_1.View, {style: {
            flex: 1, flexDirection: "column", marginTop: 20,
            backgroundColor: "white", width: PlatformManager_1.default.getInstance().getWidth(),
            height: PlatformManager_1.default.getInstance().getHeight(),
        }}, React.createElement(react_native_1.TouchableOpacity, {onPress: this.onClose.bind(this)}, React.createElement(react_native_1.View, {style: { flex: 1, flexDirection: "row", justifyContent: "flex-end", padding: 10 }}, React.createElement(react_native_1.Text, null, "閉じる"))), React.createElement(react_native_1.Text, null, "ユーザ名を検索"), React.createElement(react_native_1.View, {style: { padding: 10, }}, React.createElement(react_native_1.TextInput, {value: this.state.searchName, onChangeText: this.onChangeText.bind(this), editable: true, maxLength: 40, style: {
            height: 26,
            borderWidth: 0.5,
            borderColor: '#0f0f0f',
            fontSize: 13,
            padding: 4,
        }})), React.createElement(react_native_1.ScrollView, {style: { flex: 1, flexDirection: "column", borderWidth: 1, }}, this.state.users.map((user, index) => {
            return (React.createElement(react_native_1.View, {key: index, style: { flex: 1, flexDirection: "row", borderWidth: 1, borderColor: 'gray', padding: 5 }}, React.createElement(react_native_1.View, {style: { marginLeft: 10, flex: 1 }}, React.createElement(react_native_1.Image, {source: { uri: FacebookManager_1.default.getInstance().getUserThumb(user.id, "small") }, style: { width: 50, height: 50, resizeMode: "stretch" }})), React.createElement(react_native_1.View, {style: { flexDirection: 'column', flex: 5, justifyContent: 'center' }}, React.createElement(react_native_1.View, {style: { flexDirection: 'row', marginLeft: 10 }}, React.createElement(react_native_1.Text, {style: { fontSize: 16 }}, user.name)), (() => {
                if (user.live) {
                    return (React.createElement(react_native_1.View, {style: { flexDirection: 'row', marginLeft: 10 }}, React.createElement(react_native_1.Text, {style: { color: 'gray' }}, user.live)));
                }
            })()), React.createElement(react_native_1.View, {style: { flex: 1, justifyContent: "center", alignItems: "center", borderWidth: 1, }}, React.createElement(react_native_1.TouchableOpacity, {onPress: () => {
                OmoiManager_1.default.getInstance().addOmoi(user.id, user.name).then(() => {
                    this.onClose();
                }).catch((e) => {
                    console.log("Add Omoi Error:", e);
                });
            }}, React.createElement(react_native_1.View, null, React.createElement(react_native_1.Text, null, "追加"))))));
        })))));
    }
    onChangeText(text) {
        console.log("[Text]", text);
        if (StringUtils_1.default.isNullOrEmpty(text)) {
            this.setState({ users: [] });
        }
        else {
            this.setState({ searchName: text });
            FacebookManager_1.default.getInstance().searchUserFromName(text).then((users) => {
                this.setState({ users: users });
            }).catch((e) => {
                console.log("エラー");
            });
        }
    }
    onClose() {
        this.setState({ users: [], searchName: "" });
        this.props.onClose();
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SearchModal;
