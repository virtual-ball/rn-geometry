import React, { Component } from 'react';
import { View, NavigatorIOS } from 'react-native';
import Ball from './Ball/Ball.js';
import Feedback from './Feedback/Feedback.js';
import Privacy from './Privacy/Privacy.js';

let style = {};

export class BallComponent extends Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    /*
     * @
     * @ 跳转到Signing页
     * @
     **/
    navigateSigning = () => {
      const {dispatch} = this.props;
      this.props.navigator.push({
          component: Signing,
          passProps: {},
          title: '',
          backButtonTitle: '',
          leftButtonTitle: ''
      });
    }

    /*
     * @
     * @ 跳转到feedback页
     * @
     **/
    navigateFeedback = () => {
      const {dispatch} = this.props;
      this.props.navigator.push({
          component: Feedback,
          passProps: {},
          title: '',
          backButtonTitle: '',
          leftButtonTitle: ''
      });
    }

    /*
     * @
     * @ 跳转到Privacy页
     * @
     **/
    navigatePrivacy = () => {
      const {dispatch} = this.props;
      this.props.navigator.push({
          component: Privacy,
          passProps: {},
          title: '',
          backButtonTitle: '',
          leftButtonTitle: ''
      });
    }

    render() {
        return (
            <Ball 
                {...this.props} 
                onReload={this.reload} 
                onTriggerFeedbackSelect={this.navigateFeedback}
                onTriggerPrivacySelect={this.navigatePrivacy}
            />
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