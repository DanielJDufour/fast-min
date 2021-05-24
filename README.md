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

# no data value
If you want to ignore a specific value, you can set the no_data value.
```javascript
const min = require("fast-min");

const numbers = [99, 0, 7, 99, 5, ...]);
const result = max(numbers, { no_data: 0 });
// result is 5
```

# performance tests
Here are test results comparing fast-min to two other popular libraries underscore and lodash.
Tests have been conducted by creating an array of ten million random numbers from the lowest to the highest theoretical value of the typed array.
| array type | library | average duration in milliseconds |
| ---------- | ------- | -------------------------------- |
| Int8Array | fast-min | **0.1** | 
| Int8Array | lodash | 20.7 | 
| Int8Array | underscore | 14.9 | 
| Uint8Array | fast-min | **11.5** | 
| Uint8Array | lodash | 22.1 | 
| Uint8Array | underscore | 12.6 | 
| Int16Array | fast-min | **0.6** | 
| Int16Array | lodash | 21.9 | 
| Int16Array | underscore | 12.4 | 
| Uint16Array | fast-min | **12.2** | 
| Uint16Array | lodash | 21.2 | 
| Uint16Array | underscore | 12.5 | 
| Int32Array | fast-min | **13.1** | 
| Int32Array | lodash | 20.6 | 
| Int32Array | underscore | 12.6 | 
| Uint32Array | fast-min | **12.7** | 
| Uint32Array | lodash | 66.6 | 
| Uint32Array | underscore | 15.3 | 
| BigInt64Array | fast-min | **247.6** | 
| BigInt64Array | lodash | 253 | 
| BigInt64Array | underscore | 241.6 | 
| BigUint64Array | fast-min | **194.5** | 
| BigUint64Array | lodash | 206.1 | 
| BigUint64Array | underscore | 205.4 | 
