/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Headers from './Component/Headers'
import Barang from './Component/Barang'

export default class App extends Component {
  render(){
    return (
      <View style={styles.marginTop}>
        <StatusBar />
        <Headers />
        <Barang />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  marginTop: {
    marginTop: 30,
    flex: 1
  },
});
