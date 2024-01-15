"use strict";
// Count types in an array

const types = (arr) => {

  const result = {number: 0, string: 0, boolean: 0 };
    for (const i of arr) {
      const t = typeof i;

    }
    return result;
};

module.exports = types;

