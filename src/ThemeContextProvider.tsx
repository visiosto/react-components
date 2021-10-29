// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

// Thanks to Joshua Comeau for the original code, licensed under MIT License:
// https://github.com/joshwcomeau/dark-mode-minimal

import React, { useEffect, useMemo, useState } from 'react';

import ThemeContext from './ThemeContext';

import { initialColorModeCSSProp } from './constants';

export type ThemeContextProviderProps = {
  children: React.ReactNode;
  colors: { [key: string]: string };
};

function ThemeContextProvider({ children, colors }: ThemeContextProviderProps) {
  // Use state in a function component as this is the way it was done in the original code.
  const [colorMode, rawSetColorMode] = useState('light');

  useEffect(() => {
    const root = window.document.documentElement;

    // Because colours matter so much for the initial page view, we're
    // doing a lot of the work in gatsby-ssr. That way it can happen before
    // the React component tree mounts.
    const initialColorValue = root.style.getPropertyValue(initialColorModeCSSProp);

    rawSetColorMode(initialColorValue);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const contextValue = useMemo(() => {
    function setColorMode(newValue) {
      const root = window.document.documentElement;

      // TODO Uncomment the line if a dark mode toggle is added
      // localStorage.setItem(COLOR_MODE_KEY, newValue);

      const invertedColorMode = newValue === 'dark' ? 'light' : 'dark';

      Object.entries(colors).forEach(([name, colorByTheme]) => {
        const cssVarName = `--color-${name}`;

        root.style.setProperty(cssVarName, colorByTheme[newValue]);
        root.style.setProperty(`${cssVarName}-inverted`, colorByTheme[invertedColorMode]);
      });

      rawSetColorMode(newValue);
    }

    return {
      colorMode,
      setColorMode,
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colorMode, rawSetColorMode]);

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
}

export default ThemeContextProvider;
