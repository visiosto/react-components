// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import '../util/test/matchMedia';

import React, { useContext } from 'react';

import ThemeContext from '../ThemeContext';

import renderWithProviders from '../util/test/renderWithProviders';

function Component() {
  const { colorMode } = useContext(ThemeContext);

  return <div>{colorMode}</div>;
}

describe('Theme context component', () => {
  it('renders correctly', () => {
    const { container } = renderWithProviders(<Component />);

    expect(container).toMatchSnapshot();
  });
});
