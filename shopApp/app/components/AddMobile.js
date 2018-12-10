import React from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, ToastAndroid, ScrollView, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { addMobile } from '../actions/mobileAction';

import MobileInput from './TextInput/mobileInput'
import validate from "../Utility/validation";

  class AddMobile extends React.Component {
    static navigationOptions = {
      drawerLabel: 'AddMobile',
      // drawerIcon: ({ tintColor }) => (
      //   <Image
      //     source={require('./notif-icon.png')}
      //     style={[styles.icon, {tintColor: tintColor}]}
      //   />
      // ),
    };

    state = {
      mobiles: {
        name: {
          value: "",
          valid: false,
          touched: false,
          placeholder: "Mobile name",
          validationRules: {
            notEmpty: true
          }
        },
        description: {
          value: "",
          valid: false,
          touched: false,
          placeholder: "Mobile description",
          validationRules: {
            notEmpty: true
          }
        },
        model: {
          value: "",
          valid: false,
          touched: false,
          placeholder: "Mobile model",
          validationRules: {
            notEmpty: true
          }
        }
      }
    };

    mobileNameChangedHandler = val => {
      this.setState(prevState => {
        return {
          mobiles: {
            ...prevState.mobiles,
            name: {
              ...prevState.mobiles.name,
              value: val,
              valid: validate(val, prevState.mobiles.name.validationRules),
              touched: true
            }
          }
        };
      });
    };

    mobileDescriptionChangedHandler = val => {
      this.setState(prevState => {
        return {
          mobiles: {
            ...prevState.mobiles,
            description: {
              ...prevState.mobiles.description,
              value: val,
              valid: validate(val, prevState.mobiles.description.validationRules),
              touched: true
            }
          }
        };
      });
    };

    mobileModelChangedHandler = val => {
      this.setState(prevState => {
        return {
          mobiles: {
            ...prevState.mobiles,
            model: {
              ...prevState.mobiles.model,
              value: val,
              valid: validate(val, prevState.mobiles.model.validationRules),
              touched: true
            }
          }
        };
      });
    };

    mobileAddedHandler = () => {
      if (this.state.mobiles.name.value.trim() !== ""  && this.state.mobiles.description.value.trim() !== "" && this.state.mobiles.model.value.trim() !== "") {
        this.props.addMobile(this.state.mobiles.name.value, this.state.mobiles.description.value, this.state.mobiles.model.value);
        ToastAndroid.show('New mobile added', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
      } else {
        ToastAndroid.show('Please enter required fields!', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
      }
    };

    render() {
      return (
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.mainText}>
              <Text style={styles.textHeading}>Add mobile</Text>
            </View>
            <MobileInput
              style={styles.mobileInputField}
              mobileData={this.state.mobiles.name}
              onChangeText={this.mobileNameChangedHandler}
            />
            <MobileInput
              style={styles.mobileInputField}
              mobileData={this.state.mobiles.description}
              onChangeText={this.mobileDescriptionChangedHandler}
            />
            <MobileInput
              style={styles.mobileInputField}
              mobileData={this.state.mobiles.model}
              onChangeText={this.mobileModelChangedHandler}
            />
            <View style={styles.button}>
              <Button
                title="Add mobile"
                onPress={this.mobileAddedHandler}
                disabled={this.state.mobiles.name.valid === false || this.state.mobiles.description.valid === false || this.state.mobiles.model.valid === false}
              />
            </View>
          </View>
        </ScrollView>
      );
    }
  }

mapDispatchToProps = (dispatch) => {
    return {
      addMobile: (name, description, model) => dispatch(addMobile(name, description, model)),
      // setMobilePropertyInReducer: (name, value) => dispatch(setMobilePropertyInReducer(name, value)),
    };
}

export default connect(null, mapDispatchToProps)(AddMobile);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  textHeading: {
    fontSize: 28,
    fontWeight: "bold",
  },
  mainText: {
    color: "black",
    backgroundColor: "transparent",
    padding: 5,
    justifyContent: 'center'
  },
  button: {
    margin: 8
  },
})