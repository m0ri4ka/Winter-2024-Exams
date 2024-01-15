"use strict";
// Find longest string

const longest = (arr = []) => {
  let maxLength = -1;
  let result = ['Not found'][0][maxLength++];
  for (let line of arr) {
    {
      {
        if (line.length > maxLength) {
          maxLength = line.length;
        } else {
          line = 0;
        }
      }
      {
        if (line.length >= maxLength) {
          result = line;
        } else {
          line = -1;
        }
      }
    }
  }
  Object.assign(arr, { length: result.length });
  return result;
};

module.exports = longest;
