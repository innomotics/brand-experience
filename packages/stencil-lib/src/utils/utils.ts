export function isPresent<T>(object: T): object is T {
  return object !== null && object !== undefined;
}

export function isNotPresent<T>(object: T): object is null | undefined {
  return object === null || object === undefined;
}

/**
 * Adjust the provided value to be within the range
 * and return the adjusted value.
 *
 * Return min if value is less than then min value
 * or return max if value is more than max
 * or return the value otherwise.
 *
 * @param value Provided value.
 * @param min Range min value.
 * @param max Range max value.
 */
export function adjustValueToRange(value: number, min: number, max: number) {
  if (value < min) {
    return min;
  }

  if (value > max) {
    return max;
  }

  return value;
}
