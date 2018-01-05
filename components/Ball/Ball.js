// index.ios.js

import { ARKit, withProjectedPosition } from 'react-native-arkit';
import { AppRegistry, Dimensions, View } from 'react-native';
import React, { Component } from 'react';
import Menu from './Menu/Menu.js';

const diffuse = 'white';

let style = {
    menu: {
        opacity: 0.2
    }
};

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

export default class Ball extends Component {
  constructor(props){
      super(props);
      this.state = {
          type: 'square'
      };
  }

  triggerMenuSelect = (type) => {
    this.state.type = type;
    this.setState(this.state);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ARKit
          style={{ flex: 1 }}
          debug
          lightEstimationEnabled
        >

        { this.state.type === 'square' &&
          <ARKit.Box
            id="object_1"
            position={{ x: 0, y: -0.2, z: -0.2 }}
            shape={{ width: 0.1, height: 0.1, length: 0.1, chamfer: 0.01 }}
            material={{ diffuse }}
          />
        }

        { this.state.type === 'circle' &&
          <ARKit.Sphere
            id="object_2"
            position={{ x: 0, y: -0.2, z: -0.2 }}
            shape={{ radius: 0.05 }}
            material={{ diffuse }}
          />
        }

        { this.state.type === 'triangle' &&
          <ARKit.Pyramid
            id="object_3"
            position={{ x: 0, y: -0.2, z: -0.2 }}
            shape={{ width: 0.1, height: 0.1, length: 0.1 }}
            material={{ diffuse }}
          />
        }


        { this.state.type === 'plus-circle' &&
          <ARKit.Cone
            id="object_4"
            position={{ x: 0, y: -0.2, z: -0.2 }}
            shape={{ topR: 0, bottomR: 0.05, height: 0.1 }}
            material={{ diffuse }}
          />
        }


        { this.state.type === 'plus-square' &&
          <ARKit.Box
            id="object_5"
            position={{ x: 0, y: -0.2, z: -0.2 }}
            shape={{ width: 0.1, height: 0.2, length: 0.1, chamfer: 0.01 }}
            material={{ diffuse }}
          />
        }


        { this.state.type === 'minus-circle' &&
          <ARKit.Cylinder
            id="object_6"
            position={{ x: 0, y: -0.2, z: -0.2 }}
            shape={{ radius: 0.05, height: 0.1 }}
            material={{ diffuse }}
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

          <Menu style={style.menu} onClickNavigateBall={(type) => this.triggerMenuSelect(type)}/>
        </ARKit>
      </View>
    );
  }
}

AppRegistry.registerComponent('ReactNativeARKit', () => ReactNativeARKit);
