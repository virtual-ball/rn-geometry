import React, { Component } from 'react';
import { TabBarIOS, View } from 'react-native';
import Icon from 'react-native-vector-icons/Foundation';
import Home from './Home/Home.js';
import Ball from './Ball/Ball.js';

export default class Navigator extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedTab: "home"
        };
    }

    navigateBall = (type) => {
        this.props.navigator.push({
            component: Ball,
            passProps: {
              type: type
            },
            title: 'geometry',
            backButtonTitle: '',
            leftButtonTitle: ''
        });
    }

    render() {
        return (
            <TabBarIOS
                barTintColor="#FFF"
                tintColor="#c33329"    // 被选中标签颜色
            >
                  <Icon.TabBarItem
                      title=""
                      iconName="target"
                      selectedIconName="target"
                      selected={this.state.selectedTab === 'home'}
                      onPress={()=>{
                          this.setState({
                            selectedTab: "home"
                          });
                      }}
                  >
                  <Home onClickNavigateBall={this.navigateBall}/>
                  </Icon.TabBarItem>

                  <Icon.TabBarItem
                      title=""
                      iconName="torso"
                      selectedIconName="torso"
                      selected={this.state.selectedTab === 'torso'}
                      onPress={()=>{
                          this.setState({
                            selectedTab: "torso"
                          });
                      }}
                  >
                  <View></View>
                  </Icon.TabBarItem>

            </TabBarIOS>
        );
    }
}