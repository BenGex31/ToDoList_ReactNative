import React from "react";
import { View, Text } from "react-native";

const TaskTile = ({ title }) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};
export default TaskTile;
