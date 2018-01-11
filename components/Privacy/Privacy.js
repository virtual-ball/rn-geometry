import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableWithoutFeedback, StatusBar, FlatList } from 'react-native';



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
    backtext: {
        color: '#EEE'
    },
    viewer: {
        marginTop: 66,
        width: '100%'
    },
    text: {
        paddingTop: 0,
        paddingBottom: 40,
        paddingLeft: 16,
        paddingRight: 16,
        color: '#777',
        textAlign: 'justify',
        lineHeight: 20,
        fontSize: 14
    }
};


export default class Privacy extends Component {
    constructor(props){
        super(props);
        this.state = { 
            text: '', 
            back: '←   ',
            data: [
                '用户隐私协议',
                '[立体几何]会一贯保证用户的隐私信息，[立体几何]将通过加密等技术手段及其他办法充分保护用户的个人隐私信息，除法律或有法律赋予权限的政府部门要求或事先得到用户明确授权等原因外，[立体几何]保证不对外公开或向第三方透露用户个人隐私信息，或用户在使用服务时存储的非公开内容。',
                '同时，为了运营和改善[立体几何]的技术与服务，[立体几何]将可能会自行收集使用或向第三方提供用户的非个人隐私信息，这将有助于[立体几何]向用户提供更好的用户体验和服务质量。',
                '协议修改',
                '根据互联网的发展和有关法律、法规及规范性文件的变化，或者因业务发展需要，[立体几何]有权对本协议的条款作出修改或变更，一旦本协议的内容发生变动，[立体几何]将会通过公示的方式告知用户修改之后的协议内容，该通知行为视为[立体几何]已经通知用户修改内容。',
                '[立体几何]也可采用弹窗、信息流、电子邮件、电话或短信的传送方式，提示用户协议条款的修改、服务变更、或其它重要事项。',
                '如果不同意[立体几何]对本协议相关条款所做的修改，用户有权并应当停止使用[立体几何]。如果用户继续使用[立体几何]，则视为用户接受[立体几何]对本协议相关条款所做的修改。'
            ]
         };
    }


    componentDidMount(){
        StatusBar.setBarStyle('light-content', true);
    }

    componentWillUnmount(){
        StatusBar.setBarStyle('default', true);
    }


    _ViewerComponent = function (data) {
        return (
            <Text style={style.text}>{data.item}</Text>
        );
    }


    render() {
        return (
            <View style={style.bg}>
                <View style={style.bar}>
                    <TouchableWithoutFeedback onPress={this.props.navigator.pop}><View style={style.back}><Text style={style.backtext}>{this.state.back}</Text></View></TouchableWithoutFeedback>
                </View>
                <FlatList data={this.state.data}
                extraData={this.state}
                renderItem={this._ViewerComponent}
                style={style.viewer}/>

            </View>
        );
    }
}