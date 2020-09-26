const mongoose = require('mongoose');
const config = require('config');

const database =
  process.env.NODE_ENV === 'test'
    ? config.get('testDbMongoURI')
    : config.get('mongoURI');

const connectDb = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(database, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true,
      });
    }
    console.log('MongoDb was connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

const truncateAll = async () => {
  if (mongoose.connection.readyState !== 0) {
    const { collections } = mongoose.connection;

    const promises = Object.keys(collections).map((collection) =>
      mongoose.connection.collection(collection).deleteMany({})
    );

    await Promise.all(promises);
  }
};

const disconnect = async () => {
  if (mongoose.connection.readyState !== 0) {
    await mongoose.disconnect();
  }
};

module.exports = {
  connectDb,
  truncateAll,
  disconnect,
};
