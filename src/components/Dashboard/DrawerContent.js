import React, { Component } from 'react';
import { View,StyleSheet,Text, AsyncStorage,Image } from 'react-native';

export default class DrawerContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players:null,
    };
  }

  render() {
    
    AsyncStorage.getItem('players')
    .then(req => JSON.parse(req))
    .then(json => this.setState({
      players:json
    }))
    .catch(error => console.warn('error!'));
    // console.warn(this.state.players);
    if(this.state.players!=null){
      players=this.state.players;
      var data = players.map(function(item) {
        return {
          id: item.id,
          name: item.name
        };
      });
    }
    // console.warn(data);
    if(data){
      return (
      <View style={Styles.main}>
         <Image style={Styles.logoimg} source={{uri: 'asset:/img/logonew.png'}} />
         {data.map((item,key) => {
           let imageUrl='asset:/img/player_icons/'+item.id+'.png';
               return (
                <View key={key} style={Styles.DrawerPlayers}>
                   <Image style={Styles.playerIcon} source={{uri: 'asset:/img/player_icons/'+item.id+'.png'}} />
                   <Text style={Styles.DrawerName}>{item.name}</Text>
                   <Text style={Styles.DrawerScore}>0</Text>
                </View>
               );
            })}
      </View>
      );
    }
    else{
          return (
      <View style={Styles.main}>
         <Image style={Styles.logoimg} source={{uri: 'asset:/img/logonew.png'}} />
         {/* {this.state.players.map((item) => {
               let label="Player ";
               label=label+item.id.toString();
               return (
                <View>
                   <Image style={Styles.playerIcon} source={{uri: 'asset:/img/player_icons/cat.png'}} />
                </View>
               );
            })} */}
      </View>
    );
  }
  }
}

const Styles=StyleSheet.create({
    main:{
        flex:1,
        backgroundColor: '#333333',
    },
    logoimg:{
        marginTop: 30,
        backgroundColor: 'rgba(0,0,0,0)',
        width: 280,
        height: 100,
        alignSelf: 'center',
    },
    playerIcon:{
      width: 50,
      height: 50,
    },
    DrawerPlayers:{
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'flex-end'

    // borderColor: 'green',
    // borderStyle: 'solid',
    // borderWidth: 2,
    },
    DrawerName:{
      fontFamily: 'Changa',
      fontSize: 25,
      color:'white',
      marginLeft: 20,
    },
    DrawerScore:{
      fontFamily: 'Changa',
      fontSize: 25,
      alignSelf: 'center',
      justifyContent: 'flex-end',
      color:'white',
    }
});
