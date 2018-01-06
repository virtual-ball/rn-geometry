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
        flex: 1,
        width: '100%',
        height: h - 80,
        position: 'absolute',
        bottom: 80,
        left: 0
    },
    color: {
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
            diffuse: 'white'
        };
    }



    componentDidMount = async () => {

    }

    clickMenuBtn = () => {
        this.props.onClickMenuBtn();
    }

    clickColor = () => {
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
                    <View style={style.menuBtn}></View>
                </TouchableWithoutFeedback>


                <TouchableWithoutFeedback
                    onPress={this.clickColor}>
                    <View style={style.color}>
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