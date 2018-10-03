import React, { Component } from 'react';
import { AsyncStorage, View,Text, Button ,StyleSheet } from 'react-native';
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
      errors:"",
    };
  }
  static propTypes={
    numberOfPlayers: PropTypes.number.isRequired,
    navigation: PropTypes.object.isRequired,
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

  handlePress() {
    let num=this.props.numberOfPlayers;
    this.setState({
      errors:""
    });
    let error="";
      const myArray = [];
      if(num>1){
        for (let index = 1; index <= num; index++) {
          key="player"+index;
          let name= this.state[key];
          if(name==""){
            error=key+ " name is required.";
            this.setState({
              errors:error
            });
            return;
          }
          myArray.push({name:name,id:index});
        }
      }
      if(error==""){
        AsyncStorage.setItem('players', JSON.stringify(myArray))
          // .then(json => console.warn('success!'))
          // .catch(error => console.warn('error!'));
      }
      this.props.navigation.navigate('dashboard');
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
          <Text style={{justifyContent: 'center',alignSelf: 'center',fontSize:20,color:'white'}}>Enter Players Name</Text>
          <Text style={{justifyContent: 'center',alignSelf: 'center',fontSize:15,color:'red'}}>{this.state.errors}</Text>
          
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
                returnKeyType = {"next"}
                onSubmitEditing={() => {
                  if(num!==item.id){this.focusNextField(item.id+1);}
                }}
              />
               );
            })}
            <Button
              style={styles.button}
              onPress={this.handlePress.bind(this)}
              title="Start"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
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
 button:{
  marginTop:50
 }
});