import React from 'react';
import { Button } from 'react-native';

  class DetailsScreen extends React.Component {
    static navigationOptions = {
      drawerLabel: 'Notifications',
      // drawerIcon: ({ tintColor }) => (
      //   <Image
      //     source={require('./notif-icon.png')}
      //     style={[styles.icon, {tintColor: tintColor}]}
      //   />
      // ),
    };
  
    render() {
      return (
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />
      );
    }
  }

export default DetailsScreen;