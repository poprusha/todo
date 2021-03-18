import { State } from "@app/types/stateTypes";
import { Action, ActionType } from "@app/types/actionTypes";

export const taskReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.ADD: {
      if (action.payload.length !== 0) {
        return {
          ...state,
          tasks: [
            ...state.tasks,
            {
              name: action.payload,
              isDone: false,
              isEdited: false,
            },
          ],
        };
      } else {
        return state;
      }
    }
    case ActionType.REMOVE: {
      return {
        ...state,
        tasks: [...state.tasks.filter((task) => task != action.payload)],
      };
    }
    case ActionType.CHANGE: {
      return {
        ...state,
        newTask: action.payload,
      };
    }
    case ActionType.EDIT: {
      return {
        ...state,
        tasks: [...state.tasks.map((task) => (task !== action.payload ? task : { ...task, isEdited: true }))],
      };
    }
    case ActionType.TOGGLE: {
      return {
        ...state,
        tasks: [...state.tasks.map((task) => (task !== action.payload ? task : { ...task, isDone: !task.isDone }))],
      };
    }
    default:
      throw new Error("Unexpected action");
  }
};
