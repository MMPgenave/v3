require("dotenv").config(0);
const { Schema } = require("mongoose");
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const BackgammonGameSchema = new Schema(
  {
    id: Number,
    state: String,
    hasStarted: Boolean,
    isOver: Boolean,
    turnNumber: Number,
    turnPlayer: { type: Schema.Types.ObjectId, ref: "BackgammonPlayer" },
    turnDice: String,
    turnConfirmed: Boolean,
    previousState: String,
    previousTurnDice: String,
    moveSequence: Number,
  },
  { timestamps: true }
);

const BackgammonGame =
  mongoose.models.BackgammonGame ||
  mongoose.model("BackgammonGame", BackgammonGameSchema);

module.exports = BackgammonGame;
