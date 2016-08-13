import * as React from 'react';
import { View, Text, TextInput, Modal, TouchableOpacity, ScrollView } from 'react-native';
import PlatformManager from '../../Manager/Core/PlatformManager';
import FacebookManager, { FacebookUser } from '../../Manager/Facebook/FacebookManager';

export default class SearchModal extends React.Component<Props, State> {
  state: State = { users: [{ id: 1, name: "太郎 山田", live: "東京都 世田谷区", age: 18, work: "" }] }

  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <Modal
        animationType={"slide"}
        transparent={false}
        visible={this.props.isShow}
        onRequestClose={() => { alert("Modal has been closed.") } }
        >
        <View style={{
          flex: 1, flexDirection: "column", marginTop: 20,
          backgroundColor: "white", width: PlatformManager.getInstance().getWidth(),
          height: PlatformManager.getInstance().getHeight(),
        }}>
          <TouchableOpacity onPress={this.props.onClose.bind(this)}>
            <View style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end", padding: 10 }}>
              <Text>閉じる</Text>
            </View>
          </TouchableOpacity>

          <Text>ユーザ名を検索</Text>
          <View style={{ padding: 10, }}>
            <TextInput
              onChangeText={this.onChangeText.bind(this)}
              editable = {true}
              maxLength = {40}
              style={{
                height: 26,
                borderWidth: 0.5,
                borderColor: '#0f0f0f',
                fontSize: 13,
                padding: 4,
              }}
              />
          </View>

          <ScrollView style={{ flex: 1, flexDirection: "column", borderWidth: 1, }}>
            {
              this.state.users.map((user, index) => {
                return (
                  <View key={index} style={{ flex: 1, flexDirection: "row", borderWidth: 1, borderColor: 'gray', padding: 5 }}>
                    <View style={{ marginLeft: 10, flex: 1 }}>
                      <View style={{ width: 50, height: 50, backgroundColor: "red" }}></View>
                    </View>
                    <View style={{ flexDirection: 'column', flex: 5, justifyContent: 'center' }}>
                      <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                        <Text style={{ fontSize: 16 }}>{user.name}</Text>
                      </View>
                      {
                        (() => {
                          if (user.live) {
                            return (
                              <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                                <Text style={{ color: 'gray' }}>{user.live}</Text>
                              </View>
                            )
                          }
                        })()
                      }
                    </View>

                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", borderWidth: 1, }}>
                      <TouchableOpacity>
                        <View>
                          <Text>追加</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                )
              })
            }
          </ScrollView>

        </View>
      </Modal>
    )
  }

  onChangeText(text) {
    console.log("[Text]", text);
  }

  style = {
    background: {
      marginTop: 22, height: PlatformManager.getInstance().getHeight(), width: PlatformManager.getInstance().getWidth(),
    }
  }


}
interface Props {
  navigator?: any;
  isShow?: boolean;
  onClose?: any;
}

interface State {
  users: FacebookUser[];
}
