/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableHighlight
} from 'react-native';

var AppReloader = require('NativeModules').AppReloader;

class SingleServe extends Component {

  handleSubmit() {
    AppReloader.reloadAppWithURLString("http://localhost:8081/index.ios.bundle",
                                     "ShmerlingtonHotel",
                                     "ShmerlingtonHotel");
  }

  render() {
    return (
      <TouchableHighlight style={styles.button} onPress={this.handleSubmit}>
        <Text style={styles.buttonText}>LOAD & RUN</Text>
      </TouchableHighlight>
    );
  }
}

const PURPLE = '#5C069A';
const VERY_LIGHT_GREY = '#f5f5f5';
const LIGHT_GREY = '#cccccc';
const GREY = '#888';
const MID_GREY = '#222';
const DARK_GREY = '#444';

const Colors = {
  tintColor: PURPLE,
  purple: PURPLE,
  veryLightGrey: VERY_LIGHT_GREY,
  lightGrey: LIGHT_GREY,
  grey: GREY,
  midGrey: MID_GREY,
  darkGrey: DARK_GREY,
};

const styles = StyleSheet.create({
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
  button: {
    backgroundColor: Colors.tintColor,
    justifyContent: 'center',
    alignItems: 'center',
    margin: Platform.OS == 'ios' ? 10 : null,
    marginBottom: Platform.OS === 'android' ? 10 : null,
    height: 45,
  },
});

AppRegistry.registerComponent('SingleServe', () => SingleServe);
