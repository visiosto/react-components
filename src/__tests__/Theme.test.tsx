// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { render } from '@testing-library/react';

import Theme from '../Theme';

import theme from '../util/theme';

describe('Theme component', () => {
  it('renders correctly', () => {
    const { container, getByText } = render(<Theme theme={theme}>Content</Theme>);

    expect(container).toMatchSnapshot();

    expect(getByText('Content')).toBeInTheDocument();
  });
});
