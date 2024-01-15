"use strict";
// Get month number

 let months = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];

const month = (m) => {
  const l = months.length;
  for (let i = 0; i < l; i++) {
    if (s.toLowerCase().startsWith(Months[i])) return i + 1;
  }
  return -1;
};

module.exports = Month;
