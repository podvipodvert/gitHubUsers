// @flow

import React, { Component } from 'react';
import {
  View,
  FlatList,
} from 'react-native';
import { inject, observer } from "mobx-react/native";
import { Actions } from 'react-native-router-flux';
import { toJS } from 'mobx';
import {
  fetchUsers,
  getFollowers,
} from '../../requests/users';

import UserRow from '../../components/userRow';
import Header from '../../components/Header';

type Props = {
  loader: Object,
  users: Object
}
type State = {
  refreshing: boolean
}
@inject(allStores => ({
  loader: allStores.loader,
  users: allStores.users
}))
@observer
export default class UsersPage extends Component<Props, State> {

  loadMore = () => {
    const {
      users,
    } = this.props;
    fetchUsers({ lastUser: toJS(users.users).pop().id }, (res) => {
      users.setUsers([...users.users, ...res]);
      Actions.UsersPage();
    }, () => {
      alert("Users is not loaded =(");
    });
  }

  goToFollowers = (user: Object) => {
    const {
      loader,
      users,
    } = this.props;
    loader.switch(true);
    getFollowers({ userName: user.login }, (res) => {

      loader.switch(false);
      users.setFollowers(res);
      Actions.Followers({ userLogin: user.login });
    }, () => {
      loader.switch(false);
    });

  }

  render() {
    const {
      users
    } = this.props;
    console.log("users", users);
    return (
      <View>
        <Header
          title="Users"
          onPressBack={Actions.pop}
        />
        <FlatList
          data={toJS(users.users)}
          renderItem={({ item }) =>
            (
              <UserRow
                {...item}
                onPress={() => this.goToFollowers(item)}
              />
            )
            }
          onEndReachedThreshold={1}
          onEndReached={this.loadMore}
          keyExtractor={(item, i) => `${i}`}
        />
      </View>
    );
  }
}
