// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { render } from '@testing-library/react';

import App from '../src/App';
import Theme from '../src/Theme';

const colors = { background: { light: "#fff", dark: '#000'}, text: { light: "#000", dark: "#fff" }};

const theme = {};

export default function renderWithProviders(component) {
  return render(
    // eslint-disable-next-line react/jsx-filename-extension
    <App colors={colors}>
        <Theme theme={theme}>{component}</Theme>
    </App>,
  );
}
