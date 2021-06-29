import React from "react";
import { Text, View, StyleSheet } from "react-native";

const FloatingButton = ({}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>+</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 20,
    right: 20,
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontWeight: "bold",
    color: "white",
    fontSize: 35
  }
});

export default FloatingButton;
