const fs = require("fs");
const test = require("ava");
const min = require("./index");

test("gettings minimum from a normal array", (t) => {
  const numbers = [920, -550, 340, 690, 550, -340, 840, 700, 550, 210, 540];
  const result = min(numbers, { debug: false });
  t.is(result, -550);
});

test("getting minimum from an array of image band values", (t) => {
  const numbers = Uint8Array.from(
    JSON.parse(fs.readFileSync("uint8-numbers.json", "utf-8"))
  );
  console.log("loaded uint8 numbers of length:", numbers.length);
  const result = min(numbers, { debug: true });
  t.is(result, 0);
});

test("getting minimum from typed arrays", (t) => {
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
    t.is(result, expected_min);
  });
});