// Copyright (c) 2021 Visiosto oy
// Licensed under the Apache License, Version 2.0

import React from 'react';

import Icon from '../Icon';

import renderWithProviders from '../util/test/renderWithProviders';

describe('Icon component', () => {
  it('renders correctly', () => {
    const { container } = renderWithProviders(<Icon icon="tune" />);

    expect(container).toMatchSnapshot();
  });

  it('renders outlined icons correctly', () => {
    const { container } = renderWithProviders(<Icon icon="cloud" iconStyle="outlined" />);

    expect(container).toMatchSnapshot();
  });

  it('renders filled icons correctly', () => {
    const { container } = renderWithProviders(<Icon icon="cloud" iconStyle="filled" />);

    expect(container).toMatchSnapshot();
  });

  it('renders rounded icons correctly', () => {
    const { container } = renderWithProviders(<Icon icon="cloud" iconStyle="round" />);

    expect(container).toMatchSnapshot();
  });

  it('renders sharp icons correctly', () => {
    const { container } = renderWithProviders(<Icon icon="cloud" iconStyle="sharp" />);

    expect(container).toMatchSnapshot();
  });

  it('renders two-tone icons correctly', () => {
    const { container } = renderWithProviders(<Icon icon="cloud" iconStyle="two-tone" />);

    expect(container).toMatchSnapshot();
  });
});
