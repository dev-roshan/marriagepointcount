import React, { Component } from 'react';
import {View,Text, StyleSheet,Image,StatusBar } from 'react-native';
import ModeSelection from './ModeSelection';


export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.main}>
      <StatusBar
            translucent 
            backgroundColor="rgba(255, 255, 255, 0)"
        />
        <View style={styles.logoview}>
            <Text style={styles.title}>Marriage Point Count</Text>
           <Image style={styles.logo} source={require ('../assets/img/logo.png')} />
        </View>
        <ModeSelection navigation={this.props.navigation} />
      </View>
    );
  }
}


const styles= StyleSheet.create({
    main:{
        backgroundColor: '#0B2221',
        flex:1,
        fontFamily: 'Changa',
    },
    logoview:{
        marginTop: 85,
    },
    title:{
        color: 'white',
        fontSize: 35,
        alignSelf: 'center',
        margin: 10,
        fontFamily: 'Changa',
    },
    logo: {
        backgroundColor: 'rgba(0,0,0,0)',
        width: 200,
        height: 52,
        alignSelf: 'center',
      },
});