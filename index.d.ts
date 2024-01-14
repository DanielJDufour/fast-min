type ARRAY_TYPE =
  | Array<number>
  | Int8Array
  | Uint8Array
  | Uint8ClampedArray
  | Int16Array
  | Uint16Array
  | Int32Array
  | Uint32Array
  | Float32Array
  | Float64Array
  | BigInt64Array
  | BigUint64Array;

export default function fastMin(
  numbers: ARRAY_TYPE,
  options?: {
    debug?: boolean | undefined;
    no_data?: number[] | number | readonly number[] | undefined;
    theoretical_min?: number | undefined;
  }
): number;
