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
import Modal from 'react-native-root-modal';
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
          style={styles.calendar}
          current={'2017-08-16'}
          minDate={'2017-08-10'}
          displayLoadingIndicator
          markingType={'interactive'}
          theme={{
            calendarBackground: '#333248',
            textSectionTitleColor: 'white',
            dayTextColor: 'white',
            todayTextColor: 'white',
            selectedDayTextColor: 'white',
            monthTextColor: 'white',
            selectedDayBackgroundColor: '#333248',
            arrowColor: 'white'
          }}
          markedDates={{
            '2017-08-08': [{textColor: '#666'}],
            '2017-08-09': [{textColor: '#666'}],
            '2017-08-14': [{startingDay: true, color: 'blue'}, {endingDay: true, color: 'blue'}],
            '2017-08-21': [{startingDay: true, color: 'blue'}],
            '2017-08-22': [{endingDay: true, color: 'gray'}],
            '2017-08-24': [{startingDay: true, color: 'gray'}],
            '2017-08-25': [{color: 'gray'}],
            '2017-08-26': [{endingDay: true, color: 'gray'}]}}
          hideArrows={false}
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