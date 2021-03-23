import { Action, ActionType } from '@app/types/actionTypes';
import { Todo } from '@app/types/tasksTypes';
import { v4 } from 'uuid';
import { formatDate } from '../../services/dateHelper';
import { getStorage } from '../../services/storageHelper';

let initialState: Todo[];

!(function setInitialState(): Todo[] {
  const checkLocalStorage = getStorage();
  if (checkLocalStorage) {
    initialState = JSON.parse(checkLocalStorage);
  } else {
    initialState = [];
  }

  return initialState;
})();

const sortTasks = (todos: Todo[]): Todo[] =>
  todos.sort((todo1, todo2) => (new Date(todo1.date) > new Date(todo2.date) ? -1 : 1));

export const taskReducer = (todos: Todo[] = initialState, action: Action): Todo[] => {
  switch (action.type) {
    case ActionType.ADD: {
      return [
        {
          id: v4(),
          name: action.payload,
          isDone: false,
          isEdit: false,
          date: formatDate(new Date()),
        },
        ...todos,
      ];
    }
    case ActionType.REMOVE: {
      return [...todos.filter((task) => task.id !== action.payload.id)];
    }
    case ActionType.EDIT: {
      return [
        ...todos.map((task) =>
          task.id !== action.payload.id ? task : { ...task, isEdit: !task.isEdit, date: formatDate(new Date()) }
        ),
      ];
    }
    case ActionType.UPDATE: {
      return sortTasks(todos);
    }
    case ActionType.TOGGLE: {
      return [...todos.map((task) => (task.id !== action.payload.id ? task : { ...task, isDone: !task.isDone }))];
    }
    case ActionType.CHANGE_NAME: {
      return [...todos.map((task) => (task.id !== action.payload.id ? task : { ...task, name: action.payload.name }))];
    }
    case ActionType.DELETE_ALL: {
      return (todos = []);
    }
    default:
      return todos;
  }
};
