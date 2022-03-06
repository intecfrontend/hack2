import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ListItem, Avatar } from "react-native-elements";

const CustomListItem = ({id, chatName, enterChat}) => {
  return (
    <ListItem>
      <Avatar
        rounded
        source={{
          uri: "https://connectingcouples.us/wp-content/uavatar-placeholder.pngploads/2019/07/"
        }}
      ></Avatar>
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: "800" }}>
          Youtube Chat
        </ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail" style={{ }}>
        Test Subtitle, Test Subtitle, Test Subtitle, Test Subtitle, Test Subtitle, Test Subtitle, Test Subtitle, Test Subtitle, 
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default CustomListItem;

const styles = StyleSheet.create({});
