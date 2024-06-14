import { View, Text, StyleSheet ,ScrollView } from "react-native";
import React from "react";

interface MyMessageProps{
    message:string
}

const MyMessage = ({message}:MyMessageProps) => {
  return (
    <View style={style.wrapper}>
      <View style={style.textWrapper}>
        <Text style={style.mainText}>{message}</Text>
        <Text style={style.time}>1:32 PM</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  wrapper: {
    flex:1,
    alignItems:"flex-end",
    paddingHorizontal:15,
  },
  textWrapper: {
    maxHeight: 500,
    width: "85%",
    backgroundColor: "#347AF0",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    padding:20,
  },
  time: {
    textAlign: "right",
    color: "#535353",
  },
  mainText:{
    color:"white",
  }
});

export default MyMessage;
