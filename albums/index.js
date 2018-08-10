//Index.ios.js-code for IOS
import React from "react";
import { AppRegistry, Text, View } from "react-native";
import Header from "./src/components/Header";
import AlbumList from "./src/components/AlbumList";

const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={"Albums"} />
    <AlbumList />
  </View>
);

//Render to device
AppRegistry.registerComponent("albums", () => App);
