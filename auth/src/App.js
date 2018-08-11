import React, { Component } from "react";
import { View, Text } from "react-native";
import { Header } from "./component/common";
import firebase from "firebase";
import secret from "./config/secret";
import LoginForm from "./component/LoginForm";

export default class App extends Component {
  componentDidMount() {
    const {
      apiKey,
      authDomain,
      databaseURL,
      storageBucket,
      messagingSenderId
    } = secret;
    firebase.initializeApp({
      apiKey,
      authDomain,
      databaseURL,
      storageBucket,
      messagingSenderId
    });
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}
