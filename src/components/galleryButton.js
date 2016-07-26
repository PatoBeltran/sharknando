import React, { Component } from 'react';
import {
    TouchableHighlight,
    View,
    Image,
    StyleSheet
} from 'react-native';

class GalleryButton extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.hexagon}>
                    <View style={styles.hexagonInner} />
                    <View style={styles.hexagonBefore} />
                    <View style={styles.hexagonAfter} />
                </View>
                <Image style={styles.cameraRollInner} source={require('../../images/camera-roll.png') } />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    cameraRollInner: {

    },
    hexagon: {
        width: 50,
        height: 27.5
    },
    hexagonInner: {
        width: 50,
        height: 27.5,
        backgroundColor: 'rgba(255,255,255,0.6)'
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
        borderTopColor: 'rgba(255,255,255,0.6)'
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
        borderBottomColor: 'rgba(255,255,255,0.6)'
    }
});

module.exports = GalleryButton;