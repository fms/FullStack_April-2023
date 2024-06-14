import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";

const InputText = () => {
  return (
    <View style={style.wrapper}>
    <View style={style.container}>
      <TextInput style={style.textInput} placeholder="Type here..."></TextInput>
      <TouchableOpacity style={style.emojiButton}></TouchableOpacity>
    </View>
    </View>
  );
};

const style = StyleSheet.create({
wrapper:{
    marginHorizontal:"auto"
},
  container: {
    position: "static",
    top: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    paddingHorizontal: 30,
    backgroundColor: "white",
    paddingVertical: 25,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    marginBottom: 20,
  },
  emojiButton: {
    backgroundColor: "#D3D3D3",
    borderRadius: 50,
    width: 30,
    height: 30,
  },
  textInput:{
    textAlign:"left",
  }
});

export default InputText;
