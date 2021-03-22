import React, { FC, useState } from 'react';
import { Input, Button } from '@material-ui/core/';

import { ActionType } from '@app/types/actionTypes';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '@app/types/tasksTypes';
import { setStorage } from '../../services/storageHelper';

const NewTask: FC = () => {
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState('');
  const state: AppState = useSelector((state: AppState) => state);

  const updateInput = (): void => {
    setNewTask('');
  };

  const addTask = (event: React.FormEvent<HTMLFormElement>): void => {
    if (newTask.length > 0) {
      event.preventDefault();
      dispatch({ type: ActionType.ADD, payload: newTask });
      updateInput();
    }
  };

  const changeTask = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setNewTask(event.target.value);
  };

  const deleteAllTasks = (): void => {
    dispatch({ type: ActionType.DELETE_ALL });
  };

  const saveTasksHandler = (): void => {
    setStorage(state.todos);
  };

  return (
    <form onSubmit={addTask}>
      <Input type="text" onChange={changeTask} value={newTask} color="primary" placeholder="Add your task..." />
      <Button type="submit" color="primary" variant="contained">
        Add a task
      </Button>
      <Button type="button" color="primary" variant="contained" onClick={saveTasksHandler}>
        Save a tasks
      </Button>
      <Button type="reset" color="secondary" variant="contained" onClick={() => deleteAllTasks()}>
        Remove ALL
      </Button>
    </form>
  );
};

export default NewTask;
