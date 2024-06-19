import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Pressable,
  FlatList,
  ActivityIndicator,
} from "react-native";
import Message from "../Message";
import { useQuery } from "@tanstack/react-query";

async function getMessages() {
  await new Promise((res) => setTimeout(res, 2000));

  return [
    {
      name: "Jayden Lavoie",
      message: "Did you pass the psychology ex...",
      time: "7:19 PM",
      image: require("../../assets/images/round_profil_picture_after_.webp"),
      seen: true,
    },
    {
      name: "Avery Patel",
      message: "What are you doing tonight?",
      time: "5:45 PM",
      image: require("../../assets/images/tight.jpg"),
      seen: false,
    },
    {
      name: "Jacob Beaulieu",
      message: "Hi, I'm sorry, I forgot. But it was worth...",
      time: "3:21 PM",
      image: require("../../assets/images/wife-face.jpg"),
      seen: true,
    },
    {
      name: "Rosalie Turner",
      message: "Typing...",
      time: "10:13 AM",
      image: require("../../assets/images/images.jpg"),
      seen: true,
    },
    {
      name: "Hunter Murphy",
      message: "Call Fred, he's waiting.",
      time: "09:58 AM",
      image: require("../../assets/images/round_profil_picture_after_.webp"),
      seen: true,
    },
    {
      name: "Juliette Carter",
      message: "I really miss you. Can we meet...",
      time: "09:34 AM",
      image: require("../../assets/images/icon.png"),
      seen: false,
    },
    {
      name: "Jayden Lavoie",
      message: "Did you pass the psychology ex...",
      time: "7:19 PM",
      image: require("../../assets/images/round_profil_picture_after_.webp"),
      seen: true,
    },
    {
      name: "Avery Patel",
      message: "What are you doing tonight?",
      time: "5:45 PM",
      image: require("../../assets/images/tight.jpg"),
      seen: false,
    },
    {
      name: "Jacob Beaulieu",
      message: "Hi, I'm sorry, I forgot. But it was worth...",
      time: "3:21 PM",
      image: require("../../assets/images/wife-face.jpg"),
      seen: true,
    },
    {
      name: "Rosalie Turner",
      message: "Typing...",
      time: "10:13 AM",
      image: require("../../assets/images/images.jpg"),
      seen: true,
    },
    {
      name: "Hunter Murphy",
      message: "Call Fred, he's waiting.",
      time: "09:58 AM",
      image: require("../../assets/images/round_profil_picture_after_.webp"),
      seen: true,
    },
    {
      name: "Juliette Carter",
      message: "I really miss you. Can we meet...",
      time: "09:34 AM",
      image: require("../../assets/images/icon.png"),
      seen: false,
    },
    {
      name: "Jayden Lavoie",
      message: "Did you pass the psychology ex...",
      time: "7:19 PM",
      image: require("../../assets/images/round_profil_picture_after_.webp"),
      seen: true,
    },
    {
      name: "Avery Patel",
      message: "What are you doing tonight?",
      time: "5:45 PM",
      image: require("../../assets/images/tight.jpg"),
      seen: false,
    },
    {
      name: "Jacob Beaulieu",
      message: "Hi, I'm sorry, I forgot. But it was worth...",
      time: "3:21 PM",
      image: require("../../assets/images/wife-face.jpg"),
      seen: true,
    },
    {
      name: "Rosalie Turner",
      message: "Typing...",
      time: "10:13 AM",
      image: require("../../assets/images/images.jpg"),
      seen: true,
    },
    {
      name: "Hunter Murphy",
      message: "Call Fred, he's waiting.",
      time: "09:58 AM",
      image: require("../../assets/images/round_profil_picture_after_.webp"),
      seen: true,
    },
    {
      name: "Juliette Carter",
      message: "I really miss you. Can we meet...",
      time: "09:34 AM",
      image: require("../../assets/images/icon.png"),
      seen: false,
    },
    {
      name: "Jayden Lavoie",
      message: "Did you pass the psychology ex...",
      time: "7:19 PM",
      image: require("../../assets/images/round_profil_picture_after_.webp"),
      seen: true,
    },
    {
      name: "Avery Patel",
      message: "What are you doing tonight?",
      time: "5:45 PM",
      image: require("../../assets/images/tight.jpg"),
      seen: false,
    },
    {
      name: "Jacob Beaulieu",
      message: "Hi, I'm sorry, I forgot. But it was worth...",
      time: "3:21 PM",
      image: require("../../assets/images/wife-face.jpg"),
      seen: true,
    },
    {
      name: "Rosalie Turner",
      message: "Typing...",
      time: "10:13 AM",
      image: require("../../assets/images/images.jpg"),
      seen: true,
    },
    {
      name: "Hunter Murphy",
      message: "Call Fred, he's waiting.",
      time: "09:58 AM",
      image: require("../../assets/images/round_profil_picture_after_.webp"),
      seen: true,
    },
    {
      name: "Juliette Carter",
      message: "I really miss you. Can we meet...",
      time: "09:34 AM",
      image: require("../../assets/images/icon.png"),
      seen: false,
    },
  ];
}
const MessagesPage = () => {
  const { data: messages, isLoading } = useQuery({ queryKey: ["messages"], queryFn: getMessages });
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Messages</Text>
        <TouchableOpacity style={styles.editButton}>
          <Image source={require("../../assets/images/3820106.png")} style={styles.editIcon} />
        </TouchableOpacity>
      </View>
      <TextInput style={styles.searchInput} placeholder="Search place" />
      {/* <ScrollView style={styles.messagesList}>
        {messages.map((message, index) => (
          <Message message={message} key={`${message.name}${index}`} />
        ))}
      </ScrollView> */}

      {/* <FlatList data={messages} renderItem={(item) => <Message message={item.item} />} /> */}
      {isLoading ? (
        <ActivityIndicator size={"large"} />
      ) : (
        <FlatList
          data={messages}
          renderItem={({ item }) => <Message message={item} />}
          keyExtractor={(item, index) => `${item.name}${index}`}
        />
      )}

      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.bottomBarItem}>
          <Image source={require("../../assets/images/blog_102889.png")} style={styles.bottomBarIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomBarItem}>
          <Image source={require("../../assets/images/adaptive-icon.png")} style={styles.bottomBarIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomBarItem}>
          <Image source={require("../../assets/images/3820106.png")} style={styles.bottomBarIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomBarItem}>
          <Image source={require("../../assets/images/adaptive-icon.png")} style={styles.bottomBarIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

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

export default MessagesPage;
