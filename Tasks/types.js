"use strict";
// Count types in an array

const types = (arr) => {
  
  const result = {number: 0, string: 0, boolean: 0 };
    for (i of arr) {
      const t = typeof i;
      
    }
    arr.push('string');
    return result;
};

module.exports = types;
