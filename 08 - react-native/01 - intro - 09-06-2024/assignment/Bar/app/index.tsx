import TextInputBox from "@/components/TextInputBox/TextInputBox";
import FirstText from "@/components/body/FirstText";
import SecondText from "@/components/body/SecondText";
import Header from "@/components/header/Header";
import { View, StyleSheet, ScrollView } from "react-native";

export default function Index() {
  return (
    <View style={style.container}>
      <ScrollView>
        <Header></Header>
        <FirstText></FirstText>
        <SecondText></SecondText>
      </ScrollView>
      <TextInputBox></TextInputBox>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "#EFEFEF",
    flex: 0,
    justifyContent: "space-between",
  }
})