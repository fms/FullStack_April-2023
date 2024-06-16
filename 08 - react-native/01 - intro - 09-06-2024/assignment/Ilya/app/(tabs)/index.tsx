import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React from 'react';
import MessagesPage from '@/components/pages/MessagesPage';

const index = () => {
  return (
    <View style={styles.container}>
    <MessagesPage />
  </View>
);
};

const styles = StyleSheet.create({
container: {
  flex: 1,
},
});



export default index;