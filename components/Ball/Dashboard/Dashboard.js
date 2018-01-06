import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

var Dimensions = require('Dimensions');
let h = Dimensions.get('window').height;

let style = {
    bg: {
        flex: 1,
        position: 'relative',
        backgroundColor: 'transparent', 
        height: '100%'
    },
    menuBtn: {
        width: 80,
        height: 80,
        position: 'absolute',
        top: 0,
        left: 0
    },
    rotateBtn: {
        width: '100%',
        height: h - 160,
        position: 'absolute',
        top: 80,
        left: 0
    },
    colorBtn: {
        width: 80,
        height: 80,
        position: 'absolute',
        bottom: 0,
        right: 0
    }
};

export default class Color extends Component {
    constructor(props){
        super(props);
        this.state = {
            diffuseIndex: 0,
            diffuse: 'white',
            rotateIndex: 0,
            rotate: {x:0 ,y:0, z: 0}
        };
    }



    componentDidMount = async () => {

    }

    clickMenuBtn = () => {
        this.props.onClickMenuBtn();
    }


    clickRotateBtn = () => {
        let list = [
            Math.PI / 4,
            Math.PI / 2,
            3 * Math.PI / 4,
            Math.PI
        ];
        this.state.rotateIndex === 3 ? this.state.rotateIndex = 0: this.state.rotateIndex += 1
        this.state.rotate = list[this.state.rotateIndex];
        this.setState(this.state);
        this.props.onClickRotateBtn(this.state.rotate)
    }


    clickColorBtn = () => {
        let list = ['white', 'red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'purple', 'gray'];
        this.state.diffuseIndex === 8 ? this.state.diffuseIndex = 0: this.state.diffuseIndex += 1
        this.state.diffuse = list[this.state.diffuseIndex];
        this.setState(this.state);
        this.props.onClickColor(this.state.diffuse)
    }



    render() {
        return (
            <View style={style.bg}>
                <TouchableWithoutFeedback
                    onPress={this.clickMenuBtn}>
                    <View style={style.menuBtn}>
                        <Icon name={'menu'}  style={{
                            fontSize: 20,
                            position: 'absolute',
                            left: 20,
                            top: 30,
                            color: '#FFF'
                        }}/>
                    </View>
                </TouchableWithoutFeedback>


                <TouchableWithoutFeedback
                    onPress={this.clickRotateBtn}>
                    <View style={style.rotateBtn}>
                    </View>
                </TouchableWithoutFeedback>


                <TouchableWithoutFeedback
                    onPress={this.clickColorBtn}>
                    <View style={style.colorBtn}>
                        <Icon name={'circle'}  style={{
                            fontSize: 40, 
                            position: 'absolute',
                            right: 20,
                            bottom: 20,
                            color: this.state.diffuse
                        }}/>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}