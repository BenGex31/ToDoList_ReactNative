import React from "react";
import { FlatList } from "react-native";
import TaskTile from "./TaskTile";

const TasksList = ({ tasks, onChangeStatus }) => {
  const _renderItem = ({ item }) => (
    <TaskTile
      id={item.id}
      title={item.title}
      onChangeStatus={onChangeStatus}
    ></TaskTile>
  );
  return (
    <FlatList
      data={tasks}
      renderItem={_renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default TasksList;
