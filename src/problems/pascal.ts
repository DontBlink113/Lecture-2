function generatePascalTriangle(n: number): number[][] {
  // TODO: Generate the Pascal's Triangle with n levels as a 2D number array.
  return [
    [1],
    [1, 1],
    [1, 2, 1],
    [1, 3, 3, 1],
    [1, 4, 6, 4, 1],
    [1, 5, 10, 10, 5, 1]
  ];
}

export default function main() {
  console.log('Depth 5 Pascal triangle:', generatePascalTriangle(5));
  console.log('Depth 10 Pascal triangle:', generatePascalTriangle(10));
  console.log('Depth 20 Pascal triangle:', generatePascalTriangle(20));
}
