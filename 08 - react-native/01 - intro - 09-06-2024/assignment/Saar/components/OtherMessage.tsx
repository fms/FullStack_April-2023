import { View, Text, StyleSheet ,ScrollView } from "react-native";
import React from "react";

interface OtherMessageProps {
  message: string;
}

const OtherMessage = ({ message }: OtherMessageProps) => {
  return (
    <View style={style.wrapper}>
      <View style={style.textWrapper}>
        <Text>{message}</Text>
        <Text style={style.time}>2:18 PM</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "flex-start",
    paddingHorizontal: 15,
  },
  textWrapper: {
    maxHeight: 500,
    width: "85%",
    backgroundColor: "white",
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    padding: 20,
  },
  time: {
    textAlign: "right",
    color: "#535353",
  },
});

export default OtherMessage;
