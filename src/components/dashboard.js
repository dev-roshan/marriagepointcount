import React, { Component } from 'react';
import { AsyncStorage, View, Text } from 'react-native';

export default class dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    AsyncStorage.getItem('players')
    .then(req => JSON.parse(req))
    .then(json => console.warn(json))
    .catch(error => console.warn('error!'));
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}
