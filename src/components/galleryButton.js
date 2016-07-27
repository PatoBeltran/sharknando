import React, { Component } from 'react';
import {
    TouchableHighlight,
    View,
    Image,
    StyleSheet
} from 'react-native';

import {Style} from '../globals/config';

class GalleryButton extends Component {
    render() {
        return (
            <TouchableHighlight onPress={this.props.callback}>
                <View style={styles.container}>
                    <View style={styles.hexagon}>
                        <View style={styles.hexagonInner} />
                        <View style={styles.hexagonBefore} />
                        <View style={styles.hexagonAfter} />
                    </View>
                    <Image style={styles.cameraRollInner} source={require('../../images/camera-roll.png') } />
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: Style.footerHeight,
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    cameraRollInner: {
        alignSelf: 'center',
        marginLeft: -44
    },
    hexagon: {
        alignSelf: 'center',
        width: 50,
        height: 27.5,
    },
    hexagonInner: {
        width: 50,
        height: 27.5,
        backgroundColor: 'rgba(0,0,0,0.6)'
    },
    hexagonAfter: {
        position: 'absolute',
        bottom: -12.5,
        left: 0,
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderLeftWidth: 25,
        borderLeftColor: 'transparent',
        borderRightWidth: 25,
        borderRightColor: 'transparent',
        borderTopWidth: 12.5,
        borderTopColor: 'rgba(0,0,0,0.6)'
    },
    hexagonBefore: {
        position: 'absolute',
        top: -12.5,
        left: 0,
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderLeftWidth: 25,
        borderLeftColor: 'transparent',
        borderRightWidth: 25,
        borderRightColor: 'transparent',
        borderBottomWidth: 12.5,
        borderBottomColor: 'rgba(0,0,0,0.6)'
    }
});

module.exports = GalleryButton;