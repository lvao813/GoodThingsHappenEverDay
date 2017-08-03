import React from 'react';
import {
    Text,
    View
} from 'react-native';
import { TabBar, SearchBar } from 'antd-mobile';
import Calender from './Calender';
import History from './History';
import Journl from './Journl';
import Settings from './Settings';
import Profile from './Profile';

export default class Roots extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'greenTab',
            hide: true
        };
    }

    onChangeTab(tabName) {
        this.setState({
            selectedTab: tabName,
        });
    }
    renderContent(pageText) {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
                <SearchBar
                    placeholder="搜索"
                    showCancelButton
                />
                <Text onPress={() => navigate('Info', { name: 'Jane' })} arrow="horizontal" style={{ margin: 50 }}>点击查看-{pageText}</Text>
                <Text style={{ margin: 50 }}>{pageText}</Text>
            </View>
        );
    }
    render() {
        return (
            <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="#ccc"
                hidden={this.state.hide}
            >
                <TabBar.Item
                    title="Calender"
                    // badge={2}
                    // icon={require('../../images/alipay.png')}
                    // selectedIcon={require('../../images/alipay_sel.png')}
                    selected={this.state.selectedTab === 'blueTab'}
                    onPress={() => this.onChangeTab('blueTab')}
                >
                    <Calender navigation={this.props.navigation} />
                </TabBar.Item>
                <TabBar.Item
                    // icon={require('../../images/koubei.png')}
                    // selectedIcon={require('../../images/koubei_sel.png')}
                    title="History"
                    selected={this.state.selectedTab === 'redTab'}
                    onPress={() => this.onChangeTab('redTab')}
                >
                     <History navigation={this.props.navigation} />
                </TabBar.Item>
                <TabBar.Item
                    // icon={require('../../images/friend.png')}
                    // selectedIcon={require('../../images/friend_sel.png')}
                    title="Journl"
                    selected={this.state.selectedTab === 'greenTab'}
                    onPress={() => this.onChangeTab('greenTab')}
                >
                    <Journl navigation={this.props.navigation} />
                </TabBar.Item>
                <TabBar.Item
                    // icon={require('../../images/busi.png')}
                    // selectedIcon={require('../../images/busi_sel.png')}
                    title="Profile"
                    selected={this.state.selectedTab === 'yellowTab'}
                    onPress={() => this.onChangeTab('yellowTab')}
                >
                    <Profile navigation={this.props.navigation}/>
                </TabBar.Item>
                 <TabBar.Item
                    // icon={require('../../images/koubei.png')}
                    // selectedIcon={require('../../images/koubei_sel.png')}
                    title="Settings"
                    selected={this.state.selectedTab === 'blackTab'}
                    onPress={() => this.onChangeTab('blackTab')}
                >
                     <Settings navigation={this.props.navigation} />
                </TabBar.Item>
            </TabBar>
        );
    }
}