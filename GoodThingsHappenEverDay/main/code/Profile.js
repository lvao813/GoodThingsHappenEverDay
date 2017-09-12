import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  ProgressBarAndroid,
} from 'react-native';
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
import { getItem, saveItem} from './common/AsyncStorage';
import { Profile1,Level,Exp1,Exp2,TLevel,Recommended,Streak,LongStreak,Days,Things,MSG,NameT,LibraryButton,TakePhoto,Cacel,ImageTitle} from './common/constants_titel';
import { toastLong} from './common/ToastUtils';
import ImagePicker from 'react-native-image-picker';
import { Header,Badeg1,Badeg2,Badeg3,Badeg4 } from './common/constants';

 class Profile extends Component {
  constructor(props) {
        super(props);
        this.state = {
            name:'',
            level:1,//等级
            current:0,
            longest:0,
            dayS:0,
            things:0,
            progress:0,//进度
            badge:1,//徽章
            nextexp:0,
            img:Header,
            exp:0,
            badgeImge:Badeg1,
            friends:0,

        };
          this.options = {
      title: ImageTitle,
      cancelButtonTitle: Cacel,
      takePhotoButtonTitle: TakePhoto,
      chooseFromLibraryButtonTitle: LibraryButton,

      // durationLimit: 10,
      // maxWidth: 100,
      // maxHeight: 100,
      // aspectX: 2,
      // aspectY: 1,
      quality: 0.75,
      angle: 0,
      allowsEditing: true,
      noData: false,
      storageOptions: {
        skipBackup: true,
        path: 'images',
        cameraRoll: true,

      }
    };
        
      }
    componentWillMount() {

     var promise = getItem("name1").then((result) => {
          this.setState({name:result})
          var promise = getItem("img").then((result) => {
              if (result==null){


                  }else{this.setState({img:result})}
                  var promise = getItem("exp").then((result) => { 
                      // alert(parseInt(result))

                      this._level(parseInt(result))
                        var promise = getItem("streak1").then((result) => { 
                          let streak1 = parseInt(result)
                            // alert(parseInt(result)+1)
                            this.setState({current:result})
                              this._levelseve()
                            var promise = getItem("longstreak1").then((result) => { 
                              if(streak1>parseInt(result)){
                                var promise = saveItem("longstreak1", streak1.toString(), () => { }).then((result) => {
                                  // alert('good')
                                  this.setState({longest:streak1})
                                }).catch((error) => {
                                  // console.log('1');
                                  // alert('错误')
                                })
                              }else{
                                this.setState({longest:result})
                              }
                                
                                var promise = getItem("daythings").then((result) => { 
                                  
                                    // this.setState({dayS:result})
                                    var promise = getItem("keyarry1").then((result) => { 
                                        let keyarry = JSON.parse(result);
                                          // alert(keyarry.length)
                                        let len = Math.ceil(keyarry.length/3)
                                        this.setState({things:len,dayS:keyarry.length})
                                        var promise = getItem("friends").then((result) => {
                                          // alert(parseInt(result))
                                          this.setState({friends:parseInt(result)})
                                        }).catch((error) => {
                                          console.error(new Error("失败"));
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
    _levelseve(){
      let level1 = this.state.level
      var promise = saveItem("level", level1.toString(), () => { }).then((result) => {
        // alert(parseInt(result))
        // alert('ok')
      }).catch((error) => {
        console.error(new Error("失败"));
      })
    }
      seve(){
          if(this.state.name==''){
              toastLong(NameT)
          }else{
                var promise = saveItem("name1", this.state.name, () => { }).then((result) => {
                   toastLong(MSG);
                   
                }).catch((error) => {
                console.log('1');
                })
          }
      }
      _level(exp){
        // alert(exp);
        let ex;
        let ext;
          if(0<exp&&exp<50){
            ext=50-exp;
            ex=exp/50;
            this.setState({level:1,progress:ex,nextexp:ext})
          }else if(49<exp&&exp<100){
            ext=100-exp;
            ex=(exp-50)/50;
            this.setState({level:2,progress:ex,nextexp:ext})
            
          }else if(99<exp&&exp<200){
            ext=200-exp;
            ex=(exp-100)/100;
            this.setState({level:3,progress:ex,nextexp:ext})
          }else if(199<exp&&exp<350){
            ext=350-exp;
            ex=(exp-200)/150;
            this.setState({level:4,progress:ex,nextexp:ext})
          }else if(349<exp&&exp<550){
            ext=550-exp;
            ex=(exp-350)/200;
            this.setState({level:5,progress:ex,badge:2,nextexp:ext})
          }else if(549<exp&&exp<800){
            ext=800-exp;
            ex=(exp-550)/250;
            this.setState({level:6,progress:ex,badge:2,nextexp:ext})
          }else if(799<exp&&exp<1100){
            ext=1100-exp;
            ex=(exp-800)/300;
            this.setState({level:7,progress:ex,badge:3,nextexp:ext})
          }else if(1099<exp&&exp<1450){
            ext=1450-exp;
            ex=(exp-1100)/350;
            this.setState({level:8,progress:ex,badge:3,nextexp:ext})
          }else if(1449<exp&&exp<1850){
            ext=1850-exp;
            ex=(exp-1450)/400;
            this.setState({level:9,progress:ex,badge:4,nextexp:ext})
          }else if(1849<exp&&exp<2300){
            ext=2300-exp;
            ex=(exp-1850)/450;
            this.setState({level:10,progress:ex,badge:4,nextexp:ext})
          }else if(exp==0){
            ext=50-exp;
            ex=exp/50;
            this.setState({level:1,progress:ex,nextexp:ext})
          }else {
            ext=2800-exp;
            ex=(exp-2300)/500;
            this.setState({level:11,progress:ex,badge:4,nextexp:ext})
          }
            
      }
      componentDidMount() {
        if(this.state.badge==2){
          this.setState({badgeImge:Badeg2})
        }else if(this.state.badge==3){
          this.setState({badgeImge:Badeg3})
        }else if(this.state.badge==4){
          this.setState({badgeImge:Badeg4})
        }
      }
    _showImagePicker() {//头像选择，相机，相册
    ImagePicker.showImagePicker(this.options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker')
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error)
      } else {
        this.setState({img:response.uri})
        var promise = saveItem("img", response.uri, () => { }).then((result) => {
                   toastLong(MSG);
                   
                }).catch((error) => {
                console.log('1');
                })
        //改

        // console.log(baseUri)
        
        

      }


    })


  }
  render() {
    return (
      <View style={{backgroundColor:'#cdccc8',flex:1}}>
           

        <View style={styles.TopView2}>
          <Image source={require('./image/me-bg.png')} style={{height:height/3,resizeMode:'cover',width:width}} >
              <View style={{flexDirection:'row',}}>
                  <View style={styles.topView}>
                        
                          
                    </View>
                  <View style={{height:50,width:40,alignItems:'center',justifyContent:'center',flexDirection:'row',marginRight:8}} >
                    <Image source={require('./image/level.png')} style={{height:12,width:15,marginRight:2}}/>
                      <Text style={{textAlign:'center',fontSize:12,color:'#F6FCFF'}}>{Level}{this.state.level}</Text>
                  </View>
              </View>
              <View style={{flex:3,flexDirection:'row',marginBottom:10}}>
                <TouchableOpacity style={styles.LifeView}
                    onPress={()=>{this._showImagePicker()}}
                  >
                      <Image source={{uri:this.state.img}} style={{height:50,width:50,borderRadius:50, resizeMode:'cover',marginTop:10}}></Image>
                  </TouchableOpacity>
                <View style={styles.RightView}>
                      <View style={styles.RightInpView}>
                      <TextInput
                        underlineColorAndroid="transparent"
                        autoCapitalize='words'
                        maxLength={15}
                        onBlur={() =>{this.seve()}}
                        value={this.state.name}
                        style={styles.RightInp}
                        onChangeText={(Text) => {this.setState({name:Text})}}
                      ></TextInput><Image source={{uri:this.state.badgeImge}} style={{height:18,width:15,marginTop:18}}/></View>
                      <View style={{flex:3,justifyContent:'center',alignItems:'center',}}>
                        <View style={styles.TopView4}>
                          <ProgressBarAndroid  color="#F2743C" styleAttr='Horizontal' progress={this.state.progress}  
                            indeterminate={false} style={{width:150}} />  
                          <View style={styles.TopView4B}>
                          <Text style={styles.View4BText}>{Exp1}{this.state.nextexp}{Exp2}</Text></View>
                        </View>
                      </View>
                      

                  </View>
              </View>       
              <View style={{flex:3,flexDirection:'row',margin:10,marginTop:5,backgroundColor:'#fff',borderRadius:8,elevation: 4,  }}>
                  <View style={{flex:5,}}>
                    <View style={styles.TopleftView}>
                        <Text style={{fontSize:20,color:'#FDDE80'}}>{this.state.level}</Text>
                    </View>
                    <View style={styles.TopleftView}>
                        <Text style={{fontSize:15,color:'#8B8B8B'}}>{TLevel}</Text>
                    </View>
                  </View>
                  <View style={{flex:4,}}>
                     <View style={styles.TopleftView}>
                        <Text style={{fontSize:20,color:'#EB854F'}}>{this.state.friends}</Text>
                    </View>
                    <View style={styles.TopleftView}>
                        <Text style={{fontSize:15,color:'#8B8B8B'}}>{Recommended}</Text>
                    </View>
                  </View>
              </View>
            
          </Image> 
        </View>
        <View style={styles.TopView3}>
          <View style={{flex:4,backgroundColor:'#fff',elevation: 4,  }}>
              <View style={{flex:1,flexDirection:'row',}}>
                <View style={{flex:9,justifyContent:'center',marginLeft:10}}><Text style={{fontSize:15,color:'#8B8B8B'}}>{Streak}</Text></View>
                <View style={{flex:2,justifyContent:'center',alignItems:'center'}}><Text style={{fontSize:20,color:'#64C0E5'}}>{this.state.current}</Text></View>
              </View>
              <View style={{flex:1,flexDirection:'row'}}>
                <View style={{flex:9,justifyContent:'center',marginLeft:10}}><Text style={{fontSize:15,color:'#8B8B8B'}}>{LongStreak}</Text></View>
                <View style={{flex:2,justifyContent:'center',alignItems:'center'}}><Text style={{fontSize:20,color:'#64C0E5'}}>{this.state.longest}</Text></View>
              </View>
              <View style={{flex:1,flexDirection:'row'}}>
                <View style={{flex:9,justifyContent:'center',marginLeft:10}}><Text style={{fontSize:15,color:'#8B8B8B'}}>{Days}</Text></View>
                <View style={{flex:2,justifyContent:'center',alignItems:'center'}}><Text style={{fontSize:20,color:'#64C0E5'}}>{this.state.things}</Text></View>
              </View>
              <View style={{flex:1,flexDirection:'row'}}>
                <View style={{flex:9,justifyContent:'center',marginLeft:10,}}><Text style={{fontSize:15,color:'#8B8B8B'}}>{Things}</Text></View>
                <View style={{flex:2,justifyContent:'center',alignItems:'center',}}><Text style={{fontSize:20,color:'#64C0E5'}}>{this.state.dayS}</Text></View>
              </View>
          </View>
          <View style={{flex:1}}></View>
        </View>
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
    flex:1,
    width:width-40,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
   
  },
  topText:{
    textAlign:'center',
    fontSize:20,
    fontWeight:'bold',
    color:'#F6FCFF',
    paddingLeft:20,
  },
  TopView2:{
    backgroundColor:'#FAFAFA',
    flex:4,

    
  },
  TopView3:{
    backgroundColor:'#FAFAFA',
    flex:6,
   
    padding:10,
  },
  LifeView:{
    marginLeft:40,
  },
  RightView:{
    
    
    
    
  },
  RightInp:{
    fontSize:16,
    color:'#F6FCFF',
    flex:2,
    
    width:140,
    

  },
  RightInpView:{
    width:160,
    marginLeft:15,
    flexDirection:'row',

  },
  RighitTV:{
    flexDirection:'row',
    marginLeft:3
  },
  RightText:{
    fontSize:25,
    color:'#13227a',
  },
  TopView4:{
    marginLeft:15,
    
    
  },
  TopView4T:{
    justifyContent:'center',
    alignItems:'center',
    height:10,
    width:width-80,
    marginTop:15,
    
   
   
  },
  TopView4B:{
    
    justifyContent:'center',
    // alignItems:'center',
    width:150,
  },
  View4BText:{
    color:'#F6FCFF',
    fontSize:12,
  },
  AllBoxView:{
      justifyContent:'center',
      alignItems:'center',
  },
  BoxView:{
    flexDirection:'row',
    backgroundColor:'#F5FCFF',
    height:70,
    width:width-20,
    marginBottom:15,
    borderRadius:20,
    alignItems:'center',
  },
  BoxTextS1:{
    fontSize:25,
    fontWeight:'bold',
    marginLeft:40,
    marginRight:40,
    color:'#13227a',
  },
  BoxTextS2:{
    fontSize:23,
    color:'#13227a',
  },
  TopleftView:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },

});
export default Profile