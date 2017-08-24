import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
} from 'react-native';
import { getItem,saveItem} from './common/AsyncStorage'
 import ScrollableTabView, {DefaultTabBar,ScrollableTabBar} from 'react-native-scrollable-tab-view';
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
var ScreenWidth = Dimensions.get('window').width;

 class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
       
        keyarry:[],
        WeekArry:[],
        MonthArry:[],
        YearArry:[],
      
    };
    
  }
  componentWillMount() {
    
    let timestamp = Date.parse(new Date());
    let thistime = ''+timestamp+''
    let Yeartime = thistime-31536000000
    let Monthtime = thistime-2592000000
    let Weektime = thistime-86400000
    var promise = getItem("keyarry1").then((result) => {
      // alert(JSON.parse(result)) 
      this.setState({keyarry:JSON.parse(result)})
      // alert(this.state.keyarry)
      let keyarry = this.state.keyarry; 
      for(let i in this.state.keyarry){
        if(keyarry[i]>Weektime&&keyarry[i]<timestamp){
            this.state.WeekArry.push(keyarry[i])
            // alert(this.state.WeekArry)
          // alert(keyarry[1])
        }
        if(keyarry[i]>Monthtime&&keyarry[i]<timestamp){
            this.state.MonthArry.push(keyarry[i])
            // alert(this.state.MonthArry)
        }
        if(keyarry[i]>Yeartime&&keyarry[i]<timestamp){
                this.state.YearArry.push(keyarry[i])
                // alert(this.state.YearArry)
              }
      }
      
      
    }).catch((error) => {
    // console.log('1');


    })
    // this.setState({WeekArry:WeekArry})
  }
  componentDidMount() {
    // this.interval = setInterval(() => {
    //  alert(this.state.WeekArry)

    // }, 1000);
    // // alert(this.state.WeekArry)
  }
  render() {
    return (
      <ScrollView>
            <View style={{flexDirection:'row',backgroundColor:'#fff',borderColor:'#666',borderBottomWidth:1}}>
                <View style={styles.topView}>
                      <Text style={styles.topText}>History</Text>
                      
                </View>
                <Image style={{height:40,width:40,alignItems:'center',justifyContent:'center'}} 
                      source={require('./image/hot.png')}
                      ><Text style={{textAlign:'center',fontWeight:'bold',fontSize:20}}
                >1</Text></Image>
            </View>
            <ScrollableTabView
                  // style={styles.container}
                  renderTabBar={() => <DefaultTabBar />}
                  tabBarUnderlineStyle={styles.lineStyle}
                  tabBarActiveTextColor='#FF0000'>

                  <View style={{height:90,width:100,backgroundColor:'#000'}} tabLabel='Past Week'> 
                      <View style={{height:30,width:50,backgroundColor:'#666',marginTop:50}}></View>
                  </View>
                  <View style={styles.container} tabLabel='Past Month'></View>
                  <View style={styles.container} tabLabel='Past Year'></View>
                  <View style={styles.container} tabLabel='All Time'></View>
            </ScrollableTabView>
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
  container: {
         flex: 1,
         marginTop: 20
     },
     lineStyle: {
         width:ScreenWidth/4,
         height: 2,
         backgroundColor: '#FF0000',
     },
     textStyle: {
         flex: 1,
         fontSize:20,
         marginTop:20,
         textAlign:'center',
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
});
export default History