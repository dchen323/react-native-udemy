import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import { CardItem } from "./common";
import * as actions from "../actions";

class ListItem extends Component {
  render() {
    const { title, id } = this.props.library.item;
    const { titleStyle } = styles;
    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardItem>
            <Text style={titleStyle}>{title}</Text>
          </CardItem>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default connect(
  null,
  actions
)(ListItem);
