import React, { FC, useContext } from 'react';
import { ContextApp } from '@app/App';
import { ActionType } from '@app/types/actionTypes';
import { ContextState } from '@app/types/stateTypes';

const NewTask: FC = () => {
  const { state, changeState } = useContext(ContextApp) as ContextState;

  const addTask = (event: React.FormEvent<HTMLFormElement>, task: string) => {
    event.preventDefault();
    changeState({ type: ActionType.ADD, payload: task });
    changeState({ type: ActionType.CHANGE, payload: '' });
  };

  const changeTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    changeState({ type: ActionType.CHANGE, payload: event.target.value });
  };

  return (
    <>
      <form onSubmit={(event) => addTask(event, state.newTask)}>
        <input type="text" onChange={(event) => changeTask(event)} value={state.newTask} />
        <button type="submit">Add a task</button>
      </form>
    </>
  );
};

export default NewTask;
