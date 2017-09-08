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
import { HTEDJurnal } from './common/constants'
import * as WeChat from 'react-native-wechat';
import { NavigationActions } from 'react-navigation';

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
            ban4:false,
            ban3:false,
            keyarry:'',
            Test1:'',
            dayArry:[],
            lkayArry:[],
            dayYMD:'',
            dayDate:'',
            NU:0,
            textSt1:0,
            exp:0,
        };
        WeChat.registerApp('wx6000a418f168ac83');
      }
  componentWillMount() {
      // var promise = getItem("NaverAsk").then((result) => {
          
      //     if(result=='1'){
              
      //     }else{
      //         Alert.alert(
      //             '是否登陆？',
      //             '登陆之后可以保存数据，避免数据丢失',
      //             [
      //               {text: '不再提示', onPress: () => {this._NaverAsk()}},
      //               {text: '登陆', onPress: () => {this._ononLine()}, style: 'cancel'},
      //               {text: '取消', onPress: () => console.log('OK Pressed')},
      //             ],
      //             { cancelable: false }
      //           )
      //     }
          
      //   }).catch((error) => {
      //     // console.log('1');
      //   })
      
      var promise = getItem("keyarry1").then((result) => {
        // alert(JSON.parse(result)) 
        // this._alert(30)
        // alert(7%3)
        // alert(HTEDJurnal)
        var promise = getItem("Calenderday").then((result) => {
          // alert(result)
          let YMD = result;
            var promise = getItem("Calender").then((result) => {
              // alert(result)
              // console.log(ntime);
              // console.log(result);
              // let newDate = new Date();
              // let cc = newDate.toLocaleDateString()+'/ 00:00:00';
              // let nTime=Date.parse(cc);
                let nTime= new Date(new Date().setHours(0,0,0,0))
                let newtime = Date.parse(nTime);
                let timess =  parseInt(result)+1

                //今天的时间
                let newDate = new Date();
                let newDay = newDate.toJSON();
                let tday = newDay.slice(0,10)//yy-mm-dd格式时间
                //传入的时间
                let unixTimestamp = new Date( parseInt(result) );
                let yday = unixTimestamp.toJSON();
                let thisday = yday.slice(0,10);
              // console.log(nTime);
              // alert(newtime)
              if(parseInt(result)>0){//某一天
                  // alert(parseInt(parseInt(result)*1000))
                  // alert(timess)
                  if(thisday==tday){
                    // alert('050')
                    this.setState({dayDate:parseInt(result),textSt1:0,exp:10})
                    this._makeUp(parseInt(result))
                  }else{
                    // alert('150')
                    this.setState({dayDate:parseInt(result),textSt1:1,exp:5})
                    this._makeUp(parseInt(result))
                  }
                  
              }else if(parseInt(result)==0){//今天
                // alert(newtime)
                // console.console.log('====================================');
                // console.log(ntime);
                // console.log('====================================');
                // alert('010')
                this.setState({dayDate:newtime,textSt1:0,exp:10,NU:3});
                this._makeUp(newtime);
                // alert('1')
              }else if(result==null){//第一次登陆且是今天
                alert('15464161')
                this.setState({dayDate:newtime,textSt1:0,exp:10,NU:3});
                this._makeUp(parseInt(newtime));
              }else{
                this.setState({dayDate:newtime,textSt1:0,exp:10,NU:3});
                this._makeUp(parseInt(newtime));
              }
              // console.console.log('====================================');
              // console.log(result);
              // console.log('====================================');
                
              }).catch((error) => {
                // console.log('1');
              })
            }).catch((error) => {
              // console.log('1');
            })
        this.setState({keyarry:JSON.parse(result)})
        // alert(this.state.keyarry)
      }).catch((error) => {
      // console.log('1');
      })
        
          
  }
  componentWillUnmount() {
    let newDate = new Date();
    let newDay = newDate.toJSON();
    let thisday = newDay.slice(0,10)
    var promise = saveItem("Calender", '0', () => { }).then((result) => {
      var promise = saveItem("Calenderday", thisday, () => { }).then((result) => {
        
       }).catch((error) => {
         console.error(new Error("失败"));
       })
    }).catch((error) => {
      console.error(new Error("失败"));
    })
  
  }
  componentDidMount() {
    let newDate = new Date();
    let newDay = newDate.toJSON();
    let thisday = newDay.slice(0,10)
    //当天凌晨的毫秒数
    let nTime= new Date(new Date().setHours(0,0,0,0))
    let newtime = Date.parse(nTime);

    var promise = getItem("Calenderday").then((result) => {
      // this.setState({NU:result})
      let keyin = this.state.dayArry;

      var promise = getItem("texinput1").then((result) => {
      // alert(result.slice(0,10))
        // alert(thisday.slice(9,10)-result.slice(9,10))
        
      // if(thisday==result.slice(0,10)){
      //   this.setState({image1:true,ban2:true})
      // }
          var promise = getItem("texinput2").then((result) => {
            // alert(result.slice(0,10))
          
            // if(thisday==result.slice(0,10)){
            //   this.setState({image2:true,ban3:true})
            // } 
            var promise = getItem("texinput2").then((result) => {
              // alert('lalalallalal')
              if(this.state.dayArry[0].slice(0,10)!=''&&this.state.dayArry[0].slice(0,10)!=''){
                // alert(this.state.dayArry[2])
               
                  this._filling()
                  
                 
              }
                var promise = getItem("tomorrow").then((result) => {
                  // alert(result.slice(0,10))
                  alert('lalalallalal')
                  // alert(result)
                  let nTime= new Date(new Date().setHours(0,0,0,0));
                  let newtime = Date.parse(nTime);
                  // let inputime = ''+newtime+'';//界定是否隔天的时间戳
                  let tinput = newtime+86400000;
                  // let tomorrowtime = ''+tinput+''
                  
                  if(newtime==parseInt(result)){//判断间隔天数
                    alert('lalallala')
                    var promise = saveItem("tomorrow", tinput.toString(), () => { }).then((result) => {
                    var promise = getItem("streak").then((result) => {
                      // alert(result)
                          let streak1 = parseInt(result)+1;
                          let streak = parseInt(result)+1;
                        if(streak1<30){
                          if(streak1%3==0&&streak1%30!=0){
            
                            var promise = getItem("exp").then((result) => {
                              let exp = parseInt(result)+10;
                                
                                var promise = saveItem("exp", exp.toString(), () => { }).then((result) => {
                                   
            
                                }).catch((error) => {
                                  console.error(new Error("失败"));
                                })
                              
                            }).catch((error) => {
                              console.error(new Error("失败"));
                            })
                          }else if(streak1%5==0&&streak1%10!=0&&streak1%15!=0&&streak1%20!=0&&streak1%25!=0&&30){
                            var promise = getItem("exp").then((result) => {
                              let exp = parseInt(result)+20;
                                
                                var promise = saveItem("exp", exp.toString(), () => { }).then((result) => {
                                   
            
                                }).catch((error) => {
                                  console.error(new Error("失败"));
                                })
                              
                            }).catch((error) => {
                              console.error(new Error("失败"));
                            })
                          }else if(streak1%7==0&&streak1%14!=0&&streak1%21!=0&&streak1%28!=0){
                            var promise = getItem("exp").then((result) => {
                              let exp = parseInt(result)+30;
                                
                                var promise = saveItem("exp", exp.toString(), () => { }).then((result) => {
                                   
            
                                }).catch((error) => {
                                  console.error(new Error("失败"));
                                })
                              
                            }).catch((error) => {
                              console.error(new Error("失败"));
                            })
                          }else if(streak1%14==0&&streak1%28!=0){
                            var promise = getItem("exp").then((result) => {
                              let exp = parseInt(result)+30;
                                
                                var promise = saveItem("exp", exp.toString(), () => { }).then((result) => {
                                   
            
                                }).catch((error) => {
                                  console.error(new Error("失败"));
                                })
                              
                            }).catch((error) => {
                              console.error(new Error("失败"));
                            })
                          }else if(streak1%30==0){
                            var promise = getItem("exp").then((result) => {
                              let exp = parseInt(result)+30;
                                
                                var promise = saveItem("exp", exp.toString(), () => { }).then((result) => {
                                   
            
                                }).catch((error) => {
                                  console.error(new Error("失败"));
                                })
                              
                            }).catch((error) => {
                              console.error(new Error("失败"));
                            })
                          }
                        }else{
                          var promise = getItem("exp").then((result) => {
                            let exp = parseInt(result)+5;
                              
                              var promise = saveItem("exp", exp.toString(), () => { }).then((result) => {
                                 
            
                              }).catch((error) => {
                                console.error(new Error("失败"));
                              })
                            
                          }).catch((error) => {
                            console.error(new Error("失败"));
                          })
                        }
                          var promise = saveItem("streak1", streak.toString(), () => { }).then((result) => {
                                  
                                // var promise = getItem("longstreak").then((result) => {
                                  // alert(result)
                                  // if(parseInt(result)<streak){
                                  //   var promise = saveItem("longstreak", streak.toString(), () => { }).then((result) => {
                                        var promise = getItem("daythings").then((result) => {
                                          // alert(result)
            
                                            let streak1 = 0;
                                            var promise = saveItem("daythings", streak1.toString(), () => { }).then((result) => {
                    
                    
                                            }).catch((error) => {
                                              console.error(new Error("失败"));
                                            })
                                          
                                        }).catch((error) => {
                                          console.error(new Error("失败"));
                                        })
            
                                  //   }).catch((error) => {
                                  //     console.error(new Error("失败"));
                                  //   })
                                  // }
                                // }).catch((error) => {
                                //   console.error(new Error("失败"));
                                // })
                          }).catch((error) => {
                          console.error(new Error("失败"));
                          })
                    }).catch((error) => {
                      // console.log('1');
                      })
                    }).catch((error) => {
                      // console.log('1');
                      })
                  }else if(tinput==parseInt(result)){//今天第二次进入
                        // alert('lalallalallala')
                        this.setState({NU:1})
                  }else{
                    let streak = 0;
                    var promise = saveItem("streak", streak.toString(), () => { }).then((result) => {
                        var promise = getItem("daythings").then((result) => {
                          // alert(result)
                              let streak1 = 0;
                              var promise = saveItem("daythings", streak1.toString(), () => { }).then((result) => {
                                  
            
                              }).catch((error) => {
                                console.error(new Error("失败"));
                              })
                          
                        }).catch((error) => {
                          console.error(new Error("失败"));
                        })
                    }).catch((error) => {
                      
                    })
                  }
                
                  }).catch((error) => {
                  // console.log('1');
                  })
            }).catch((error) => {
            // console.log('1');
            })
          }).catch((error) => {
            // console.log('1');
            })
      }).catch((error) => {
      // console.log('1');
      })
    }).catch((error) => {
      // console.log('1');
    })
  }  
  _makeUp(day){
    // alert(day)
   
      let endday = day+86400000;
      let keyarry = this.state.keyarry; 
      // alert(endday)
      // alert(keyarry)
      for(let i in this.state.keyarry){
        // alert(keyarry[i])
        if(keyarry[i]>day&&keyarry[i]<endday){

          var promise = getItem(keyarry[i]).then((result) => {
            this.state.dayArry.push(result)
            this.state.lkayArry.push(keyarry[i])
              // alert(this.state.dayArry)
          }).catch((error) => {
            
          })
          // alert(this.state.dayArry)
            // this.state.WeekArry.push()
            // alert(this.state.WeekArry)
          // alert(keyarry[1])
        }
        
      }
      // alert(this.state.dayArry)
  }
  _filling(){

    if(this.state.dayArry[0].slice(0,10)==''){
      // this.setState({image1:true,ban2:true})
    }else if(this.state.dayArry[0].slice(0,10)==null){
      // this.setState({image1:true,ban2:true})
    }else{
      this.setState({textInput1:this.state.dayArry[0].slice(11),image1:true,ban4:true})
      if(this.state.dayArry[1].slice(0,10)==''){
        // this.setState({image1:true,ban2:true})
      }else if(this.state.dayArry[1].slice(0,10)==null){
        // this.setState({image1:true,ban2:true})
      }else{
        this.setState({textInput2:this.state.dayArry[1].slice(11),image2:true,ban3:true})
        if(this.state.dayArry[2].slice(0,10)==''){
          // this.setState({image1:true,ban2:true})
        }else if(this.state.dayArry[2].slice(0,10)==null){
          // this.setState({image1:true,ban2:true})
        }else{
          this.setState({textInput3:this.state.dayArry[2].slice(11),ban1:false,ban4:false,ban3:false,image3:true})
        }
      }
    }
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
  _alert(exp){
    Alert.alert(
      'Congratulations to gain experience',
      '+'+exp+' exp',
      [
        
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )
  }
  textI1(date){
    // alert(date);
  //  alert(this.state.dayArry)
    let newDate = new Date();
    let newDay = newDate.toJSON();
    let thisday = newDay.slice(0,10)//yy-mm-dd格式时间
    let timestamp = Date.parse(new Date());//毫秒时间戳
    let AsyncStorageKey =''+timestamp+''
    let input = thisday+'-'+this.state.textInput1
    let Dayinput = thisday+'-'+'1';
    
    // alert(AsyncStorageKey)

    // alert(newDay.slice(0,10))

    // keyarry.push();
    
    // alert(this.state.keyarry)
    if(this.state.textInput1==''){
      this.setState({image1:false})
    }else{
          
              
      
      if (date==0){
        
     
         
              
                  var promise = saveItem("texinput1", input, () => { }).then((result) => {
                    var promise = getItem("daythings").then((result) => {
                      let daythings = parseInt(result)+1;
                        
                        var promise = saveItem("daythings", daythings.toString(), () => { }).then((result) => {
                            this.setState({ban4:true});

                        }).catch((error) => {
                          console.error(new Error("失败"));
                        })
                      
                    }).catch((error) => {
                      console.error(new Error("失败"));
                    })
                    
                  }).catch((error) => {
                  console.error(new Error("失败"));
                  })
                }else{
                  this.setState({ban4:true});
                }      
              
    }
   

  }
  textI2(date){
    // alert(date)
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
      if (date==0){
                var promise = saveItem("texinput2", input, () => { }).then((result) => {
                  var promise = getItem("daythings").then((result) => {
                    let daythings = parseInt(result)+1;
                      
                      var promise = saveItem("daythings", daythings.toString(), () => { }).then((result) => {
                          this.setState({ban3:true})

                      }).catch((error) => {
                        console.error(new Error("失败"));
                      })
                    
                  }).catch((error) => {
                    console.error(new Error("失败"));
                  })
                  
                }).catch((error) => {
                console.error(new Error("失败"));
                })
        }else{
          this.setState({ban3:true})
        } 
              
    }
  }

  _textI3(date){
    // alert(this.state.keyarry)
    // alert(date)
    let newDate = new Date();
    let newDay = newDate.toJSON();
    let tday = newDay.slice(0,10)//yy-mm-dd格式时间
    let timestamp = date+1;//毫秒时间戳
    //毫秒转yymmdd格式
    let unixTimestamp = new Date( timestamp );
    let yday = unixTimestamp.toJSON();
    let thisday = yday.slice(0,10);
    // let coon = unixTimestamp.toLocaleString();
    // let ymd = coon.getFullYear()+'-'+coon.getMonth()+'-'+coon.getDate()
    //  alert(coon);
    let AsyncStorageKey =''+timestamp+''
    let input1 = thisday+'-'+this.state.textInput1
    // alert(newDay.slice(0,10))
    
    if(this.state.textInput3==''){
      this.setState({image3:false,BottomHeight:false})
    }else{
      
      var promise = saveItem(AsyncStorageKey, input1, () => { }).then((result) => {
        this.state.keyarry.push(AsyncStorageKey)
        this.setState({ban1:false,Test1:AsyncStorageKey});
            var promise = saveItem("keyarry1", JSON.stringify(this.state.keyarry), () => { }).then((result) => {
              //input2
              let newDate1 = new Date();
              let newDay1 = newDate1.toJSON();
              let thisday1 = thisday
              let timestamp1 = date+100;
              let AsyncStorageKey =''+timestamp1+''
              let input2 = thisday1+'-'+this.state.textInput2
              var promise = saveItem(AsyncStorageKey, input2, () => { }).then((result) => {
                // alert('1')
                this.state.keyarry.push(AsyncStorageKey)
                this.setState({ban4:false,Test1:AsyncStorageKey});
                    var promise = saveItem("keyarry1", JSON.stringify(this.state.keyarry), () => { }).then((result) => {
                          //input3
                          let newDate2 = new Date();
                          let newDay2 = newDate2.toJSON();
                          let thisday2 = thisday
                          let timestamp2 = date+200;
                          let AsyncStorageKey =''+timestamp2+''
                          let input3 = thisday+'-'+this.state.textInput3
                         
                                                            var promise = saveItem(AsyncStorageKey, input3, () => { }).then((result) => {
                                                                this.setState({ban3:false,BottomHeight:false}); 
                                                                this.state.keyarry.push(AsyncStorageKey);

                                                                    var promise = saveItem("keyarry1", JSON.stringify(this.state.keyarry), () => { }).then((result) => {
                                                                      var promise = saveItem("texinput3", input3, () => { }).then((result) => {
                                                                        // alert(this.state.keyarry)
                                                                       
                                                                            if (this.state.textSt1==0){this._streak(this.state.NU)}
                                                                            
                                                                              var promise = getItem("exp").then((result) => {
                                                                                let exp = parseInt(result)+this.state.exp;
                                                                                  
                                                                                  var promise = saveItem("exp", exp.toString(), () => { }).then((result) => {
                                                                                    
                                                                                    const resetAction = NavigationActions.reset({
                                                                                      index: 0,
                                                                                      actions: [
                                                                                      NavigationActions.navigate({routeName: 'Roots'})
                                                                                      ]
                                                                                  })
                                                                                  
                                                                                  this.props.navigation.dispatch(resetAction);  
                                                                                                
                                                                                        
                                                                                    this._alert(this.state.exp)
                                                        
                                                                                  }).catch((error) => {
                                                                                    console.error(new Error("失败11"));
                                                                                  })
                                                                                
                                                                              }).catch((error) => {
                                                                                console.error(new Error("失败10"));
                                                                              })

                                                                            }).catch((error) => {
                                                                              console.error(new Error("失败9"));
                                                                            })
                                                                          
                                                                        }).catch((error) => {
                                                                          console.error(new Error("失败8"));
                                                                        })
                                                                        
                                                                      }).catch((error) => {
                                                                      console.error(new Error("失败7"));
                                                                      })
                                                                        
                                                                    }).catch((error) => {
                                                                    console.error(new Error("失败6"));
                                                                    })  
                                                              }).catch((error) => {
                                                              console.error(new Error("失败5"));
                                                              })
       
                                        }).catch((error) => {
                                          console.error(new Error("失败4"));
                                        })
                                      
                                    }).catch((error) => {
                                      console.error(new Error("失败3"));
                                    })
                                    
                                  
                                    
                                  
                                                                               
    }
   

  }
  _streak(date){
    if(date==3){
    var promise = getItem("streak1").then((result) => {
      // alert(date)
     
          let streak1 = parseInt(result)
          let streak = parseInt(result)+1;
          var promise = saveItem("streak1", streak.toString(), () => { }).then((result) => {
            let nTime= new Date(new Date().setHours(0,0,0,0))
            let newtime = Date.parse(nTime);
            let inputime = ''+newtime+''//界定是否隔天的时间戳
            var promise = saveItem("tomorrow", inputime.toString(), () => { }).then((result) => {
              var promise = getItem("daythings").then((result) => {
                let daythings = parseInt(result)+1;
              var promise = saveItem("daythings", daythings.toString(), () => { }).then((result) => {
                var promise = getItem("longstreak1").then((result) => {
                if(parseInt(result)<streak){
                  var promise = saveItem("longstreak1", streak.toString(), () => { }).then((result) => {

                  }).catch((error) => {
                    console.error(new Error("失败"));
                  })
                  }
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
  _weixin1(text){
    if(text==''){
        toastLong('请输入内容')
    }else{
      WeChat.isWXAppInstalled()
      .then((isInstalled) => {
        if (isInstalled) { 
          WeChat.shareToTimeline({type: 'text', description: text})
            this._alert(20)
          .catch((error) => {
            toastLong(error.message);
          });
        } else {
          alert('没有安装微信软件，请您安装微信之后再试');
          // this._alert(this.state.exp)
          // this._streak(this.state.NU)
          // let newDate = new Date();
          // let newDay = newDate.toJSON();
          // let tday = newDay.slice(0,10)//yy-mm-dd格式时间
          // let timestamp = date+1;//毫秒时间戳
          //毫秒转yymmdd格式
          // let unixTimestamp = new Date( this.state.dayDate );
          // let yday = unixTimestamp.toJSON();
          // let thisday = yday.slice(0,10);
          // if (thisday==tday){
          //     alert(true)
          // }
          // alert(this.state.dayArry)
          // console.log(this.state.keyarry)
          // alert(this.state.lkayArry)
        }
      });
    }
    
  }
  render() {
    return (
      <ScrollView style={styles.container}>
                <View style={{flexDirection:'row',backgroundColor:'#4FA4FF'}}>
                <View style={styles.topView}>
                      <Text style={styles.topText}>Journl</Text>
                      
                </View>
                <View style={{height:50,width:40,alignItems:'center',justifyContent:'center',flexDirection:'row'}} 
                      
                      ><Image source={require('./image/level.png')} style={{height:11,width:15,marginRight:2}}/><Text style={{textAlign:'center',fontSize:12,color:'#F6FCFF'}}
                >等级3</Text></View>
            </View>
          <View >
            <Text style={styles.welcome} >
              What went well today?
            </Text>
          
          </View>
          <View style={ styles.inputView}>
              <View style={styles.inputViewLeft}>
                  <View style={styles.leftImageTop}></View>
                  <Image style={styles.leftImage} source={require('./image/Smile.png')} ></Image>
                  {this.state.image1?
                      <TouchableOpacity style={styles.leftImageBottom} 
                        onPress={() => {this._weixin1(this.state.textInput1)}}
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
                    value={this.state.textInput1}
                    returnKeyType="join"
                    onChange={() => {}}//当文本框内容变化时调用此回调函数
                    onFocus={() => {this.setState({image1:true})}}//当文本框获得焦点的时候调用此回调函数
                    onBlur={() => {this.textI1(this.state.textSt1)}}//当文本框失去焦点的时候调用此回调函数
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
                          onPress={() => {this._weixin1(this.state.textInput2)}}
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
                    editable={this.state.ban4}//如果值为假，文本是不可编辑，默认值为真
                    returnKeyType="join"
                    value={this.state.textInput2}
                    onChangeText={(Text) => {this.setState({textInput2:Text})}}//当文本框内容变化时调用此回调函数
                    onFocus={() => {this.setState({image2:true})}}//当文本框获得焦点的时候调用此回调函数
                    onBlur={() => {this.textI2(this.state.textSt1)}}//当文本框失去焦点的时候调用此回调函数
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
                          onPress={() => {this._weixin1(this.state.textInput3)}}
                      
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
                    value={this.state.textInput3}
                    onChangeText={(Text) => {this.setState({textInput3:Text})}}//当文本框内容变化时调用此回调函数
                    onFocus={() => {this.setState({image3:true,BottomHeight:true})}}//当文本框获得焦点的时候调用此回调函数
                    onBlur={() => {this._textI3(this.state.dayDate)}}//当文本框失去焦点的时候调用此回调函数
                    onEndEditing={() => {}}//结束编辑时，调用回调函数
                  ></TextInput>
              </View>
          </View>
          {this.state.BottomHeight?
              <View style={{height:100}}></View>
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
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color:'#fff',
    height:30,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  inputView:{
    height:(height-220)/3,
    flex:1,
    backgroundColor:'#fff',
    margin:25,
    marginBottom:15,
    marginTop:0,
    borderRadius:15,
    flexDirection:'row',
    padding:10
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
    marginBottom:5,
  },
  leftImageBottom:{
    height:24,
    flex:1,
    marginTop:5,
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
    backgroundColor:'#4FA4FF'
  },
  topText:{
    textAlign:'center',
    fontSize:20,
    fontWeight:'bold',
    color:'#F6FCFF',
    paddingLeft:20,
  }
});
export default Journl