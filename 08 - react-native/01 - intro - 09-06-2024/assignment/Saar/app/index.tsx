import InChatUser from "@/components/InChatUser";
import InputText from "@/components/InputText";
import MyMessage from "@/components/MyMessage";
import OtherMessage from "@/components/OtherMessage";
import { Text, View , StyleSheet , Image, ScrollView} from "react-native";

export default function Index() {
  return (
    <View style={style.wrapper}>
      <ScrollView contentContainerStyle={style.chatWrapper}>
        <InChatUser/>
        <MyMessage message="My Message" />
        <OtherMessage message="Another Person Message"/>
        <MyMessage message="My Message" />
      </ScrollView>
      <InputText/>
    </View>
  );
}

const style = StyleSheet.create({
  wrapper:{
    flex:1,
    justifyContent:"flex-start",
    alignItems:"flex-start",
    backgroundColor:"#F9F9F9",
    height:"100%",
  },
  chatWrapper:{
    width:"100%",
    gap:50,
    paddingBottom:40,
  },
})
