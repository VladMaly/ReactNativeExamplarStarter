import React from 'react';
import { Root } from '../config/router';
import { StyleSheet, View, Platform, StatusBar, StatusBarIOS } from 'react-native';
import defaultStyles from '../styles/default';
class Main extends React.Component {
  render() {
    return (
      <View style={[styles.container, defaultStyles.backgroundColorOrange]}>
          <Root />
      </View> 
    ); 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: {
        paddingTop: StatusBarIOS.currentHeight ? StatusBarIOS.currentHeight : 22,
      },
      android: {
        paddingTop: StatusBar.currentHeight
      },
    }),
  }
});

export default Main;


// TabBarIOS

// <View style={[styles.containerView, defaultStyles.backgroundColor]}>
//   <TabBarIOS style={{backgroundColor: 'green'}} selectedTab={this.state.selectedTab}>
//     <TabBarIOS.Item
//       selected={this.state.selectedTab === 'Tab1'}
//       onPress={() => {
//         this.setState({selectedTab: 'Tab1'})
//       }}>
//       <Tab1/>
//     </TabBarIOS.Item>
//     <TabBarIOS.Item
//       selected={this.state.selectedTab === 'Tab2'}
//       onPress={() => {
//         this.setState({selectedTab: 'Tab2'})
//       }}>
//       <Tab2/>
//     </TabBarIOS.Item>
//   </TabBarIOS>
// </View>