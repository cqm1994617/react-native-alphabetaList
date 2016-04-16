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
} from 'react-native';
import styles from './style';

export default class FunctionList extends React.Component {
    static propTypes = {
        changeFunctionHeight: React.PropTypes.func
    };

    render() {
        return (
            <View style={styles.function} onLayout={(e)=>{
                    this.props.changeFunctionHeight(e.nativeEvent.layout.height);
                }
            }>

                <TouchableOpacity>
                    <View style={styles.listItem}>
                        <Image style={styles.img} source={require('./img/z7.png')}/>
                        <Text>新的朋友</Text>
                    </View>
                    <View style={styles.line}></View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.listItem}>
                        <Image style={styles.img} source={require('./img/z8.png')}/>
                        <Text>群聊</Text>
                    </View>
                    <View style={styles.line}></View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.listItem}>
                        <Image style={styles.img} source={require('./img/z9.png')}/>
                        <Text>标签</Text>
                    </View>
                    <View style={styles.line}></View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.listItem}>
                        <Image style={styles.img} source={require('./img/z10.png')}/>
                        <Text>公众号</Text>
                    </View>
                    <View style={styles.line}></View>
                </TouchableOpacity>
            </View>
        )
    }
}
