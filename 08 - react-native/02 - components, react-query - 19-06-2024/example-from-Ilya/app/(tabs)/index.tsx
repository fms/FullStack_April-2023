import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import React from "react";
import MessagesPage from "@/components/pages/MessagesPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

const index = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <View style={styles.container}>
        <MessagesPage />
      </View>
    </QueryClientProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default index;
