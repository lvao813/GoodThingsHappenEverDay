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
            // alert('12')
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
    let thtime = item.item.slice(0,7)
    let day =  item.item.slice(8,10)
    let date = item.item.slice(0,4)+'.'+item.item.slice(5,7)
    return ( 
              <View style={styles.allCard}>
                <View style={{flex:2,justifyContent:'flex-start',alignItems:'center',}}>
                  <Text style={{fontSize:18,color:'#F2E0A9',lineHeight:18}}>{day}</Text>
                </View>
                <View style={{flex:15,}}>
                  <View style={{flexDirection:'row',height:15,}}>
                    <Image source={require('./image/history-icon.png')} style={{height:10,width:10}}></Image>
                    <Text style={{fontSize:10,lineHeight:10,color:'#b3b3b3'}}>{date}</Text>
                  </View> 
                  
                  <Text style={{fontSize:14,color:'#666',}}>{journltext}</Text>
                </View>
                
               
              </View>
      )
  }
  _renderItemMonth = (item) => {
    let journltext = item.item.slice(11)
    let thtime = item.item.slice(0,7)
    let day =  item.item.slice(8,10)
    let date = item.item.slice(0,4)+'.'+item.item.slice(5,7)
    return ( 
              <View style={styles.allCard}>
                <View style={{flex:2,justifyContent:'flex-start',alignItems:'center',}}>
                  <Text style={{fontSize:18,color:'#F2E0A9',lineHeight:18}}>{day}</Text>
                </View>
                <View style={{flex:15,}}>
                  <View style={{flexDirection:'row',height:15,}}>
                    <Image source={require('./image/history-icon.png')} style={{height:10,width:10}}></Image>
                    <Text style={{fontSize:10,lineHeight:10,color:'#b3b3b3'}}>{date}</Text>
                  </View> 
                  
                  <Text style={{fontSize:14,color:'#666',}}>{journltext}</Text>
                </View>
                
               
              </View>
      )
  }
  _renderItemYear = (item) => {
    let journltext = item.item.slice(11)
    let thtime = item.item.slice(0,7)
    let day =  item.item.slice(8,10)
    let date = item.item.slice(0,4)+'.'+item.item.slice(5,7)
    return ( 
              <View style={styles.allCard}>
                <View style={{flex:2,justifyContent:'flex-start',alignItems:'center',}}>
                  <Text style={{fontSize:18,color:'#F2E0A9',lineHeight:18}}>{day}</Text>
                </View>
                <View style={{flex:15,}}>
                  <View style={{flexDirection:'row',height:15,}}>
                    <Image source={require('./image/history-icon.png')} style={{height:10,width:10}}></Image>
                    <Text style={{fontSize:10,lineHeight:10,color:'#b3b3b3'}}>{date}</Text>
                  </View> 
                  
                  <Text style={{fontSize:14,color:'#666',}}>{journltext}</Text>
                </View>
                
               
              </View>
      )
  }
  _renderItemAll = (item) => {
    let journltext = item.item.slice(11)
    let thtime = item.item.slice(0,7)
    let day =  item.item.slice(8,10)
    let date = item.item.slice(0,4)+'.'+item.item.slice(5,7)
    return ( 
              <View style={styles.allCard}>
                <View style={{flex:2,justifyContent:'flex-start',alignItems:'center',}}>
                  <Text style={{fontSize:18,color:'#F2E0A9',lineHeight:18}}>{day}</Text>
                </View>
                <View style={{flex:15,}}>
                  <View style={{flexDirection:'row',height:15,}}>
                    <Image source={require('./image/history-icon.png')} style={{height:10,width:10}}></Image>
                    <Text style={{fontSize:10,lineHeight:10,color:'#b3b3b3'}}>{date}</Text>
                  </View> 
                  
                  <Text style={{fontSize:14,color:'#666',}}>{journltext}</Text>
                </View>
                
               
              </View>
      )
  }
  render() {
    return (
            <View style={{flex:1,}}>
                <View style={{flexDirection:'row',backgroundColor:'#4FA4FF'}}>
                    <View style={styles.topView}>
                          <Text style={styles.topText}>Journl</Text>
                          
                    </View>
                    <View style={{height:50,width:40,alignItems:'center',justifyContent:'center',flexDirection:'row'}} 
                          
                          ><Image source={require('./image/level.png')} style={{height:11,width:15,marginRight:2}}/><Text style={{textAlign:'center',fontSize:12,color:'#F6FCFF'}}
                    >等级3</Text></View>
                </View>
            <ScrollableTabView
                  style={{marginTop: 0, }}
                  renderTabBar={() => <DefaultTabBar />}
                  tabBarUnderlineStyle={styles.lineStyle}
                  tabBarInactiveTextColor='#666'

                  tabBarActiveTextColor='#4FA4FF'
                
                  >
                  
                
                  <ScrollView tabLabel="本周" style={styles.tabView}>
                      <FlatList
                    
                      ItemSeparatorComponent={this._separator}
                      renderItem={this._renderItemWeek}
                      data={this.state.WeekArry}>
                      </FlatList>
                      <View style={styles.bottomView}></View>
                </ScrollView>
                <ScrollView tabLabel="本月" style={styles.tabView}>
                    <FlatList
                    
                      ItemSeparatorComponent={this._separator}
                      renderItem={this._renderItemMonth}
                      data={this.state.MonthArry}>
                      </FlatList>
                      <View style={styles.bottomView}></View>
                </ScrollView>
                <ScrollView tabLabel="今年" style={styles.tabView}>
                      <FlatList
                      
                        ItemSeparatorComponent={this._separator}
                        renderItem={this._renderItemYear}
                        data={this.state.YearArry}>
                        </FlatList>
                        <View style={styles.bottomView}></View>
              </ScrollView>
              <ScrollView tabLabel="全部" style={styles.tabView}>
                      <FlatList
                      
                        ItemSeparatorComponent={this._separator}
                        renderItem={this._renderItemAll}
                        data={this.state.AllArry}>
                        </FlatList>
                        <View style={styles.bottomView}></View>
              </ScrollView>
                  
            </ScrollableTabView>
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
  container: {
         flex: 1,
         marginTop: 20
     },
     lineStyle: {
         width:ScreenWidth/4,
         height: 2,
         backgroundColor: '#4FA4FF',
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
    backgroundColor:'#4FA4FF'
  },
  topText:{
    textAlign:'center',
    fontSize:20,
    fontWeight:'bold',
    color:'#F6FCFF',
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
  allCard:{
    height: 130,
    margin: 5,
    // height: 100,
    padding: 15,
    borderRadius:10,
    elevation: 2,
    flexDirection:'row'
  },
  bottomView:{
    height:20,
  }
});
export default History