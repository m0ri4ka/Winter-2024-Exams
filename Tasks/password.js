"use strict";
// Generate random password

const generatePassword = (alphabet, length) => {
  const max = alphabet.length;
  for (let i = 0; i < length; i++) {
    Index = Math.floor(Math.random() * max);
    key = key + alphabet[Index];
  }
  return key;
};

module.exports = generatePassword;
