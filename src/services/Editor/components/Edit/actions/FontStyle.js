import React, {useState, useContext, useEffect} from 'react';
import {View, Text, ScrollView, FlatList} from 'react-native';
import {Dialog, Portal, Card} from 'react-native-paper';
import BoxButton from '../../../../../shared/GeneralComponents/BoxButton';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Context} from '../../../../../appcontext/context';
import {} from '../../../../../shared/GeneralComponents/BoxButton';
export default function FontFormat() {
  const [visible, setVisible] = React.useState(false);
  const [state, dispatch] = useContext(Context);
  const editorState = state.editor;
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);
  const setState = (obj) => {
    dispatch({
      type: 'SET_EDITOR_STATE',
      payload: obj,
    });
  };
  const selectedItem =
    state.editor.editingDetails.content[
      editorState.editingDetails.selectedContentIndex
    ];
  const [font, setFont] = useState(selectedItem.fontFamily);
  useEffect(() => {
    const selectedContentIndex =
      editorState.editingDetails.selectedContentIndex;
    const existingLabel =
      editorState.editingDetails.content[selectedContentIndex];
    const modifiedLabel = {
      ...existingLabel,
      fontFamily: font,
    };
    let existingContent = editorState.editingDetails.content;
    existingContent[selectedContentIndex] = modifiedLabel;
    setState({
      ...editorState,
      editingDetails: {
        ...editorState.editingDetails,
        content: existingContent,
      },
    });
  }, [font]);
  return (
    <View>
      <BoxButton
        onPress={showDialog}
        ButtonContent={<MaterialIcons size={25} name="format-font" />}
        style={{backgroundColor: '#e8d087'}}
      />
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Content>
            <ScrollView horizontal={true}>
              <View>
                <FlatList
                  numColumns={5}
                  scrollEnabled={true}
                  data={Dummydata}
                  renderItem={({item}) => (
                    <View>
                      <Text
                        onPress={() => setFont(item.font)}
                        style={{
                          fontFamily: item.font,
                          fontSize: 25,
                          padding: 10,
                          marginLeft: 5,
                        }}>
                        {item.text}
                      </Text>
                    </View>
                  )}
                  keyExtractor={(item) => item.font}
                />
              </View>
            </ScrollView>
          </Dialog.Content>
        </Dialog>
      </Portal>
    </View>
  );
}

const Dummydata = [
  {
    text: 'Example',
    font: 'Amatic-Bold',
  },
  {
    text: 'Example',
    font: 'blackjack',
  },
  {
    text: 'Example',
    font: 'ChunkFive-Regular',
  },
  {
    text: 'Example',
    font: 'DancingScript-Regular',
  },
  {
    text: 'Example',
    font: 'KaushanScript-Regular',
  },
  {
    text: 'Example',
    font: 'Pacifico',
  },
  {
    text: 'Example',
    font: 'OpenSans-BoldItalic',
  },
  {
    text: 'Example',
    font: 'OpenSans-LightItalic',
  },
  {
    text: 'Example',
    font: 'OpenSans-Regular',
  },
  {
    text: 'Example',
    font: 'Lato-Heavy',
  },
];
