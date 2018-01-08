import React, { Component } from 'react';
import { View, Text, TextInput, Linking, Alert, StatusBar } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';


let style = {
    bg: {
        backgroundColor: '#000',
        flex: 1,
        height: '100%'
    },
    bar: {
        backgroundColor: '#020202',
        position: 'absolute',
        height: 56,
        left: 0,
        width: '100%',
        top: 0
    },
    back: {
        position: 'absolute',
        textAlign: 'center',
        lineHeight: 45,
        top: 14,
        left: 0,
        width: 40,
        color: '#FFF',
        fontSize: 26,
        height: 45
    },
    submit: {
        position: 'absolute',
        textAlign: 'center',
        lineHeight: 20,
        top: 24,
        right: 0,
        paddingRight: 16,
        paddingBottom: 4,
        color: '#FFF',
        fontSize: 14,
        height: 20
    },
    input: {
        backgroundColor: '#FFF',
        position: 'absolute',
        top: 60,
        width: '100%',
        minHeight: 200,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 20,
        paddingTop: 20,
        fontSize: 14,
        lineHeight: 26,
        color: '#000'
    },
    line: {
        position: 'absolute',
        textAlign: 'center',
        color: '#EFEFEF',
        bottom: 12,
        fontSize: 12,
        left: 0,
        width: '100%'
    },
    mail: {
        color: '#FFF'
    }
};


export default class FeedBack extends Component {
    constructor(props){
        super(props);
        this.state = { text: '' };
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
        /*if (this.state.text.length < 2) {
            this.refs.toast.show('写多一点哦', 500);
            return;
        }
        this.refs.toast.show('提交中', 500);*/
        setTimeout(() => {
            //this.refs.toast.show('提交成功', 500);
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
                let link = 'mailto:meloalright@gmail.com?subject=to:小几何(来自小几何iOS客户端0.0.1)';
                Linking.canOpenURL(link).then(supported => { 

                    if (!supported) { 
                        console.log(1)
                        //this.refs.toast.show('无法打开邮箱', 500);
                    } 
                    else { return Linking.openURL(link); } 
                }).catch(err => console.log(1)/*this.refs.toast.show('无法打开邮件', 500)*/);

            }, style: 'cancel'}
          ],
          { cancelable: true }
        );
    }

    render() {
        return (
            <View style={style.bg}>
                <View style={style.bar}>
                    <Icon style={style.back} name={'chevron-left'}  onPress={()=> this.props.navigator.pop()}/>
                    <Text style={style.submit} onPress={this.submit}>提交</Text>
                </View>
                <TextInput
                    style = {style.input}
                    multiline = {true}
                    selectionColor = {'#240cc4'}
                    numberOfLines = {6}
                    placeholder= {'在这里写下你对小几何的意见或建议哦，我们也会为此努力做得更好(120字以内)'}
                    maxLength = {120}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                  />
                <Text style={style.line}>我们的联系邮箱: <Text onPress={this.mail} style={style.mail}>meloalright@gmail.com</Text></Text>
            </View>
        );
    }
}