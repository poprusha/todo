import React, { FC, useState } from 'react';

import { ActionType } from '@app/types/actionTypes';
import { useDispatch } from 'react-redux';

const NewTask: FC = () => {
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState('');

  const updateInpute = (): void => {
    setNewTask('');
  };

  const addTask = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    dispatch({ type: ActionType.ADD, payload: newTask });
    updateInpute();
  };

  const changeTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
  };

  return (
    <form onSubmit={addTask}>
      <input type="text" onChange={changeTask} value={newTask} />
      <button type="submit">Add a task</button>
    </form>
  );
};

export default NewTask;
