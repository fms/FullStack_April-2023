import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React from "react";

interface MessageProps {
  message: any;
}

function Message({ message }: MessageProps) {
  return (
    <Pressable style={styles.messageItem} android_ripple={{color: '#777'}}>
      <Image source={message.image} style={styles.profilePicture} />
      <View style={styles.messageContent}>
        <Text style={styles.name}>{message.name}</Text>
        <Text style={styles.message}>{message.message}</Text>
      </View>
      <View style={styles.messageTime}>
        <Text style={styles.time}>{message.time}</Text>
        {message.seen ? (
          <Image source={require("../assets/images/galochka.jpg")} style={styles.seenIcon} />
        ) : (
          <View style={[styles.seenIcon, { backgroundColor: "#7c4dff" }]}>
            <Text style={styles.seenText}>{message.seen ? "" : 1}</Text>
          </View>
        )}
      </View>
    </Pressable>
  );
}

export default Message;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0f2f1",
    borderRadius: 30,
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  editButton: {
    padding: 10,
  },
  editIcon: {
    width: 20,
    height: 20,
    tintColor: "#000",
  },
  searchInput: {
    backgroundColor: "#fff",
    padding: 15,
    margin: 20,
    borderRadius: 15,
  },
  messagesList: {
    flex: 1,
    padding: 10,
  },
  messageItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
    borderRadius: 15,
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  messageContent: {
    flex: 1,
    marginLeft: 15,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  message: {
    fontSize: 14,
    color: "#000",
  },
  messageTime: {
    flexDirection: "row",
    alignItems: "center",
  },
  time: {
    fontSize: 12,
    color: "#808080",
  },
  seenIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },
  seenText: {
    fontSize: 10,
    color: "#fff",
  },
  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#000",
  },
  bottomBarItem: {
    padding: 10,
  },
  bottomBarIcon: {
    width: 25,
    height: 25,
    tintColor: "#fff",
  },
});
