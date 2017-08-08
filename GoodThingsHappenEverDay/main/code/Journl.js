import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';
import {  InputItem } from 'antd-mobile';
import { getItem,saveItem} from './common/AsyncStorage'
 class Journl extends Component {
   constructor(props) {
        super(props);
        this.state = {

        };
        
      }
  componentWillMount() {
    var promise = getItem("one").then((result) => {
          // alert(result)
        }).catch((error) => {
          console.error(new Error("失败"));
        })
  }

  render() {
    return (
      <ScrollView style={styles.container}>
          <View >
            <Text style={styles.welcome} >
              What went will tody?
            </Text>
          
          </View>
          <View style={ styles.inputView}>
              <View style={styles.inputViewLeft}>
                  <Image style={styles.leftImage} source={require('./image/Smile.png')} ></Image>
              </View>
              <View style={styles.inputViewRight}>
                  <TextInput
                    style={styles.TextInputStyle}
                    underlineColorAndroid="transparent"
                    multiline={true}
                    numberOfLines={20}
                    maxLength={100}
                    placeholder="Press here to begin typing..."
                    autoCapitalize='sentences'
                    clearButtonMode='never'
                    editable={true}//如果值为假，文本是不可编辑，默认值为真
                    returnKeyType="join"
                    onChange={() => {}}//当文本框内容变化时调用此回调函数
                    onFocus={() => {}}//当文本框获得焦点的时候调用此回调函数
                    onBlur={() => {}}//当文本框失去焦点的时候调用此回调函数
                    onEndEditing={() => {}}//结束编辑时，调用回调函数
                  ></TextInput>
              </View>
          </View>
          <View style={ styles.inputView}>
              <View style={styles.inputViewLeft}>
                  <Image style={styles.leftImage} source={require('./image/Smile.png')} ></Image>
              </View>
              <View style={styles.inputViewRight}>
                  <TextInput
                    style={styles.TextInputStyle}
                    underlineColorAndroid="transparent"
                    multiline={true}
                    numberOfLines={20}
                    maxLength={100}
                   
                    autoCapitalize='sentences'
                    clearButtonMode='never'
                    editable={true}//如果值为假，文本是不可编辑，默认值为真
                    returnKeyType="join"
                    onChange={() => {}}//当文本框内容变化时调用此回调函数
                    onFocus={() => {}}//当文本框获得焦点的时候调用此回调函数
                    onBlur={() => {}}//当文本框失去焦点的时候调用此回调函数
                    onEndEditing={() => {}}//结束编辑时，调用回调函数
                  ></TextInput>
              </View>
          </View>
          <View style={ styles.inputView}>
              <View style={styles.inputViewLeft}>
                  <Image style={styles.leftImage} source={require('./image/Smile.png')} ></Image>
              </View>
              <View style={styles.inputViewRight}>
                  <TextInput
                    style={styles.TextInputStyle}
                    underlineColorAndroid="transparent"
                    multiline={true}
                    numberOfLines={20}
                    maxLength={100}
                    autoCapitalize='sentences'
                    clearButtonMode='never'
                    editable={true}//如果值为假，文本是不可编辑，默认值为真
                    returnKeyType="join"
                    onChange={() => {}}//当文本框内容变化时调用此回调函数
                    onFocus={() => {}}//当文本框获得焦点的时候调用此回调函数
                    onBlur={() => {}}//当文本框失去焦点的时候调用此回调函数
                    onEndEditing={() => {}}//结束编辑时，调用回调函数
                  ></TextInput>
              </View>
          </View>

      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
  
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'blue',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color:'#fff'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  inputView:{
    height:200,
    flex:1,
    backgroundColor:'#fff',
    margin:25,
    marginTop:10,
    borderRadius:15,
    flexDirection:'row',
    padding:15
  },
  inputViewLeft:{
    flex:2,
    // backgroundColor:'#245634',
    alignItems:'center',
    justifyContent:'center',
  },
  inputViewRight:{
    flex:8,
    // backgroundColor:'#465456'
    // alignItems:'flex-start'
  },
  leftImage:{
    height:50,
    width:50,
  },
  TextInputStyle:{
    // flex:1,
    padding:0,
    // width:200,
    textAlignVertical:'top',//改变编辑框的初始位置
    fontSize:20,
    fontWeight:'bold',
    
  },
});
export default Journl