import { Text, View, Image, Button, StyleSheet } from "react-native";

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
        <Image
          style={{
            width: 100,
            height: 100,
          }}
          source={require("@/assets/images/react-logo.png")}
        />
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
