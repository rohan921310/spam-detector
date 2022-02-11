import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Linking,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {Appbar} from 'react-native-paper';
import {Platform} from 'react-native';

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

class Header extends Component {
  render() {
    return (
      <Appbar.Header>
        <Appbar.Content
          titleStyle={{fontWeight: 'bold', color: '#262424'}}
          title="Spam Detector"
          color="#000"
        />
        {/* <Appbar.Action icon="magnify" color="#fff" onPress={() => {}} /> */}
        <Appbar.Action icon={MORE_ICON} color="#000" onPress={() => {}} />
      </Appbar.Header>
    );
  }
}

export default Header;
