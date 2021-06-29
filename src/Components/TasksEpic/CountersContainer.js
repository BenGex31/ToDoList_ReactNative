import React from "react";
import { View, StyleSheet } from "react-native";
import Counter from "../_Shared/Counter";

const CountersContainer = ({ nbTasks, nbTasksCompleted }) => {
  return (
    <View style={styles.container}>
      <Counter nb={nbTasks} title={"Tâches créées"} />
      <Counter nbTasksCompleted={nbTasksCompleted} title={"Tâches terminées"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15
  }
});

export default CountersContainer;
