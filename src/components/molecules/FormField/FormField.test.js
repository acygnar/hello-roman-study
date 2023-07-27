import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import FormField from 'components/molecules/FormField/FormField';
import { renderWithProviders } from 'helpers/renderWithtProviders';

describe('FormField', () => {
  it('Renders the component', () => {
    renderWithProviders(<FormField label="name" name="name" id="name" />);
  });
});
