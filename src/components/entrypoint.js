import React, { Component } from 'react';
import {
    AppRegistry,
    Dimensions,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    StatusBar
} from 'react-native';

import Camera from 'react-native-camera';
import ImagePicker from 'react-native-image-picker';
import Log from "../helpers/log"
import GalleryButton from './galleryButton';
import RotateCamera from './rotateCamera';
import ImageChoosen from './imageChoosen';
import {Style} from '../globals/config';

var { width, height } = Dimensions.get('window');

const options = {
    quality: 1.0,
    maxWidth: 500,
    maxHeight: 500,
    storageOptions: {
        skipBackup: true
    }
};

class SharknandoEntrypoint extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasImageSelected: false,
            imageSelected: "",
            cameraType: Camera.constants.Type.back
        };
    }

    takePicture() {
        this.camera.capture()
            .then((data) => {
                Log.logMessage(data)
            })
            .catch(err =>
                Log.logError(err));
    }

    rotateCamera() {
        var newState = this.state;
        newState.cameraType = newState.cameraType === Camera.constants.Type.back ? Camera.constants.Type.front : Camera.constants.Type.back;
        this.setState(newState);
    }

    showCameraRoll() {
        ImagePicker.launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                Log.logError('User cancelled photo picker');
            }
            else if (response.error) {
                Log.logError('ImagePicker Error: ', response.error);
            }
            else {
                var source = { uri: 'data:image/jpeg;base64,' + response.data, isStatic: true };
                this.setState({
                    imageSelected: source,
                    hasImageSelected: true
                });
            }
        });
    }

    imageSubmitted() {
    }

    imageCanceled() {
        this.setState({
            imageSelected: "",
            hasImageSelected: false
        });
    }

    render() {
        const mainScreen = this.state.hasImageSelected ?
            <ImageChoosen
                image={this.state.imageSelected}
                onCancel={this.imageCanceled.bind(this) }
                onSubmit={this.imageSubmitted.bind(this) } />
            :
            <View style={ styles.container }>
                <Camera
                    ref={(cam) => { this.camera = cam; } }
                    style={styles.cameraPreview}
                    aspect={Camera.constants.Aspect.fill}
                    type={this.state.cameraType} />
                <View style={ styles.header }>
                    <StatusBar barStyle="light-content" />
                    <RotateCamera callback={this.rotateCamera.bind(this)} />
                </View>
                <View style={styles.footer}>
                    <View style={styles.gallery}>
                        <GalleryButton callback={this.showCameraRoll.bind(this) }/>
                    </View>
                    <View style={styles.shutter}>
                        <View style={styles.capture} onPress={this.takePicture.bind(this) }>
                            <View style={styles.innerCapture}></View>
                        </View>
                    </View>
                    <View style={styles.more}>
                    </View>
                </View>
            </View>;
        return mainScreen;
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
        height: Style.headerHeight,
        flexDirection: 'row'
    },
    footer: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: width,
        height: Style.footerHeight,
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