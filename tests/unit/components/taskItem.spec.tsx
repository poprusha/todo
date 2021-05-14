import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TaskItem, { ITodoItemProps } from '@app/components/tasks/TaskItem';
import { getProps } from './propsTaskItem';

let props: ITodoItemProps;

beforeEach(() => {
  props = getProps();
});

describe('TaskItem should: ', () => {
  it('render', () => {
    const { getByTestId, getByText } = render(<TaskItem {...props} />);
    const card = getByTestId('todo-text');
    expect(card).toBe(getByText('Make task'));
  });
  it('show input', () => {
    const { getByTestId } = render(<TaskItem {...props} />);
    const cardText = getByTestId('todo-text');
    fireEvent.click(cardText);
    expect(props.toggleEditTask).toHaveBeenCalled();
  });
  it('button remove: ', () => {
    const { getByRole } = render(<TaskItem {...props} />);
    const button = getByRole('button', { name: 'Delete' });
    fireEvent.click(button);
    expect(props.removeTask).toHaveBeenCalled();
  });
});
