import React, { FC, useState } from 'react';
import { Input, Button } from '@material-ui/core/';

import { ActionType } from '@app/types/actionTypes';
import { useDispatch } from 'react-redux';

const NewTask: FC = () => {
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState('');

  const updateInput = (): void => {
    setNewTask('');
  };

  const addTask = (event: React.FormEvent<HTMLFormElement>): void => {
    if (newTask.trim().length > 0) {
      event.preventDefault();
      dispatch({ type: ActionType.ADD, payload: newTask });
      updateInput();
    } else {
      alert('Please enter the correct task name');
    }
  };

  const changeTask = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setNewTask(event.target.value);
  };

  const deleteAllTasks = (): void => {
    dispatch({ type: ActionType.DELETE_ALL });
  };

  return (
    <form onSubmit={addTask}>
      <Input type="text" onChange={changeTask} value={newTask} color="primary" placeholder="Add your task..." />
      <Button type="submit" color="primary" variant="contained">
        Add a task
      </Button>
      <Button type="reset" color="secondary" variant="contained" onClick={() => deleteAllTasks()}>
        Remove ALL
      </Button>
    </form>
  );
};

export default NewTask;
