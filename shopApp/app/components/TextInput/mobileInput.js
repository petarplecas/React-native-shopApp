import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

import DefaultInput from "./defaultInput";

const mobileInput = props => (
  <DefaultInput
    placeholder={props.mobileData.placeholder}
    value={props.mobileData.value}
    valid={props.mobileData.valid}
    touched={props.mobileData.touched}
    onChangeText={props.onChangeText}
  />
);

export default mobileInput;