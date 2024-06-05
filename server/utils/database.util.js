const mongoose = require("mongoose");

const connect = async () => {
  try {
    const { connection } = await mongoose.connect(
      `${process.env.MONGO_DB_URI}/${process.env.MONGO_DB_NAME}`
    );
    console.log(`✅ Database Connection Success : ${connection.host}`);
  } catch (error) {
    console.log(`❌ Database Connection Failed : ${error.message}`);
  }
};

module.exports = { connect };
