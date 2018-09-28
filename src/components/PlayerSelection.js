import React, { Component } from 'react';
import {View,Text, StyleSheet,Image,StatusBar, KeyboardAvoidingView ,ScrollView } from 'react-native';
import ComboSelection  from './SelectionCombo/ComboSelection';
import PlayerInput from './SelectionCombo/PlayerInput';
GLOBAL = require('../Global');

export default class PlayerSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      no_of_players:0,
    };
  }
handleChange = (value) =>{
  var Players=0;
  switch(value) {
    case 'Two':
      Players=2;
      break;
    case 'Three':
      Players=3;
      break;
    case 'Four':
      Players=4;
      break;123
    case 'Five':
      Players=5;
      break;
    case 'Six':
      Players=6;
      break;
    case 'Seven':
      Players=7;
      break;
    default:
      Players=0;
      break;
  }
  this.setState({
    no_of_players: Players
  });
};

  render() {
  // console.warn(GLOBAL.player1);
      return (
        <ScrollView style={styles.main}>
        <KeyboardAvoidingView
        style={{ marginBottom: 40 }} 
        >
         <StatusBar
              translucent 
              backgroundColor="rgba(255, 255, 255, 0)"
          />
        <Text style={styles.initmain}> Select Number of Players </Text>
          <View style={styles.selectionCombo}> 
            <ComboSelection onSelectionChange={ this.handleChange } />
          </View>
          <PlayerInput numberOfPlayers={this.state.no_of_players} />
        </KeyboardAvoidingView>
        </ScrollView>
      );
    }
}
const styles= StyleSheet.create({
    main:{
        backgroundColor: '#0B2221',
        flex:1,
        fontFamily: 'Changa',
        
    },
    selectionCombo:{
      color:'white',
      marginLeft: 50,
      marginRight: 50,
      marginBottom: 20,
    },
    initmain:{
      marginTop: 40,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      color :'white',
      fontSize: 25,
    }
  });
