// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { render } from '@testing-library/react';

import App from '../App';

const colors = { background: { light: "#fff", dark: '#000'}, text: { light: "#000", dark: "#fff" }};

describe('App component', () => {
  it('renders correctly', () => {
    const { container, getByText } = render(<App colors={colors}>Content</App>);

    expect(container).toMatchSnapshot();

    expect(getByText('Content')).toBeInTheDocument();
  });
});
