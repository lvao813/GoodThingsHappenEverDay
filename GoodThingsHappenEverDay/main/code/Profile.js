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
import { getItem, saveItem} from './common/AsyncStorage'
import { toastLong} from './common/ToastUtils'
import ImagePicker from 'react-native-image-picker'

 class Profile extends Component {
  constructor(props) {
        super(props);
        this.state = {
            name:'',
            level:0,
            current:0,
            longest:0,
            dayS:0,
            things:0,
            img:'http://tupian.enterdesk.com/2014/xll/11/15/4/touxiang5.jpg',

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
    _showImagePicker() {//头像选择，相机，相册
    ImagePicker.showImagePicker(this.options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker')
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error)
      } else {
        this.setState({img:response.uri})
        toastLong(response.uri)
        //改

        // console.log(baseUri)
        
        

      }


    })


  }
  render() {
    return (
      <ScrollView style={{backgroundColor:'#cdccc8'}}>
          <View style={{flexDirection:'row',backgroundColor:'#fff',borderColor:'#666',borderBottomWidth:1,}}>
                <View style={styles.topView}>
                      <Text style={styles.topText}>Profile</Text>
                      
                </View>
                <Image style={{height:40,width:40,alignItems:'center',justifyContent:'center',}} 
                      source={require('./image/hot.png')}
                      ><Text style={{textAlign:'center',fontWeight:'bold',fontSize:20}}
                >1</Text></Image>
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
               <ProgressBarAndroid  color="green" styleAttr='Horizontal' progress={0.2}  
            indeterminate={false} style={{width:250}} />  
              <View style={styles.TopView4B}><Text style={styles.View4BText}>10 xp To Next Level</Text></View>
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
              <Text style={styles.BoxTextS1}>{this.state.dayS}</Text>
              <Text style={styles.BoxTextS2}>Total Complained Days</Text>
            </View>
            <View style={styles.BoxView}>
              <Text style={styles.BoxTextS1}>{this.state.things}</Text>
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
    backgroundColor:'#fff'
  },
  topText:{
    textAlign:'center',
    fontSize:20,
    fontWeight:'bold',
    color:'#000',
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