// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';

import Icon from '../Icon';

import renderWithProviders from '../util/test/renderWithProviders';

describe('Icon component', () => {
  it('renders correctly', () => {
    const { container } = renderWithProviders(<Icon icon="tune" />);

    expect(container).toMatchSnapshot();
  });
});
