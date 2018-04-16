import React, { Component } from 'react';
import { Provider } from 'mobx-react/native';

import stores from './src/stores';
import App from './src';

type Props = {};
export default class Setup extends Component<Props> {
  render() {
    return (
      <Provider
        {...stores}
      >
        <App />
      </Provider>
    );
  }
}