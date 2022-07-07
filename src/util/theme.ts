// Copyright (c) 2021 Visiosto oy
// Licensed under the Apache License, Version 2.0

import './DefaultTheme';

import { DefaultTheme } from 'styled-components';

const fonts = {
  heading: 'utopia-std, Times, "Times New Roman", serif',
  main: 'source-sans-pro, "Helvetica Neue", Helvetica, Arial, sans-serif',
  code: 'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace',
};

// The maximum sizes of different viewports.
const sizes = {
  mobileS: '20rem', // 320px
  mobileM: '23.4375rem', // 375px
  mobileL: '26.5625rem', // 425px
  tablet: '48rem', // 768px
  laptop: '64rem', // 1024px
  laptopL: '90rem', // 1440px
  fourK: '160rem', // 2560px
};

const devices = {
  mobileS: `min-width: ${sizes.mobileS}`,
  mobileM: `min-width: ${sizes.mobileM}`,
  mobileL: `min-width: ${sizes.mobileL}`,
  tablet: `min-width: ${sizes.tablet}`,
  laptop: `min-width: ${sizes.laptop}`,
  laptopL: `min-width: ${sizes.laptopL}`,
  fourK: `min-width: ${sizes.fourK}`,
};

const layout = {
  marginMobile: '2rem',
  marginTablet: '4rem',
  marginDesktop: '16rem',
  marginTitleMobile: '0.5rem',
  marginTitleTablet: '1rem',
};

const borders = {
  commonRadius: '25px',
  cardRadius: '0.5rem',
};

const theme: DefaultTheme = {
  fonts: { ...fonts },
  sizes: { ...sizes },
  devices: { ...devices },
  layout: { ...layout },
  borders: { ...borders },
};

export default theme;
