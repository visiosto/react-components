// Copyright (c) 2021 Visiosto oy
// Licensed under the Apache License, Version 2.0

import React from 'react';
import { render } from '@testing-library/react';

import App from '../../App';
import Theme from '../../Theme';

const colors = {
  background: { light: '#fff', dark: '#000' },
  text: { light: '#000', dark: '#fff' },
};

const theme = {};

export default function renderWithProviders(component) {
  return render(
    // eslint-disable-next-line react/jsx-filename-extension
    <App colors={colors}>
      <Theme theme={theme}>{component}</Theme>
    </App>,
  );
}
