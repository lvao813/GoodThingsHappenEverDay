import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
// import Roots from './Roots';
import Roots from './Roots';
import Calender from './Calender';
import { TabBar, SearchBar } from 'antd-mobile';
import History from './History';
import Journl from './Journl';
import Settings from './Settings';
import Profile from './Profile';
import About from './About';
import Control from './Control';
import Wel from './welcome/Wel';


import { StackNavigator,TabNavigator } from 'react-navigation';




 
const App = StackNavigator({
  //  Roots:{ screen: Roots},
  Control:{ screen: Control,
    
    navigationOptions:{
        
      header:null,
    }
   },
  Roots:{ screen: Roots,
    navigationOptions:{
      header:null
    }
   },
   Wel:{ screen: Wel,
    navigationOptions:{
      header:null
    }
   },
   
  History:{ screen: History,
   navigationOptions:{
            headerTitle:'About',
            headerBackTitle:null,
            headerRight:(<Image style={{height:40,width:40,alignItems:'center',justifyContent:'center'}} 
            source={require('./image/hot.png')}
            ><Text style={{textAlign:'center',fontWeight:'bold',fontSize:20}}
            >1</Text></Image>),
            headerTitleStyle:{
                alignSelf:'center'
            },
        }},
  Calender:{ screen: Calender,
   navigationOptions:{
            headerTitle:'About',
            headerBackTitle:null,
            headerRight:(<Image style={{height:40,width:40,alignItems:'center',justifyContent:'center'}} 
            source={require('./image/hot.png')}
            ><Text style={{textAlign:'center',fontWeight:'bold',fontSize:20}}
            >1</Text></Image>),
            headerTitleStyle:{
                alignSelf:'center'
            },
        }},
  Journl:{ screen: Journl,
   navigationOptions:{
            headerTitle:'About',
            headerBackTitle:null,
            headerRight:(<Image style={{height:40,width:40,alignItems:'center',justifyContent:'center'}} 
            source={require('./image/hot.png')}
            ><Text style={{textAlign:'center',fontWeight:'bold',fontSize:20}}
            >1</Text></Image>),
            headerTitleStyle:{
                alignSelf:'center'
            },
        }},
  Profile:{ screen: Profile,
   navigationOptions:{
            headerTitle:'About',
            headerBackTitle:null,
            headerRight:(<Image style={{height:40,width:40,alignItems:'center',justifyContent:'center'}} 
            source={require('./image/hot.png')}
            ><Text style={{textAlign:'center',fontWeight:'bold',fontSize:20}}
            >1</Text></Image>),
            headerTitleStyle:{
                alignSelf:'center'
            },
        }},
  Settings:{ screen:Settings,
   navigationOptions:{
            header:null
        }},
  About:{ screen:About,
    navigationOptions:{
            headerTitle:'About',
            headerBackTitle:null,
            headerRight:(<Image style={{height:40,width:40,alignItems:'center',justifyContent:'center'}} 
            source={require('./image/hot.png')}
            ><Text style={{textAlign:'center',fontWeight:'bold',fontSize:20}}
            >1</Text></Image>),
            headerTitleStyle:{
                alignSelf:'center'
            },
        }
  },
  
  
},{
  headerMode: 'float',
  navigationOptions:{
            // header:null
        }
}

);



AppRegistry.registerComponent('GoodThingsHappenEverDay', () => App);