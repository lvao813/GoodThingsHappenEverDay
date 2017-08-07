import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { List } from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;

 class Settings extends Component {
  

  render() {
    return (
      <View >
      <List renderHeader={() => ''} className="my-list">
        <Item  arrow="horizontal">Title</Item>
      </List>
      <List renderHeader={() => ''} className="my-list2">
          <Item  arrow="horizontal" multipleLine='true' onClick={() => {} }>About</Item>
          <Item  arrow="horizontal" multipleLine='true' onClick={() => {}}>Send feedback or suggestions</Item>
          <Item  arrow="horizontal" multipleLine='true' onClick={() => {}}>Contact the developer</Item>
      </List>
      <List renderHeader={() => ''} className="my-list3">
          <Item  arrow="horizontal" multipleLine='true' onClick={() => {} }>Love the app? Rate us in the App Store</Item>
          <Item  arrow="horizontal" multipleLine='true' onClick={() => {}}>Facebook</Item>
          <Item  arrow="horizontal" multipleLine='true' onClick={() => {}}>Twitter</Item>
      </List>
      
        
      
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
export default Settings