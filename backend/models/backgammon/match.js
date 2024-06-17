require("dotenv").config(0);
const { Schema } = require("mongoose");
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const BackgammonMatchSchema = new Schema(
  {
    id: Number,
    host: { type: Schema.Types.ObjectId, ref: "BackgammonPlayer" },
    guest: { type: Schema.Types.ObjectId, ref: "BackgammonPlayer" },
    players: [{ type: Schema.Types.ObjectId, ref: "BackgammonPlayer" }],
    ruleName: String,
    length: Number,
    score: [Number],
    game: { type: Schema.Types.ObjectId, ref: "BackgammonGame" },
  },
  { timestamps: true }
);

const BackgammonMatch =
  mongoose.models.BackgammonMatch ||
  mongoose.model("BackgammonMatch", BackgammonMatchSchema);

module.exports = BackgammonMatch;
