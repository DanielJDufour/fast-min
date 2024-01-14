const getTheoreticalMin = require("typed-array-ranges/get-min");

function fastMin(
  numbers,
  { debug = false, no_data = undefined, theoretical_min = undefined } = {
    debug: false,
    no_data: undefined,
    theoretical_min: undefined
  }
) {
  if (debug) console.log("[fast-min] starting with numbers:", numbers.slice(0, 10));

  if (!numbers.length) {
    if (debug) console.error("[fast-min] Instead of an array of numbers, you passed in", numbers);
    throw new Error("[fast-min] You didn't pass in an array of numbers");
  }
  if (numbers.length === 0) throw new Error("[fast-min] You passed in an empty array");

  if (Array.isArray(no_data) === false) {
    if (typeof no_data === "number") {
      no_data = [no_data];
    } else {
      no_data = [];
    }
  }

  let min;
  const length = numbers.length;

  if (debug) console.log("[fast-min] constructor:", numbers.constructor.name);

  if (theoretical_min === undefined || theoretical_min === null)
    theoretical_min = getTheoreticalMin(numbers.constructor.name);
  if (debug) console.log("[fast-min] theoretical minimunm is", theoretical_min);

  for (let i = 0; i < length; i++) {
    const value = numbers[i];
    if (typeof value === "number" && value === value && no_data.indexOf(value) === -1) {
      if (typeof min === "undefined") {
        min = value;
      } else if (value < min) {
        min = value;
      }
      if (typeof theoretical_min === "number" && value <= theoretical_min) {
        if (debug) console.log("[fast-min] found minimum value of " + value + " at index " + i + " of " + length);
        min = value;
        break;
      }
    }
  }

  if (debug) console.log("[fast-min] returning", min);
  return min;
}

if (typeof module === "object") {
  module.exports = fastMin;
  module.exports.default = fastMin;
}

if (typeof self === "object") {
  self.fastMin = fastMin;
}

if (typeof window === "object") {
  window.fastMin = fastMin;
}
