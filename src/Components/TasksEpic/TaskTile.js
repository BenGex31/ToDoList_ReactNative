import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const TaskTile = ({ title }) => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Image
          style={styles.icon}
          source={require("../../assets/icon_check.png")}
        />
        <Text>{title}</Text>
      </View>

      <Image
        style={styles.icon}
        source={require("../../assets/icon_bin.png")}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  subContainer: {
    flexDirection: "row",
    alignItems: "center"
  }
});
export default TaskTile;
