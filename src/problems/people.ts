interface Person {
  name: string;
  age: number;
  occupation: string;
}

const people: Person[] = [
  { name: 'John', age: 45, occupation: 'Engineer' },
  { name: 'Rita', age: 71, occupation: 'Teacher' },
  { name: 'Ari', age: 23, occupation: 'Lawyer' },
  { name: 'Lisa', age: 55, occupation: 'Teacher' },
  { name: 'Chris', age: 38, occupation: 'Engineer' },
  { name: 'John', age: 71, occupation: 'Lawyer' },
  { name: 'Lisa', age: 41, occupation: 'Engineer' },
  { name: 'Dave', age: 33, occupation: 'Truck Driver' },
  { name: 'Charles', age: 46, occupation: 'Lawyer' },
  { name: 'Lisbeth', age: 38, occupation: 'Lawyer' },
  { name: 'Dolet', age: 38, occupation: 'Physician' },
  { name: 'Dave', age: 41, occupation: 'Truck Driver' },
  { name: 'Ari', age: 37, occupation: 'Physician' },
  { name: 'John', age: 69, occupation: 'Truck Driver' },
  { name: 'Charles', age: 81, occupation: 'Lawyer' },
  { name: 'Morgan', age: 18, occupation: 'Engineer' },
  { name: 'John', age: 54, occupation: 'Teacher' },
  { name: 'Velma', age: 19, occupation: 'Lawyer' }
];

function findPeople(people: Person[]): Person[] {
  // TODO: Implement your own way to filter and sort people (i.e. by age, occupation).
  return people;
}

export default function main() {
  console.log(findPeople(people));
}
