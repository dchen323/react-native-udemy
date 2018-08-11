import React, { Component } from "react";
import { Button, Card, CardItem, TextField } from "./common";

export default class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
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
          <TextField
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
            label="Password"
            autoCorrect={false}
            placeholder="password"
            secureTextEntry
          />
        </CardItem>
        <CardItem>
          <Button>Log In</Button>
        </CardItem>
      </Card>
    );
  }
}
