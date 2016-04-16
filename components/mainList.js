/**
 * Created by chenqiming on 16/4/16.
 */

import React, {
    Component,
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    TouchableOpacity,
} from 'react-native';

import pinyin from 'pinyin';
import heightMsg from './heightMsg';
import styles from './style';

export default class MainList extends React.Component {
    static propTypes = {
        dataSource: React.PropTypes.object
    };

    constructor(props){
        super(props);
    };

    rowsMsg(rowData) {
        let arr = [];   //储存a-z
        let result = [];
        for (v in rowData) {
            arr.push(v);
        }
        arr.sort(); //根据开头拼音排序
        for (let i = 0, length = arr.length; i < length; i++) {
            let first = [];
            let thisOne = rowData[arr[i]];  //拼音开头a-z中的一项,其中包含该拼音开头的所有联系人信息

            for (let j = 0, length = thisOne.length; j < length; j++) {
                first.push(
                    <TouchableOpacity key={j}>
                        <View style={styles.listItem}>
                            <Image style={styles.img} source={{uri: thisOne[j].url}}/>
                            <Text>{thisOne[j].name}</Text>
                        </View>
                        <View style={styles.line}></View>
                    </TouchableOpacity>
                )
            }
            /*result中保存的每一项代表a-z标题以及该标题对应的昵称列表*/
            //console.log(rowData[arr[i]]);
            result.push(
                <View onLayout={
                    (e)=>{
                        heightMsg[arr[i]] = e.nativeEvent.layout.height;
                    }
                } key={i}>
                    <View style={styles.listTitle}>
                        {/*a-z目录,如果目录名为zz,则输出#,代表第一个字符不为a-z的昵称*/}
                        {(arr[i] != 'zz') ? <Text style={styles.listTitleText}>{arr[i].toUpperCase()}</Text> :
                            <Text style={styles.listTitleText}>#</Text> }
                    </View>
                    <View>
                        {first}
                    </View>
                </View>
            )
        }
        return (
            <View>{result}</View>
        )
    };

    render(){
        return(
            <ListView dataSource={this.props.dataSource} head
                      renderRow={(rowData) => this.rowsMsg(rowData)}
            />
        )
    }
}