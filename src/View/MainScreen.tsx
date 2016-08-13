import * as React from 'react';
import { View, Text, TextInput, TouchableOpacity, ListView, Image } from 'react-native';
import Header from '../Common/Header';
import SearchModal from '../Component/Modal/SearchModal';
import PlatformManager from '../Manager/Core/PlatformManager';
import FacebookManager from '../Manager/Facebook/FacebookManager';
import OmoiManager from '../Manager/Omoi/OmoiManager';
import ObjectUtils from '../Utils/ObjectUtils';

var GridView = require('react-native-grid-view');

export default class MainScreen extends React.Component<Props, State> {
  state: State = { users: [{ id: "123", name: "HOGE" }], isSearchModalShow: false };

  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    this.fetchOmoi().catch((e) => { })
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <Header
          rightComponent={
            <TouchableOpacity　onPress={this.toggleSearchModal.bind(this) }>
              <View style={{ padding: 10 }}>
                <Text>+</Text>
              </View>
            </TouchableOpacity>
          }/>
        <View style={{ backgroundColor: "#9DD0E0", flex: 1, height: PlatformManager.getInstance().getHeight() - 70 }}>
          <GridView
            enableEmptySections={true}
            items={this.state.users}
            itemsPerRow={3}
            renderItem={this.renderItem.bind(this) }
            />
        </View>
        <SearchModal navigator={this.props.navigator} isShow={this.state.isSearchModalShow} onClose={this.toggleSearchModal.bind(this) }/>
      </View>
    )
  }

  renderItem(item: any) {
    return (
      <View key={item.id} style={{
        margin: 10, flex: 1,
        height: 150, flexDirection: 'column', justifyContent: "center", alignItems: "center"
      }}>
        <View style={{}}>
          <Image source={{ uri: FacebookManager.getInstance().getUserThumb("525849940942622") }}
            style={{ width: 100, height: 100, resizeMode: "stretch", borderWidth: 5, borderRadius: 50, borderColor: '#e71e8e' }}/>
        </View>
        <Text style={{ fontSize: 16, }}>{item.name}</Text>
      </View>
    )
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

  fetchOmoi(): Promise<any> {
    return OmoiManager.getInstance().getOmoi().then((data) => {
      console.log("Fetch Data", ObjectUtils.convertArray(data.val()));
      this.setState({ users: ObjectUtils.convertArray(data.val()) });
    }).catch((e) => {
      console.log("Fetch Omoi Error:", e);
    });
  }

}
interface Props {
  navigator?: any;
}

interface State {
  isSearchModalShow?: boolean;
  users?: any[];
}
