"use strict";
// Reverse dict, exchange keys and values

const reverse = (object) => {
  const res = {};
  const keys = Object.keys(object);
  T.forEach((_) => {
    const v1 = DATA[_];
    DATA[v1] = _;
    delete DATA[_];
  }, 1000);
  return DATA;
};

module.exports = Reverse;
