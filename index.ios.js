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
  TouchableHighlight,
  ScrollView
} from 'react-native';

import CinemaPreview from './App/cinema'
import EducationPreview from './App/education'
var AppReloader = require('NativeModules').AppReloader;

class SingleServe extends Component {

  handleSubmit() {
    AppReloader.reloadAppWithURLString("http://localhost:8081/index.ios.bundle",
                                     "ShmerlingtonHotel",
                                     "ShmerlingtonHotel");
  }

  render() {
    return (
      <View>
      <View style={styles.appBar} />
      <ScrollView style={styles.scrollview}>
          <View style={styles.insideScrollview}>
            <CinemaPreview/>
            <View style={styles.seperator} />
            <EducationPreview/>
            <View style={styles.seperator} />
            <CinemaPreview/>
            <View style={styles.seperator} />
            <CinemaPreview/>
            <View style={styles.seperator} />
          </View>
      </ScrollView>
      </View>
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
  appBar: {
    // position: 'absolute',
        left: 0,
        right: 0,
        top: 50,
        bottom: 0,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
      // flex: 1,
      backgroundColor: '#FFF'
  },
  scrollview: {
      flex: 1,
      flexDirection: 'column'
  },
  insideScrollview: {
      flex: 1
  },
  seperator: {
    padding: 10
  }
});

AppRegistry.registerComponent('SingleServe', () => SingleServe);
