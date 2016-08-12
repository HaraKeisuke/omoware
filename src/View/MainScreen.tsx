import * as React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Header from '../Common/Header';
import SearchModal from '../Component/Modal/SearchModal';

export default class MainScreen extends React.Component<Props, State> {
  state: State = { isSearchModalShow: false }

  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Header
          rightComponent={
            <TouchableOpacity　onPress={this.toggleSearchModal.bind(this)}>
              <Text>+</Text>
            </TouchableOpacity>
          }/>
        <Text>ABC</Text>

        <SearchModal navigator={this.props.navigator} isShow={this.state.isSearchModalShow} onClose={this.toggleSearchModal.bind(this)}/>
      </View>
    )
  }

  toggleSearchModal() {
    console.log("モーダル表示");
    this.setState({ isSearchModalShow: !this.state.isSearchModalShow });
  }

}
interface Props {
  navigator?: any;
}

interface State {
  isSearchModalShow?: boolean;
}
