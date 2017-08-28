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
              toastLong('请输入您的姓名')
          }else{
                var promise = saveItem("name1", this.state.name, () => { }).then((result) => {
                    var promise = saveItem("uuid", uuid, () => { }).then((result) => {
                        // alert(uuid)
                        var promise = saveItem("keyarry1", JSON.stringify(keyarry1), () => { }).then((result) => {
                            // alert(uuid)
                             var promise = saveItem("exp", exp.toString(), () => { }).then((result) => {
                                // 经验值
                                var promise = saveItem("streak", streak.toString(), () => { }).then((result) => {
                                    // 连续记录
                                    var promise = saveItem("longstreak", longstreak.toString(), () => { }).then((result) => {
                                        // 最长记录
                                        var promise = saveItem("daythings", daythings.toString(), () => { }).then((result) => {
                                            // 几件事
                                            const { navigate } = this.props.navigation;
                                            navigate('Roots');
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
  render() {
    return (
        <ScrollView style={{flex: 1}}
        contentContainerStyle={styles.contentContainer}
        bounces={false}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={true}
        horizontal={true}>
        <View style={styles.container}>
           
                <Image  source={require('../image/BigSmile.png')}></Image>
                <Text style={styles.welcome} >
                Good Things Happen Ever Day!
                </Text>
                <Text style={styles.instructions}>
                    In just 5 minutes a day,increase your
                </Text>
                <Text style={styles.instructions}>
                    happiness and rewire your brain to
                </Text>
                <Text style={styles.instructions}>
                    focus on the positive.
                </Text>
            
        </View>
        <View style={styles.container}>
            
                <Image style={{height:100,width:100,marginBottom:30}} source={require('../image/brush.png')}></Image>
                <Text style={styles.welcome} >
                Log Your Highlights
                </Text>
                <Text style={styles.instructions} >
                Studies have shown that writing down
                </Text>
                <Text style={styles.instructions}>
                    there good Things every day has
                </Text>
                <Text style={styles.instructions}>
                    lasting effects on one's happiness,
                </Text>
                <Text style={styles.instructions}>
                    positivity,and optimism.
                </Text>
           
        </View>
        <View style={styles.container}>
           
                <Image style={{height:100,width:100,marginBottom:30}} source={require('../image/medal.png')}></Image>
                <Text style={styles.welcome} >
                Engage and Improve
                </Text>
                <Text style={styles.instructions} >
                Level up,gain experience points(XP),
                </Text>
                <Text style={styles.instructions}>
                    view previous entries,set a
                </Text>
                <Text style={styles.instructions}>
                    customizable notification,choose a
                </Text>
                <Text style={styles.instructions}>
                    profile picture,and more.
                </Text>
                <TextInput
                    underlineColorAndroid="transparent"
                    autoCapitalize='words'
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
});