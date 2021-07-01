import { ADD_TASKS } from "./actionsType";

// action = {type: NOM_ACTION, payload: data}
export const addTask = (title) => ({
  type: ADD_TASKS,
  payload: {
    id: new Date().getTime(),
    title: title,
    completed: false
  }
});
