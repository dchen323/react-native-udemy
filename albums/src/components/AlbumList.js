import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import axios from "axios";
import AlbumDetail from "./AlbumDetail";

class AlbumList extends Component {
  constructor() {
    super();
    this.state = { albums: [] };
  }

  componentDidMount() {
    axios
      .get("https://rallycoding.herokuapp.com/api/music_albums")
      .then(res => this.setState({ albums: res.data }));
  }

  render() {
    const albums = this.state.albums.map(album => (
      <AlbumDetail key={album.title} album={album} />
    ));
    return <ScrollView>{albums}</ScrollView>;
  }
}

export default AlbumList;
