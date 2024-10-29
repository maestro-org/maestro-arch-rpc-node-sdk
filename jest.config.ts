import type { JestConfigWithTsJest } from 'ts-jest';

const config: JestConfigWithTsJest = {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest', { sourceMaps: 'inline' }],
  },
  moduleNameMapper: {
    '^@maestro-org/maestro-arch-rpc-node-sdk$': '<rootDir>/src/index.ts',
    '^@maestro-org/maestro-arch-rpc-node-sdk/_shims/auto/(.*)$': '<rootDir>/src/_shims/auto/$1-node',
    '^@maestro-org/maestro-arch-rpc-node-sdk/(.*)$': '<rootDir>/src/$1',
  },
  modulePathIgnorePatterns: [
    '<rootDir>/ecosystem-tests/',
    '<rootDir>/dist/',
    '<rootDir>/deno/',
    '<rootDir>/deno_tests/',
  ],
  testPathIgnorePatterns: ['scripts'],
};

export default config;
