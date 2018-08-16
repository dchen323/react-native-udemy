import React from "react";
import { Scene, Router } from "react-native-router-flux";
import LoginForm from "./components/LoginForm";

export default () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="login" component={LoginForm} title="Please Login" />
      </Scene>
    </Router>
  );
};
