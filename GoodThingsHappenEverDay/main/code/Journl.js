import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';
import {  InputItem } from 'antd-mobile';
import { getItem,saveItem} from './common/AsyncStorage'
 class Journl extends Component {
  componentWillMount() {
    var promise = getItem("one").then((result) => {
          alert(result)
        }).catch((error) => {
          console.error(new Error("失败"));
        })
  }

  render() {
    return (
      <View style={styles.container}>
        <InputItem placeholder="22">普通键盘</InputItem>
        <Text style={styles.welcome} >
          This is Journl!
        </Text>
      
      </View>
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
export default Journl