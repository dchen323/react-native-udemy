import React, { Component } from "react";
import { View, TextInput } from "react-native";
import { Button, Card, CardItem } from "./common";

export default class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      text: ""
    };
  }
  render() {
    return (
      <Card>
        <CardItem>
          <TextInput
            style={{ height: 20, width: 100 }}
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
          />
        </CardItem>
        <CardItem>
          <Button>Log In</Button>
        </CardItem>
        <CardItem>
          <Button>Log In</Button>
        </CardItem>
      </Card>
    );
  }
}
