import { Task } from '@app/types/tasksTypes';

export enum ActionType {
  ADD = 'ADD',
  CHANGE = 'CHANGE',
  REMOVE = 'REMOVE',
  TOGGLE = 'TOGGLE',
  EDIT = 'EDIT',
}

export type ActionStringPayload = {
  type: ActionType.ADD | ActionType.CHANGE;
  payload: string;
};

export type ActionObjectPayload = {
  type: ActionType.REMOVE | ActionType.TOGGLE | ActionType.EDIT;
  payload: Task;
};

export type Action = ActionStringPayload | ActionObjectPayload;
