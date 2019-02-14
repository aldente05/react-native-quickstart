/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {SafeAreaView, View, Text} from 'react-native'
import Routes from './routes';

type
    Props = {};
export default class App extends Component<Props> {
    render() {
        return (
                <Routes/>
        )
    }
}
