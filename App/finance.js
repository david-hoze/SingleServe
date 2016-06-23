import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Platform,
    TouchableHighlight,
    Image
} from 'react-native';
import Button from 'apsl-react-native-button';

var AppReloader = require('NativeModules').AppReloader;

export default class FinancePreview extends Component {

  handleSubmit() {
    AppReloader.reloadAppWithURLString("https://dl.dropboxusercontent.com/u/68064741/finance.jsbundle",
                                     "Finance",
                                     "Finance");
  }

    render() {

        return (
            <View style={styles.preview}>
                <View style={styles.containerView}>
                    <Image source={require('../resources/stocks1.png')} style={styles.container}/>
                </View>
                <View style={styles.infoContainer}>
                    <View style={styles.textContainer}>
                        <Text>Screening in 42 min.</Text>
                        <Text>You can get there in 24 min. walk</Text>
                    </View>
                    <View style={styles.buttonsContainer}>
                        <View style={styles.buttons}>
                            <Button style={styles.button} onPress={this.handleSubmit}>See more</Button>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //position: 'relative'
    },
    container: {
        flex: 1,
        // width: 200,
        // justifyContent: 'center'
        // alignItems: 'stretch',
        resizeMode: 'cover'
    },
    logo: {
        flex: 1,
        position: 'absolute',
        bottom: 0,
        left: 0,
        resizeMode: 'contain',
        width: 100,
        height: 60
    },
    textContainer: {
        margin: 10
    },
    infoContainer: {
        padding: 10,
        // position: 'relative',
        // flex:1,
        flexDirection: 'row'
    },
    preview: {
        flex: 1,
        flexDirection: 'column'
    },
    buttonsContainer: {

        alignItems: 'flex-end',
        flex: 1

    },
    buttons: {
        alignItems: 'center',
        flex: 1
    },
    button: {
        borderColor: '#448bad',
        backgroundColor: 'white',
        borderRadius: 0,
        borderWidth: 3,
        padding: 10,
        width: 100,
        marginBottom: 5
    },
    secondaryButton: {
        borderColor: '#8e44ad',
        backgroundColor: 'white',
        borderRadius: 0,
        borderWidth: 3,
        padding: 10,
        width: 100,
        marginBottom: 5,
        textAlign: 'center',
        color: 'black'
    },
    seperator: {
        height: 10,
        margin: 0,
        backgroundColor: 'white'
    }

});
