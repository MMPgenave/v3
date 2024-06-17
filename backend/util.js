// Return a random numeric string of length n
const randomNumeric = (length) => {
  const num = Math.floor(Math.random() * 10 ** length);
  return num.toString().padStart(length, "0");
};

module.exports = randomNumeric;
