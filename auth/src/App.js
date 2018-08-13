import React, { Component } from "react";
import { View, Text } from "react-native";
import { Header, Button, Spinner, Card } from "./component/common";
import firebase from "firebase";
import secret from "./config/secret";
import LoginForm from "./component/LoginForm";

export default class App extends Component {
  constructor() {
    super();
    this.state = { loggedIn: null };
  }

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

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    if (this.state.loggedIn) {
      return <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>;
    } else if (this.state.loggedIn === null) {
      return <Spinner size="large" />;
    } else {
      return <LoginForm />;
    }
  }

  render() {
    let loggedIn;

    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}
