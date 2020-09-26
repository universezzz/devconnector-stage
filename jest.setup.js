const { truncateAll, disconnect } = require('./config/db');

beforeEach(async () => {
  await truncateAll();
});

afterAll(async () => {
  await disconnect();
});
