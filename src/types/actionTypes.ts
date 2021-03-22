import { Todo } from '@app/types/tasksTypes';

export enum ActionType {
  ADD = 'ADD',
  REMOVE = 'REMOVE',
  TOGGLE = 'TOGGLE',
  EDIT = 'EDIT',
  CHANGE_NAME = 'CHANGE_NAME',
  DELETE_ALL = 'DELETE_ALL',
}

export type ActionStringPayload = {
  type: ActionType.ADD;
  payload: string;
};

export type ActionObjectPayload = {
  type: ActionType.REMOVE | ActionType.TOGGLE | ActionType.EDIT | ActionType.CHANGE_NAME | ActionType.DELETE_ALL;
  payload: Todo;
};

export type Action = ActionStringPayload | ActionObjectPayload;
