module.exports = {
  roots: ['<rootDir>/infrastructure/test'],
  testMatch: ['**/*.test.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  }
};
