module.exports = {
  coverageProvider: 'v8',
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!<rootDir>/out/**',
    '!<rootDir>/.next/**',
    '!<rootDir>/*.config.js',
    '!<rootDir>/coverage/**',
  ],
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  setupFiles: ["./jest.setup.js"],
  //setupFilesAfterEnv: ["<rootDir>/src/tests/jest.customMatchers.ts"],
  testMatch: ["**/?(*.)+(test).[jt]s?(x)"],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  transform: {
    '^.+\\.(ts|tsx)$': [
      'babel-jest',
      {
        presets: [
          [
            "next/babel",
            {
              "preset-react": {
                runtime: "automatic",
                importSource: "@emotion/react",
              },
            },
          ],
        ],
        plugins: [
          "@emotion",
          "macros",
          [
            "@emotion/babel-plugin-jsx-pragmatic",
            {
              export: "jsx",
              import: "__cssprop",
              module: "@emotion/react",
            },
          ],
          ["@babel/plugin-transform-react-jsx", { pragma: "__cssprop" }, "twin.macro"],
        ],
      },
    ],
  },
  transformIgnorePatterns: [
    '/node_modules/'
  ],
}
