import React, { Component } from 'react';
import { View, Text, StyleSheet,Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

export default class ModeSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  static propTypes={
    navigation: PropTypes.object.isRequired,
  }

  render() {
    return (
      <View style={styles.main}>
        <View style={styles.selectionBox}>
        <Image style={styles.selectionImage} source={{uri: 'asset:/img/hotspot.png'}} />
        </View>
        <Text style={styles.selectionText}>Hotspot</Text>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('playerselection')}>
        <View style={styles.selectionBox}>
        <Image style={styles.selectionImage} source={{uri: 'asset:/img/offline.png'}} />
        </View>
        </TouchableOpacity>
        <Text style={styles.selectionText}>Offline</Text>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  main:{
    marginTop: 40,
    justifyContent: 'center',
  },
  selectionBox:{
    backgroundColor: 'white',
    borderRadius: 20,
    marginTop:40,
    alignSelf: 'center',
    height:100,
    width:100,
    justifyContent:'center',
    borderWidth: 5,
    borderColor: '#1B3B50',

  },
  selectionImage:{
    height:80,
    width:80,
    alignSelf: 'center',
   },
   selectionText:{
    color: 'white',
    alignSelf: 'center',
   }, 
});
