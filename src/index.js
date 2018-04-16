// @flow

import React, { Component } from 'react';
import { View, } from 'react-native';
import { observer, inject } from 'mobx-react/native';
import Navigator from './navigator';

import Loader from './components/loader';

type Props = {
  loader: Object,
}

@inject(allStores => ({
  loader: allStores.loader,
}))
@observer
export default class App extends Component<Props> {
  /**
   Loader we will use when app fetch data from backend
   it shows on full screen
   it can be made transparent
   */
  render() {
    const {
      loader,
    } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <Navigator />
        <Loader show={loader.show} />
      </View>
    );
  }
}
