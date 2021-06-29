import React from "react";
import { View, StyleSheet } from "react-native";
import Counter from "../_Shared/Counter";

const CountersContainer = ({ nbTasks, nbTasksCompleted }) => {
  return (
    <View style={styles.container}>
      <View>
        <Counter nb={nbTasks} title={"Tâches créées"} />
      </View>
      <View style={{ textAlign: "right" }}>
        <Counter nb={nbTasksCompleted()} title={"Tâches terminées"} />
      </View>
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
