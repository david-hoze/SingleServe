import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableHighlight,
  Image,
  Button,
  TextInput
} from 'react-native';

export default class EducationPreview extends Component {

  render() {

    return (
      <View style={styles.preview}>
        <View style={styles.containerView}>
          <Image source={require('../resources/berlitz.jpg')} style={styles.container}/>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.textContainer}>
          <TextInput
              style={styles.edittext}
              placeholder="email@domain.com"
            />
          </View>
          <View style={styles.buttonsContainer}>
              <View style={styles.buttons}>
                <TouchableHighlight style={styles.button}><Text style={styles.buttonText}>Submit</Text></TouchableHighlight>
                <View style={styles.seperator} />
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
  edittext:{
      width:200,
      height: 28,
      marginBottom: 5,
      borderColor: 'gray',
      borderWidth: 1
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
