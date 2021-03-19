import { Action, ActionType } from '@app/types/actionTypes';
import { Todo } from '@app/types/tasksTypes';

export const taskReducer = (todos: Todo[] = [], action: Action): Todo[] => {
  switch (action.type) {
    case ActionType.ADD: {
      return [
        ...todos,
        {
          name: action.payload,
          isDone: false,
          isEdited: false,
        },
      ];
    }
    case ActionType.REMOVE: {
      return [...todos.filter((task) => task != action.payload)];
    }
    case ActionType.EDIT: {
      return [...todos.map((task) => (task !== action.payload ? task : { ...task, isEdited: true }))];
    }
    case ActionType.TOGGLE: {
      return [...todos.map((task) => (task !== action.payload ? task : { ...task, isDone: !task.isDone }))];
    }
    default:
      return todos;
  }
};
