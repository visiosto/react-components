// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

// Modified from file 'rollup.config.js' in primer/react repository.
// The original code is available at
// https://github.com/primer/react/blob/main/rollup.config.js

import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import visualizer from 'rollup-plugin-visualizer';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

const formats = ['esm', 'umd'];

const plugins = [
  babel({ extensions, exclude: 'node_modules/**', runtimeHelpers: true }),
  resolve({ extensions }),
  commonjs(),
  terser(),
  visualizer({ sourcemap: true }),
];

export default [
  {
    input: 'src/index.ts',
    external: ['styled-components', 'react', 'react-dom'],
    plugins,
    output: formats.map((format) => ({
      file: `dist/browser.${format}.js`,
      format,
      sourcemap: true,
      name: 'react-components',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        'styled-components': 'styled',
      },
    })),
  },
];
