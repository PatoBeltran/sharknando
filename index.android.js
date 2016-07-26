import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import SharknandoEntrypoint from "./src/components/entrypoint";

class sharknando extends Component {
  render() {
    return <SharknandoEntrypoint />;
  }
}

AppRegistry.registerComponent('sharknando', () => sharknando);
