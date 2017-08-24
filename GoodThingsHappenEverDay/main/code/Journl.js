import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {  InputItem } from 'antd-mobile';
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
import { toastLong} from './common/ToastUtils';
import * as WeChat from 'react-native-wechat';
const weChatAppId = 'wx6000a418f168ac83';
import { getItem,saveItem} from './common/AsyncStorage'
 class Journl extends Component {
   constructor(props) {
        super(props);
        this.state = {
            textInput1:'',
            textInput2:'',
            textInput3:'',
            image1:false,
            image2:false,
            image3:false,
            BottomHeight:false,
            ban1:true,
            ban2:true,
            ban3:true,
            keyarry:'',
            Test1:'',
        };
        WeChat.registerApp('wx6000a418f168ac83');
      }
  componentWillMount() {
      var promise = getItem("NaverAsk").then((result) => {
          
          if(result=='1'){
              
          }else{
              Alert.alert(
                  '是否登陆？',
                  '登陆之后可以保存数据，避免数据丢失',
                  [
                    {text: '不再提示', onPress: () => {this._NaverAsk()}},
                    {text: '登陆', onPress: () => {this._ononLine()}, style: 'cancel'},
                    {text: '取消', onPress: () => console.log('OK Pressed')},
                  ],
                  { cancelable: false }
                )
          }
              var promise = getItem("keyarry1").then((result) => {
                        // alert(JSON.parse(result)) 
                        this.setState({keyarry:JSON.parse(result)})
                        // alert(this.state.keyarry)
              }).catch((error) => {
                // console.log('1');
                
                
              })
        }).catch((error) => {
          // console.log('1');
          
          
        })
    
          
  }
    
  _ononLine(){
      toastLong('跳转到登陆页')
  }
  _NaverAsk(){
      var promise = saveItem("NaverAsk", '1', () => { }).then((result) => {
                    toastLong('修改成功')
                }).catch((error) => {
                console.error(new Error("失败"));
                })
  }
  textI1(){
    
    let newDate = new Date();
    let newDay = newDate.toJSON();
    let thisday = newDay.slice(0,10)//yy-mm-dd格式时间
    let timestamp = Date.parse(new Date());//毫秒时间戳
    let AsyncStorageKey =''+timestamp+''
    let input = thisday+'-'+this.state.textInput1
    // alert(AsyncStorageKey)

    // alert(newDay.slice(0,10))

    // keyarry.push();
    
    // alert(this.state.keyarry)
    if(this.state.textInput1==''){
      this.setState({image1:false})
    }else{
          
              
      var promise = saveItem(AsyncStorageKey, input, () => { }).then((result) => {
          this.state.keyarry.push(AsyncStorageKey)
          this.setState({ban1:false,Test1:AsyncStorageKey});
              var promise = saveItem("keyarry1", JSON.stringify(this.state.keyarry), () => { }).then((result) => {
                
                  
              }).catch((error) => {
              console.error(new Error("失败"));
              })
        }).catch((error) => {
        console.error(new Error("失败"));
        })
    }
   

  }
  textI2(){
    
    let newDate = new Date();
    let newDay = newDate.toJSON();
    let thisday = newDay.slice(0,10)//yy-mm-dd格式时间
    let timestamp = Date.parse(new Date());//毫秒时间戳
    let AsyncStorageKey =''+timestamp+''
    let input = thisday+'-'+this.state.textInput2
    // alert(newDay.slice(0,10))
    if(this.state.textInput2==''){
      this.setState({image2:false})
    }else{
      var promise = saveItem(AsyncStorageKey, input, () => { }).then((result) => {
          this.state.keyarry.push(AsyncStorageKey)
          this.setState({ban2:false}); 
              var promise = saveItem("keyarry1", JSON.stringify(this.state.keyarry), () => { }).then((result) => {
                
                  
              }).catch((error) => {
              console.error(new Error("失败"));
              }) 
        }).catch((error) => {
        console.error(new Error("失败"));
        })
    }
  }

  textI3(){
    // alert(this.state.keyarry)
    let newDate = new Date();
    let newDay = newDate.toJSON();
    let thisday = newDay.slice(0,10)//yy-mm-dd格式时间
    let timestamp = Date.parse(new Date());//毫秒时间戳
    let AsyncStorageKey =''+timestamp+''
    let input = thisday+'-'+this.state.textInput3
    // alert(newDay.slice(0,10))
    if(this.state.textInput3==''){
      this.setState({image3:false,BottomHeight:false})
    }else{
      var promise = saveItem(AsyncStorageKey, input, () => { }).then((result) => {
          this.setState({ban3:false,BottomHeight:false}); 
          this.state.keyarry.push(AsyncStorageKey);
              var promise = saveItem("keyarry1", JSON.stringify(this.state.keyarry), () => { }).then((result) => {
                
                  
              }).catch((error) => {
              console.error(new Error("失败"));
              })  
        }).catch((error) => {
        console.error(new Error("失败"));
        })
    }
   

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
                  <View style={styles.leftImageTop}></View>
                  <Image style={styles.leftImage} source={require('./image/Smile.png')} ></Image>
                  {this.state.image1?
                      <TouchableOpacity style={styles.leftImageBottom} 
                        onPress={() => {
                          WeChat.isWXAppInstalled()
                          .then((isInstalled) => {
                            if (isInstalled) {
                              WeChat.shareToTimeline({
                                title:'微信朋友圈测试链接',
                                description: '分享自吕翱的APP',
                                thumbImage: 'http://img.mp.sohu.com/upload/20170624/13254199b97140f380ba30d670abd0c8_th.png',
                                type: 'news',
                                webpageUrl: 'http://www.marno.cn/'
                              })
                              .catch((error) => {
                                alert('error')
                              });
                            } else {
                              alert('没有安装微信软件，请您安装微信之后再试')
                            }
                          });
                      }}
                      >
                          <Image style={{height:24,width:24}} source={require('./image/weixin.png')}></Image>
                      </TouchableOpacity>
                      :<View style={styles.leftImageBottom}/>
                  }
                  
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
                    editable={this.state.ban1}//如果值为假，文本是不可编辑，默认值为真
                    onChangeText={(Text) => {this.setState({textInput1:Text})}}
                    returnKeyType="join"
                    onChange={() => {}}//当文本框内容变化时调用此回调函数
                    onFocus={() => {this.setState({image1:true})}}//当文本框获得焦点的时候调用此回调函数
                    onBlur={() => {this.textI1()}}//当文本框失去焦点的时候调用此回调函数
                    onEndEditing={() => {}}//结束编辑时，调用回调函数
                  ></TextInput>
              </View>
          </View>
          <View style={ styles.inputView}>
              <View style={styles.inputViewLeft}>
                  <View style={styles.leftImageTop}></View>
                  <Image style={styles.leftImage} source={require('./image/Smile.png')} ></Image>
                  {this.state.image2?
                      <TouchableOpacity style={styles.leftImageBottom}
                          onPress={() => {
                            WeChat.isWXAppInstalled()
                            .then((isInstalled) => {
                              if (isInstalled) {
                                WeChat.shareToTimeline({
                                  title:'微信朋友圈测试链接',
                                  description: '分享自吕翱的APP',
                                  thumbImage: 'http://img.mp.sohu.com/upload/20170624/13254199b97140f380ba30d670abd0c8_th.png',
                                  type: 'news',
                                  webpageUrl: 'http://www.marno.cn/'
                                })
                                .catch((error) => {
                                  alert('error')
                                });
                              } else {
                                alert('没有安装微信软件，请您安装微信之后再试')
                              }
                            });
                        }}
                      >
                          <Image style={{height:24,width:24}} source={require('./image/weixin.png')}></Image>
                      </TouchableOpacity>
                      :<View style={styles.leftImageBottom}/>
                  }
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
                    editable={this.state.ban2}//如果值为假，文本是不可编辑，默认值为真
                    returnKeyType="join"
                    onChangeText={(Text) => {this.setState({textInput2:Text})}}//当文本框内容变化时调用此回调函数
                    onFocus={() => {this.setState({image2:true})}}//当文本框获得焦点的时候调用此回调函数
                    onBlur={() => {this.textI2()}}//当文本框失去焦点的时候调用此回调函数
                    onEndEditing={() => {}}//结束编辑时，调用回调函数
                  ></TextInput>
              </View>
          </View>
          <View style={ styles.inputView} >
              <View style={styles.inputViewLeft}>
                 <View style={styles.leftImageTop}></View>
                  <Image style={styles.leftImage} source={require('./image/Smile.png')} ></Image>
                  {this.state.image3?
                      <TouchableOpacity style={styles.leftImageBottom}
                          onPress={() => {
                            WeChat.isWXAppInstalled()
                            .then((isInstalled) => {
                              if (isInstalled) {
                                WeChat.shareToTimeline({
                                  title:'微信朋友圈测试链接',
                                  description: '分享自吕翱的APP',
                                  thumbImage: 'http://img.mp.sohu.com/upload/20170624/13254199b97140f380ba30d670abd0c8_th.png',
                                  type: 'news',
                                  webpageUrl: 'http://www.marno.cn/'
                                })
                                .catch((error) => {
                                  alert('error')
                                });
                              } else {
                                alert('没有安装微信软件，请您安装微信之后再试')
                              }
                            });
                        }}
                      
                      >
                          <Image style={{height:24,width:24}} source={require('./image/weixin.png')}></Image>
                      </TouchableOpacity>
                      :<View style={styles.leftImageBottom}/>
                  }
              </View>
              <View style={styles.inputViewRight} >
                  <TextInput
                    style={styles.TextInputStyle}
                    underlineColorAndroid="transparent"
                    multiline={true}
                    numberOfLines={20}
                    maxLength={100}
                    autoCapitalize='sentences'
                    clearButtonMode='never'
                    editable={this.state.ban3}//如果值为假，文本是不可编辑，默认值为真
                    returnKeyType="join"
                    onChangeText={(Text) => {this.setState({textInput3:Text})}}//当文本框内容变化时调用此回调函数
                    onFocus={() => {this.setState({image3:true,BottomHeight:true})}}//当文本框获得焦点的时候调用此回调函数
                    onBlur={() => {this.textI3()}}//当文本框失去焦点的时候调用此回调函数
                    onEndEditing={() => {}}//结束编辑时，调用回调函数
                  ></TextInput>
              </View>
          </View>
          {this.state.BottomHeight?
              <View style={{height:200}}></View>
              :<View></View>
          
          }
          

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
  leftImageTop:{
    height:24,
    flex:1,
    marginBottom:30,
  },
  leftImageBottom:{
    height:24,
    flex:1,
    marginTop:20,
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