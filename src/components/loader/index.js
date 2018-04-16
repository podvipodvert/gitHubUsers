// @flow

import React from 'react';
import {
  View,
  ActivityIndicator,
  Platform
} from 'react-native';

import Colors from '../../assets/colors';

import styles from './styles';

type _t_props = {
    show: boolean,
    style?: Object
};

const Loader = (props: _t_props) => {
  const {
    show,
    style
  } = props;
  if (show) {
    return (
      <View style={[styles.container, style && style]}>
        <ActivityIndicator
          size={Platform.OS === 'android' ? 40 : 0}
          color={Colors.purple}
        />
      </View>
    );
  }
  return null;
};

export default Loader;
