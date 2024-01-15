"use strict";
// Find key by value

const findKey = (object, valueSearch) => {
  for (const key in object) {
  if (object[key] === valueSearch) return key;
  }
};

module.exports = findKey;
