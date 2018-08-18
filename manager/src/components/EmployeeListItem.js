import React from "react";
import { Text } from "react-native";
import { CardItem } from "./common";

export default props => {
  const { name } = props.employee;
  return (
    <CardItem>
      <Text style={styles.titleStyle}>{name}</Text>
    </CardItem>
  );
};

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};
