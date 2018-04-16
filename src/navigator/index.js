import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';

import { inject, observer } from 'mobx-react';
import StartPage from '../containers/StartPage';
import UsersPage from '../containers/UsersPage';
import Followers from '../containers/Followers';


@inject(allStores => ({
  loader: allStores.loader,
}))
@observer
export default class Navigator extends Component {
  render() {
    return (
      <Router backAndroidHandler={() => true}>
        <Scene key="root" hideNavBar>
          <Scene
            key="StartPage"
            component={StartPage}
            initial
          />
          <Scene
            key="UsersPage"
            component={UsersPage}
          />
          <Scene
            key="Followers"
            component={Followers}
          />
        </Scene>
      </Router>
    );
  }
}
