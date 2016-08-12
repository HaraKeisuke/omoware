/// <reference path="../typings/index.d.ts"/>

import * as React from 'react';
import * as Firebase from 'firebase';
import { View, Text, TextInput, Navigator } from 'react-native';

import FacebookButtun from './Component/Button/FacebookButton';
import LoginManager from './Manager/Login/LoginManager';
import LoginView from './View/LoginView';
import MainScreen from './View/MainScreen';

export default class Application extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <Navigator
        initialRoute={{ title: 'First Scene' }}
        renderScene={(route, navigator) => {
          console.log("[Route]", route.component, route.title);
          if (route.title === 'First Scene') {
            if (LoginManager.getInstance().isLogin()) {
              return <MainScreen navigator={navigator}/>
            } else {
              return <LoginView navigator={navigator}></LoginView>
            }
          } else {
            switch (route.title) {
              case "MainScreen":
                return <MainScreen navigator={navigator}/>
              default:
                // return <route.component navigator={navigator}/>
            }
          }
        }
        }/>
    )
  }
}

interface Props {

}

interface State {

}
