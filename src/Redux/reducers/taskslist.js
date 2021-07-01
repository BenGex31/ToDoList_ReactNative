import { ADD_TASK } from "../actionsType";
const defaultState = [
  { id: 1, title: "Nouvelle tâche reducer", completed: false }
];

export const taskslist = (state = defaultState, action) => {
  // action = {type: NOM_ACTION, payload}
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload];
    default:
      return state;
  }
};
