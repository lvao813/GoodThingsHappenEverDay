import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
 import ScrollableTabView, {DefaultTabBar,ScrollableTabBar} from 'react-native-scrollable-tab-view';
 var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;

 class History extends Component {
  

  render() {
    return (
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
});
export default History