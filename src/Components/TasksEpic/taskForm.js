import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";
import { useDispatch } from "react-redux";
import { addTask } from "../../Redux/actions";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const _onChangeText = (value) => {
    setTitle(value);
  };
  const _onPressBtn = () => {
    if (title.length > 0) {
      dispatch(addTask(title));
      setTitle("");
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <TextInput
          value={title}
          onChangeText={_onChangeText}
          placeholder={"Votre tâche"}
        />
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
    marginBottom: 15,
    marginTop: 15
  },
  containerInput: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 4,
    paddingLeft: 2,
    width: "65%",
    height: 33,
    paddingTop: 7
  }
});

export default TaskForm;
