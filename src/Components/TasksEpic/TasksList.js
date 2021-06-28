import React from "react";
import { FlatList, Text } from "react-native";

const TasksList = ({ tasks }) => {
  return (
    <FlatList
      data={tasks}
      renderItem={({ item }) => <Text>{item.title}</Text>}
      keyExtractor={(item) => item.id}
    />
  );
};

export default TasksList;
