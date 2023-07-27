import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import AddUser from './AddUser';
import { renderWithProviders } from 'helpers/renderWithtProviders';
import Dashboard from './Dashboard';

describe('AddUser', () => {
  it('Renders the component', () => {
    renderWithProviders(
      <>
        <AddUser />
        <Dashboard />
      </>
    );
    fireEvent.change(screen.getByTestId('Name'), { target: { value: 'Adrian' } });
    fireEvent.change(screen.getByTestId('Average'), { target: { value: '55%' } });
    fireEvent.change(screen.getByTestId('Attendance'), { target: { value: '4.5' } });
    fireEvent.click(screen.getByText('Add'));
    screen.getByText('Adrian');
  });
});
