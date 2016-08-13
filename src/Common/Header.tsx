import * as React from 'react';
import {Text, View, StyleSheet, Image, Navigator } from "react-native";
var StatusBar = require('react-native').StatusBar;

export default class Header extends React.Component<Props, State> {
  notificationView: any = null;
  state: State = { isNotificationShow: false };

  constructor(props: any) {
    super(props);
  };

  render() {
    return (
      <View style={{ borderBottomWidth: 1, backgroundColor: "#ffffff" }}>
        <StatusBar
          hidden={false}
          animated={true}
          />
        <View style={{ height: 20, flex: 1, }}></View>
        <View style={this.styles.header}>
          <View style={this.styles.left}>
            {this.props.leftComponent}
          </View>
          <View style={this.styles.center}>
            {this.props.centerComponent}
          </View>
          <View style={this.styles.right}>
            {this.props.rightComponent}
          </View>
        </View>
      </View>
    );
  }

  styles: any = {
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

interface Props {
  leftComponent?: React.ReactElement<any>;
  centerComponent?: React.ReactElement<any>;
  rightComponent?: React.ReactElement<any>;
}

interface State {
}
