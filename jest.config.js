module.exports = {
    testEnvironment: 'jsdom',
    testEnvironmentOptions: {
      url: 'http://localhost/',
      customExportConditions: [''],
    },
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
    testMatch: ['**/__tests__/**/*.test.jsx'],
    moduleNameMapper: {
      '\\.(jpg|svg)$': '<rootDir>/src/__mocks__/fileMock.js',
      '^@/(.*)$': '<rootDir>/src/$1'
    },
    transform: {
      '^.+\\.(js|jsx)$': 'babel-jest',
    },
    transformIgnorePatterns: [
      'node_modules/(?!axios)'
    ]
  };