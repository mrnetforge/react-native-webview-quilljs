import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RichText from 'react-native-rich-text';
import {WebViewQuillEditor, WebViewQuillViewer} from 'react-native-webview-quilljs'

export default class App extends React.Component {


  webViewQuillEditor;

  onLoadCallback = () => {

  };


  render() {
    const contentToDisplay = '';
    return (
      <View style={styles.container}>
        <Text>Editor Test</Text>
        <WebViewQuillEditor
            ref={component => (this.webViewQuillEditor = component)}
            getDeltaCallback={this.getDeltaCallback}
            contentToDisplay={contentToDisplay}
            onLoad={this.onLoadCallback}
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
