module.exports = {
    roots: ['<rootDir>/src'],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
    reporters: ['default'],
    coverageDirectory: '<rootDir>/jest',
    collectCoverage: true,
};
