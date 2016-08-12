import * as React from 'react';
import { View, Text, TextInput, Modal } from 'react-native';
import PlatformManager from '../../Manager/Core/PlatformManager';

export default class SearchModal extends React.Component<Props, State> {
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
        <View style={[
          this.style.background, {
            position: "absolute", top: 0, backgroundColor: "gray", opacity: 0.3,
          }]}/>
        <View style={[
          this.style.background, {
            flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center",
          }]}>
          <View style={{
            backgroundColor: "white", width: PlatformManager.getInstance().getWidth() * 4 / 5,
            height: PlatformManager.getInstance().getHeight() * 2 / 4,
          }}>
            <Text>Hello World!</Text>
            <TextInput
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
        </View>
      </Modal>
    )
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

}
