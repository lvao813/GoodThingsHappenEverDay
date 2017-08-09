import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Switch,
} from 'react-native';
import {  List } from 'antd-mobile';


const Item = List.Item;
const Brief = Item.Brief;



 class Settings extends Component {
  
  constructor(props) {
        super(props);
        this.state = {
           value: false,
        disabled: false,
        changeTxt:'是否接受通知？',
       
        };
        
      }
        
    

  render() {
   
    return (
      <View >
      <List renderHeader={() => ''} className="my-list">
        <Item   extra={<Switch value={this.state.value} onValueChange={(value)=>{
                        this.setState({
                            value:value,
                            changeTxt:value?'switch 打开了':'switch 关闭了'
                        });


                    }}/>}>{this.state.changeTxt}</Item>
        {this.state.value?
          <Item  arrow="horizontal" multipleLine='true' onClick={() => {} }>time</Item>
          :<View></View>}
        
      </List>
      <List renderHeader={() => ''} className="my-list2">
          <Item  arrow="horizontal" multipleLine='true' onClick={() => {const { navigate } = this.props.navigation;
 +              navigate('About');} }>About</Item>
          <Item  arrow="horizontal" multipleLine='true' onClick={() => {}}>Send feedback or suggestions</Item>
          <Item  arrow="horizontal" multipleLine='true' onClick={() => {}}>Contact the developer</Item>
      </List>
      <List renderHeader={() => ''} className="my-list3">
          <Item  arrow="horizontal" multipleLine='true' onClick={() => {} }>Love the app? Rate us in the App Store</Item>
          <Item  arrow="horizontal" multipleLine='true' onClick={() => {}}>Facebook</Item>
          <Item  arrow="horizontal" multipleLine='true' onClick={() => {}}>Twitter</Item>
      </List>
      
        
      
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
});
export default Settings