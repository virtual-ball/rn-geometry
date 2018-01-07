import React, { Component } from 'react';
import { View, NavigatorIOS, StatusBar } from 'react-native';
import Ball from './Ball/Ball.js'

let style = {};

export class BallComponent extends Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Ball {...this.props} onReload={this.reload}/>
        );
    }
}

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
                    component: BallComponent,
                    title: 'geometry'
                }}
                interactivePopGestureEnabled={true}    // 决定是否启用滑动返回手势
                navigationBarHidden={true}
                style={{flex: 1}}
            />
            
        );
    }
}