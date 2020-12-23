const fs = require("fs");

const getRandomNums = (nbits, signed) => {
  const nums = [];
  for (let i = 0; i < 10_000_000; i++) {
    const max = Math.pow(2, nbits - (signed ? 1 : 0)) - 1;
    const min = signed ? Math.pow(-2, nbits - 1) : 0;
    const range = max - min;
    nums.push(Math.round(min + (Math.random() * range)).toString());
  }
  return nums;
};

[
  { name: "int8", bits: 8, signed: true },
  { name: "uint8", bits: 8, signed: false },
  { name: "int16", bits: 16, signed: true },
  { name: "uint16", bits: 16, signed: false },
  { name: "int32", bits: 32, signed: true },
  { name: "uint32", bits: 32, signed: false },
  { name: "bigint64", bits: 64, signed: true },
  { name: "biguint64", bits: 64, signed: false },
].forEach(({ name, bits, signed }) => {
  const filename = name + "-numbers.json";
  fs.writeFileSync(
    filename,
    JSON.stringify(getRandomNums(bits, signed)),
    "utf-8"
  );
  console.log("wrote " + filename);
});
