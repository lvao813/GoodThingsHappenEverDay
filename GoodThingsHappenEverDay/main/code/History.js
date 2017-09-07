import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  FlatList,
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
        AllArry:[],
      
    };
    
  }
  componentWillMount() {
    
    let timestamp = Date.parse(new Date());
    let thistime = ''+timestamp+''
    let Yeartime = thistime-31536000000
    let Monthtime = thistime-2592000000
    let Weektime = thistime-604800000
    var promise = getItem("keyarry1").then((result) => {
      // alert(JSON.parse(result)) 
      this.setState({keyarry:JSON.parse(result)})
      // alert(this.state.keyarry)
      let keyarry = this.state.keyarry; 
      for(let i in this.state.keyarry){
        var promise = getItem(keyarry[i]).then((result) => {
          this.state.AllArry.push(result)
            
        }).catch((error) => {
          
        })
        if(keyarry[i]>Weektime&&keyarry[i]<timestamp){
          var promise = getItem(keyarry[i]).then((result) => {
            this.state.WeekArry.push(result)
              
          }).catch((error) => {
            
          })
            // this.state.WeekArry.push()
            // alert(this.state.WeekArry)
          // alert(keyarry[1])
        }
        if(keyarry[i]>Monthtime&&keyarry[i]<timestamp){
          var promise = getItem(keyarry[i]).then((result) => {
            this.state.MonthArry.push(result)
              
          }).catch((error) => {
            
          })
        }
        if(keyarry[i]>Yeartime&&keyarry[i]<timestamp){
          var promise = getItem(keyarry[i]).then((result) => {
            this.state.YearArry.push(result)
              
          }).catch((error) => {
            
          })
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
  _separator = () => {
    return <View style={{height:2,}}/>;
  }
  _renderItemWeek = (item) => {
    let journltext = item.item.slice(11)
    let thtime = item.item.slice(0,10)
    return ( 
              <View style={styles.card}>
                <Text >{thtime}</Text>
                <Text style={{fontSize:20,color:'#13227a',fontWeight:'bold'}}>{journltext}</Text>
              </View>
      )
  }
  _renderItemMonth = (item) => {
    let journltext = item.item.slice(11)
    let thtime = item.item.slice(0,10)
    return ( 
              <View style={styles.card}>
                <Text >{thtime}</Text>
                <Text style={{fontSize:20,color:'#13227a',fontWeight:'bold'}}>{journltext}</Text>
              </View>
      )
  }
  _renderItemYear = (item) => {
    let journltext = item.item.slice(11)
    let thtime = item.item.slice(0,10)
    return ( 
              <View style={styles.card}>
                <Text >{thtime}</Text>
                <Text style={{fontSize:20,color:'#13227a',fontWeight:'bold'}}>{journltext}</Text>
              </View>
      )
  }
  _renderItemAll = (item) => {
    let journltext = item.item.slice(11)
    let thtime = item.item.slice(0,10)
    return ( 
              <View style={styles.card}>
                <Text >{thtime}</Text>
                <Text style={{fontSize:20,color:'#13227a',fontWeight:'bold'}}>{journltext}</Text>
              </View>
      )
  }
  render() {
    return (
     
            
            <ScrollableTabView
                  style={{marginTop: 20, }}
                  renderTabBar={() => <DefaultTabBar />}
                  tabBarUnderlineStyle={styles.lineStyle}
                  tabBarActiveTextColor='#FF0000'>
                
                  <ScrollView tabLabel="Past Week" style={styles.tabView}>
                      <FlatList
                    
                      ItemSeparatorComponent={this._separator}
                      renderItem={this._renderItemWeek}
                      data={this.state.WeekArry}>
                      </FlatList>
                </ScrollView>
                <ScrollView tabLabel="Past Month" style={styles.tabView}>
                    <FlatList
                    
                      ItemSeparatorComponent={this._separator}
                      renderItem={this._renderItemMonth}
                      data={this.state.MonthArry}>
                      </FlatList>
                </ScrollView>
                <ScrollView tabLabel="Past Year" style={styles.tabView}>
                      <FlatList
                      
                        ItemSeparatorComponent={this._separator}
                        renderItem={this._renderItemYear}
                        data={this.state.YearArry}>
                        </FlatList>
              </ScrollView>
              <ScrollView tabLabel="All Time" style={styles.tabView}>
                      <FlatList
                      
                        ItemSeparatorComponent={this._separator}
                        renderItem={this._renderItemAll}
                        data={this.state.AllArry}>
                        </FlatList>
              </ScrollView>
                  
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
  tabView: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.01)',
  },
  card: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'rgba(0,0,0,0.1)',
    margin: 5,
    height: 100,
    padding: 15,
    shadowColor: '#ccc',
    shadowOffset: { width: 2, height: 2, },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    borderRadius:10,
  },
});
export default History