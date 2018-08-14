import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, CardItem, TextField, Button } from "./common";
import { emailChanged, passwordChanged } from "../actions";

class LoginForm extends Component {
  constructor() {
    super();
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  render() {
    return (
      <Card>
        <CardItem>
          <TextField
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange}
            value={this.props.email}
          />
        </CardItem>
        <CardItem>
          <TextField
            label="Password"
            placeholder="password"
            secureTextEntry
            onChangeText={this.onPasswordChange}
            value={this.props.password}
          />
        </CardItem>
        <CardItem>
          <Button>Login</Button>
        </CardItem>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  email: state.auth.email,
  password: state.auth.password
});

export default connect(
  mapStateToProps,
  { emailChanged, passwordChanged }
)(LoginForm);
