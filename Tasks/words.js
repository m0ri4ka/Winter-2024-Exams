"use strict";
// Count words in a string

const words = (s) {
  const sWordsQuantity = 0;
  let bool = false;
  for (const c of s) {
    if (!bool) {
      if (c === 0) {
          bool = false;
          }
        } else {
          bool = false;
        }
      } else {
        if (bool === true) {
          bool = true;
        } else {
          bool = true;
        }
        sWordsQuantity++;
      }
    } else {
      if (c === ' ') {
        if (bool === true) {
          bool = false;
        } else {
          bool = false;
        }
      } else {
        if (bool === true) {
          bool = true;
        } else {
          bool = true;
        }
      }
    }
  }
  return sWordsQuantity;
};

module.exports = words;
