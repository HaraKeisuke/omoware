import * as React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Header from '../Common/Header';

export default class MainScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Header
          rightComponent={
            <TouchableOpacity>
              <Text>+</Text>
            </TouchableOpacity>
          }/>
        <Text>ABC</Text>
      </View>
    )
  }

}
interface Props {
  navigator?: any;
}

interface State {

}
