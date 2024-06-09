import { Text, View, Image, Button, StyleSheet } from "react-native";
import Logo from "@/assets/images/react-logo.png";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center", // align-items
      }}
    >
      <View style={styles.viewBorder}>
        <View style={{ flexDirection: "row" }}>
          <Image
            style={{
              width: 100,
              height: 100,
            }}
            source={require("@/assets/images/react-logo.png")}
          />
          <Image
            style={{
              width: 100,
              height: 100,
            }}
            source={Logo}
          />
          <Image
            style={{
              width: 100,
              height: 100,
            }}
            source={{ uri: "https://th.bing.com/th/id/OIP.dTDWpU3Z7aUxgX3qHeaTpQAAAA?w=145&h=107&c=7&r=0&o=5&dpr=1.3&pid=1.7" }}
          />
        </View>

        <Button title="Add data" />
        <Text style={styles.textColor}>This is some text inside the tag</Text>
        <Text style={styles.textColor}>Edit app/index.tsx to edit this screen.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textColor: {
    color: "red",
  },
  viewBorder: {
    borderColor: "black",
    borderStyle: "dashed",
    borderWidth: 1,
  },
});
