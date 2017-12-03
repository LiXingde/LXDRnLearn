/*
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Dimensions,
  TextInput,
  Platform,
  Text,
  View
} from 'react-native';

let widthOfMargin  =  Dimensions.get('window').width*0.05;

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component<{}> {
  render() {
    return (
    <View style={styles.container}>
        <TextInput style={styles.TextInput} placeholder={'请输入手机号'}/>
        <Text style={styles.textAlign}>
          你的手机号：
        </Text>
        <TextInput style={styles.TextInput} placeholder={'请输入密码'} password={true}/>
        <Text style={styles.bigTextPrompt}>确定
        </Text>
       
    </View>
    
    //   <View style={styles.container}>
    //     <Text style={styles.welcome}>
    //       Welcome to React Native!
    //     </Text>
    //     <Text style={styles.instructions}>
    //       To get started, edit App.js
    //     </Text>
    //     <Text style={styles.instructions}>
    //       {instructions}
    //     </Text>
    //   </View>
    );
  }
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  TextInput:{
    margin:widthOfMargin,
    backgroundColor:'gray',
    fontSize:20
  },
  bigTextPrompt:{
     margin:widthOfMargin,
    backgroundColor:'gray',
    fontSize:30,
    textAlign:'center',
    color:'yellow'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
