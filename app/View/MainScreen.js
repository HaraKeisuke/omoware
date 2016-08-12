"use strict";
const React = require('react');
const react_native_1 = require('react-native');
const Header_1 = require('../Common/Header');
const SearchModal_1 = require('../Component/Modal/SearchModal');
class MainScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isSearchModalShow: false };
    }
    render() {
        return (React.createElement(react_native_1.View, null, React.createElement(Header_1.default, {rightComponent: React.createElement(react_native_1.TouchableOpacity, {onPress: this.toggleSearchModal.bind(this)}, React.createElement(react_native_1.Text, null, "+"))}), React.createElement(react_native_1.Text, null, "ABC"), React.createElement(SearchModal_1.default, {navigator: this.props.navigator, isShow: this.state.isSearchModalShow, onClose: this.toggleSearchModal.bind(this)})));
    }
    toggleSearchModal() {
        console.log("モーダル表示");
        this.setState({ isSearchModalShow: !this.state.isSearchModalShow });
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MainScreen;
