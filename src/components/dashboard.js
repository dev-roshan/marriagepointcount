import React, { Component } from 'react';
import { StyleSheet, AsyncStorage, View, Text } from 'react-native';
import DrawerCustom from './Dashboard/DrawerCustom';

export default class dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  closeControlPanel = () => {
    this._drawer.close()
  };
  openControlPanel = () => {
    this._drawer.open()
  };

  render() {
    // AsyncStorage.getItem('players')
    // .then(req => JSON.parse(req))
    // .then(json => console.warn(json))
    // .catch(error => console.warn('error!'));
      return (
        <View style={Styles.main}>
            < DrawerCustom />
        </View>
      );
  }
}
const Styles = StyleSheet.create({
  main:{
    backgroundColor: '#0B2221',
    flex:1,
},
  });
