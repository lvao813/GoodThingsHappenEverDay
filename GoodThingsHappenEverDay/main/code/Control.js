import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Loading from './common/Loading' 
import { StackNavigator } from 'react-navigation';
import { getItem, saveItem} from './common/AsyncStorage'
 export default class Control extends Component {
   constructor(props) {
        super(props);
        this.state = {
            name:''
        };
        
      }
  componentWillMount() {

     var promise = getItem("name1").then((result) => {
          this.goTo(result);
          
        }).catch((error) => {
          console.error(new Error("失败"));
          this.goTo();
        })
  }

  goTo(name){
    
      if(name==null){
        const { navigate } = this.props.navigation;
             navigate('Wel');
      }else{
          const { navigate } = this.props.navigation;
             navigate('Roots');
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