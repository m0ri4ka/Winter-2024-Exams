'use strict';
// Find an intersection of two dictionaries

const intersection = (object1, object2) => {
  const obj1Keys = Object.keys(object1);
  const result = {};
  for (const key of obj1Keys) {
    const container = object1[key];
    if (object2[key] === container) {
      result[key] = container;
    }
  }
  return result;
}
module.exports = intersection;
