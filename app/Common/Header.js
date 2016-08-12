"use strict";
const React = require('react');
const react_native_1 = require("react-native");
var StatusBar = require('react-native').StatusBar;
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.notificationView = null;
        this.state = { isNotificationShow: false };
        this.styles = {
            header: {
                backgroundColor: 'white',
                flexDirection: 'row',
                justifyContent: 'space-between',
                height: 50,
                alignItems: 'center'
            },
            left: {
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-start',
                paddingLeft: 20
            },
            center: {
                flex: 6,
                flexDirection: 'row',
                justifyContent: 'center',
            },
            right: {
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-end',
                paddingRight: 20
            }
        };
    }
    ;
    render() {
        return (React.createElement(react_native_1.View, {style: { borderBottomWidth: 1 }}, React.createElement(StatusBar, {hidden: false, animated: true}), React.createElement(react_native_1.View, {style: { height: 20, flex: 1, backgroundColor: '#FFEBF1' }}), React.createElement(react_native_1.View, {style: this.styles.header}, React.createElement(react_native_1.View, {style: this.styles.left}, this.props.leftComponent), React.createElement(react_native_1.View, {style: this.styles.center}, this.props.centerComponent), React.createElement(react_native_1.View, {style: this.styles.right}, this.props.rightComponent))));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Header;
