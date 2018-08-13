import React, { Component } from "react";
import firebase from "firebase";
import { Text } from "react-native";
import { Button, Card, CardItem, TextField, Spinner } from "./common";

export default class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      error: "",
      loading: false
    };
  }

  onButtonPress() {
    const { email, password } = this.state;
    this.setState({ error: "", loading: true });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }

  onLoginSuccess() {
    this.setState({ email: "", password: "", loading: false });
  }

  onLoginFail() {
    this.setState({ error: "Authentication Failed", loading: false });
  }

  render() {
    let loading;
    if (this.state.loading) {
      loading = <Spinner size="small" />;
    } else {
      loading = <Button onPress={this.onButtonPress.bind(this)}>Log In</Button>;
    }

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
        <Text style={styles.errorTextStyle}>{this.state.error}</Text>
        <CardItem>{loading}</CardItem>
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
