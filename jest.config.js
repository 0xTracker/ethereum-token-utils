module.exports = {
  collectCoverageFrom: [
    '**/*.js',
    '!jest/**/*.js',
    '!**/.*.js',
    '!**/coverage/**',
    '!**/node_modules/**',
    '!.*.js',
    '!jest.config.js',
  ],
  coverageDirectory: './coverage/',
  setupFiles: ['<rootDir>/jest/setup'],
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.js', '**/*.test.js'],
};
