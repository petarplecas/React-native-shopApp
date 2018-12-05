import React from 'react';
import { Provider } from 'react-redux';
import store from './Store'
import AppContainer from './Routes'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}
