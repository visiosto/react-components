// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

// Thanks to Joshua Comeau for the original code, licensed under MIT License:
// https://github.com/joshwcomeau/dark-mode-minimal

import React from 'react';

import ThemeContextProvider from './ThemeContextProvider';

export type AppProps = { children: React.ReactNode; colors: { [key: string]: string } };

function App({ children, colors }: AppProps) {
  return <ThemeContextProvider colors={colors}>{children}</ThemeContextProvider>;
}

export default App;
