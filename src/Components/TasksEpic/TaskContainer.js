import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import FloatingButton from "../_Shared/FloatingButton";
import CountersContainer from "./CountersContainer";
import TaskForm from "./taskForm";
import TasksList from "./TasksList";
import { useSelector } from "react-redux";
import { getTasks } from "../../Redux/selector";

function TaskContainer(props) {
  const [tasks, setTasks] = useState([]);

  const allTasks = useSelector(getTasks);
  console.log("ALL TASKS", allTasks);

  const [isFormOpened, setIsFormOpened] = useState(false);

  /*const onAddTask = (title) => {
    const newtask = {
      id: new Date().getTime(),
      title: title,
      completed: false
    };
    setTasks([newtask, ...tasks]);
  };*/

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

  const toggleForm = () => {
    setIsFormOpened(!isFormOpened);
  };

  return (
    <View style={styles.container}>
      {isFormOpened && <TaskForm />}
      <CountersContainer
        nbTasks={tasks.length}
        nbTasksCompleted={() => getTasksCompleted()}
        titleTask={tasks.length > 1 ? "Tâches créées" : "Tâche créée"}
        titleTaskCompleted={
          tasks.filter((task) => task.completed === true).length > 1
            ? "Tâches terminées"
            : "Tâche terminée"
        }
      />
      <TasksList
        tasks={tasks}
        onChangeStatus={onChangeStatus}
        onDeletetask={onDeletetask}
      />
      <FloatingButton toggleForm={toggleForm} isFormOpened={isFormOpened} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative"
  }
});

export default TaskContainer;
