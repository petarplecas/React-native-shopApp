import React from 'react';
import { Button } from 'react-native';

  class HomeScreen extends React.Component {
    static navigationOptions = {
      drawerLabel: 'Home'
    };
  
    render() {
      return (
        <Button
          onPress={() => this.props.navigation.navigate('Details')}
          title="Go to details"
        />
      );
    }
  }
export default HomeScreen;