import React, { Component } from "react";
import { Text } from "react-native";
import { CardItem } from "./common";

export default class ListItem extends Component {
  render() {
    const { titleStyle } = styles;
    return (
      <CardItem>
        <Text style={titleStyle}>{this.props.library.item.title}</Text>
      </CardItem>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};
