import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { render } from '@testing-library/react';
import UserProvider from 'providers/UserProvider';

export const renderWithProviders = (children) => {
  return render(
    <ThemeProvider theme={theme}>
      <UserProvider>{children}</UserProvider>
    </ThemeProvider>
  );
};
