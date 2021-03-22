import { taskReducer } from '@app/reducers/taskReducer';
import { Action, ActionType } from '@app/types/actionTypes';
import { Todo } from '@app/types/tasksTypes';
import { formatDate } from '../../services/dateHelper';

describe('Reducer should: ', () => {
  const initialState = [
    {
      id: '1',
      name: 'Make...',
      isDone: false,
      isEdit: false,
      date: formatDate(new Date()),
    },
    {
      id: '2',
      name: 'Make task',
      isDone: false,
      isEdit: false,
      date: formatDate(new Date()),
    },
  ];
  const todo: Todo = {
    id: '1',
    name: 'Make...',
    isDone: false,
    isEdit: false,
    date: formatDate(new Date()),
  };

  it('edit task', () => {
    const action: Action = {
      type: ActionType.EDIT,
      payload: todo,
    };

    expect(taskReducer(initialState, action).find((el) => el.id === initialState[0].id)).toMatchObject({
      ...todo,
      isEdit: true,
    });
  });
  it('complete task', () => {
    const action: Action = {
      type: ActionType.TOGGLE,
      payload: todo,
    };

    expect(taskReducer(initialState, action).find((el) => el.id === initialState[0].id)).toMatchObject({
      ...todo,
      isDone: true,
    });
  });
  it('change task name', () => {
    const task = { ...todo };
    task.name = 'done';
    const action: Action = {
      type: ActionType.CHANGE_NAME,
      payload: task,
    };

    expect(taskReducer(initialState, action).find((el) => el.id === initialState[0].id)).toMatchObject({
      ...todo,
      name: 'done',
    });
  });
  it('remove task', () => {
    const action: Action = {
      type: ActionType.REMOVE,
      payload: todo,
    };

    expect(taskReducer(initialState, action).length).toEqual(initialState.length - 1);
  });
  it('remove all tasks', () => {
    const action: Action = {
      type: ActionType.DELETE_ALL,
      payload: todo,
    };

    expect(taskReducer(initialState, action).length).toEqual(0);
  });
});
