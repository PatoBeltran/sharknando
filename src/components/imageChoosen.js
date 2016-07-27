import React, { Component } from 'react';
import {
    Dimensions,
    StyleSheet,
    TouchableHighlight,
    View,
    StatusBar,
    Image
} from 'react-native';

import Log from "../helpers/log"
import {Style} from '../globals/config';

var { width, height } = Dimensions.get('window');

class ImageChoosen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasImageSelected: false,
            imageSelected: ""
        };
    }

    onCancel() {
        return this.props.onCancel();
    }

    onSubmit() {
        return this.props.onSubmit();
    }

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.choosenImage} source={this.props.image} />
                <View style={ styles.header }>
                    <StatusBar barStyle="light-content" />
                    <TouchableHighlight style={styles.cancel} onPress={this.onCancel.bind(this) }>
                        <Image style={styles.cancelIcon} source={require('../../images/cancel.png') } />
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.check} onPress={this.onSubmit.bind(this) }>
                        <Image style={styles.checkIcon} source={require('../../images/check.png') } />
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch'
    },
    choosenImage: {
        flex: 1
    },
    header: {
        position: 'absolute',
        left: 0,
        top: 0,
        backgroundColor: 'rgba(0,0,0,.25)',
        width: width,
        height: Style.headerHeight,
        flexDirection: 'row'
    },
    cancel: {
        height: Style.headerHeight,
        width: 75,
        position: 'absolute',
        left: 0,
        top: 0
    },
    check: {
        height: Style.headerHeight,
        width: 75,
        position: 'absolute',
        right: 0,
        top: 0
    },
    cancelIcon: {
        marginTop: 25,
        marginRight: 25,
        marginLeft: 25
    },
    checkIcon: {
        marginTop: 25,
        marginRight: 25,
        marginLeft: 25
    }
});

module.exports = ImageChoosen;