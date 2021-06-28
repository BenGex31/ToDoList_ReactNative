import React from "react";
import { SafeAreaView, StyleSheet, Platform } from "react-native";
import TaskContainer from "./Components/TasksEpic/TaskContainer";
import Header from "./Components/_Shared/Header/index";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <TaskContainer />
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
