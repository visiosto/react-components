// Copyright (c) 2021 Visiosto oy
// Licensed under the Apache License, Version 2.0

import React from 'react';

import ExternalLink from '../ExternalLink';

import renderWithProviders from '../util/test/renderWithProviders';

describe('External link component', () => {
  it('renders correctly', () => {
    const { container, getByText } = renderWithProviders(
      <ExternalLink to="https://www.visiosto.fi">Linkki</ExternalLink>,
    );

    expect(container).toMatchSnapshot();

    expect(getByText('Linkki')).toBeInTheDocument();
  });
});
