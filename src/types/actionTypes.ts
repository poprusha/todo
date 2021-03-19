import { Todo } from '@app/types/tasksTypes';

export enum ActionType {
  ADD = 'ADD',
  REMOVE = 'REMOVE',
  TOGGLE = 'TOGGLE',
  EDIT = 'EDIT',
}

export type ActionStringPayload = {
  type: ActionType.ADD;
  payload: string;
};

export type ActionObjectPayload = {
  type: ActionType.REMOVE | ActionType.TOGGLE | ActionType.EDIT;
  payload: Todo;
};

export type Action = ActionStringPayload | ActionObjectPayload;
