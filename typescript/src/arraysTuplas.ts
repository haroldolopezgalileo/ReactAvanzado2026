const technologies = [
  "Typescript",
  "REact",
  "vite"
];

// Sin una anotación, TypeScript infiere un array a partir de sus elementos y sus tipos compatibles.
console.log(technologies);

// dos formas de tipar un array
// forma 1:
// `T[]` expresa un array cuyos elementos son T; con una unión, cada posición puede usar cualquiera de las alternativas.
const studentNames:(string|number)[] = [
  "Ana",
  "Carlos",
  "Andrea",
  30,
  40
];

// forma 2: tipo genérico Array<T>
// `Array<T>` es equivalente a `T[]`; la forma genérica puede resultar más legible cuando T es complejo.
const studentAges: Array<number> = [
  20, 25, 30
];

console.log(studentNames);
console.log(studentAges);

const notes: Array<string|number> = [
  20,
  "60.a",
  40,
  "10"
];


