import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";

const TaskForm = ({}) => {
  const [title, setTitle] = useState("");
  const _onChangeText = (value) => {
    setTitle(value);
  };
  const _onPressBtn = () => {};
  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <TextInput value={title} onChangeText={_onChangeText} />
      </View>
      <Button onPress={_onPressBtn} title="Ajouter" color="#841584" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15
  },
  containerInput: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 4,
    paddingLeft: 7,
    width: "70%"
  }
});

export default TaskForm;
