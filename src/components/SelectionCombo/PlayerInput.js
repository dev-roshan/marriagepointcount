import React, { Component } from 'react';
import { View, Text ,StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { TextField } from 'react-native-material-textfield';
GLOBAL = require('../../Global');


export default class PlayerInput extends Component {
  constructor(props) {
    super(props);
    this.focusNextField = this.focusNextField.bind(this);
    this.inputs = {};
    this.state = {
      player1:"",
      player2:"",
      player3:"",
      player4:"",
      player5:"",
      player6:"",
      player7:"",
      focusDescriptionInput: false,
    };
  }
  static propTypes={
    numberOfPlayers: PropTypes.number.isRequired,
  }
  _onTextChange(text,id){
    var key = "player"+id;
    var val = text;
    var obj  = {};
    obj[key] = val;
    this.setState(obj);
  }

  focusNextField(id) {
    this.inputs[id].focus();
  }
  
  render() {
      let num=this.props.numberOfPlayers;
      const initialArr = [];
      if(num>1){
        for (let index = 1; index <= num; index++) {
          initialArr.push({id:index})
        }
        return (
          <View style={styles.main}>
             {initialArr.map((item) => {
               let label="Player ";
               label=label+item.id.toString();
               return (
                <TextField
                ref={ input => {
                  this.inputs[item.id] = input;
                }}
                baseColor='white'
                textColor='white'
                style={styles.textfield}
                label={label}
                key={item.id}
                blurOnSubmit={ true }
                onChangeText={(text) => this._onTextChange(text,item.id)} 
                // onSubmitEditing={() => { this.myInput.focus() }}
                returnKeyType = {"next"}
                onSubmitEditing={() => {
                  if(num!==item.id){this.focusNextField(item.id+1);}
                }}
                // focus={this.state.focusDescriptionInput}
                // onChangeText={ (phone) => this.setState({ phone }) }
              />
               );
            })}
           </View>
        )
      }
    return (
      
      <View style={styles.main}>
      </View>
    );
  }
}

const styles= StyleSheet.create({
 main:{
  marginLeft: 40,
  marginRight: 40,
  marginTop: 5,
 },
 textfield:{
  
 }
});