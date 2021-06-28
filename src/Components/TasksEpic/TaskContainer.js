import React, { useState } from "react";
import { View, Text } from "react-native";

function TaskContainer(props) {
  const [tasks, setTasks] = useState([
    { title: "Nouvelle tâche", completed: false }
  ]);
  return (
    <View>
      <Text>{tasks[0].title}</Text>
    </View>
  );
}

export default TaskContainer;
