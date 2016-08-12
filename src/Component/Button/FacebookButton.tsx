import * as React from 'react';
import { View, Text, TextInput } from 'react-native';
import LoginManager, { FacebookLoginData } from '../../Manager/Login/LoginManager';

import MainScreen from '../../View/MainScreen';

var {FBLogin, FBLoginManager} = require('react-native-facebook-login');

export default class FacebookButton extends React.Component<Props, State> {
  fbLogin = null;

  constructor(props: Props) {
    super(props);
  }

  render() {
    let _this = this;
    return (
      <FBLogin style={{ marginBottom: 10, }}
        ref={(fbLogin) => { this.fbLogin = fbLogin } }
        permissions={["email", "user_friends", "public_profile"]}
        loginBehavior={FBLoginManager.LoginBehaviors.Native}
        onLogin={(data: FacebookLoginData) => {
          LoginManager.getInstance().login(data).then(() => {
            this.props.navigator.push({
              title: "MainScreen",
              component: MainScreen
            })
          });
        } }
        onLogout={function() {
          LoginManager.getInstance().logout();
        } }
        onLoginFound={function(data) {
          console.log("Existing login found.");
          console.log(data);
        } }
        onLoginNotFound={function() {
          console.log("No user logged in.");
        } }
        onError={function(data) {
          console.log("ERROR");
          console.log(data);
        } }
        onCancel={function() {
          console.log("User cancelled.");
        } }
        onPermissionsMissing={function(data) {
          console.log("Check permissions!");
          console.log(data);
        } }
        />
    )
  }

}
interface Props {
  navigator?: any;
}

interface State {

}
