import { Todo } from '@app/types/tasksTypes';
import { formatDate } from '../../../services/dateHelper';
import { ITodoItemProps } from '@app/components/tasks/TaskItem';

const todo: Todo = {
  id: '2',
  name: 'Make task',
  isDone: false,
  isEdit: false,
  date: formatDate(new Date()),
};
const changeEditedTask = jest.fn(() => null);
const toggleEditTask = jest.fn(() => null);
const toggleCompleteTask = jest.fn(() => null);
const removeTask = jest.fn(() => null);

export const getProps = (): ITodoItemProps => {
  return {
    todo,
    changeEditedTask,
    toggleCompleteTask,
    toggleEditTask,
    removeTask,
  };
};
