import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
} from 'react-native';
 import ScrollableTabView, {DefaultTabBar,ScrollableTabBar} from 'react-native-scrollable-tab-view';
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
var ScreenWidth = Dimensions.get('window').width;

 class History extends Component {
  

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
                  style={styles.container}
                  renderTabBar={() => <DefaultTabBar />}
                  tabBarUnderlineStyle={styles.lineStyle}
                  tabBarActiveTextColor='#FF0000'>

                  <Text style={styles.textStyle} tabLabel='Past Week'>No Entries</Text>
                  <Text style={styles.textStyle} tabLabel='Past Month'>No Entries</Text>
                  <Text style={styles.textStyle} tabLabel='Past Year'>No Entries</Text>
                  <Text style={styles.textStyle} tabLabel='All Time'>No Entries</Text>
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