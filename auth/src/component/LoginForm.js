import React, { Component } from "react";
import firebase from "firebase";
import { Text } from "react-native";
import { Button, Card, CardItem, TextField } from "./common";

export default class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      error: ""
    };
  }

  onButtonPress() {
    const { email, password } = this.state;
    this.setState({ error: "" });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .catch(() => {
            this.setState({ error: "Authentication Failed" });
          });
      });
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
        <Text style={styles.errorTextStyle}>{this.state.error}</Text>
        <CardItem>
          <Button onPress={this.onButtonPress.bind(this)}>Log In</Button>
        </CardItem>
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
