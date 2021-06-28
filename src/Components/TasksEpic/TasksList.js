import React from "react";
import { FlatList, Text } from "react-native";

const TasksList = ({ tasks }) => {
  const _renderItem = ({ item }) => <Text>{item.title}</Text>;
  return (
    <FlatList
      data={tasks}
      renderItem={_renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default TasksList;
