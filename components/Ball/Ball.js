// index.ios.js

import { ARKit, withProjectedPosition } from 'react-native-arkit';
import { AppRegistry, Dimensions, View, Alert, Share } from 'react-native';
import React, { Component } from 'react';
import Camera from 'react-native-camera';

import Dashboard from './Dashboard/Dashboard.js';
import Menu from './Menu/Menu.js';
import GeoToast, {DURATION} from '../GeoToast/GeoToast.js';

import Mixpanel from 'react-native-mixpanel-bridge';

Mixpanel.sharedInstanceWithToken('b3d15c441f08ec707ac568e5a738b547');

let style = {
    bg: {
      flex: 1, backgroundColor: '#000', height: '100%'
    },
    canvas: {
        flex: 1,
        position: 'relative',
        height: '100%'
    }
};

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

export default class Ball extends Component {
  constructor(props){
      super(props);
      this.state = {
          isCameraAuth: false,
          isMenuShow: true,
          type: '',
          rotate: 0,
          size: 1,
          diffuse: 'white'
      };
  }

  componentDidMount = () => {
    Mixpanel.track(`launch`);
    this.refs.toast.show('正在启动阶段 请把您的手机保持静止', 6000);
    this.checkCameraStatus();
  }

  /*
   * @
   * @ 触发校验相机访问权限
   * @
   **/
  checkCameraStatus = () => {
    Camera.checkVideoAuthorizationStatus()
          .then(access => {
                if(!access) {
                    this.state.isCameraAuth = false;
                    Alert.alert('需要启用相机权限', '请在iPhone的“设置-隐私”选项中,允许访问您的相机权限');
                    this.setState(this.state)
                }
                else {
                    this.state.isCameraAuth = true;
                    this.setState(this.state)
                }
            });
  }

  /*
   * @
   * @ 触发Menu选择后的逻辑
   * @
   **/
  triggerMenuSelect = (type) => {
    if (!this.state.isCameraAuth) {
      Mixpanel.track(`camera-block`);
      this.checkCameraStatus(); return;
    }

    this.state.isMenuShow = false;
    this.state.type = type;
    this.state.rotate = 0; //reset
    this.state.size = 1; //reset
    this.state.diffuse = 'white'; //reset
    Mixpanel.track(type);
    this.setState(this.state);
  }


  /*
   * @
   * @ 触发点击Menu关闭按钮后的逻辑
   * @
   **/
  triggerMenuClose = () => {
    if (!this.state.isCameraAuth) {
      this.checkCameraStatus(); return;
    }
    this.state.type = this.state.type || 'triangle';
    this.state.isMenuShow = false;
    this.setState(this.state);
  }


  /*
   * @
   * @ 触发reload
   * @
   **/
  triggerReload = () => {
    //
  }

  /*
   * @
   * @ 触发share
   * @
   **/
  triggerShare = () => {
    Share.share({
      message: '我发现了一款有趣的APP<立体几何>增强现实的立体几何应用',
      url: 'https://virtual-west.github.io/geometry-share/',
      title: '我发现了一款有趣的APP<立体几何>增强现实的立体几何应用'
    }, {
      excludedActivityTypes: [
        'com.apple.UIKit.activity.PostToTwitter'
      ]
    })
    .then(Mixpanel.track(`social`))
    .catch((error) => console.log(error));
  }


  /*
   * @
   * @ 触发反馈
   * @
   **/
  triggerFeedbackSelect = () => {
    Mixpanel.track(`feedback`);
    this.props.onTriggerFeedbackSelect()
  }


  /*
   * @
   * @ 触发隐私协议
   * @
   **/
  triggerPrivacySelect = () => {
    Mixpanel.track(`privacy`);
    this.props.onTriggerPrivacySelect()
  }

  /*
   * @
   * @ 触发Menu按钮点击后的展示
   * @
   **/
  triggerSwitchMenu = () => {
    this.state.isMenuShow = true;
    this.setState(this.state);
  }


  /*
   * @
   * @ 触发Rotate按钮点击后的展示
   * @
   **/
  triggerSwitchRotate = (rotate) => {
    Mixpanel.track(`rotate`);
    this.state.rotate = rotate;
    this.setState(this.state);
  }


  /*
   * @
   * @ 触发size按钮点击后的展示
   * @
   **/
  triggerSwitchSize = (size) => {
    Mixpanel.track(`size`);
    this.state.size = size;
    this.setState(this.state);
  }

  /*
   * @
   * @ 触发Color点击后的颜色改变
   * @
   **/
  triggerSwitchColor = (color) => {
    Mixpanel.track(`color`);
    this.state.diffuse = color;
    this.setState(this.state);
  }

  render() {
    return (
      <View style={ style.bg }>
        <ARKit
          style={style.canvas}
          lightEstimationEnabled
        >

        { this.state.type === 'square' &&
          <ARKit.Box
            id="object_1"
            eulerAngles={{ 
              x: 0,
              y: this.state.rotate,
              z: 0
            }}
            position={{ x: 0, y: -0.2, z: -0.2 }}
            shape={{ width: 0.1 * this.state.size, height: 0.1 * this.state.size, length: 0.1 * this.state.size, chamfer: 0.008 * this.state.size }}
            material={{ diffuse: this.state.diffuse }}
          />
        }

        { this.state.type === 'circle' &&
          <ARKit.Sphere
            id="object_2"
            eulerAngles={{ 
              x: 0,
              y: 0,
              z: 0
            }}
            position={{ x: 0, y: -0.2, z: -0.2 }}
            shape={{ radius: 0.05 * this.state.size }}
            material={{ diffuse: this.state.diffuse }}
          />
        }

        { this.state.type === 'triangle' &&
          <ARKit.Pyramid
            id="object_3"
            eulerAngles={{ 
              x: 0,
              y: this.state.rotate,
              z: 0
            }}
            position={{ x: 0, y: -0.2, z: -0.2 }}
            shape={{ width: 0.1 * this.state.size, height: 0.1 * this.state.size, length: 0.1 * this.state.size }}
            material={{ diffuse: this.state.diffuse }}
          />
        }


        { this.state.type === 'x-circle' &&
          <ARKit.Cone
            id="object_4"
            eulerAngles={{
              x: this.state.rotate,
              y: 0,
              z: 0
            }}
            position={{ x: 0, y: -0.2, z: -0.2 }}
            shape={{ topR: 0, bottomR: 0.05 * this.state.size, height: 0.15 * this.state.size }}
            material={{ diffuse: this.state.diffuse }}
          />
        }


        { this.state.type === 'plus-square' &&
          <ARKit.Box
            id="object_5"
            eulerAngles={{ 
              x: this.state.rotate,
              y: 0,
              z: 0
            }}
            position={{ x: 0, y: -0.2, z: -0.2 }}
            shape={{ width: 0.05 * this.state.size, height: 0.15 * this.state.size, length: 0.05 * this.state.size, chamfer: 0.007 * this.state.size }}
            material={{ diffuse: this.state.diffuse }}
          />
        }


        { this.state.type === 'plus-circle' &&
          <ARKit.Cylinder
            id="object_6"
            eulerAngles={{ 
              x: this.state.rotate,
              y: 0,
              z: 0
            }}
            position={{ x: 0, y: -0.2, z: -0.2 }}
            shape={{ radius: 0.03 * this.state.size, height: 0.15 * this.state.size }}
            material={{ diffuse: this.state.diffuse }}
          />
        }

          <ARKit.Light
            position={{ x: 1, y: 3, z: 2 }}
            type={ARKit.LightType.Omni}
            color="white"
          />
          <ARKit.Light
            position={{ x: -1, y: 1, z: 0 }}
            type={ARKit.LightType.Spot}
            eulerAngles={{ x: -Math.PI / 2 }}
            spotInnerAngle={45}
            spotOuterAngle={45}
            color="purple"
          />

        { this.state.isMenuShow && 
          <Menu 
           ref="menu"
           onClickNavigateBall={(type) => this.triggerMenuSelect(type)}
           onClickNavigateFeedback={() => this.triggerFeedbackSelect()}
           onClickNavigatePrivacy={() => this.triggerPrivacySelect()}
           onClickShare={() => this.triggerShare()}
           onClickClose={() => this.triggerMenuClose()}
          />
        }

        { !this.state.isMenuShow && 
          <Dashboard
           onClickMenuBtn={() => this.triggerSwitchMenu()}
           onClickReloadBtn={() => this.triggerReload()}
           onClickRotateBtn={(rotate) => this.triggerSwitchRotate(rotate)}
           onClickSizeBtn={(size) => this.triggerSwitchSize(size)}
           onClickColor={(color) => this.triggerSwitchColor(color)}/>
        }
        <GeoToast position={'top'} positionValue={30} ref="toast"/>
        </ARKit>
      </View>
    );
  }
}

AppRegistry.registerComponent('ReactNativeARKit', () => ReactNativeARKit);
