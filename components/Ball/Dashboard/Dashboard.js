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
    reloadBtn: {
        width: 80,
        height: 80,
        position: 'absolute',
        top: 0,
        right: 0
    },
    rotateBtn: {
        width: '100%',
        height: h - 160,
        position: 'absolute',
        top: 80,
        left: 0
    },
    minusBtn: {
        width: 60,
        height: 80,
        position: 'absolute',
        bottom: 0,
        left: 0
    },
    plusBtn: {
        width: 80,
        height: 80,
        position: 'absolute',
        bottom: 0,
        left: 60
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
            rotate: 0,
            size: 10
        };
    }



    componentDidMount = async () => {

    }

    clickMenuBtn = () => {
        this.props.onClickMenuBtn();
    }


    clickRotateBtn = () => {
        let list = [
            0,
            Math.PI / 4,
            Math.PI / 2,
            3 * Math.PI / 4
        ];
        this.state.rotateIndex === 3 ? this.state.rotateIndex = 0: this.state.rotateIndex += 1
        this.state.rotate = list[this.state.rotateIndex];
        this.setState(this.state);
        this.props.onClickRotateBtn(this.state.rotate)
    }


    clickMinusBtn = () => {
        this.state.size === 1? (this.state.size = 1): (--this.state.size)
        this.setState(this.state);
        this.props.onClickSizeBtn(this.state.size/10)
    }

    clickReloadBtn = () => {
        this.props.onClickReloadBtn()
    }

    clickPlusBtn = () => {
        this.state.size === 20? (this.state.size = 20): (++this.state.size)
        this.setState(this.state);
        this.props.onClickSizeBtn(this.state.size/10)
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

                {/** //无用
                <TouchableWithoutFeedback
                    onPress={this.clickReloadBtn}>
                    <View style={style.reloadBtn}>
                        <Icon name={'refresh-cw'}  style={{
                            fontSize: 20, 
                            position: 'absolute',
                            right: 20,
                            top: 30,
                            color: '#FFF'
                        }}/>
                    </View>
                </TouchableWithoutFeedback>
                 **/
                }


                <TouchableWithoutFeedback
                    onPress={this.clickRotateBtn}>
                    <View style={style.rotateBtn}>
                    </View>
                </TouchableWithoutFeedback>



                <TouchableWithoutFeedback
                    onPress={this.clickMinusBtn}>
                    <View style={style.minusBtn}>
                        <Icon name={'minus-circle'}  style={{
                            fontSize: 40, 
                            position: 'absolute',
                            left: 20,
                            bottom: 20,
                            color: '#FFF'
                        }}/>
                    </View>
                </TouchableWithoutFeedback>




                <TouchableWithoutFeedback
                    onPress={this.clickPlusBtn}>
                    <View style={style.plusBtn}>
                        <Icon name={'plus-circle'}  style={{
                            fontSize: 40, 
                            position: 'absolute',
                            left: 20,
                            bottom: 20,
                            color: '#FFF'
                        }}/>
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