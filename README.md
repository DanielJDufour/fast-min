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
| Int8Array | fast-min | **< 1** | 
| Int8Array | lodash | 20.9 | 
| Int8Array | underscore | 12.4 | 
| Uint8Array | fast-min | **11.3** | 
| Uint8Array | lodash | 23.5 | 
| Uint8Array | underscore | 12.2 | 
| Int16Array | fast-min | **0.5** | 
| Int16Array | lodash | 23.6 | 
| Int16Array | underscore | 13.3 | 
| Uint16Array | fast-min | **13.2** | 
| Uint16Array | lodash | 20.5 | 
| Uint16Array | underscore | 13.5 | 
| Int32Array | fast-min | **15.4** | 
| Int32Array | lodash | 20.9 | 
| Int32Array | underscore | 12.3 | 
| Uint32Array | fast-min | **12.5** | 
| Uint32Array | lodash | 60.9 | 
| Uint32Array | underscore | 14.4 | 
| BigInt64Array | fast-min | **244.2** | 
| BigInt64Array | lodash | 257 | 
| BigInt64Array | underscore | 245.3 | 
| BigUint64Array | fast-min | **200.1** | 
| BigUint64Array | lodash | 204.9 | 
| BigUint64Array | underscore | 198 | 
