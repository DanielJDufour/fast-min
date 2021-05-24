const getTheoreticalMin = require("typed-array-ranges/get-min");

module.exports = function fastMin(
  numbers,
  { debug = false, no_data = undefined, theoretical_min = undefined } = {
    debug: false,
    no_data: undefined,
    theoretical_min: undefined,
  }
) {
  if (debug)
    console.log("[fast-min] starting with numbers:", numbers.slice(0, 10));

  if (!numbers.length) {
    if (debug)
      console.error(
        "[fast-min] Instead of an array of numbers, you passed in",
        numbers
      );
    throw new Error("[fast-min] You didn't pass in an array of numbers");
  }
  if (numbers.length === 0)
    throw new Error("[fast-min] You passed in an empty array");

  let min;
  const length = numbers.length;

  if (debug) console.log("[fast-min] constructor:", numbers.constructor.name);

  if (theoretical_min === undefined)
    theoretical_min = getTheoreticalMin(numbers.constructor.name);
  if (debug) console.log("[fast-min] theoretical minimunm is", theoretical_min);
  if (theoretical_min) {
    if (no_data !== undefined) {
      min = Infinity;
      for (let i = 0; i < length; i++) {
        const value = numbers[i];
        if (value < min && value !== no_data) {
          min = value;
          if (value === theoretical_min) {
            if (debug)
              console.log(
                "[fast-min] found minimum value of " +
                  value +
                  " at index " +
                  i +
                  " of " +
                  length
              );
            break;
          }
        }
      }
      if (min === Infinity) min = undefined;
    } else {
      min = numbers[0];
      for (let i = 1; i < length; i++) {
        const value = numbers[i];
        if (value < min) {
          min = value;
          if (value === theoretical_min) {
            if (debug)
              console.log(
                "[fast-min] found minimum value of " +
                  value +
                  " at index " +
                  i +
                  " of " +
                  length
              );
            break;
          }
        }
      }
    }
  } else {
    if (no_data !== undefined) {
      min = Infinity;
      for (let i = 1; i < length; i++) {
        const value = numbers[i];
        if (value < min && value !== no_data) {
          min = value;
        }
      }
      if (min === Infinity) min = undefined;
    } else {
      min = numbers[0];
      for (let i = 1; i < length; i++) {
        const value = numbers[i];
        if (value < min) {
          min = value;
        }
      }
    }
  }

  if (debug) console.log("[fast-min] returning", min);
  return min;
};
