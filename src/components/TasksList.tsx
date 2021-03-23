import React, { FC } from 'react';
import { List } from '@material-ui/core';

import { ActionType } from '@app/types/actionTypes';
import { Todo, AppState } from '@app/types/tasksTypes';
import { useDispatch, useSelector } from 'react-redux';
import TaskItem from '@app/components/TaskItem';

const TasksList: FC = () => {
  const dispatch = useDispatch();
  const state: AppState = useSelector((state: AppState) => state);

  const removeTask = (task: Todo): void => {
    dispatch({ type: ActionType.REMOVE, payload: task });
  };

  const changeEditedTask = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, task: Todo): void => {
    changeNameTask({ ...task, name: event.target.value });
  };

  const changeNameTask = (task: Todo): void => {
    dispatch({ type: ActionType.CHANGE_NAME, payload: task });
  };

  const toggleCompleteTask = (task: Todo): void => {
    dispatch({ type: ActionType.TOGGLE, payload: task });
  };

  const toggleEditTask = (task: Todo): void => {
    if (!task.isDone) {
      dispatch({ type: ActionType.EDIT, payload: task });
      if (task.isEdit) {
        dispatch({ type: ActionType.UPDATE, payload: task });
      }
    } else {
      return;
    }
  };

  return (
    <List>
      {state.todos.map((todo) => (
        <TaskItem
          todo={todo}
          changeEditedTask={changeEditedTask}
          toggleEditTask={toggleEditTask}
          toggleCompleteTask={toggleCompleteTask}
          removeTask={removeTask}
        />
      ))}
    </List>
  );
};

export default TasksList;
