// index.ios.js

import { ARKit, withProjectedPosition } from 'react-native-arkit';
import { AppRegistry, Dimensions, View } from 'react-native';
import React, { Component } from 'react';
import Dashboard from './Dashboard/Dashboard.js';
import Menu from './Menu/Menu.js';

let style = {
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
          isMenuShow: true,
          type: 'triangle',
          rotate: 0,
          size: 1,
          diffuse: 'white'
      };
  }


  /*
   * @
   * @ 触发Menu选择后的逻辑
   * @
   **/
  triggerMenuSelect = (type) => {
    this.state.type = type;
    this.state.isMenuShow = false;
    this.setState(this.state);
  }


  /*
   * @
   * @ 触发点击Menu关闭按钮后的逻辑
   * @
   **/
  triggerMenuClose = () => {
    this.state.isMenuShow = false;
    this.setState(this.state);
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
    this.state.rotate = rotate;
    this.setState(this.state);
  }


  /*
   * @
   * @ 触发size按钮点击后的展示
   * @
   **/
  triggerSwitchSize = (size) => {
    this.state.size = size;
    this.setState(this.state);
  }

  /*
   * @
   * @ 触发Color点击后的颜色改变
   * @
   **/
  triggerSwitchColor = (color) => {
    this.state.diffuse = color;
    this.setState(this.state);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
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
            shape={{ width: 0.1 * this.state.size, height: 0.1 * this.state.size, length: 0.1 * this.state.size, chamfer: 0.01 * this.state.size }}
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
              x: 2 * this.state.rotate,
              y: 0,
              z: 0
            }}
            position={{ x: 0, y: -0.2, z: -0.2 }}
            shape={{ topR: 0, bottomR: 0.05 * this.state.size, height: 0.1 * this.state.size }}
            material={{ diffuse: this.state.diffuse }}
          />
        }


        { this.state.type === 'plus-square' &&
          <ARKit.Box
            id="object_5"
            eulerAngles={{ 
              x: 0,
              y: this.state.rotate,
              z: 0
            }}
            position={{ x: 0, y: -0.2, z: -0.2 }}
            shape={{ width: 0.1 * this.state.size, height: 0.2 * this.state.size, length: 0.1 * this.state.size, chamfer: 0.01 * this.state.size }}
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
            shape={{ radius: 0.05 * this.state.size, height: 0.1 * this.state.size }}
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
           onClickNavigateBall={(type) => this.triggerMenuSelect(type)}
           onClickClose={() => this.triggerMenuClose()}
          />
        }

        { !this.state.isMenuShow &&
          <Dashboard
           onClickMenuBtn={() => this.triggerSwitchMenu()}
           onClickRotateBtn={(rotate) => this.triggerSwitchRotate(rotate)}
           onClickSizeBtn={(size) => this.triggerSwitchSize(size)}
           onClickColor={(color) => this.triggerSwitchColor(color)}/>
        }
        </ARKit>
      </View>
    );
  }
}

AppRegistry.registerComponent('ReactNativeARKit', () => ReactNativeARKit);
