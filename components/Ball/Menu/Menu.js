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
    },
    closeBtn: {
        width: 80,
        height: 80,
        position: 'absolute',
        top: 0,
        right: 0
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
                { key: 3, type: 'x-circle' },
                { key: 4, type: 'plus-square' },
                { key: 5, type: 'plus-circle' }
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
     * @ close
     * @
     **/
    close = () => {
        this.props.onClickClose()
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
                blurAmount={20}
                style={style.bg}
            >
                <FlatList data={this.state.data}
                extraData={this.state}
                renderItem={this._renderItem}
                style={style.flatlist}/>

                <TouchableWithoutFeedback
                    onPress={this.close}>
                    <View style={style.closeBtn}>
                        <Icon name={'x'}  style={{
                            fontSize: 20, 
                            position: 'absolute',
                            right: 20,
                            top: 30,
                            color: '#FFF'
                        }}/>
                    </View>
                </TouchableWithoutFeedback>

            </BlurView>
        );
    }
}