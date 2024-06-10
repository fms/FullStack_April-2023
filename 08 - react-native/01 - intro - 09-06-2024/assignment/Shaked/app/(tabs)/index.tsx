import React from 'react';
import { StyleSheet, View, Text, Button, TextInput, Image } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Messages</Text>
        <Button title='Edit' onPress={() => { }} />
      </View>
      <TextInput style={styles.input} placeholder="Search place..." />
      {[1, 2, 3, 4, 5].map((index) => (
        <View key={index} style={styles.imageContainer}>
          <Image
            source={{ uri: 'https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg' }}
            style={styles.image}
          />
          <Text style={styles.text}>
            <Text style={styles.userName}>Jaydon</Text>
            <Text style={styles.userText}>Hey im not available now</Text>
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  text: {
    fontSize: 24,
    display: "flex",
    flexDirection: "column"
  },
  userName: {
    fontSize: 24,
  },
  userText: {
    fontSize: 17,
  },
  input: {
    height: 60,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginTop: 10,
    borderRadius: 10,
    marginBottom: 30,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginRight: 10,
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'lightgray',
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    marginBottom: 16,
  },
});
