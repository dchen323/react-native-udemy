import React from "react";
import { Text } from "react-native";
import Card from "./Card";
import CardItem from "./CardItem";

const AlbumDetail = props => {
  const { album } = props;
  return (
    <Card>
      <CardItem>
        <Text>{album.title}</Text>
      </CardItem>
    </Card>
  );
};

export default AlbumDetail;
