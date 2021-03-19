import { createStore, Store } from 'redux';
import rootReducer from './reducers/rootReducer';
import { AppState } from '@app/types/tasksTypes';

export function configureStore(): Store<AppState> {
  return createStore(rootReducer);
}
