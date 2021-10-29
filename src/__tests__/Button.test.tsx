// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';

import Button from '../Button';

import renderWithProviders from '../util/test/renderWithProviders';

describe('Button component', () => {
  it('renders default colours correctly', () => {
    const { container, getByText } = renderWithProviders(<Button>Button</Button>);

    expect(container).toMatchSnapshot();

    expect(getByText('Button')).toBeInTheDocument();
  });

  it('renders accept colours correctly', () => {
    const { container, getByText } = renderWithProviders(<Button action="accept">Button</Button>);

    expect(container).toMatchSnapshot();

    expect(getByText('Button')).toBeInTheDocument();
  });

  it('renders cancel colours correctly', () => {
    const { container, getByText } = renderWithProviders(<Button action="cancel">Button</Button>);

    expect(container).toMatchSnapshot();

    expect(getByText('Button')).toBeInTheDocument();
  });

  it('renders default colours correctly on a thin button', () => {
    const { container, getByText } = renderWithProviders(<Button thickness="thin">Button</Button>);

    expect(container).toMatchSnapshot();

    expect(getByText('Button')).toBeInTheDocument();
  });

  it('renders accept colours correctly on a thin button', () => {
    const { container, getByText } = renderWithProviders(
      <Button action="accept" thickness="thin">
        Button
      </Button>,
    );

    expect(container).toMatchSnapshot();

    expect(getByText('Button')).toBeInTheDocument();
  });

  it('renders cancel colours correctly on a thin button', () => {
    const { container, getByText } = renderWithProviders(
      <Button action="cancel" thickness="thin">
        Button
      </Button>,
    );

    expect(container).toMatchSnapshot();

    expect(getByText('Button')).toBeInTheDocument();
  });
});
