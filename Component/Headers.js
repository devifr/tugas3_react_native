import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Headers extends Component{
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.subHeader}>Tugas 3 React Native</Text>
        <Text style={styles.header}>SELAMAT DATANG</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    flex: 1
  },
  subHeader: {
    color: "#fff",
    textAlign: 'center',
    fontSize: 10
  },
  header: {
    color: 'purple',
    textAlign: 'center',
    fontSize: 14
  }
})

export default Headers;
