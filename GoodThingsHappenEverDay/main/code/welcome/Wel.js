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
import { toastLong} from '../common/ToastUtils'
import { NavigationActions } from 'react-navigation';
import Swiper from 'react-native-swiper';
import {NameT,WELT11,WELT12,WELT13,WELT21,WELT22,WELT23,WELT24,WELT31,WELT32,WELT33,WELINP} from '../common/constants_titel';
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
        let keyarry1 = [];
        let d = new Date().getTime();
        let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            let r = (d + Math.random()*16)%16 | 0;
            d = Math.floor(d/16);
            return (c=='x' ? r : (r&0x3|0x8)).toString(16);
        });
        let exp = 0;
        let streak = 0;
        let longstreak = 0;
        let daythings = 0; 
          if(this.state.name==''){
              toastLong(NameT)
          }else{
                var promise = saveItem("name1", this.state.name, () => { }).then((result) => {
                    var promise = saveItem("uuid", uuid, () => { }).then((result) => {
                        // alert(uuid)
                        var promise = saveItem("level", '1', () => { }).then((result) => {
                        var promise = saveItem("keyarry1", JSON.stringify(keyarry1), () => { }).then((result) => {
                            // alert(uuid)
                             var promise = saveItem("exp", exp.toString(), () => { }).then((result) => {
                                // 经验值
                                var promise = saveItem("streak1", streak.toString(), () => { }).then((result) => {
                                    // 连续记录
                                    var promise = saveItem("longstreak1", longstreak.toString(), () => { }).then((result) => {
                                        // 最长记录
                                        var promise = saveItem("daythings", daythings.toString(), () => { }).then((result) => {
                                            // 几件事
                                            let newDate = new Date();
                                            let newDay = newDate.toJSON();
                                            let thisday = newDay.slice(0,10)
                                            var promise = saveItem("Calender", '0', () => { }).then((result) => {
                                                let nTime= new Date(new Date().setHours(0,0,0,0))
                                                let newtime = Date.parse(nTime);
                                                // let inputime = ''+newtime+''//界定是否隔天的时间戳
                                                var promise = saveItem("tomorrow", newtime.toString(), () => { }).then((result) => {
                                                    var promise = saveItem("Calenderday", thisday, () => { }).then((result) => {
                                                        var promise = saveItem("texinput1", '1', () => { }).then((result) => {
                                                            var promise = saveItem("texinput2", '2', () => { }).then((result) => {
                                                                var promise = saveItem("friends", '0', () => { }).then((result) => {
                                                                var promise = saveItem("texinput3", '3', () => { }).then((result) => {
                                                                    const resetAction = NavigationActions.reset({
                                                                        index: 0,
                                                                        actions: [
                                                                        NavigationActions.navigate({routeName: 'Roots'})
                                                                        ]
                                                                    })
                                                                    
                                                                    this.props.navigation.dispatch(resetAction); 
                                                                }).catch((error) => {
                                                                    console.error(new Error("失败"));
                                                                })
                                                                }).catch((error) => {
                                                                console.error(new Error("失败"));
                                                                this.goTo();
                                                                })
                                                            }).catch((error) => {
                                                                console.error(new Error("失败"));
                                                            })
                                                        }).catch((error) => {
                                                                console.error(new Error("失败"));
                                                        })
                                                    }).catch((error) => {
                                                        console.error(new Error("失败"));
                                                    })
                                                }).catch((error) => {
                                                    console.error(new Error("失败"));
                                                })

                                            }).catch((error) => {
                                              console.error(new Error("失败"));
                                            })
                                            
                                        }).catch((error) => {
                                        console.error(new Error("失败"));
                                        })
                                    }).catch((error) => {
                                    console.error(new Error("失败"));
                                    })
                                }).catch((error) => {
                                console.error(new Error("失败"));
                                })
                            }).catch((error) => {
                            console.error(new Error("失败"));
                            })
                        }).catch((error) => {
                            console.error(new Error("失败"));
                            })
                        }).catch((error) => {
                        console.error(new Error("失败"));
                        })
                    }).catch((error) => {
                    console.error(new Error("失败"));
                    })
                   
                }).catch((error) => {
                console.error(new Error("失败"));
                })
          }
      }
    _renderSwiper(){
        return (
            <Swiper
                // style={styles.swiperStyle}
                height={200}
                horizontal={true}
                autoplay={true}
                autoplayTimeout={3}
                loop={false}
                paginationStyle={{bottom:40}}
                dotStyle={{backgroundColor:'rgba(0,0,0,.2)', width: 6, height: 6}}
                activeDotStyle={{backgroundColor:'rgba(0,0,0,.5)', width: 6, height: 6}}>
                        <View style={styles.container}>
                        
                            <Image  source={require('../image/BigSmile.png')}></Image>
                            <Text style={styles.welcome} >
                            {WELT11}
                            </Text>
                            <Text style={styles.instructions}>
                            {WELT12}
                            </Text>
                            <Text style={styles.instructions}>
                            {WELT13}
                            </Text>
                           
                        
                    </View>
                    <View style={styles.container}>
                        
                            <Image style={{height:100,width:100,marginBottom:30}} source={require('../image/brush.png')}></Image>
                            <Text style={styles.welcome} >
                            {WELT21}
                            </Text>
                            <Text style={styles.instructions} >
                            {WELT22}
                            </Text>
                            <Text style={styles.instructions}>
                            {WELT23}
                            </Text>
                            <Text style={styles.instructions}>
                            {WELT24}
                            </Text>
                           
                        
                    </View>
                    <View style={styles.container}>
                        
                            <Image style={{height:100,width:100,marginBottom:30}} source={require('../image/medal.png')}></Image>
                            <Text style={styles.welcome} >
                            {WELT31}
                            </Text>
                            <Text style={styles.instructions} >
                            {WELT32}
                            </Text>
                            <Text style={styles.instructions}>
                            {WELT33}
                            </Text>
                            
                            <TextInput
                                underlineColorAndroid="transparent"
                                autoCapitalize='words'
                                placeholder={WELINP}
                                onBlur={() =>{this.seve()}}
                                onChangeText={(Text) => {this.setState({name:Text})}}
                                style={styles.TextInputSt}
                            ></TextInput>
                        
                    </View>
            </Swiper>
        )
    }
  render() {
    return (
        <View style={{flex: 1}}>
        {this._renderSwiper()}
        
      </View>
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
    flex:1,
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
    marginBottom:30,
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
  swiperItem:{
    flex:1,
    justifyContent:'center',
    backgroundColor:'transparent',
},
});