module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      diagnostics: false
    }
  },
  setupFilesAfterEnv: ['<rootDir>/test/setup.ts'],
};
