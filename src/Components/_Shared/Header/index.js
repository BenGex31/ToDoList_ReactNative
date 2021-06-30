import React from "react";
import { View, Text, StyleSheet } from "react-native";
import moment from "moment";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{moment().format("dddd, D MMM")}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 30
  },
  title: {
    fontSize: 25,
    fontWeight: "bold"
  }
});
