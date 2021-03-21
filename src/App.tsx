import React, { FC } from 'react';
import TasksList from '@app/components/TasksList';
import NewTask from '@app/components/NewTask';
import { Container } from '@material-ui/core';

const App: FC = () => {
  return (
    <Container maxWidth="sm">
      <NewTask />
      <TasksList />
    </Container>
  );
};

export default App;
