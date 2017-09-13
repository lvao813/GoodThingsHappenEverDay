import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Switch,
  Image,
  Linking,
  Alert,
} from 'react-native';
import {  List } from 'antd-mobile';
import { NavBar, Icon } from 'antd-mobile';
import Activity from './common/ModalActivity';
import * as WeChat from 'react-native-wechat';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { toastLong} from './common/ToastUtils';
import { NavigationActions } from 'react-navigation';
import { Setting1,Time,About1,Suggestions,Developer,RateUs,Wechat1,Microblogging,Friends,ChangTime,Level,WachatTitle,Description,WachatEr,EXPTitle} from './common/constants_titel';
import { getItem,saveItem} from './common/AsyncStorage';
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
const Item = List.Item;
const Brief = Item.Brief;



 class Settings extends Component {
  
  constructor(props) {
        super(props);
        this.state = {
           value: false,
        disabled: false,
        changeTxt:'是否接受通知？',
        activtityVisible:false,
        isDateTimePickerVisible: false,
        timepicker:'',
        level1:1,
        
       
        };
        WeChat.registerApp('wx6000a418f168ac83');
        
      }
      componentWillMount() {
        var promise = getItem("swith").then((result) => {
           if(result==null){

           }else{
             if(result=='1'){
               let swith = true;
              this.setState({
                value:swith,
                changeTxt:'接受通知'
              });
             }
           
              var promise = getItem("time12").then((result) => {
                if(result==null){
                  // alert('1')
                }else{
                  // alert(result)
                  this.setState({timepicker:result})
                }
                
            }).catch((error) => {
              console.error(new Error("失败"));
            })
          }
            var promise = getItem("level").then((result) => {
                this.setState({level1:parseInt(result)})
                
            }).catch((error) => {
              console.error(new Error("失败"));
            })
      }).catch((error) => {
        console.error(new Error("失败"));
      })
        

      }
      _friends(){
        var promise = getItem("friends").then((result) => {
          // alert(parseInt(result))
          let nu = parseInt(result)+1;
          // alert(nu)

          var promise = saveItem("friends", nu.toString(), () => { }).then((result) => {
            const resetAction = NavigationActions.reset({
              index: 0,
              actions: [
              NavigationActions.navigate({routeName: 'Roots'})
              ]
            })
            
            this.props.navigation.dispatch(resetAction);
            // _alert(50) 
          }).catch((error) => {
            console.error(new Error("失败"));
          })
        }).catch((error) => {
          console.error(new Error("失败"));
        })
      }
      _alert(exp){
        Alert.alert(
          EXPTitle,
          '+'+exp+' exp',
          [
            
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ],
          { cancelable: false }
        )
      }

   _Link(Url) {
    // alert('1')
    // 打开外部URL链接

    //  alert(Url)
    Linking.canOpenURL(Url).then(supported => {
      if (!supported) {
        console.log('Can\'t handle url: ' + Url);
      } else {
        return Linking.openURL(Url);
      }
    }).catch(err => console.error('An error occurred', err));
  }

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
  
    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
  
    _handleDatePicked = (date) => {
      // console.log('A date has been picked: ', date);
      // alert(date)
      let newdate =''+date+'';
      let time = newdate.slice(16,24)
      var promise = saveItem("time12", time, () => { }).then((result) => {
        this.setState({timepicker:time});
        this._hideDateTimePicker();
        
      }).catch((error) => {
        console.error(new Error("失败"));
      })
      

      // this.setState({timepicker:time});
      // this._hideDateTimePicker();
      
    };

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
  exp(){
    var promise = getItem("exp").then((result) => {
      let exp = parseInt(result)+50;
        
        var promise = saveItem("exp", exp.toString(), () => { }).then((result) => {
          this._alert(50)

        }).catch((error) => {
          console.error(new Error("失败"));
        })
      
    }).catch((error) => {
      console.error(new Error("失败"));
    })

  }     
  _weixin(){
    
    WeChat.isWXAppInstalled()
    .then((isInstalled) => {
      if (isInstalled) {
        this._friends()
        WeChat.shareToSession({
          title:WachatTitle,
          description: Description,
          thumbImage: 'http://img.mp.sohu.com/upload/20170624/13254199b97140f380ba30d670abd0c8_th.png',
          type: 'news',
          webpageUrl: 'http://www.marno.cn/'
        })
         
        .catch((error) => {
          toastLong('error')
        });
      } else {
        toastLong(WachatEr)
      }
    });
  }
  _swith(value){
    // alert(value)
    let swvalue = value
    // alert('1')
    if(value){
      swvalue = '1'
      // alert(value)
    }else{
      swvalue = '0'
    }
    var promise = saveItem("swith", swvalue, () => { }).then((result) => {
        this.setState({
            value:value,
            changeTxt:value?'接受通知':'关闭通知'
        });
      
    }).catch((error) => {
      console.error(new Error("失败"));
    })
        
  }

  render() {
   
    return (
      <View style={{backgroundColor:'#FAFAFA'}}>
        <View style={{flexDirection:'row',backgroundColor:'#4FA4FF'}}>
                <View style={styles.topView}>
                      <Text style={styles.topText}>Settings</Text>
                      
                </View>
                <View style={{height:50,width:40,alignItems:'center',justifyContent:'center',flexDirection:'row'}} 
                      
                      ><Image source={require('./image/level.png')} style={{height:12,width:15,marginRight:2}}/><Text style={{textAlign:'center',fontSize:12,color:'#F6FCFF'}}
                >{Level}{this.state.level1}</Text></View>
        </View>
        <View style={{height:10}}></View>
      <List  className="my-list">
        <Item   extra={<Switch value={this.state.value} onValueChange={(value)=>{this._swith(value) }}/>}>{Time}</Item>
        {this.state.value?
          <Item extra={this.state.timepicker} arrow="horizontal" multipleLine='true' onClick={this._showDateTimePicker }>{ChangTime}</Item>
          :<View></View>}
        
      </List>
      <View style={{height:10}}></View>
      <List  className="my-list2">
          <Item  arrow="horizontal" multipleLine='true' onClick={() => {const { navigate } = this.props.navigation;
 +              navigate('About');} }>{About1}</Item>
          <Item  arrow="horizontal" multipleLine='true' onClick={() => {this._Link('mailto:info@vloveapp.com')}}>{Suggestions}</Item>
          <Item  arrow="horizontal" multipleLine='true' onClick={() => {this._Link('mailto:info@vloveapp.com')}}>{Developer}</Item>
      </List>
      <View style={{height:10}}></View>
      <List className="my-list4">
      <Item  arrow="horizontal" multipleLine='true' onClick={() => {}}>{RateUs}</Item>
      </List>
      <View style={{height:10}}></View>
      <List className="my-list3">
          
          <Item  arrow="horizontal" multipleLine='true' onClick={() => {this._Link('http://weibo.com/p/1006066366532562/home?profile_ftype=1&is_all=1#_0')}}>{Microblogging}</Item>
          <Item  arrow="horizontal" multipleLine='true' onClick={() => {this._Link('http://www.qq.com/')}}>{Wechat1}</Item>
          <Item  arrow="horizontal" multipleLine='true' onClick={() => {this._weixin()} }>{Friends}</Item>
      </List>
      
        
      <Activity visible={this.state.activtityVisible} />
          <DateTimePicker
          mode='time'
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
          />
      </View>
      
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
  topView:{
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
  },
});
export default Settings