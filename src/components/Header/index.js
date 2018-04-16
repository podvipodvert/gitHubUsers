// @flow

import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StatusBar,
  Image,
} from 'react-native';
import styles from './style';

type headerProps = {
  title: string,
  onPressBack?: Function,
}

export default (props: headerProps) => (
  <View style={styles.container}>
    <StatusBar
      barStyle="dark-content"
    />
    <View style={styles.leftCol}>
      <TouchableOpacity
        onPress={props.onPressBack}
      >
        <Text>{'<- Back'}</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.WrapTitle}>
      <Text style={styles.HeaderTitle}>
        {props.title}
      </Text>
    </View>
  </View>
);
