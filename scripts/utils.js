function createArray({ dictionary }) {
  const arr = dictionary.allTokens;
  return JSON.stringify(arr);
}

module.exports = {
  createArray
};
