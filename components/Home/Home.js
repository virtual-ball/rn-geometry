import React, { Component } from 'react';
import { AsyncStorage, Text, View, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Foundation';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }



    componentDidMount = async () => {

    }

    clickNavigateBall = () => {
        this.props.onClickNavigateBall();
    }


    render() {
        return (
                <TouchableHighlight
                    onPress={this.clickNavigateBall}
                    underlayColor="#FFF">
                    <View>
                        <Text style={{lineHeight: 400, textAlign: 'center'}}>
                            <Icon name={'target'}  style={{fontSize: 40}}/>
                        </Text>
                    </View>
                </TouchableHighlight>
        );
    }
}