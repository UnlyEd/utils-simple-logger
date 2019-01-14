const { logRequest, createLogger } = require('./simpleLogger');

const req = {
  protocol: 'http',
  host: 'local',
  get: function get(host) {
    return this[host];
  },
  originalUrl: 'localhost:3000',
};

global.console = {
  warn: global.console.warn,
  log: jest.fn(),
};


describe('simpleLogger', () => {
  test('logRequest must call console.log() one time', () => {
    logRequest(req, 'test');
    expect(global.console.log)
      .toHaveBeenCalledTimes(1);
  });

  test('createLogger to return with property info, and called with label: test', () => {
    const MockLogger = jest.fn(createLogger);

    expect(new MockLogger({ label: 'test' }))
      .toHaveProperty('info');
    expect(MockLogger.mock.calls[0][0])
      .toEqual({ label: 'test' });
  });
});
