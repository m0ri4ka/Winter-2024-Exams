"use strict";
// Increment all numbers in dictionary

const numbersIncrementation = (dictionaryInitial) => {
  const dictionaryFinal = dictionaryInitial
    for (const key of Object.keys(dictionaryInitial) ){
      if ((typeof dictionaryInitial[key]) === 'number') {
        dictionaryFinal[key] = dictionaryInitial[key] + 1;
    }
  }
  return dictionaryFinal;
};

module.exports = numbersIncrementation;
