import * as React from 'react';
import { View, Text, TextInput } from 'react-native';

import FacebookButton from '../Component/Button/FacebookButton';

export default class Templete extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <View style={{ marginTop: 20, padding: 100 }}>

        <Text>ログイン画面</Text>
        <FacebookButton navigator={this.props.navigator} />

      </View>
    )
  }

}
interface Props {
  navigator?: any;
}

interface State {

}
