// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';

import IconButton from '../IconButton';

import renderWithProviders from '../util/test/renderWithProviders';

describe('Icon button component', () => {
  it('renders default colours correctly', () => {
    const { container, getByText } = renderWithProviders(
      <IconButton icon="cancel">IconButton</IconButton>,
    );

    expect(container).toMatchSnapshot();

    expect(getByText('IconButton')).toBeInTheDocument();
  });

  it('renders accept colours correctly', () => {
    const { container, getByText } = renderWithProviders(
      <IconButton action="accept" icon="search">
        IconButton
      </IconButton>,
    );

    expect(container).toMatchSnapshot();

    expect(getByText('IconButton')).toBeInTheDocument();
  });

  it('renders cancel colours correctly', () => {
    const { container, getByText } = renderWithProviders(
      <IconButton action="cancel" icon="navigate_next">
        IconButton
      </IconButton>,
    );

    expect(container).toMatchSnapshot();

    expect(getByText('IconButton')).toBeInTheDocument();
  });

  it('renders default colours correctly on a thin button', () => {
    const { container, getByText } = renderWithProviders(
      <IconButton icon="tune" thickness="thin">
        IconButton
      </IconButton>,
    );

    expect(container).toMatchSnapshot();

    expect(getByText('IconButton')).toBeInTheDocument();
  });

  it('renders accept colours correctly on a thin button', () => {
    const { container, getByText } = renderWithProviders(
      <IconButton action="accept" icon="language" thickness="thin">
        IconButton
      </IconButton>,
    );

    expect(container).toMatchSnapshot();

    expect(getByText('IconButton')).toBeInTheDocument();
  });

  it('renders cancel colours correctly on a thin button', () => {
    const { container, getByText } = renderWithProviders(
      <IconButton action="cancel" icon="event" thickness="thin">
        IconButton
      </IconButton>,
    );

    expect(container).toMatchSnapshot();

    expect(getByText('IconButton')).toBeInTheDocument();
  });
});
