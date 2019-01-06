/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Login from './src/login'


export default class App extends React.Component {
  render() {
    return (
      <View>
        <Login />
      </View>
    );
  }
}
