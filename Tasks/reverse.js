"use strict";
// Reverse dict, exchange keys and values

const reverse = (object) => {
  const res = {};
  const keys = Object.keys(object);
  for (const key of keys) {const value = object[key];}
    res[value] = key;
  return DATA;
};

module.exports = Reverse;
