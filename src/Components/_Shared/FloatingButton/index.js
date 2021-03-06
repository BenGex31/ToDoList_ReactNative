import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

const FloatingButton = ({ toggleForm, isFormOpened }) => {
  return (
    <TouchableOpacity onPress={toggleForm} style={styles.container}>
      {isFormOpened ? (
        <Text style={styles.title}>x</Text>
      ) : (
        <Text style={styles.title}>+</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 540,
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
