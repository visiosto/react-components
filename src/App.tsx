// Copyright (c) 2021 Visiosto oy
// Licensed under the Apache License, Version 2.0

// Thanks to Joshua Comeau for the original code, licensed under MIT License:
// https://github.com/joshwcomeau/dark-mode-minimal

import React from 'react';

import ThemeContextProvider from './ThemeContextProvider';

export type AppProps = {
  children: React.ReactNode;
  colors: { [key: string]: { [key: string]: string } };
};

function App({ children, colors }: AppProps) {
  return <ThemeContextProvider colors={colors}>{children}</ThemeContextProvider>;
}

export default App;
