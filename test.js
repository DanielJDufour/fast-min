const fs = require("fs");
const test = require("flug");
const min = require("./index");

test("gettings minimum from a normal array", ({ eq }) => {
  const numbers = [920, -550, 340, 690, 550, -340, 840, 700, 550, 210, 540];
  const result = min(numbers, { debug: false });
  eq(result, -550);
});

test("getting minimum from an array of image band values", ({ eq }) => {
  const numbers = Uint8Array.from(
    JSON.parse(fs.readFileSync("uint8-numbers.json", "utf-8"))
  );
  console.log("loaded uint8 numbers of length:", numbers.length);
  const result = min(numbers, { debug: true });
  eq(result, 0);
});

test("getting minimum from typed arrays", ({ eq }) => {
  [
    [Int8Array, -128],
    [Uint8Array, 0],
    [Int16Array, -32768],
    [Uint16Array, 0],
  ].forEach(([array_type, expected_min]) => {
    const filename =
      array_type.name.replace("Array", "").toLowerCase() + "-numbers.json";
    const numbers = array_type.from(
      JSON.parse(fs.readFileSync(filename, "utf-8"))
    );
    const result = min(numbers, { debug: true });
    eq(result, expected_min);
  });
});

/// new
test("getting no minimum from normal arrays with all no data values", ({
  eq,
}) => {
  const numbers = [99, 99, 99, 99];
  const result = min(numbers, { no_data: 99 });
  eq(result, undefined);
});

test("getting minimum from normal arrays with some data values", ({ eq }) => {
  const numbers = [1, 99, 2, 99, 4, 99, 6, 99, -10];
  const result = min(numbers, { no_data: 99 });
  eq(result, -10);
});

test("getting no minimum from typed arrays with all no data values", ({
  eq,
}) => {
  const numbers = Uint8Array.from([99, 99, 99, 99]);
  const result = min(numbers, { no_data: 99 });
  eq(result, undefined);
});

test("getting minimum from typed arrays with some data values", ({ eq }) => {
  const numbers = Int8Array.from([1, 99, 2, 99, 4, 99, 6, 99, -10]);
  const result = min(numbers, { no_data: 99 });
  eq(result, -10);
});
