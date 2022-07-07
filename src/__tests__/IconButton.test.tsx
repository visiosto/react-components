// Copyright (c) 2021 Visiosto oy
// Licensed under the Apache License, Version 2.0

import React from 'react';

import IconButton from '../IconButton';

import renderWithProviders from '../util/test/renderWithProviders';

describe('Icon button component', () => {
  it('renders default colours correctly for left alignment', () => {
    const { container, getByText } = renderWithProviders(
      <IconButton icon="cancel" iconAlignment="left">
        IconButton
      </IconButton>,
    );

    expect(container).toMatchSnapshot();

    expect(getByText('IconButton')).toBeInTheDocument();
  });

  it('renders accept colours correctly for left alignment', () => {
    const { container, getByText } = renderWithProviders(
      <IconButton action="accept" icon="search" iconAlignment="left">
        IconButton
      </IconButton>,
    );

    expect(container).toMatchSnapshot();

    expect(getByText('IconButton')).toBeInTheDocument();
  });

  it('renders cancel colours correctly for left alignment', () => {
    const { container, getByText } = renderWithProviders(
      <IconButton action="cancel" icon="navigate_next" iconAlignment="left">
        IconButton
      </IconButton>,
    );

    expect(container).toMatchSnapshot();

    expect(getByText('IconButton')).toBeInTheDocument();
  });

  it('renders default colours correctly on a thin button for left alignment', () => {
    const { container, getByText } = renderWithProviders(
      <IconButton icon="tune" iconAlignment="left" thickness="thin">
        IconButton
      </IconButton>,
    );

    expect(container).toMatchSnapshot();

    expect(getByText('IconButton')).toBeInTheDocument();
  });

  it('renders accept colours correctly on a thin button for left alignment', () => {
    const { container, getByText } = renderWithProviders(
      <IconButton action="accept" icon="language" iconAlignment="left" thickness="thin">
        IconButton
      </IconButton>,
    );

    expect(container).toMatchSnapshot();

    expect(getByText('IconButton')).toBeInTheDocument();
  });

  it('renders cancel colours correctly on a thin button for left alignment', () => {
    const { container, getByText } = renderWithProviders(
      <IconButton action="cancel" icon="event" iconAlignment="left" thickness="thin">
        IconButton
      </IconButton>,
    );

    expect(container).toMatchSnapshot();

    expect(getByText('IconButton')).toBeInTheDocument();
  });

  it('renders default colours correctly for right alignment', () => {
    const { container, getByText } = renderWithProviders(
      <IconButton icon="cancel" iconAlignment="right">
        IconButton
      </IconButton>,
    );

    expect(container).toMatchSnapshot();

    expect(getByText('IconButton')).toBeInTheDocument();
  });

  it('renders accept colours correctly for right alignment', () => {
    const { container, getByText } = renderWithProviders(
      <IconButton action="accept" icon="search" iconAlignment="right">
        IconButton
      </IconButton>,
    );

    expect(container).toMatchSnapshot();

    expect(getByText('IconButton')).toBeInTheDocument();
  });

  it('renders cancel colours correctly for right alignment', () => {
    const { container, getByText } = renderWithProviders(
      <IconButton action="cancel" icon="navigate_next" iconAlignment="right">
        IconButton
      </IconButton>,
    );

    expect(container).toMatchSnapshot();

    expect(getByText('IconButton')).toBeInTheDocument();
  });

  it('renders default colours correctly on a thin button for right alignment', () => {
    const { container, getByText } = renderWithProviders(
      <IconButton icon="tune" iconAlignment="right" thickness="thin">
        IconButton
      </IconButton>,
    );

    expect(container).toMatchSnapshot();

    expect(getByText('IconButton')).toBeInTheDocument();
  });

  it('renders accept colours correctly on a thin button for right alignment', () => {
    const { container, getByText } = renderWithProviders(
      <IconButton action="accept" icon="language" iconAlignment="right" thickness="thin">
        IconButton
      </IconButton>,
    );

    expect(container).toMatchSnapshot();

    expect(getByText('IconButton')).toBeInTheDocument();
  });

  it('renders cancel colours correctly on a thin button for right alignment', () => {
    const { container, getByText } = renderWithProviders(
      <IconButton action="cancel" icon="event" iconAlignment="right" thickness="thin">
        IconButton
      </IconButton>,
    );

    expect(container).toMatchSnapshot();

    expect(getByText('IconButton')).toBeInTheDocument();
  });
});
