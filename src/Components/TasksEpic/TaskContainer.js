import React, { useState } from "react";
import { View, Text } from "react-native";
import TasksList from "./TasksList";

function TaskContainer(props) {
  const [tasks, setTasks] = useState([
    { title: "Nouvelle tâche", completed: false }
  ]);
  return (
    <View>
      <TasksList tasks={tasks} />
    </View>
  );
}

export default TaskContainer;
