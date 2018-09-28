import React, { Component } from 'react';
import Main from './components/Main';
import PlayerSelection from './components/PlayerSelection';
import { createStackNavigator } from 'react-navigation';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <AppStackNavigator />
    );
  }
}

const AppStackNavigator =createStackNavigator({
  main: Main,
  playerselection: PlayerSelection
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
 }
)

