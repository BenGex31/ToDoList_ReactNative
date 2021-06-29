import React, { useState } from "react";
import { View, Text } from "react-native";
import TaskForm from "./taskForm";
import TasksList from "./TasksList";

function TaskContainer(props) {
  const [tasks, setTasks] = useState([
    { title: "Nouvelle tâche", completed: false }
  ]);

  const onAddTask = (title) => {
    const newtask = { title: title, completed: false };
    setTasks([newtask, ...tasks]);
  };

  return (
    <View>
      <TaskForm onAddTask={onAddTask} />
      <TasksList tasks={tasks} />
    </View>
  );
}

export default TaskContainer;
