"use strict";
// Reverse dict, exchange keys and values

const reverse = (object) => {
  const result = {};
  const keys = Object.keys(object);
  for (const key of keys) {
    const value = object[key];
    result[value] = key;
  }
  return result;
};

module.exports = reverse;
