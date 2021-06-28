import React from "react";
import { View, SafeAreaView, StyleSheet, Platform } from "react-native";
import Header from "./Components/_Shared/Header/index";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? 25 : 0,
    paddingLeft: 20,
    paddingRight: 20
  }
});
