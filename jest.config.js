// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

// Modified from primer/react repository.
// The original code is available at https://github.com/primer/react

module.exports = {
  testEnvironment: 'jsdom',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/stories/**'],
  testMatch: [
    '<rootDir>/src/__tests__/**/*.test.[jt]s?(x)',
    '<rootDir>/src/**/__tests__/**/*.test.[jt]s?(x)',
    '!**/*.types.test.[jt]s?(x)',
  ],
  setupFilesAfterEnv: ['<rootDir>/setup-test-env.js'],
};
