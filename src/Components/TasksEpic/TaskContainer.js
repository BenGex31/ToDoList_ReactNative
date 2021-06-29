import React, { useState } from "react";
import { View } from "react-native";
import CountersContainer from "./CountersContainer";
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
      } else {
        newTasks.push(task);
      }
    });
    setTasks(newTasks);
  };

  const onDeletetask = (id) => {
    let newTasks = [];
    tasks.forEach((task) => {
      if (task.id !== id) {
        newTasks.push(task);
      }
    });
    setTasks(newTasks);
  };

  const getTasksCompleted = () => {
    let counter = 0;
    tasks.forEach((task) => {
      if (task.completed === true) {
        counter++;
      }
    });
    return counter;
  };

  return (
    <View>
      <TaskForm onAddTask={onAddTask} />
      <CountersContainer
        nbTasks={tasks.length}
        nbTasksCompleted={() => getTasksCompleted()}
      />
      <TasksList
        tasks={tasks}
        onChangeStatus={onChangeStatus}
        onDeletetask={onDeletetask}
      />
    </View>
  );
}

export default TaskContainer;
