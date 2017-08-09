import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
} from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
import { getItem, saveItem} from './common/AsyncStorage'
 class Calender extends Component {
     constructor(props) {
        super(props);
        this.state = {};
        this.onDayPress = this.onDayPress.bind(this);
      }
  componentWillMount() {
    var promise = saveItem("one", '3', () => { }).then((result) => {
          // alert('1')
        }).catch((error) => {
          console.error(new Error("失败"));
        })
  }

  render() {
    return (
      <ScrollView style={styles.container}>
            <View style={{flexDirection:'row',backgroundColor:'#fff',borderColor:'#666',borderBottomWidth:1}}>
                <View style={styles.topView}>
                      <Text style={styles.topText}>Calendar</Text>
                      
                </View>
                <Image style={{height:40,width:40,alignItems:'center',justifyContent:'center'}} 
                      source={require('./image/hot.png')}
                      ><Text style={{textAlign:'center',fontWeight:'bold',fontSize:20}}
                >1</Text></Image>
            </View>
        <Text style={styles.text}>Calendar with selectable date and arrows</Text>
        <Calendar
        // maxDate={'2017-08-8'}
          onDayPress={this.onDayPress}
          style={styles.calendar}
          // hideExtraDays
          // hideExtraDays={true}
          markedDates={{[this.state.selected]: {selected: true}}}
           
        />
       
       
      </ScrollView>
      
    );
  }
  onDayPress(day) {
    this.setState({
      selected: day.dateString
    });
  }
}




const styles = StyleSheet.create({
  
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
  calendar: {
    borderTopWidth: 1,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: '#eee',
    height: 350
  },
  text: {
    textAlign: 'center',
    borderColor: '#bbb',
    padding: 10,
    backgroundColor: '#eee'
  },
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
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
export default Calender