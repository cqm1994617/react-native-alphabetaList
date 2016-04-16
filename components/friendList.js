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
    ListView,
    Image,
    TouchableOpacity,
} from 'react-native';

import pinyin from 'pinyin';
import heightMsg from './heightMsg';
import styles from './style';

export default class FriendList extends React.Component {
    static propTypes = {
        dataSource: React.PropTypes.object
    };
    constructor(props){
        super(props);
        this.state = {

        }
    }

    rows(rowData) {
        return (
            <TouchableOpacity>
                <View style={styles.listItem}>
                    <Image style={styles.img} source={{uri: rowData.url}}/>
                    <Text>{rowData.name}</Text>
                </View>
                <View style={styles.line}></View>
            </TouchableOpacity>
        )
    };

    render(){
        if(this.props.dataSource._cachedRowCount > 0) {
            return (
                <View onLayout={
                        (e)=>{
                            heightMsg.friend = e.nativeEvent.layout.height;
                        }
                    }>
                    <View style={styles.listTitle}>
                        <Text style={styles.listTitleText}>我的朋友</Text>
                    </View>
                    <ListView
                        dataSource={this.props.dataSource}
                        renderRow={(rowData) => this.rows(rowData)}
                    />
                </View>
            )
        } else {
            return null;
        }
    }
}