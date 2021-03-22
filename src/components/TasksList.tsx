import React, { FC } from 'react';
import { List, Button, Checkbox, Input, Card, CardContent, CardActions, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import { ActionType } from '@app/types/actionTypes';
import { Todo, AppState } from '@app/types/tasksTypes';
import { useDispatch, useSelector } from 'react-redux';

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
    if (task.isDone) {
      return;
    } else {
      dispatch({ type: ActionType.EDIT, payload: task });
    }
  };

  return (
    <List>
      {state.todos.map((todo) => (
        <Card key={todo.id}>
          <CardContent style={{ opacity: todo.isDone ? '0.5' : '1' }}>
            {todo.isEdit ? (
              <Input
                type="text"
                value={todo.name}
                color="primary"
                onChange={(event) => changeEditedTask(event, todo)}
                onBlur={() => toggleEditTask(todo)}
              />
            ) : (
              <Typography
                gutterBottom
                variant="h5"
                onClick={() => toggleEditTask(todo)}
                style={{ textDecoration: todo.isDone ? 'line-through' : 'none' }}
              >
                {todo.name}
              </Typography>
            )}
            <Typography gutterBottom variant="body2">
              {todo.date}
            </Typography>
          </CardContent>
          <CardActions>
            <Checkbox onChange={() => toggleCompleteTask(todo)} checked={todo.isDone} color="primary" />
            <Button onClick={() => removeTask(todo)} color="secondary" startIcon={<DeleteIcon />} size="small">
              Delete
            </Button>
          </CardActions>
        </Card>
      ))}
    </List>
  );
};

export default TasksList;
