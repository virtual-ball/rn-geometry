import React, { Component } from 'react';
import { AsyncStorage, FlatList, Text, View, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { BlurView } from 'react-native-blur';

let style = {
    bg: {
        flex: 1,
        height: '100%'
    },
    flatlist: {
        flex: 1,
        backgroundColor: 'transparent', 
        height: '100%'
    }
};

export default class Menu extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                { key: 0, type: 'square' },
                { key: 1, type: 'triangle' },
                { key: 2, type: 'circle' },
                { key: 3, type: 'plus-circle' },
                { key: 4, type: 'plus-square' },
                { key: 5, type: 'minus-circle' }
            ]
        };
    }



    componentDidMount = async () => {

    }

    clickNavigateBall = (type) => {
        this.props.onClickNavigateBall(type)
    }



    /*
     * @
     * @ 渲染Item
     * @ _render item
     * @
     **/
    _renderItem = (data) => {
        return (

                <TouchableWithoutFeedback
                    onPress={()=> {this.clickNavigateBall(data.item.type)}}
                    underlayColor="#EAEAEA">
                    <View>
                        <Text style={{lineHeight: 150, textAlign: 'center'}}>
                            <Icon name={data.item.type}  style={{fontSize: 40, color: '#FFF'}}/>
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
        );
    }

    render() {
        return (
            <BlurView
                blurType="dark"
                blurAmount={10}
                style={style.bg}
            >
                <FlatList data={this.state.data}
                extraData={this.state}
                renderItem={this._renderItem}
                style={style.flatlist}/>
            </BlurView>
        );
    }
}