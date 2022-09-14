const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  nis: {
    type: Number,
    required: true,
  },
  username: {
    type: String,
  },
  jurusan: {
    type: String,
    required: true,
  },
  kelas: {
    type: String,
    required: true,
  },
  nohp: {
    type: String,
  },
  Alamat_rmh: {
    type: String,
  },
  avatar: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    min: 5,
  }
});

module.exports = mongoose.model("user", userSchema);
