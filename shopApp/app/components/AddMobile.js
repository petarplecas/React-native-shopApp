import React from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, ToastAndroid } from 'react-native';
import { FormInput, Button } from 'react-native-elements';
import { addMobile, setMobilePropertyInReducer } from '../actions/mobileAction';

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
    // constructor() {
    //   super();
    //   this.state = {
    //   };

    //   // this.submitForm = this.submitForm.bind(this);
    // }

    handleTextChange = (name, value) => {
      this.props.setMobilePropertyInReducer(name, value);
    }

    submitForm = () => {
      if (this.props.mobile.name &&
          this.props.mobile.description &&
          this.props.mobile.model) {
            this.props.addMobile(this.props.mobile);
            // this.handleTextChange(name, ''),
            // this.handleTextChange(description, ''),
            // this.handleTextChange(model, '')
    }
    else {
        ToastAndroid.show('Please enter required fields!', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
    }

    console.log(this.props.mobiles)
  }
  
    render() {
      const { mobile } = this.props;
      let content;
      content =
      <View style={{ marginLeft: 20, marginRight: 20, marginTop: 10 }}>
        <FormInput inputStyle={styles.inputFieldsForm} defaultValue={mobile.name} onChangeText={(text) => this.handleTextChange('name', text)} placeholder="Name" />
        <FormInput inputStyle={styles.inputFieldsForm} defaultValue={mobile.description} onChangeText={(text) => this.handleTextChange('description', text)} placeholder="Description" />
        <FormInput inputStyle={styles.inputFieldsForm} defaultValue={mobile.model} onChangeText={(text) => this.handleTextChange('model', text)} placeholder="Model" />
        <Button
          title="Add"
          onPress={this.submitForm}
        />
    </View>
      return (
        <View>
          <Button
            onPress={() => this.props.navigation.goBack()}
            title="Go back home from Add"
          />
          {content}
        </View>
      );
    }
  }
mapStateToProps = (state) => {
    return {
      mobile: state.mobileReducer.mobile,
      mobiles: state.mobileReducer.mobiles
    };
  }

mapDispatchToProps = (dispatch) => {
    return {
      addMobile: (mobile) => dispatch(addMobile(mobile)),
      setMobilePropertyInReducer: (name, value) => dispatch(setMobilePropertyInReducer(name, value)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddMobile);

const styles = StyleSheet.create({
  inputFieldsForm: {
    width: 290,
    paddingLeft: 15,
    height: 40,
    borderColor: "#d3d3d3",
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10
  }
})