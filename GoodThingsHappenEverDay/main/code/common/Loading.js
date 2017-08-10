import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    ActivityIndicator,
    Dimensions
} from 'react-native';

var {height, width} = Dimensions.get('window')

const styles = StyleSheet.create({
  loading: {
    backgroundColor: 'gray',
    height: 80,
    width: 100,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: (height - 80) / 2,
    left: (width - 100) / 2,
  },

  loadingTitle: {
    marginTop: 10,
    fontSize: 14,
    color: 'white'
  }
});

class Loading extends React.Component {
  render() {
    return (
      <View style={styles.loading}>
        <ActivityIndicator color="white" />
        <Text style={styles.loadingTitle}>加载中……</Text>
      </View>
  );
  }
}
export default Loading;


