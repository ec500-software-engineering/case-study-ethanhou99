import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, View, Text } from 'react-native';
// import { AppLoading, Asset, Font, Icon } from 'expo';
// import AppNavigator from './navigation/AppNavigator';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return(
      <View style = {styles.container}>
         <View style = {styles.result}></View>
         <View style = {styles.calculation}></View>
         <View style = {styles.buttons}>
           <View style = {styles.numbers}></View>
           <View style = {styles.operations}></View>
         </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  result: {
    flex: 2,
    backgroundColor: 'red'
  },
  calculation: {
    flex: 1,
    backgroundColor: 'green'
  },
  buttons: {
    flexGrow: 1,
    flexDirection: 'row'
  },
  numbers: {
    flex: 3,
    backgroundColor: 'yellow'
  },
  operations: {
    flex: 1,
    backgroundColor: 'black'
  }
})
