"use strict";
const React = require('react');
const react_native_1 = require('react-native');
const Header_1 = require('../Common/Header');
const SearchModal_1 = require('../Component/Modal/SearchModal');
const PlatformManager_1 = require('../Manager/Core/PlatformManager');
const FacebookManager_1 = require('../Manager/Facebook/FacebookManager');
const OmoiManager_1 = require('../Manager/Omoi/OmoiManager');
const ObjectUtils_1 = require('../Utils/ObjectUtils');
var GridView = require('react-native-grid-view');
class MainScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { users: [{ id: "123", name: "HOGE" }], isSearchModalShow: false };
    }
    componentDidMount() {
        this.fetchOmoi().catch((e) => { });
    }
    render() {
        return (React.createElement(react_native_1.View, {style: { flex: 1, flexDirection: 'column' }}, React.createElement(Header_1.default, {rightComponent: React.createElement(react_native_1.TouchableOpacity, {onPress: this.toggleSearchModal.bind(this)}, React.createElement(react_native_1.View, {style: { padding: 10 }}, React.createElement(react_native_1.Text, null, "+")))}), React.createElement(react_native_1.View, {style: { backgroundColor: "#9DD0E0", flex: 1, height: PlatformManager_1.default.getInstance().getHeight() - 70 }}, React.createElement(GridView, {enableEmptySections: true, items: this.state.users, itemsPerRow: 3, renderItem: this.renderItem.bind(this)})), React.createElement(SearchModal_1.default, {navigator: this.props.navigator, isShow: this.state.isSearchModalShow, onClose: this.toggleSearchModal.bind(this)})));
    }
    renderItem(item) {
        return (React.createElement(react_native_1.View, {key: item.id, style: {
            margin: 10, flex: 1,
            height: 150, flexDirection: 'column', justifyContent: "center", alignItems: "center"
        }}, React.createElement(react_native_1.View, {style: {}}, React.createElement(react_native_1.Image, {source: { uri: FacebookManager_1.default.getInstance().getUserThumb("525849940942622") }, style: { width: 100, height: 100, resizeMode: "stretch", borderWidth: 5, borderRadius: 50, borderColor: '#e71e8e' }})), React.createElement(react_native_1.Text, {style: { fontSize: 16, }}, item.name)));
    }
    onClose() {
        this.fetchOmoi().then(() => {
            this.toggleSearchModal();
        }).catch((e) => {
            this.toggleSearchModal();
        });
    }
    toggleSearchModal() {
        console.log("モーダル表示");
        this.setState({ isSearchModalShow: !this.state.isSearchModalShow });
    }
    onAddOmoi() {
        this.fetchOmoi().catch(() => { });
    }
    fetchOmoi() {
        return OmoiManager_1.default.getInstance().getOmoi().then((data) => {
            console.log("Fetch Data", ObjectUtils_1.default.convertArray(data.val()));
            this.setState({ users: ObjectUtils_1.default.convertArray(data.val()) });
        }).catch((e) => {
            console.log("Fetch Omoi Error:", e);
        });
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MainScreen;
