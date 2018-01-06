import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

let style = {
    bg: {
        flex: 1,
        position: 'relative',
        backgroundColor: 'transparent', 
        height: '100%'
    },
    color: {
        width: 40,
        height: 40,
        position: 'absolute',
        bottom: 20,
        right: 20
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

    clickColor = (type) => {
        let list = ['white', 'red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'purple', 'gray'];
        this.state.diffuseIndex === 8 ? this.state.diffuseIndex = 0: this.state.diffuseIndex += 1
        this.state.diffuse = list[this.state.diffuseIndex];
        this.setState(this.state);
        this.props.onClickColor(this.state.diffuse)
    }



    render() {
        return (
            <View style={style.bg}>
                <View style={style.color}>
                <TouchableWithoutFeedback
                    onPress={()=> {this.clickColor()}}
                    
                    underlayColor="#EAEAEA">
                    <Icon name={'circle'}  style={{fontSize: 40, color: this.state.diffuse}}/>
                </TouchableWithoutFeedback>
                </View>
            </View>
        );
    }
}