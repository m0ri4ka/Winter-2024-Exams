'use strict';
// Make nested array plane

const plane = (arr) => {
  const res= [];
  for(const value of arr) {
    if (Array.isArray(value)) {
      res.push(...plane(value));
    } else {
      res.push(value);
    }
  }
  return res;
};

module.exports = plane;
