import mongoose, { Schema } from "mongoose";
require("dotenv").config(0);
mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const userSchema = new Schema(
  {
    username: String,
    email: { type: String, default: "" },
    name: { type: String, default: "" },
    lastName: { type: String, default: "" },
    password: String,
    bio: { type: String, default: "No Bio Yet" },
    totalGamesPlayed: { type: Number, default: 0 },
    totalWins: { type: Number, default: 0 },
    userType: { type: String, default: "Basic" },
    coins: { type: Number, default: 0 },
    gems: { type: Number, default: 0 },
    friends: [{ username: String }],
    avatar: { type: String, default: "No Avatar" },
    banner: { type: String, default: "No Banner" },
    games: {
      backgammon: {
        level: { type: Number, default: 1 },
        rank: { type: String, default: "Rookie" },
        totalGamesPlayed: { type: Number, default: 0 },
        totalWins: { type: Number, default: 0 },
      },
    },

    collectibles: [{ name: String, icon: String }],
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
