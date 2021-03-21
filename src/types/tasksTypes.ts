export type Todo = {
  id: string;
  name: string;
  isDone: boolean;
  isEdit: boolean;
  date: string;
};

export type AppState = {
  todos: Todo[];
};
