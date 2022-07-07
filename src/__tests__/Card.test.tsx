// Copyright (c) 2021 Visiosto oy
// Licensed under the Apache License, Version 2.0

import React from 'react';
import { screen } from '@testing-library/react';

import Card from '../Card';

import renderWithProviders from '../util/test/renderWithProviders';

describe('Card component', () => {
  it('renders correctly', () => {
    const { container, getByText } = renderWithProviders(<Card>Test text</Card>);

    expect(container).toMatchSnapshot();

    expect(getByText('Test text')).toBeInTheDocument();

    expect(screen.getByRole('article')).toHaveTextContent('Test text');
  });

  it('renders centred card correctly', () => {
    const { container, getByText } = renderWithProviders(<Card centered>Test text</Card>);

    expect(container).toMatchSnapshot();

    expect(getByText('Test text')).toBeInTheDocument();

    expect(screen.getByRole('article')).toHaveTextContent('Test text');
  });

  it('renders card with smaller padding correctly', () => {
    const { container, getByText } = renderWithProviders(<Card smallerPadding>Test text</Card>);

    expect(container).toMatchSnapshot();

    expect(getByText('Test text')).toBeInTheDocument();

    expect(screen.getByRole('article')).toHaveTextContent('Test text');
  });

  it('renders centred card with smaller padding correctly', () => {
    const { container, getByText } = renderWithProviders(
      <Card centered smallerPadding>
        Test text
      </Card>,
    );

    expect(container).toMatchSnapshot();

    expect(getByText('Test text')).toBeInTheDocument();

    expect(screen.getByRole('article')).toHaveTextContent('Test text');
  });
});
