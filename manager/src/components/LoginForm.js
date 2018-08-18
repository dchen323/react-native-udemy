import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { Card, CardItem, TextField, Button, Spinner } from "./common";
import {
  emailChanged,
  passwordChanged,
  loginUser
} from "../actions/AuthActions";

class LoginForm extends Component {
  constructor() {
    super();
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.renderError = this.renderError.bind(this);
    this.renderLoading = this.renderLoading.bind(this);
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  login() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }

  renderError() {
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: "white" }}>
          <Text style={styles.errorTextStyle}>{this.props.error}</Text>
        </View>
      );
    }
  }

  renderLoading() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    } else {
      return <Button onPress={this.login.bind(this)}>Login</Button>;
    }
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
        {this.renderError()}
        <CardItem>{this.renderLoading()}</CardItem>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: "center",
    color: "red"
  }
};

const mapStateToProps = state => ({
  email: state.auth.email,
  password: state.auth.password,
  error: state.auth.error,
  loading: state.auth.loading
});

export default connect(
  mapStateToProps,
  { emailChanged, passwordChanged, loginUser }
)(LoginForm);
