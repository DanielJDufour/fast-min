const fs = require("fs");

// console.log("process.argv:", process.argv);
const [_node, _perfjs, array_type, min_lib] = process.argv;

const MIN_FUNCS = {
  lodash: require("lodash.min"),
  underscore: require("underscore").min,
  "fast-min": require("./index")
};

const ARRAY_CONSTRUCTORS = {
  Int8: Int8Array,
  Uint8: Uint8Array,
  Int16: Int16Array,
  Uint16: Uint16Array,
  Int32: Int32Array,
  Uint32: Uint32Array,
  BigInt64: BigInt64Array,
  BigUint64: BigUint64Array
};

const numbers = ARRAY_CONSTRUCTORS[array_type].from(
  JSON.parse(fs.readFileSync(array_type.toLowerCase() + "-numbers.json", "utf-8"))
);

const times = [];
for (let i = 0; i < 10; i++) {
  const start = Date.now();
  const result = MIN_FUNCS[min_lib](numbers);
  const finish = Date.now();
  const duration = finish - start;
  times.push(duration);
}
const avg = times.reduce((total, n) => total + n, 0) / 10;
console.log(
  `| ${array_type}Array | ${min_lib} | ${min_lib === "fast-min" ? "**" : ""}${
    avg === 0 ? "< 1" : avg
  }${min_lib === "fast-min" ? "**" : ""} | `
);
