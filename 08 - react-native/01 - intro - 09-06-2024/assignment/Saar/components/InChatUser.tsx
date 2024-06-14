import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

function InChatUser() {
  return (
    <View style={style.container}>
      <View style={style.leftContainer}>
        <Image source={require("@/assets/images/react-logo.png")} />
        <View style={style.textContainer}>
          <Text style={style.userFullName}>Saar Israeli</Text>
          <Text style={style.status}>Online</Text>
        </View>
      </View>
      <TouchableOpacity style={style.ringButton}></TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex:0,
    position:"static",
    top:0,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    width:"100%",
    paddingHorizontal:30,
    backgroundColor:"white",
    paddingVertical:25,
    borderBottomLeftRadius:40,
    borderBottomEndRadius:40,
    },
  leftContainer: {
    flexDirection:"row",
  },
  userFullName: {},
  status: {
    color: "green",
  },
  textContainer:{
    justifyContent: "center",
    alignItems: "flex-start",
    marginLeft:2,
  },
  ringButton: {
    backgroundColor: "#D3D3D3",
    borderRadius: 10,
    width: 50,
    height: 50,
  },
});

export default InChatUser;
