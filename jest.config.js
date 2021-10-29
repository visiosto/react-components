// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

module.exports = {
  testEnvironment: 'jsdom',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/stories/**'],
  testMatch: [
    '<rootDir>/(src|codemods)/__tests__/**/*.test.[jt]s?(x)',
    '!**/*.types.test.[jt]s?(x)',
  ],
  setupFilesAfterEnv: ['<rootDir>/setup-test-env.js'],
};
