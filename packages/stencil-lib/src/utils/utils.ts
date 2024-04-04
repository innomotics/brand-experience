export function format(first: string, middle: string, last: string): string {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

export function isPresent<T>(object: T): object is T {
  return object !== null && object !== undefined;
}

export function isNotPresent<T>(object: T): object is null | undefined {
  return object === null || object === undefined;
}
