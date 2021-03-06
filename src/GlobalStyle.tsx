// Copyright (c) 2021 Visiosto oy
// Licensed under the Apache License, Version 2.0

import './util/DefaultTheme';

import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle<{ customStyles?: TemplateStringsArray }>`
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

  ${['outlined', 'filled', 'round', 'sharp', 'two-tone'].map(
    (style) => css`
      .material-icons-${style}.md-18 {
        font-size: 18px;
      }

      .material-icons-${style}.md-36 {
        font-size: 36px;
      }

      .material-icons-${style}.md-48 {
        font-size: 48px;
      }

      .material-icons-${style}.md-64 {
        font-size: 64px;
      }
    `,
  )}

  ${(props) => props.customStyles && css(props.customStyles)};
`;

export default GlobalStyle;
