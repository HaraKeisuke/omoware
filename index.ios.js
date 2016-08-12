/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import {
   AppRegistry,
 } from 'react-native';


 import Application from './app/Application';
 import Initializer from './app/Manager/Initializer/Initializer';

 Initializer.getInstance().initialize();

 AppRegistry.registerComponent('omoware', () => Application);
