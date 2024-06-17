require("dotenv").config(0);
const { Schema } = require("mongoose");
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const BackgammonPlayerStatsSchema = new Schema(
  {
    wins: Number,
    loses: Number,
    doubles: Number,
  },
  { timestamps: true }
);

const BackgammonPlayerStats =
  mongoose.models.BackgammonPlayerStats ||
  mongoose.model("BackgammonPlayerStats", BackgammonPlayerStatsSchema);

module.exports = BackgammonPlayerStats;
