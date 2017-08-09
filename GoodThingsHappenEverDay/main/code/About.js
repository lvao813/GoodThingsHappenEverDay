import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
 export default class About extends Component {
  

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome} >
          This is About!
        </Text>
      
      </View>
    );
  }
}
const MyApp = StackNavigator({
    // 对应界面名称
    About: {
        screen: About,
        navigationOptions:{
            headerTitle:'详情',
            headerBackTitle:null,
        }
    },
   
}, {
    headerMode: 'screen',
});

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