import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux';
import { deleteMobile } from '../actions/mobileAction';

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
    constructor(props) {
      super(props);
    }

    mobileDeletedHandler = () => {
      let mobile = this.props.navigation.getParam('mobile', 'no-id')
      console.log(mobile.id)
      this.props.onDeleteMobile(mobile.id);
      this.props.navigation.goBack();
    };
    
  
  
    render() {
      const { navigation } = this.props;
      const mobile = navigation.getParam('mobile', 'NO-ID');
      return (
        <View>
          <View>
            <Text style={styles.mobileName} >
              {mobile.name}
            </Text>
          </View>
          <View>
            <Text style={styles.mobileName}>
              {mobile.description}
            </Text>
          </View>
          <View>
            <Text style={styles.mobileName}>
              {mobile.model}
            </Text>
          </View>
          <TouchableOpacity key={mobile.key} onPress={this.mobileDeletedHandler}>
            <View style={styles.deleteButton}>
              <Icon
                name="ios-trash"
                size={30}icon
                color="red"
              />
            </View>
          </TouchableOpacity>
        </View>
      );
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
      onDeleteMobile: key => dispatch(deleteMobile(key))
    };
  };

  export default connect(null, mapDispatchToProps)(DetailsScreen);

const styles = StyleSheet.create({
  container: {
    margin: 22,
    flex: 1
  },
  mobileName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28
  },
  deleteButton: {
    alignItems: "center"
  },
  subContainer: {
    flex: 1
  }
});