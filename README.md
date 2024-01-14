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
import fastMin from 'fast-min';

const result = fastMin([0, -1, -2, -3, -4, -5]);
// result is -5
```

# getting minimum value of a typed array
```javascript
import fastMin from 'fast-min';

const pixel_values = Uint8Array.from([0, 128, 255, 34, ...]);
const result = fastMin(pixel_values);
// result is 0
```

# no data value
If you want to ignore one or more specific values, you can set the no_data value.
```javascript
import fastMin from 'fast-min';

const numbers = [99, 0, 7, 99, 5, ...];
const result = fastMin(numbers, { no_data: 0 });
// result is 5

const result = fastMax(numbers, { no_data: [5, 99] });
// result is now 7
```

# performance tests
Here are test results comparing fast-min to two other popular libraries underscore and lodash.
Tests have been conducted by creating an array of ten million random numbers from the lowest to the highest theoretical value of the typed array.
| array type | library | average duration in milliseconds |
| ---------- | ------- | -------------------------------- |
| Int8Array | fast-min | **0.1** | 
| Int8Array | lodash | 23.2 | 
| Int8Array | underscore | 10.3 | 
| Uint8Array | fast-min | **< 1** | 
| Uint8Array | lodash | 23.2 | 
| Uint8Array | underscore | 10.3 | 
| Int16Array | fast-min | **0.4** | 
| Int16Array | lodash | 23.5 | 
| Int16Array | underscore | 10.4 | 
| Uint16Array | fast-min | **0.8** | 
| Uint16Array | lodash | 23.5 | 
| Uint16Array | underscore | 10.6 | 
| Int32Array | fast-min | **65.6** | 
| Int32Array | lodash | 23.5 | 
| Int32Array | underscore | 11 | 
| Uint32Array | fast-min | **139.7** | 
| Uint32Array | lodash | 27.2 | 
| Uint32Array | underscore | 16.4 | 
| BigInt64Array | fast-min | **56.1** | 
| BigInt64Array | lodash | 78.8 | 
| BigInt64Array | underscore | 63.9 | 
| BigUint64Array | fast-min | **55.9** | 
| BigUint64Array | lodash | 122.1 | 
| BigUint64Array | underscore | 114.9 | 
