import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      resultText: ""
    }
  }

  calculateResult() {
    const text = this.state.resultText
  }

  buttonPressed(text) {

    if(text == '=') {
      return this.calculateResult()
    }
    this.setState({
      resultText: this.state.resultText + text
    })
  }

  operate(operation) {
    switch(operation) {
      case 'C':
          let text = this.state.resultText.split('')
          text.pop()
          this.setState({
            resultText: text.join('')
          })
    }
  }

  render() {
    let rows = []
    let nums = [[1,2,3], [4,5,6], [7,8,9], ['.',0,'=']]
    for (let i = 0; i < 4; i++) {
      let row = []
      for(let j = 0; j < 3; j++) {
        row.push(
        <TouchableOpacity onPress = {() => this.buttonPressed(nums[i][j])} style = {styles.btn}>
          <Text style = {styles.btntext}>{nums[i][j]}</Text>
        </TouchableOpacity>)
      }
      rows.push(<View style={styles.row}>{row}</View>)
    }

    let operations = ['C', '+', '-', '*', '/']
    let opts = []
    for (let i = 0; i < 4; i++) {
      opts.push(
        <TouchableOpacity style = {styles.btn} onPress={() => this.operate(operations[i])}>
          <Text style = {[styles.btntext, styles.white]}>{operations[i]}</Text>
        </TouchableOpacity>
      )
    }
    return(
      <View style = {styles.container}>
         <View style = {styles.result}>
           <Text style = {styles.resultText}>{this.state.resultText}</Text>
         </View>
         <View style = {styles.calculation}>
           <Text style = {styles.calculationText}>121</Text>
         </View>
         <View style = {styles.buttons}>
           <View style = {styles.numbers}>
            {rows}
           </View>
           <View style = {styles.operations}>
             {opts}
           </View>
         </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  resultText: {
    fontSize: 30,
    color: 'white'
  },
  btntext: {
    fontSize: 30,
  },
  white: {
    color: 'white'
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent:'center'
  },
  calculationText: {
    fontSize: 24,
    color: 'white'
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  result: {
    flex: 2,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  calculation: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  buttons: {
    flexGrow: 4,
    flexDirection: 'row'
  },
  numbers: {
    flex: 3,
    backgroundColor: 'yellow'
  },
  operations: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'space-around',
    alignItems: 'stretch'
  }
})
