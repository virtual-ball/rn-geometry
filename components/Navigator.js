import React, { Component } from 'react';
import { NavigatorIOS, StatusBar } from 'react-native';
import Ball from './Ball/Ball.js'


export default class Navigator extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }


    render() {
        return (
            <NavigatorIOS
                initialRoute={{
                    component: Ball,
                    title: 'geometry'
                }}
                interactivePopGestureEnabled={true}    // 决定是否启用滑动返回手势
                navigationBarHidden={true}
                style={{flex: 1}}
            />
            
        );
    }
}