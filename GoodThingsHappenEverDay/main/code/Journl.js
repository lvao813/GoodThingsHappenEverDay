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
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
import { getItem,saveItem} from './common/AsyncStorage'
 class Journl extends Component {
   constructor(props) {
        super(props);
        this.state = {
            textInput1:'',
            textInput2:'',
            textInput3:'',
        };
        
      }
  componentWillMount() {
    var promise = getItem("one").then((result) => {
          // alert(result)
        }).catch((error) => {
          console.error(new Error("失败"));
        })
  }
  textI1(){
    // alert(this.state.textInput1)
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var onlyDate = year + '-' + month + '-' + day;
    var GoodTthingsTime = new Array();

    GoodTthingsTime[0]=this.state.textInput1;
    // alert(GoodTthingsTime.length)
    console.log(onlyDate);

  }
  render() {
    return (
      <ScrollView style={styles.container}>
          <View style={{flexDirection:'row',backgroundColor:'#fff',borderColor:'#666',borderBottomWidth:1}}>
                <View style={styles.topView}>
                      <Text style={styles.topText}>Journl</Text>
                      
                </View>
                <Image style={{height:40,width:40,alignItems:'center',justifyContent:'center'}} 
                      source={require('./image/hot.png')}
                      ><Text style={{textAlign:'center',fontWeight:'bold',fontSize:20}}
                >1</Text></Image>
        </View>
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
                    // defaultValue='45641611'
                    underlineColorAndroid="transparent"
                    multiline={true}
                    numberOfLines={20}
                    maxLength={100}
                    placeholder="Press here to begin typing..."
                    autoCapitalize='sentences'
                    clearButtonMode='never'
                    editable={true}//如果值为假，文本是不可编辑，默认值为真
                    onChangeText={(Text) => {this.setState({textInput1:Text})}}
                    returnKeyType="join"
                    onChange={() => {}}//当文本框内容变化时调用此回调函数
                    onFocus={() => {}}//当文本框获得焦点的时候调用此回调函数
                    onBlur={() => {this.textI1()}}//当文本框失去焦点的时候调用此回调函数
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
    backgroundColor: '#13227a',
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
    
  },topView:{
    height:50,
    width:width-50,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    backgroundColor:'#fff'
  },
  topText:{
    textAlign:'center',
    fontSize:20,
    fontWeight:'bold',
    color:'#000',
    paddingLeft:20,
  }
});
export default Journl