import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableHighlight,
  Image,
  Button
} from 'react-native';

export default class CinemaPreview extends Component {

  render() {

    return (
      <View style={styles.preview}>
        <View style={styles.containerView}>
          <Image source={require('../resources/baresh.jpg')} style={styles.container}/>
          <Image source={require('../resources/cinematek.jpg')} style={styles.logo}/>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.textContainer}>
            <Text>Screening in 42 min.</Text>
            <Text>You can get there in 24 min. walk</Text>
          </View>
          <View style={styles.buttonsContainer}>
              <View style={styles.buttons}>
                <TouchableHighlight style={styles.button}><Text style={styles.buttonText}>Navigate</Text></TouchableHighlight>
                <View style={styles.seperator} />
                <TouchableHighlight style={styles.secondaryButton}><Text style={styles.buttonText}>Order Now</Text></TouchableHighlight>
              </View>
            </View>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerView:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //position: 'relative'
  },
  container:{
    flex: 1,
    // width: 200,
    // justifyContent: 'center'
    // alignItems: 'stretch',
    resizeMode: 'cover'
  },
  logo:{
    flex:1,
    position: 'absolute',
    bottom: 0,
    left:0,
    resizeMode: 'contain',
    width: 100,
    height: 60
  },
  textContainer:{
    margin: 10
  },
  infoContainer:{
    padding:10,
    // position: 'relative',
    // flex:1,
    flexDirection:'row'
  },
  preview:{
    flex:1,
    flexDirection:'column'
  },
  buttonsContainer:{

    // alignItems:'flex-end',
    flex:1

  },
  buttons:{
    alignItems:'center',
    flex:1
  },
  button:{
    padding: 10,
    width:100,
    marginBottom: 5,
    backgroundColor: 'blue'
  },
  secondaryButton:{
      padding: 10,
      width:100,
      marginBottom: 5,
      backgroundColor: 'red'
  },
  buttonText:{
    textAlign: 'center',
    color: 'white'
  },
  seperator:
  {
    height: 10,
    margin: 0,
    backgroundColor: 'white'
  }

});
