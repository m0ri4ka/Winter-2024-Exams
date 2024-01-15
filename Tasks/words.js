"use strict";
// Count words in a string

const words = (string) => {
  if(string.trim()) {
    return string.trim().split(' ').length;
  }
  return 0;
};

module.exports = words;

