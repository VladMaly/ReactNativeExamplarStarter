import React from 'react';
import { Text } from 'react-native';
import defaultStyles from '../../src/styles/default';

class Header extends React.Component {
  render() {
    return (
        <Text style={[defaultStyles.title, defaultStyles.backgroundColor]}>{this.props.text}</Text>
    ); 
  }
}
export default Header;