import { Dispatch } from "react";
import { Action } from "@app/types/actionTypes";
import { Tasks } from "@app/types/tasksTypes";

export type State = {
  newTask: string;
  tasks: Tasks;
};

export type ContextState = {
  state: State;
  changeState: Dispatch<Action>;
};
