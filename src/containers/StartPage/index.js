// @flow

import React, { Component } from 'react';
import {
  View,
  ImageBackground,
  TouchableOpacity,
  Text,
} from 'react-native';
import { inject, observer } from "mobx-react/native";
import { Actions } from 'react-native-router-flux';

import styles from './styles';
import { fetchUsers, } from '../../requests/users';

type Props = {
  loader: Object,
  users: Object
}
const background = require('../../assets/images/git.jpg');

@inject(allStores => ({
  loader: allStores.loader,
  users: allStores.users
}))
@observer
export default class StartPage extends Component<Props> {
  loadUsers = () => {
    const {
      loader,
      users,
    } = this.props;
    loader.switch(true);
    fetchUsers({ lastUser: 0 }, (res) => {
      users.setUsers(res);
      Actions.UsersPage();
      loader.switch(false);
    }, () => {
      alert("Users is not loaded =(");
      loader.switch(false);
    });
  }

  render() {
    return (

      <ImageBackground
        style={styles.backgroundImage}
        source={background}
      >
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.loadButton}
            onPress={this.loadUsers}
          >
            <Text style={styles.buttonText}>Load GitHub Users</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
