import React from "react";
import { View, Text, Image } from "react-native";
import Card from "./Card";
import CardItem from "./CardItem";

const AlbumDetail = props => {
  const { album } = props;
  const {
    thumbnailStyle,
    thumbnailContainerStyle,
    headerContentStyle,
    titleStyle,
    imageStyle
  } = styles;
  return (
    <Card>
      <CardItem>
        <View style={thumbnailContainerStyle}>
          <Image
            source={{ uri: album.thumbnail_image }}
            style={thumbnailStyle}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={titleStyle}>{album.title}</Text>
          <Text>{album.artist}</Text>
        </View>
      </CardItem>
      <CardItem>
        <Image source={{ uri: album.image }} style={imageStyle} />
      </CardItem>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around"
  },
  titleStyle: {
    fontSize: 18
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10
  }
};

export default AlbumDetail;
