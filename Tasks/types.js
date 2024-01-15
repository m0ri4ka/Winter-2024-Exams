"use strict";
// Count types in an array

const types = (arr) => {

  const result = {number: 0, string: 0, boolean: 0};
    for (const value of arr) {
      const currentType = typeof value;
      result[currentType]++;
    }
    return result;
};

module.exports = types;
