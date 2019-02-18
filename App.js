import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RichText from 'react-native-rich-text';
import {WebViewQuillEditor, WebViewQuillViewer} from 'react-native-webview-quilljs'

export default class App extends React.Component {


  webViewQuillEditor;
  contentToDisplay = [
    { text: 'Hello' },
    { text: 'World', bold: true }
  ];
  onLoadCallback = () => {

  };


  render() {
    return (
      <View style={styles.container}>
        <Text>Editor Test</Text>
        <WebViewQuillEditor
            ref={component => (this.webViewQuillEditor = component)}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    marginTop:50,
    paddingTop:10
  },
});
