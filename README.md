# fast-min
:fire: The Quickest Way to get the Minimum Value of an Array of Numbers (Typed or Untyped)

# install
```
npm install fast-min
```

# why is it so much faster?
This library excels with typed arrays.  It takes into account the theoretical minimum of a typed array.
For example, if you have a  Uint8Array, it's not possible for a minimum value to be less than zero,
so if we encounter a 0 in the array, we can stop searching for the minimum value.

# usage
# getting minimum value of a normal array
```javascript
const min = require("fast-min");

const result = min([0, -1, -2, -3, -4, -5]);
// result is -5
```

# getting minimum value of a typed array
```javascript
const min = require("fast-min");

const pixel_values = Uint8Array.from([0, 128, 255, 34, ...]);
const result = min(pixel_values);
// result is 0
```

# performance tests
Here are test results comparing fast-min to two other popular libraries underscore and lodash.
Tests have been conducted by creating an array of ten million random numbers from the lowest to the highest theoretical value of the typed array.
| array type | library | average duration in milliseconds |
| ---------- | ------- | -------------------------------- |
| Int8Array | fast-min | **< 1** | 
| Int8Array | lodash | 24.5 | 
| Int8Array | underscore | 8.4 | 
| Uint8Array | fast-min | **6.6** | 
| Uint8Array | lodash | 24 | 
| Uint8Array | underscore | 8.6 | 
| Int16Array | fast-min | **0.5** | 
| Int16Array | lodash | 23.8 | 
| Int16Array | underscore | 8.1 | 
| Uint16Array | fast-min | **7.4** | 
| Uint16Array | lodash | 25.4 | 
| Uint16Array | underscore | 8.1 | 
| Int32Array | fast-min | **11.3** | 
| Int32Array | lodash | 22.7 | 
| Int32Array | underscore | 8.1 | 
| Uint32Array | fast-min | **8.2** | 
| Uint32Array | lodash | 94.3 | 
| Uint32Array | underscore | 9.6 | 
| BigInt64Array | fast-min | **221.4** | 
| BigInt64Array | lodash | 223.1 | 
| BigInt64Array | underscore | 228.4 | 
| BigUint64Array | fast-min | **172.6** | 
| BigUint64Array | lodash | 178 | 
| BigUint64Array | underscore | 177.7 |
