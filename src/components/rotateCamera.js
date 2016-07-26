import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableHighlight,
    View,
    Image
} from 'react-native';

import {Style} from '../globals/config';

class RotateCamera extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.inner} source={require('../../images/shot-flip-icon.png') } />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: Style.headerHeight,
        width: 75,
        position: 'absolute',
        top: 0,
        right: 0
    },
    inner: {
        marginTop: 25,
        marginRight: 25,
        marginLeft: 25
    },
});

module.exports = RotateCamera;