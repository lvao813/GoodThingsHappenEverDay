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
import { toastLong} from './common/ToastUtils';
import ImagePicker from 'react-native-image-picker';
import { Header } from './common/constants';

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

        };
          this.options = {
      title: '请选择',
      cancelButtonTitle: '取消',
      takePhotoButtonTitle: '拍照',
      chooseFromLibraryButtonTitle: '从照片库选择...',

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
                      // alert(parseInt(result)+30)

                      this._level(parseInt(result))
                        var promise = getItem("streak").then((result) => { 
                          
                            this.setState({current:result})
                            var promise = getItem("longstreak").then((result) => { 
                              
                                this.setState({longest:result})
                                var promise = getItem("daythings").then((result) => { 
                                  
                                    this.setState({dayS:result})
                                    var promise = getItem("keyarry1").then((result) => { 
                                        let keyarry = JSON.parse(result);
                                          // alert(keyarry.length)
                                        let len = Math.ceil(keyarry.length/3)
                                        this.setState({things:len})
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
      seve(){
          if(this.state.name==''){
              toastLong('请输入您的姓名')
          }else{
                var promise = saveItem("name1", this.state.name, () => { }).then((result) => {
                   toastLong('修改成功');
                   
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
    _showImagePicker() {//头像选择，相机，相册
    ImagePicker.showImagePicker(this.options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker')
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error)
      } else {
        this.setState({img:response.uri})
        var promise = saveItem("img", response.uri, () => { }).then((result) => {
                   toastLong('修改成功');
                   
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
      <ScrollView style={{backgroundColor:'#cdccc8'}}>
            <View style={{flexDirection:'row',backgroundColor:'#4FA4FF'}}>
            <View style={styles.topView}>
                 
                  
            </View>
            <View style={{height:50,width:40,alignItems:'center',justifyContent:'center',flexDirection:'row'}} 
                  
            ><Image source={require('./image/level.png')} style={{height:12,width:15,marginRight:2}}/><Text style={{textAlign:'center',fontSize:12,color:'#F6FCFF'}}
            >等级3</Text></View>
            </View>

        <View style={styles.TopView2}>
            <View style={styles.TopView3}>
                  <TouchableOpacity style={styles.LifeView}
                    onPress={()=>{this._showImagePicker()}}
                  >
                      <Image source={{uri:this.state.img}} style={{height:90,width:90,borderRadius:50, resizeMode:'cover',marginTop:10}}></Image>
                  </TouchableOpacity>
                  <View style={styles.RightView}>
                      <TextInput
                        underlineColorAndroid="transparent"
                        autoCapitalize='words'
                        onBlur={() =>{this.seve()}}
                        value={this.state.name}
                        style={styles.RightInp}
                        onChangeText={(Text) => {this.setState({name:Text})}}
                      ></TextInput>
                      
                      <View style={styles.RighitTV}>
                          <Text style={styles.RightText}>Level  </Text>
                          <Text style={styles.RightText}>{this.state.level}</Text>
                      </View>

                  </View>
            
            </View>
            <View style={styles.TopView4}>
               <ProgressBarAndroid  color="green" styleAttr='Horizontal' progress={this.state.progress}  
            indeterminate={false} style={{width:250}} />  
              <View style={styles.TopView4B}>
              <Text style={styles.View4BText}>{this.state.nextexp} xp To Next Level</Text></View>
            </View>
        </View>
        <View style={styles.AllBoxView}>
            <View style={styles.BoxView}>
              <Text style={styles.BoxTextS1}>{this.state.current}</Text>
              <Text style={styles.BoxTextS2}>Current Streak</Text>
            </View>
            <View style={styles.BoxView}>
              <Text style={styles.BoxTextS1}>{this.state.longest}</Text>
              <Text style={styles.BoxTextS2}>Longest Streak</Text>
            </View>
            <View style={styles.BoxView}>
              <Text style={styles.BoxTextS1}>{this.state.things}</Text>
              <Text style={styles.BoxTextS2}>Total Completed Days</Text>
            </View>
            <View style={styles.BoxView}>
              <Text style={styles.BoxTextS1}>{this.state.dayS}</Text>
              <Text style={styles.BoxTextS2}>Total Good Things</Text>
            </View>
        </View>
      </ScrollView>
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
  TopView2:{
    backgroundColor:'#cdccc8',
    height:180,
    width:width,
  },
  TopView3:{
    flexDirection:'row',
    height:100,
    width:width,
  },
  LifeView:{
    flex:1,
    
  },
  RightView:{
    flex:3,
    
    justifyContent:'center'
    
  },
  RightInp:{
    fontSize:25,
    color:'#13227a',
    fontWeight:'bold',
    marginTop:30,
    height:50,
    

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
    height:50,
    width:width,
    justifyContent:'center',
    alignItems:'center',
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
    alignItems:'center',
    marginTop:5,
  },
  View4BText:{
    color:'#13227a'
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

});
export default Profile