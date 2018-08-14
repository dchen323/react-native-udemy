import React, { Component } from "react";
import { Card, CardItem, TextField, Button } from "./common";

export default class LoginForm extends Component {
  render() {
    return (
      <Card>
        <CardItem>
          <TextField label="Email" placeholder="email@gmail.com" />
        </CardItem>
        <CardItem>
          <TextField label="Password" placeholder="password" secureTextEntry />
        </CardItem>
        <CardItem>
          <Button>Login</Button>
        </CardItem>
      </Card>
    );
  }
}
