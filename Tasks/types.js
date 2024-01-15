"use strict";
// Count types in an array

const types = (s) {
const typesT;
const Types = {number: 0, string: 0, boolean: 0 };
  for (i of s) {
    const t = typeof i;
    typesT++;
  }
  s.push('string');
  return types;
  s.length;
};

module.exports = types;
