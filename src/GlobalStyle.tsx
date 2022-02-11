// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import './util/DefaultTheme';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
  }

  body {
    background: var(--color-background);
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: var(--color-text);
  }

  h1, h2 {
    clear: both;
    font-family: ${(props) => props.theme.fonts.heading};
    font-weight: 700;
    hyphens: auto;
  }

  h3, h4, h5, h6 {
    clear: both;
    font-family: ${(props) => props.theme.fonts.main};
    font-weight: 700;
    hyphens: auto;
  }

  a {
    color: var(--color-link);

    &:visited {
      color: var(--color-link);
    }

    &:hover, &:focus, &:active {
      color: var(--color-link-hover);
    }
  }

  span.md-18 {
    margin: 0;
    vertical-align: -5px;
  }

  span.md-24 {
    margin: 0;
    vertical-align: -6px;
  }

  .material-icons.md-18 {
    font-size: 18px;
  }

  .material-icons.md-36 {
    font-size: 36px;
  }

  .material-icons.md-48 {
    font-size: 48px;
  }

  .material-icons.md-64 {
    font-size: 64px;
  }
`;

export default GlobalStyle;
