import { combineReducers } from 'redux';
import { taskReducer } from './taskReducer';
import { AppState } from '@app/types/tasksTypes';

const rootReducer = combineReducers<AppState>({
  todos: taskReducer,
});

export default rootReducer;
