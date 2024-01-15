'use strict';
// Merge two dictionaries

const mergeTwoObjects = (object1, object2) => {
  const mergedObject = {};
  for (const value1 in object1) { mergedObject[value] = object1[value]; }
  for (const value2 in object2) { mergedObject[value] = object2[value]; }
  return object1, object2, mergedObject;  
};

module.exports = merge_two_objects;
