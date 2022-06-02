/* eslint-disable */
export default {
  displayName: 'rxjs-zone-less',
  preset: '../../jest.preset.js',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  transform: {
    '^.+\\.[tj]s$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  transformIgnorePatterns: ['node_modules/(?!.*.mjs$)'],
  coverageDirectory: '../../coverage/packages/rxjs-zone-less',
};
