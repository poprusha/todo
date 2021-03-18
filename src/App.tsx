import React, { FC, useReducer } from "react";
import TasksList from "@app/components/TasksList";
import NewTask from "@app/components/NewTask";
import { State } from "@app/types/stateTypes";
import { ContextState } from "@app/types/stateTypes";
import { Action } from "@app/types/actionTypes";
import { taskReducer } from "@app/reducers/taskReducer";

export const initialState: State = {
  newTask: "",
  tasks: [
    {
      name: "Hello",
      isEdited: false,
      isDone: false,
    },
  ],
};

export const ContextApp = React.createContext<Partial<ContextState>>({});

const App: FC = () => {
  const [state, changeState] = useReducer<React.Reducer<State, Action>>(taskReducer, initialState);

  const ContextState: ContextState = {
    state,
    changeState,
  };

  return (
    <>
      <ContextApp.Provider value={ContextState}>
        <NewTask />
        <TasksList />
      </ContextApp.Provider>
    </>
  );
};

export default App;
