import React, { useState } from "react";
import { View } from "react-native";
import TaskForm from "./taskForm";
import TasksList from "./TasksList";

function TaskContainer(props) {
  const [tasks, setTasks] = useState([
    { id: new Date().getTime(), title: "Nouvelle tâche", completed: false }
  ]);

  const onAddTask = (title) => {
    const newtask = {
      id: new Date().getTime(),
      title: title,
      completed: false
    };
    setTasks([newtask, ...tasks]);
  };

  const onChangeStatus = (id) => {
    let newTasks = [];
    tasks.forEach((task) => {
      if (task.id === id) {
        newTasks.push({
          id: id,
          title: task.title,
          completed: !task.completed
        });
      }
      newTasks.push(task);
    });
    setTasks(newTasks);
  };

  return (
    <View>
      <TaskForm onAddTask={onAddTask} />
      <TasksList tasks={tasks} onChangeStatus={onChangeStatus} />
    </View>
  );
}

export default TaskContainer;
