/**
 * Created by chenqiming on 16/4/16.
 */

/**
 * Created by chenqiming on 16/4/16.
 */

import React, {
    Component,
    Text,
    TextInput,
    View,
    Image,
    TouchableOpacity,
    Platform
} from 'react-native';

import pinyin from 'pinyin';
import heightMsg from './heightMsg';
import styles from './style';

export default class Head extends React.Component {
    static propTypes = {
        headHeight: React.PropTypes.number,
        changeHeadHeight: React.PropTypes.func
    };

    constructor(props) {
        super(props);
    }

    render() {
        if (Platform.os === 'ios') {
            return (
                <View style={[styles.head, {height: this.props.headHeight}]} onLayout={(e)=>{
                    this.props.changeHeadHeight(e.nativeEvent.layout.height);
                }}>
                    <View style={styles.searchBar}>
                        <TextInput style={[styles.search, {fontSize: 14}]} placeholder="搜索"/>
                        <TouchableOpacity style={styles.searchBtn}>
                            <Image style={styles.searchImg} source={require('./img/search.png')}/>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        } else {
            return (
                <View style={[styles.head, {height: this.props.headHeight}]}>
                    <View style={styles.searchBar}>
                        <View style={styles.search}>
                            <TextInput style={{height: 30, padding: 0, paddingRight: 40, fontSize: 14}}
                                       underlineColorAndroid="transparent" placeholder="搜索"/>
                        </View>
                        <TouchableOpacity style={styles.searchBtn}>
                            <Image style={styles.searchImg} source={require('./img/search.png')}/>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }
    }
}