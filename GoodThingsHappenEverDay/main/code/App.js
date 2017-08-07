import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';
// import Roots from './Roots';
import Roots from './Roots';
import Calender from './Calender';
import { TabBar, SearchBar } from 'antd-mobile';
import History from './History';
import Journl from './Journl';
import Settings from './Settings';
import Profile from './Profile';
import { StackNavigator,TabNavigator } from 'react-navigation';




 
const App = StackNavigator({
  //  Roots:{ screen: Roots},
  Roots:{ screen: Roots},
  History:{ screen: History},
  Calender:{ screen: Calender},
  Journl:{ screen: Journl},
  Profile:{ screen: Profile},
  Settings:{ screen:Settings},
  
  
},{
  headerMode: 'screen',
  navigationOptions:{
            header:null
        }
}

);



AppRegistry.registerComponent('GoodThingsHappenEverDay', () => App);