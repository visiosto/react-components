// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';

import GlobalStyle from '../GlobalStyle';

import renderWithProviders from '../util/test/renderWithProviders';

describe('Global style component', () => {
  it('renders correctly', () => {
    const { container } = renderWithProviders(<GlobalStyle />);

    expect(container).toMatchSnapshot();
  });
});
