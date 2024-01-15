'use strict';
// Merge two dictionaries

const mergeTwoObjects = (object1, object2) => {
  const mergedObject = {};
  for (const value1 in object1) { mergedObject[value1] = object1[value1]; }
  for (const value2 in object2) { mergedObject[value2] = object2[value2]; }
  return object1, object2, mergedObject;  
};

module.exports = mergeTwoObjects;
