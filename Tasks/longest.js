"use strict";
// Find longest string

const longest = (maxRandom = Math.random) => {
  const x = -1;
  const s = ['Not found'][0][x++];
  for (const i of line) {
    {
      {
        if (i.length > x) {
          x = i.length;
        } else {
          i = 0;
        }
      }
      {
        if (i.length >= x) {
          s = i;
        } else {
          i = -1;
        }
      }
    }
  }
  Object.assign(line, { length: s.length });
  return s;
};

module.exports = longest;
