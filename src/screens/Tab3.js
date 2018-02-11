import React from 'react';
import { Text, View, FlatList, ScrollView, StyleSheet } from 'react-native';
import defaultStyles from '../../src/styles/default';
import Header from './Header';

class Tab3 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header text="External Libraries listed below used in project. Also testing scrollview collision with navbar bellow">
        </Header>
        <ScrollView>
          <View style={defaultStyles.backgroundColor}>
            <FlatList
              data={mockData1}
              renderItem={({item}) => <Text style={[styles.bigText, defaultStyles.marginSides]}>{item.key}</Text>}
            />
          </View>
        </ScrollView>
      </View>
    ); 
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  bigText : {
    backgroundColor: 'orange',
    fontSize: 30,
    padding: 20,
    color: 'white',
    marginBottom: 1
  }
  // borderBottomColor: 'black',
  //   borderBottomWidth: 1

});

const mockData1 = [
  {key: 'Using Expo for launching/testing' +
  ' project, launch the app on any Android or Iphone and enter the link provided upon npm start.'},
  {key: 'Using React Navigation library for navigating'},
  {key: 'Using React native elements library(Cross platform'
   + ' React Native UI Toolkit, essentially icons and button styles and so on)'},
  {key: 'For declaring classes, es6 classes way of writing was used instead of the traditional'
   + ' React.createClass'}
];

export default Tab3;