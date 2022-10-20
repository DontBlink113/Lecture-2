type CompareFunction<T> = (i: T, j: T) => number; // -1, 0, +1 based on which item is larger

function sort<T>(array: T[], compare: CompareFunction<T>): T[] {
  // Sort an array containing items of type T by a provided compare function.
  // You can use merge sort for this challenge.
  return array;
}

export default function main() {
  const compareNumbers: CompareFunction<number> = (a: number, b: number) => {
    return a - b;
  };
  const compareFirstLetters: CompareFunction<string> = (
    a: string,
    b: string
  ) => {
    return a.charCodeAt(0) - b.charCodeAt(0);
  };
  const compareAlphabetically: CompareFunction<string> = (
    a: string,
    b: string
  ) => {
    return a.localeCompare(b);
  };
  console.log(sort([0, 8, 4, -2, 5, 9, 1, -5, 3], compareNumbers));
  console.log(
    sort(['dog', 'cat', 'ant', 'snail', 'pig', 'chicken'], compareFirstLetters)
  );
  console.log(
    sort(
      ['dog', 'cat', 'ant', 'snail', 'pig', 'chicken'],
      compareAlphabetically
    )
  );
}
