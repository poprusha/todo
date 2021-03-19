import React, { FC } from 'react';

import { ActionType } from '@app/types/actionTypes';
import { Todo, AppState } from '@app/types/tasksTypes';
import { useDispatch, useSelector } from 'react-redux';

const TasksList: FC = () => {
  const dispatch = useDispatch();
  const state: AppState = useSelector((state: AppState) => state);

  const removeTask = (task: Todo) => {
    dispatch({ type: ActionType.REMOVE, payload: task });
  };

  const toggleTask = (task: Todo) => {
    dispatch({ type: ActionType.TOGGLE, payload: task });
  };

  return (
    <ul>
      {state.todos.map((todo, i) => (
        <li key={i} className={todo.isDone ? 'ready' : ''}>
          <label>
            <input type="checkbox" onChange={() => toggleTask(todo)} checked={todo.isDone} />
          </label>
          <div className="task-name">{todo.name}</div>
          <button className="remove-button" onClick={() => removeTask(todo)}>
            X
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TasksList;
