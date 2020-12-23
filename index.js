const THEORETICAL_MINIMUMS = {
  Array: null,
  Int8Array: -128, // Math.pow(-2, 8 - 1)
  Uint8Array: 0,
  Uint8ClampedArray: 0,
  Int16Array: -32768, // Math.pow(-2, 16 - 1)
  Uint16Array: 0,
  Int32Array: -2147483648, // Math.pow(-2, 32 - 1)
  Uint32Array: 0,
  // skipping Float32Array and Float64Array because it appears to be platform dependent
  BigInt64Array: -9223372036854776000, // Math.pow(-2, 63)
  BigUint64Array: 0,
};

module.exports = function fastMin(
  numbers,
  { debug = false } = { debug: false }
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

  let min = numbers[0];
  const length = numbers.length;

  if (debug) console.log("[fast-min] constructor:", numbers.constructor.name);

  let theoretical_min = THEORETICAL_MINIMUMS[numbers.constructor.name];
  if (debug) console.log("[fast-min] theoretical minimunm is", theoretical_min);
  if (theoretical_min) {
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
  } else {
    for (let i = 1; i < length; i++) {
      const value = numbers[i];
      if (value < min) {
        min = value;
      }
    }
  }

  if (debug) console.log("[fast-min] returning", min);
  return min;
};