/**
 * Created by chenqiming on 16/4/16.
 */

import React, {
    Component,
    Text,
    View,
    Dimensions,
    Image,
    TouchableOpacity,
    Platform
} from 'react-native';

import pinyin from 'pinyin';
import heightMsg from './heightMsg';
import styles from './style';

let {height, width} = Dimensions.get('window');

export default class AlphabetaList extends React.Component {
    static propTypes = {
        headHeight: React.PropTypes.number,
        functionHeight: React.PropTypes.number,
        scroll: React.PropTypes.object
    }

    constructor(props) {
        super(props);
        this.cellHeight = 0;    //右侧a-z小格子的高度
    }

    rightRows() {
        let arr = [];
        arr.push(
            <Text onLayout={(e)=>{
                        this.cellHeight = e.nativeEvent.layout.height;
                    }}
                  style={styles.rightText} key={-1}>↑</Text>
        );
        for (let i = 0; i < 26; i++) {
            arr.push(
                <Text onLayout={(e)=>{
                        this.cellHeight = e.nativeEvent.layout.height;
                    }}
                      style={styles.rightText} key={i}>{ String.fromCharCode(65 + i) }</Text>
            );
        }
        arr.push(
            <Text onLayout={(e)=>{
                        this.cellHeight = e.nativeEvent.layout.height;
                    }}
                  style={styles.rightText} key={26}>#</Text>
        );
        return arr;
    }

    moveScroll(e) {
        let num = Math.floor((e.nativeEvent.pageY - 0.2 * height) / this.cellHeight);
        if (num < 0) {
            num = 0;
        }
        if (num > 27) {
            num = 27;
        }
        let scroll = 0;
        if(num > 0) {
            scroll = heightMsg.friend + this.props.functionHeight;
            let bottomDistance = 0;
            let sumHeight = 0;
            let i = 1;
            let j = 1;
            for (var e in heightMsg) {
                sumHeight += heightMsg[e];
            }
            for (obj in heightMsg) {
                if (i == num) {
                    break;
                } else {
                    i++;
                    scroll += heightMsg[obj];
                }
            }
            for (obj2 in heightMsg) {
                if (j > i) {
                    bottomDistance += heightMsg[obj2];
                } else {
                    j++;
                }
            }

            if (Platform.OS === 'ios') {
                if (bottomDistance < height) {
                    scroll = sumHeight - height + this.props.functionHeight + 20 + this.props.headHeight;
                }
            }
        }
        this.props.scroll.scrollTo({x: 0, y: scroll, animated: false});
    }

    render() {
        return (
            <View onTouchStart={(e)=>{this.moveScroll(e)}}
                  onTouchMove={(e)=>{this.moveScroll(e)}} style={styles.rightRows}>
                {this.rightRows()}
            </View>
        )
    }
}