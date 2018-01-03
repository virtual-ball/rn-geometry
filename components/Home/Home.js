import React, { Component } from 'react';
import { AsyncStorage, FlatList, Text, View, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

let style = {
    bg: {backgroundColor: '#EEE', minHeight: '100%'}
};

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                { key: 0, type: 'box' },
                { key: 1, type: 'triangle' },
                { key: 2, type: 'circle' },
                { key: 3, type: 'star' },
                { key: 4, type: 'heart' }
            ]
        };
    }



    componentDidMount = async () => {

    }

    clickNavigateBall = (type) => {
        this.props.onClickNavigateBall(type);
    }



    /*
     * @
     * @ 渲染Item
     * @ _render item
     * @
     **/
    _renderItem = (data) => {
        return (

                <TouchableHighlight
                    onPress={()=> {this.clickNavigateBall(data.item.type)}}
                    underlayColor="#EAEAEA">
                    <View>
                        <Text style={{lineHeight: 150, textAlign: 'center'}}>
                            <Icon name={data.item.type}  style={{fontSize: 40}}/>
                        </Text>
                    </View>
                </TouchableHighlight>
        );
    }

    render() {
        return (
                <FlatList data={this.state.data}
                extraData={this.state}
                renderItem={this._renderItem}
                style={style.bg}/>
        );
    }
}