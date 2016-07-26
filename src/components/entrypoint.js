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
import GalleryButton from './galleryButton';
import RotateCamera from './rotateCamera';
import {Style} from '../globals/config';

var { width, height } = Dimensions.get('window');

class SharknandoEntrypoint extends Component {
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

    rotateCamera() {

    }

    render() {
        return (
            <View style={ styles.container }>
                <Camera
                    ref={(cam) => { this.camera = cam; } }
                    style={styles.cameraPreview}
                    aspect={Camera.constants.Aspect.fill} />
                <View style={ styles.header }>
                    <StatusBar barStyle="light-content" />
                    <RotateCamera callback={this.rotateCamera} />
                </View>
                <View style={styles.footer}>
                    <View style={styles.gallery}>
                        <GalleryButton />
                    </View>
                    <View style={styles.shutter}>
                        <View style={styles.capture} onPress={this.takePicture.bind(this) }>
                            <View style={styles.innerCapture}></View>
                        </View>
                    </View>
                    <View style={styles.more}>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    cameraPreview: {
        flex: 1,
        height: height,
        width: width,
        position: 'absolute',
        left: 0,
        top: 0,
    },
    header: {
        position: 'absolute',
        left: 0,
        top: 0,
        backgroundColor: 'rgba(0,0,0,.25)',
        width: width,
        height: 65,
        flexDirection: 'row'
    },
    footer: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: width,
        height: 100,
        alignItems: 'center',
        flexDirection: 'row',
    },
    gallery: {
        flex: 1,
        height: Style.footerHeight,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    shutter: {
        flex: 1,
        height: Style.footerHeight,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    more: {
        flex: 1,
        height: Style.footerHeight,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    capture: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        borderRadius: 40,
        padding: 7,
        width: 80,
        height: 80,
        alignItems: 'center',
    },
    innerCapture: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 40,
        width: 65,
        height: 65
    }
});

module.exports = SharknandoEntrypoint;