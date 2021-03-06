const mongoose = require('mongoose');
const config = require('config');

const dbURI = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useCreateIndex: true
    });

    console.log(`DB Connected`);
  } catch (err) {
    console.error(err.message);

    //fail
    process.exit(1);
  }
};

module.exports = connectDB;
