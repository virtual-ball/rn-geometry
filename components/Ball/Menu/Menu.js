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
            blur: 20,
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

    clickNavigateFeedback = () => {
        this.props.onClickNavigateFeedback()
    }

    clickNavigatePrivacy = () => {
        this.props.onClickNavigatePrivacy()
    }



    setBlur = (num) => {
        this.state.blur = num;
        this.setState(this.state)
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

    /*
     * @
     * @ 尾部component
     * @ _footer component
     * @
     **/
    _ListFooterComponent = () => {
        return (
            <View>
                <TouchableWithoutFeedback
                    onPress={()=> {this.clickNavigateFeedback()}}
                    underlayColor="#EAEAEA">
                    <View>
                        <Text style={{lineHeight: 150, textAlign: 'center', fontSize: 23, color: '#FFF'}}>
                            <Icon name={'calendar'}  style={{fontSize: 23, color: '#FFF'}}/>  联系我们
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                    onPress={()=> {this.clickNavigatePrivacy()}}
                    underlayColor="#EAEAEA">
                    <View>
                        <Text style={{lineHeight: 150, textAlign: 'center', fontSize: 23, color: '#FFF'}}>
                            <Icon name={'lock'}  style={{fontSize: 23, color: '#FFF'}}/>  隐私协议
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        )
    }

    render() {
        return (
            <BlurView
                blurType="dark"
                blurAmount={this.state.blur}
                style={style.bg}
            >
                <FlatList data={this.state.data}
                extraData={this.state}
                renderItem={this._renderItem}
                ListFooterComponent={this._ListFooterComponent}
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