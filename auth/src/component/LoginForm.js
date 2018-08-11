import React, { Component } from "react";
import { Button, Card, CardItem, TextField } from "./common";

export default class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: ""
    };
  }
  render() {
    return (
      <Card>
        <CardItem>
          <TextField
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
            label="Email"
            autoCorrect={false}
            placeholder="user@gmail.com"
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
