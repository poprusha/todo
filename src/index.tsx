import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@app/store';
import { Store } from 'redux';
import { AppState } from '@app/types/tasksTypes';
import { setStorage } from '../services/storageHelper';

const store: Store<AppState> = configureStore();

store.subscribe(() => {
  const state = store.getState();
  setStorage(state.todos);
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
