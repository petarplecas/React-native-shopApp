import React from 'react';
import { createAppContainer, createDrawerNavigator } from 'react-navigation';

import DetailsScreen from './app/components/DetailsScreen';
import HomeScreen from './app/components/HomeScreen';

const AppDrawerNavigator = createDrawerNavigator({
  Home: HomeScreen,
  Details: DetailsScreen
})


const AppContainer = createAppContainer(AppDrawerNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
