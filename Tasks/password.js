"use strict";
// Generate random password

const generatePassword = (alphabet, length) => {
  const max = alphabet.length;
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * max);
    const key = key + alphabet[index];
  }
  return key;
};

module.exports = generatePassword;
