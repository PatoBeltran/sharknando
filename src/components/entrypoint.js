import React, { Component } from 'react';
import {
    AppRegistry,
    Dimensions,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    StatusBar,
    Image
} from 'react-native';

import Camera from 'react-native-camera';
import CameraRollPicker from 'react-native-camera-roll-picker';
import Log from "../helpers/log"
var { width, height } = Dimensions.get('window');

class SharknandoEntrypoint extends Component {
    componentDidMount() {
    }

    takePicture() {
        this.camera.capture()
            .then((data) => {
                Log.logMessage(data)
            })
            .catch(err =>
                Log.logError(err));
    }

    getSelectedImages(images, current) {

    }

    render() {
        return (
            <View style={ styles.container }>
                <StatusBar
                    barStyle="light-content"
                    />
                <Camera
                    ref={(cam) => { this.camera = cam; } }
                    style={styles.preview}
                    aspect={Camera.constants.Aspect.fill}>
                    <View style={styles.footer}>
                        <View style={styles.capture} onPress={this.takePicture.bind(this) }>
                            <View style={styles.innerCapture}></View>
                        </View>
                    </View>
                </Camera>
                <View style={ styles.header }>
                    <Image style={styles.rotateCamera} source={require('../../images/shot-flip-icon.png')} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        position: 'absolute',
        left: 0,
        top: 0,
        backgroundColor: 'rgba(0,0,0,.25)',
        width: width,
        height: 70
    },
    preview: {
        flex: 1,
        height: height,
        width: width
    },
    footer: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: width,
        alignItems: 'center',
        flexDirection: 'column'
    },
    rotateCamera: {
        marginTop: 25,
        marginRight: 25,
        flexDirection: 'row',
        alignSelf: 'flex-end'
    },
    capture: {
        flex: 0,
        backgroundColor: 'rgba(0,0,0,0.6)',
        borderRadius: 40,
        padding: 7,
        width: 80,
        height: 80,
        alignItems: 'center',
        marginBottom: 15
    },
    innerCapture: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 40,
        width: 65,
        height: 65
    }
});

module.exports = SharknandoEntrypoint;