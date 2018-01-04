import React, { Component } from 'react';
import { AsyncStorage, FlatList, Text, View, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

let style = {
    bg: {backgroundColor: '#000', height: '100%', backgroundColor: '#000'}
};

export default class Menu extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        };
    }



    componentDidMount = async () => {

    }



    render() {
        return (
                <View style={style.bg}></View>
        );
    }
}