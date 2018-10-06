import React, { Component } from 'react';
import { TouchableOpacity,View, Text ,StyleSheet } from 'react-native';
import Drawer from 'react-native-drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import DrawerContent from './DrawerContent';


export default class DrawerCustom extends Component {
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
    return (
        <Drawer
        ref={(ref) => this._drawer = ref}
        type="overlay"
        content={<DrawerContent />}
        tapToClose={true}
        openDrawerOffset={0.2} // 20% gap on the right side of drawer
        panCloseMask={0.2}
        closedDrawerOffset={-3}
        >
        <View style={Styles.header}>
         <TouchableOpacity onPress={this.openControlPanel}>
         <Icon name="bars" size={40} color="white" style={Styles.icon} />
         </TouchableOpacity>
         <Text style={Styles.headerText}>Welcome</Text>
         </View>
      </Drawer>
    );
  }
}
const Styles=StyleSheet.create({
  header:{
    backgroundColor: '#330022',
    flexDirection: 'row',
    
  },
  headerText:{
    alignSelf:'center',
    fontSize:30,
    color:'white',
    marginLeft: 90,
    marginTop: 32,
    marginBottom: 5,
  },
  icon:{
    marginTop:32,
    marginLeft:10,
    marginBottom: 5,    
  }
});
