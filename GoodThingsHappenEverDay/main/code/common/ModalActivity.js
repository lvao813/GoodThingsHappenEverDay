import React, {Component} from 'react'

import {
    
    StyleSheet
} from 'react-native'
import Modal from 'react-native-root-modal'

import Loading from './Loading'

export default class Activity extends Component {

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            onRequestClose: true
        };
      }

    componentWillMount() {
        this.state = {
            onRequestClose: this.props.visible
        };
    }

    componentWillReceiveProps(nextProps) {
    }


    render(){
        return(
            <Modal animationType={'none'}
                   transparent={true}
                   visible={this.props.visible}
                   onRequestClose={() => {this._setModalVisible(false)}}>
                <Loading/>
            </Modal>
        )
    }


    _setModalVisible(visible) {
        this.setState({
            onRequestClose: visible}
        );
    }

}

const styles = StyleSheet.create({

});