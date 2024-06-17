require("dotenv").config(0);
const { Schema } = require("mongoose");
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const BackgammonPlayerSchema = new Schema(
  {
    id: Number,
    username: String,
    currentMatch: { type: Schema.Types.ObjectId, ref: "BackgammonMatch" },
    rule: String,
    pieceType: String,
    stats: { type: Schema.Types.ObjectId, ref: "BackgammonPlayerStats" },
    socketId: String,
  },
  { timestamps: true }
);

const BackgammonPlayer =
  mongoose.models.BackgammonPlayer ||
  mongoose.model("BackgammonPlayer", BackgammonPlayerSchema);

module.exports = BackgammonPlayer;
