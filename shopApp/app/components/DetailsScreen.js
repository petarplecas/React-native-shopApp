import React from 'react';
import { View, Text, StyleSheet, Image } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux';
import { deleteMobile } from '../actions/mobileAction';
import { Header } from 'react-native-elements';

  class DetailsScreen extends React.Component {
    static navigationOptions = {
      drawerLabel: 'Notifications',
      header: null,
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
          <Header
            leftComponent={{ icon: 'arrow-back', color: '#fff', size: 30, onPress: () => this.props.navigation.goBack(), }}
            rightComponent={{ icon: 'delete', color: '#fff', size: 30, onPress: () => this.mobileDeletedHandler() }}
                  
            outerContainerStyles={{
                backgroundColor: 'rgb(100,130,44)',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: 57,
            }}
          />
          <View>
            <Text style={styles.mobileName} >
              {mobile.name}
            </Text>
            <View style={{height: 400, width: 400, alignItems: 'center', justifyContent:'center'}}>
              <Image
                source={mobile.image} 
                style={{flex:1, height: 380, width: 380}}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.mobileName}>
              Description: {mobile.description}
            </Text>
            <Text style={styles.mobileName}>
              Model: {mobile.model}
            </Text>
          </View>
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