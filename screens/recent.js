import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Recent = () => {
  return (
    <View style={styles.container}>
      <Text>This is Recent</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Recent;
