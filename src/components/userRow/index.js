// @flow

import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import styles from './styles';

type UserProps = {
  login: string,
  avatar_url: string,
  html_url: string,
  onPress: Function,
}

export default (props: UserProps) => {
  const {
    login,
    avatar_url,
    html_url,
    onPress = () => {}
  } = props;
  return (
    <TouchableOpacity
      style={styles.userRow}
      onPress={onPress}
    >
      <Image
        style={styles.image}
        source={{ uri: avatar_url }}
      />
      <View style={styles.infoRow}>
        <View style={styles.row}>
          <Text style={styles.loginTitle}>
            User Login:
          </Text>
          <Text style={styles.login}>{login}</Text>
        </View>
        <View>
          <Text>User Profile URL:</Text>
          <Text style={styles.link}>{html_url}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
