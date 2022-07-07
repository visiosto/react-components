// Copyright (c) 2021 Visiosto oy
// Licensed under the Apache License, Version 2.0

// Modified from primer/react repository.
// The original code is available at https://github.com/primer/react

const shared = {
  __DEV__: "process.env.NODE_ENV !== 'production'",
};

module.exports = {
  development: shared,
  test: shared,
  production: {
    ...shared,
    __DEV__: 'false',
    'process.env.NODE_ENV': "'production'",
  },
};
