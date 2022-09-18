const mongoose = require("mongoose");

const connectDB = async (app, port) => {
  const connect = await mongoose.connect(process.env.MONGO_URI);

  if (connect) {
    return app.listen(port, () => console.log(`${port}`));
  }
};

module.exports = connectDB;
