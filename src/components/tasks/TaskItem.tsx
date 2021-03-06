import React, { FC } from 'react';
import { Button, Card, CardActions, CardContent, Checkbox, Input, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { Todo } from '@app/types/tasksTypes';

export interface ITodoItemProps {
  changeEditedTask: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, task: Todo) => void;
  toggleEditTask: (task: Todo) => void;
  toggleCompleteTask: (task: Todo) => void;
  removeTask: (task: Todo) => void;
  todo: Todo;
}

const TaskItem: FC<ITodoItemProps> = ({ todo, changeEditedTask, toggleEditTask, toggleCompleteTask, removeTask }) => {
  return (
    <Card style={{ margin: '10px 0' }}>
      <CardContent style={{ opacity: todo.isDone ? '0.5' : '1' }}>
        {todo.isEdit ? (
          <Input
            data-testid="todo-input"
            type="text"
            value={todo.name}
            color="primary"
            onChange={(event) => changeEditedTask(event, todo)}
            onBlur={() => toggleEditTask(todo)}
          />
        ) : (
          <Typography
            data-testid="todo-text"
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
        <Checkbox
          data-testid="todo-checkbox"
          onChange={() => toggleCompleteTask(todo)}
          checked={todo.isDone}
          color="primary"
        />
        <Button
          data-testid="todo-remove"
          onClick={() => removeTask(todo)}
          color="secondary"
          startIcon={<DeleteIcon />}
          size="small"
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default TaskItem;
