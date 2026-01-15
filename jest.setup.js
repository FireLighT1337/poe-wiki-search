// Mock the Chrome API for testing
global.chrome = {
  declarativeNetRequest: {
    updateSessionRules: jest.fn(),
  },
  tabs: {
    create: jest.fn(),
  },
};
