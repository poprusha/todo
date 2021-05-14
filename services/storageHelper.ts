import { Todo } from '@app/types/tasksTypes';

export function getStorage() {
  return localStorage.getItem('todo-list');
}
export function setStorage(todos: Todo[]) {
  localStorage.clear();
  localStorage.setItem('todo-list', JSON.stringify(todos));
}
