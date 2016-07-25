import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

interface EntrypointProps extends React.Props<SharknandoEntrypoint> {
}

export class SharknandoEntrypoint extends React.Component<EntrypointProps, {}> {
    private styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F5FCFF',
        },
        welcome: {
            fontSize: 20,
            textAlign: 'center',
            margin: 10,
        },
        instructions: {
            textAlign: 'center',
            color: '#333333',
            marginBottom: 5,
        },
    });

    constructor(props: EntrypointProps) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <View style={ this.styles.container }>
                <Text style={ this.styles.welcome }>Welcome to React Native!</Text>
                <Text style={ this.styles.instructions }>To get started, edit index.ios.js</Text>
                <Text style={ this.styles.instructions }>
                    Press Cmd+ R to reload, { '\n'}
                    Cmd + r or shake for dev menu
                </Text>
            </View>
        );
    }
}