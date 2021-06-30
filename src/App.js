import React from "react";
import { SafeAreaView, StyleSheet, Platform } from "react-native";
import TaskContainer from "./Components/TasksEpic/TaskContainer";
import Header from "./Components/_Shared/Header/index";
import { Provider } from "react-redux";
import store from "./Redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <Header />
        <TaskContainer />
      </SafeAreaView>
    </Provider>
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
