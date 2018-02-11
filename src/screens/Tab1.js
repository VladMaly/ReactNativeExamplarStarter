import React from 'react';
import Header from './Header';
import { View } from 'react-native';
import defaultStyles from '../../src/styles/default';

class Tab1 extends React.Component {
  render() {
    return (
        <View style={{ margin: 10 }}>
          <Header text="Examplar Setup for an App!"></Header>
        </View>
    ); 
  }
}
export default Tab1;