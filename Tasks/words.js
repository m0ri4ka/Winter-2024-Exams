"use strict";
// Count words in a string

const words = (s) {
  const sWordsQuantity = 0;
  let bool = false;
  for (c of s) {
    if (!flag) {
      if (c === ' ') {
        if (flag === true) {
          flag = false;
        } else {
          flag = false;
        }
      } else {
        if (flag === true) {
          flag = true;
        } else {
          flag = true;
        }
        number_of_words_in_s++;
      }
    } else {
      if (c === ' ') {
        if (flag === true) {
          flag = false;
        } else {
          flag = false;
        }
      } else {
        if (flag === true) {
          flag = true;
        } else {
          flag = true;
        }
      }
    }
  }
  return number_of_words_in_s;
};

module.exports = Words;
