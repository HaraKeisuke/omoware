import * as React from 'react';
import { View, Text, TextInput } from 'react-native';

export default class Templete extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <View></View>
    )
  }

}
interface Props {
  navigator?: Navigator;
}

interface State {

}
