import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { StackNavigator } from 'react-navigation';
 export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDateTimePickerVisible: false,
    };
    
  }
  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
  
    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
  
    _handleDatePicked = (date) => {
      console.log('A date has been picked: ', date);
      // alert(date)
      let newdate =''+date+'';
      let time = newdate.slice(16,24)
      alert(time)
      this._hideDateTimePicker();
    };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._showDateTimePicker}>
        <Text>Show TimePicker</Text>
        </TouchableOpacity>
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
const MyApp = StackNavigator({
    // 对应界面名称
    About: {
        screen: About,
        navigationOptions:{
            headerTitle:'详情',
            headerBackTitle:null,
        }
    },
   
}, {
    headerMode: 'screen',
});

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
});