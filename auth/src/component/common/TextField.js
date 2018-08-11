import React from "react";
import { TextInput, View, Text } from "react-native";

export const TextField = props => {
  const { label, value, onChangeText, placeholder } = props;
  const { inputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={inputStyle}
        placeholder={placeholder}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: "#000",
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2.5
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 0.5
  },
  containerStyle: {
    hieght: 40,
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  }
};
