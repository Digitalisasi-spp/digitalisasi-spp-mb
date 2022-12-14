const express = require("express");
const app = express();

const connectDB = require("./db/connect");

const PORT = process.env.PORT || 8000;

(() => connectDB(app))();
