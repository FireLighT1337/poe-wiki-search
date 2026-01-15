module.exports = {
  transform: {
    ".js": "jest-esm-transformer",
  },
  testEnvironment: "node",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};
