export type Todo = {
  name: string;
  isDone: boolean;
  isEdited: boolean;
};

export type AppState = {
  todos: Todo[];
};
