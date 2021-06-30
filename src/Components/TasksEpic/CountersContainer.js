import React from "react";
import { View, StyleSheet } from "react-native";
import Counter from "../_Shared/Counter";

const CountersContainer = ({
  nbTasks,
  nbTasksCompleted,
  titleTask,
  titleTaskCompleted
}) => {
  return (
    <View style={styles.container}>
      <View>
        <Counter nb={nbTasks} title={titleTask} />
      </View>
      <View style={{ textAlign: "right" }}>
        <Counter nb={nbTasksCompleted()} title={titleTaskCompleted} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
    marginTop: 15
  }
});

export default CountersContainer;
