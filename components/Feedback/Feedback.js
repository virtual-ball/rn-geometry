import React, { Component } from 'react';
import { View, Text, TextInput, Linking, Alert, StatusBar, TouchableWithoutFeedback } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import GeoToast, {DURATION} from '../GeoToast/GeoToast.js';

import Mixpanel from 'react-native-mixpanel-bridge';

Mixpanel.sharedInstanceWithToken('340faeaf92669768d3f1db4a46d5ec7b');


let style = {
    bg: {
        backgroundColor: '#DDD',
        flex: 1,
        height: '100%'
    },
    bar: {
        backgroundColor: '#24292e',
        position: 'absolute',
        overflow: 'hidden',
        height: 66,
        left: 0,
        width: '100%',
        top: 0
    },
    back: {
        position: 'absolute',
        paddingTop: 34,
        paddingBottom: 28,
        width: 80,
        flex: 1,
        left: 0,
        paddingLeft: 16
    },
    submit: {
        position: 'absolute',
        paddingTop: 34,
        paddingBottom: 28,
        flex: 1,
        right: 0,
        paddingRight: 16
    },
    text: {
        color: '#EEE',
        fontSize: 14
    },
    input: {
        backgroundColor: '#E1E1E1',
        position: 'absolute',
        textAlign: 'justify',
        top: 80,
        width: '100%',
        minHeight: 200,
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 20,
        paddingTop: 20,
        fontSize: 14,
        lineHeight: 26,
        color: '#24292e'
    },
    line: {
        position: 'absolute',
        textAlign: 'center',
        color: '#24292e',
        bottom: 12,
        fontSize: 12,
        left: 0,
        width: '100%'
    },
    mail: {
        color: '#187fe0'
    }
};


export default class FeedBack extends Component {
    constructor(props){
        super(props);
        this.state = { text: '', back: '←   ' };
    }


    componentDidMount(){
        StatusBar.setBarStyle('light-content', true);
    }

    componentWillUnmount(){
        StatusBar.setBarStyle('default', true);
    }

    /*
     * @
     * @ 提交
     * @
     **/
    submit = () => {
        if (this.state.text.length < 2) {
            this.refs.toast.show('写多一点哦', 500);
            return;
        }
        this.refs.toast.show('提交中', 500);
        Mixpanel.track(`feedback-${this.state.text}`);
        setTimeout(() => {
            this.refs.toast.show('提交成功', 500);
            this.props.navigator.pop()
        }, 1000);
    }

    /*
     * @
     * @ 点击邮箱链接
     * @
     **/
    mail = () => {
        Alert.alert(
          '是否允许打开外部邮箱?',
          '',
          [
            {text: '取消', onPress: () => {
                console.log('cancel')
            }, style: 'ok'},
            {text: '确认', onPress: () => {
                let link = 'mailto:meloalright@gmail.com?subject=to:立体几何(来自立体几何iOS客户端1.0.0)';
                Linking.canOpenURL(link).then(supported => { 

                    if (!supported) { 
                        this.refs.toast.show('无法打开邮箱', 500);
                    } 
                    else { return Linking.openURL(link); } 
                }).catch(err => this.refs.toast.show('无法打开邮件', 500));

            }, style: 'cancel'}
          ],
          { cancelable: true }
        );
    }

    render() {
        return (
            <View style={style.bg}>
                <View style={style.bar}>
                    <TouchableWithoutFeedback onPress={this.props.navigator.pop}><View style={style.back}><Text style={style.text}>{this.state.back}</Text></View></TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={this.submit}><View style={style.submit}><Text style={style.text}>提交</Text></View></TouchableWithoutFeedback>
                </View>
                <TextInput
                    style = {style.input}
                    multiline = {true}
                    selectionColor = {'#240cc4'}
                    numberOfLines = {6}
                    placeholder= {'在这里写下你对我们的意见或建议哦我们也会为此努力做得更好'}
                    maxLength = {120}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                  />
                <Text style={style.line}>我们的联系邮箱: <Text onPress={this.mail} style={style.mail}>meloalright@gmail.com</Text></Text>
                <GeoToast position={'top'} positionValue={30} ref="toast"/>
            </View>
        );
    }
}