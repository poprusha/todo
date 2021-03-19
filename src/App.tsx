import React, { FC } from 'react';
import TasksList from '@app/components/TasksList';
import NewTask from '@app/components/NewTask';

const App: FC = () => {
  return (
    <>
      <NewTask />
      <TasksList />
    </>
  );
};

export default App;
