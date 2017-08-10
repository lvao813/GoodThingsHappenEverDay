import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Loading from './common/Loading' 
import { StackNavigator } from 'react-navigation';
 export default class Control extends Component {
  componentWillMount() {
    const { navigate } = this.props.navigation;
    +          navigate('Wel');
  }
  goTo(){
      if(true){
        const { navigate } = this.props.navigation;
    +          navigate('Roots');
      }
  }
  render() {
    return (
      <Loading />
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