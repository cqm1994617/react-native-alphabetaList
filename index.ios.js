/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
    AppRegistry,
    Component,
    View,
    ListView,
    ScrollView,
} from 'react-native';

import pinyin from 'pinyin';
import py from './components/py';
import heightMsg from './components/heightMsg';
import Head from './components/head';
import FunctionList from './components/functionList';
import FriendList from './components/friendList';
import MainList from './components/mainList';
import AlphabetaList from './components/alphabetaList';
import styles from './components/style';

class chatList extends Component {
    constructor(props) {
        super(props);
        let arr = [
            {name: 'ccc', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '大众', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '嘀嘀打车', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: 'ggg', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: 'hsdahfop', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '劳力士', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '马自达', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: 'oooa', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: 'qsdajf', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: 'qq', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: 'rasdopfj', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: 'sasdpou', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: 'xxx', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: 'usb', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: 'vvvvann', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: 'ufo', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: 'oppo', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: 'polo', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '可爱多', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '天天', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: 'ccc', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '大众', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '嘀嘀打车', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: 'ggg', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: 'hsdahfop', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '劳力士', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '马自达', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: 'oooa', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: 'qsdajf', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: 'qq', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: 'rasdopfj', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: 'sasdpou', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: 'xxx', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: 'usb', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: 'vvvvann', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: 'ufo', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: 'oppo', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: 'polo', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '可爱多', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '天天', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: 'ccc', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '大众', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '嘀嘀打车', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: 'ggg', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: 'hsdahfop', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '劳力士', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '马自达', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: 'oooa', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: 'qsdajf', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: 'qq', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: 'rasdopfj', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: 'sasdpou', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: 'xxx', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: 'icewater', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: 'usb', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: 'vvvvann', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: 'ufo', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: 'ccc', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '大众', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '嘀嘀打车', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: 'ggg', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: 'hsdahfop', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '劳力士', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '马自达', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: 'oooa', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: 'qsdajf', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: 'qq', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: 'rasdopfj', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: 'sasdpou', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: 'xxx', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: 'usb', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: 'vvvvann', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: 'ufo', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: 'oppo', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: 'polo', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '可爱多', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '天天', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: 'ccc', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '大众', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '嘀嘀打车', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: 'ggg', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: 'hsdahfop', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '劳力士', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '马自达', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: 'oooa', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: 'qsdajf', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: 'qq', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: 'rasdopfj', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: 'sasdpou', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: 'xxx', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: 'usb', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: 'vvvvann', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: 'ufo', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: 'oppo', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: 'polo', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '百事可乐', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '可口可乐', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '芬达', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '王老吉', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '王尼玛', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '王大锤', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '王二狗', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '加多宝', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '昵称2', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: 'asdf', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '用户2', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '贝贝', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '额', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: 'zzz', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '百事可乐', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '可口可乐', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '芬达', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '王老吉', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '王尼玛', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '王大锤', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '王二狗', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '加多宝', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '昵称2', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: 'asdf', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '用户2', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '贝贝', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '额', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: 'zzz', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '百事可乐', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '可口可乐', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '芬达', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '王老吉', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '王尼玛', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '王大锤', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '王二狗', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '加多宝', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '昵称2', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: 'asdf', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '用户2', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '贝贝', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '额', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: 'zzz', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '百事可乐', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '可口可乐', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '芬达', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '王老吉', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '王尼玛', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '王大锤', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '王二狗', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '加多宝', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '昵称2', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: 'asdf', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '用户2', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '贝贝', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '额', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: 'zzz', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '百事可乐', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '可口可乐', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '芬达', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '王老吉', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '王尼玛', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '王大锤', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '王二狗', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '加多宝', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '昵称2', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: 'asdf', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '用户2', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '贝贝', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '额', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: 'zzz', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '.zsdj', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '.zsdj', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '.zsdj', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '.zsdj', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '.zsdj', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'}
        ];

        let arr2 = [
            {name: 'aaa', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: 'eb', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: 'vxeb', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: 'aFDS', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '嗯', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'},
            {name: '额', url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'}
        ];

        function JsonSort(array, key) {
            return array.sort(function(a, b) {
                let x = pinyin(a[key].toLowerCase());
                let y = pinyin(b[key].toLowerCase());
                return ((x < y) ? -1 : ((x > y) ? 1 : 0));
            });
        }

        let temp = JsonSort(arr, 'name');
        let data = py(temp);
        let data2 = JsonSort(arr2, 'name');

        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state = {
            dataSource: ds.cloneWithRows(data),
            dataSource2: ds.cloneWithRows(data2),
            headHeight: 0,
            functionHeight: 0
        }
    };

    changeHeadHeight(h) {
        this.setState({
            headHeight: h
        })
    };

    changeFunctionHeight(h) {
        this.setState({
            functionHeight: h
        })
    };

    render() {
        return (
            <View style={styles.containerIOS}>
                <Head headHeight={46} changeHeadHeight={(e)=>{this.changeHeadHeight(e)}} />
                <ScrollView bounces={false} ref="myScroll">
                    {/*FunctionList展现标签,群聊等功能列表*/}
                    <FunctionList changeFunctionHeight = {(e)=>{this.changeFunctionHeight(e)}} />

                    {/*FriendList展现最近我的朋友*/}
                    <FriendList dataSource={this.state.dataSource2} />

                    {/*MainList展现通讯录*/}
                    <MainList dataSource={this.state.dataSource} />
                </ScrollView>
                <AlphabetaList scroll={this.refs.myScroll} headHeight={this.state.headHeight}
                                functionHeight={this.state.functionHeight}/>
            </View>
        );
    }
}

AppRegistry.registerComponent('chatList', () => chatList);