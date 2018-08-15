import React, { Component } from "react";
import { View, Text } from "react-native";
import ReduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import firebase from "firebase";
import secret from "./config/secret";
import LoginForm from "./components/LoginForm";

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
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <LoginForm />
      </Provider>
    );
  }
}
