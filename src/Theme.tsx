// Copyright (c) 2021 Visiosto oy
// Licensed under the Apache License, Version 2.0

import React from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';

type AnyIfEmpty<T extends object> = keyof T extends never ? any : T;

export type ThemeProps = { children: React.ReactNode; theme: AnyIfEmpty<DefaultTheme> };

function Theme({ children, theme }: ThemeProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default Theme;
