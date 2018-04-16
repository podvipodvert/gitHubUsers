// @flow

import React, { Component } from 'react';
import {
  View,
  FlatList,
} from 'react-native';
import { inject, observer } from "mobx-react/native";
import { Actions } from 'react-native-router-flux';
import { toJS } from 'mobx';

import UserRow from '../../components/userRow';
import Header from '../../components/Header';

type Props = {
  loader: Object,
  users: Object,
  userLogin: string,
}
type State = {
  refreshing: boolean
}
@inject(allStores => ({
  loader: allStores.loader,
  users: allStores.users
}))
@observer
export default class Followers extends Component<Props, State> {
  render() {
    const {
      users,
      userLogin,
    } = this.props;
    return (
      <View>
        <Header
          title={`${userLogin} Followers`}
          onPressBack={Actions.pop}
        />
        <FlatList
          data={toJS(users.followers)}
          renderItem={({ item }) =>
            (
              <UserRow
                {...item}
                onPress={() => {}}
              />
            )
            }
          keyExtractor={(item, i) => `${i}`}
        />
      </View>
    );
  }
}
