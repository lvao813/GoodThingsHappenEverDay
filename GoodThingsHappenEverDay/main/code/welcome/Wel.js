import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import { getItem, saveItem} from '../common/AsyncStorage'
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
import { StackNavigator } from 'react-navigation';
 export default class Wel extends Component {
 constructor(props) {
        super(props);
        this.state = {
            name:''
        };
        
      }
      seve(){
          if(this.state.name==''){
              alert('请输入您的姓名')
          }else{
                var promise = saveItem("name1", this.state.name, () => { }).then((result) => {
                    const { navigate } = this.props.navigation;
                    navigate('Roots');
                }).catch((error) => {
                console.error(new Error("失败"));
                })
          }
      }
  render() {
    return (
        <ScrollView style={{flex: 1}}
        contentContainerStyle={styles.contentContainer}
        bounces={false}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        horizontal={true}>
        <View style={styles.container}>
           
                <Image  source={require('../image/BigSmile.png')}></Image>
                <Text style={styles.welcome} >
                Good Things Happen Ever Day!
                </Text>
                <Text style={styles.instructions}>
                    In just 5 minuttes a day,increase your
                </Text>
                <Text style={styles.instructions}>
                    happeniness and rewire your brain to
                </Text>
                <Text style={styles.instructions}>
                    focus on the positive.
                </Text>
            
        </View>
        <View style={styles.container}>
            
                <Image style={{height:100,width:100,marginBottom:30}} source={require('../image/brush.png')}></Image>
                <Text style={styles.welcome} >
                Good Things Happen Ever Day!
                </Text>
                <Text style={styles.instructions}>
                    In just 5 minuttes a day,increase your
                </Text>
                <Text style={styles.instructions}>
                    happeniness and rewire your brain to
                </Text>
                <Text style={styles.instructions}>
                    focus on the positive.
                </Text>
           
        </View>
        <View style={styles.container}>
           
                <Image style={{height:100,width:100,marginBottom:30}} source={require('../image/medal.png')}></Image>
                <Text style={styles.welcome} >
                Good Things Happen Ever Day!
                </Text>
                <Text style={styles.instructions}>
                    In just 5 minuttes a day,increase your
                </Text>
                <Text style={styles.instructions}>
                    happeniness and rewire your brain to
                </Text>
                <Text style={styles.instructions}>
                    focus on the positive.
                </Text>
                <TextInput
                    underlineColorAndroid="transparent"
                    placeholder="Enter your name here to get started!"
                    onBlur={() =>{this.seve()}}
                    onChangeText={(Text) => {this.setState({name:Text})}}
                    style={styles.TextInputSt}
                ></TextInput>
           
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    contentContainer: {
      width: width*3,
      height: height,
    },
    backgroundImage: {
      width:width,
      height:height,
    },
  container: {
    height:height,
    width:width,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
    TouchableStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
       
    },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    marginTop:20,
    color:'#13227a',
    fontWeight:'bold'

  },
  instructions: {
    textAlign: 'center',
    color: '#13227a',
    marginBottom: 5,
  },
  TextInputSt:{
    // marginLeft:40,
    // marginRight:40,
    width:width-150,
    borderColor:'#13227a',
    borderWidth:2,
    borderRadius:10,
    color:'#13227a'

  },
});