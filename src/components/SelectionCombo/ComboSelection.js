import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'react-native-material-dropdown';

export default class ComboSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  static propTypes={
    onSelectionChange: PropTypes.func.isRequired,
  }

  render() {
    let data = [{
        value: 'Two',
      }, {
        value: 'Three',
      }, {
        value: 'Four',
      },{
        value: 'Five',
      },{
        value: 'Six',
      },{
        value: 'Seven',
      }];
  
      return (
            <Dropdown
              baseColor= 'white'
              label='Number of Players'
              textColor="white"
              itemColor="#000"
              selectedItemColor="#000"
              data={data}
            onChangeText={(value) => {
            this.props.onSelectionChange(value);// gives new value OK
            }}
            animationDuration={0}
            />
      );
    }
}
