import React, { useState } from "react";
import { View, Text } from "react-native";
import TaskForm from "./taskForm";
import TasksList from "./TasksList";

function TaskContainer(props) {
  const [tasks, setTasks] = useState([
    { title: "Nouvelle tâche", completed: false }
  ]);
  return (
    <View>
      <TaskForm />
      <TasksList tasks={tasks} />
    </View>
  );
}

export default TaskContainer;
