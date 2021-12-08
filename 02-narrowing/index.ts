/**
 * typeof type guards
 */
function padLeft(padding: number | string, input: string): string {
  if (typeof padding === 'number') {
    // padding: number
    return ' '.repeat(padding) + input;
  }

  // padding: string
  return padding + input;
}

/**
 * Truthiness narrowing
 */
function printAll(input: string | string[] | null): void {
  if (input && typeof input === 'object') {
    // input: string[]
    for (const item of input) {
      console.log(item);
    }
  } else if (typeof input === 'string') {
    // input: string
    console.log(input);
  } else {
    // input: null
    console.log(input);
  }
}

function multiplyAll(
  values: number[] | undefined,
  factor: number,
): number[] | undefined {
  if (!values) {
    // values: undefined
    return values;
  }

  // values: number[]
  return values.map((value) => value * factor);
}

/**
 * Equality narrowing
 */
function equalityNarrowing(x: string | number, y: string | boolean): void {
  if (x === y) {
    // x: string
    x.toUpperCase();

    // y: string
    y.toLowerCase();
  } else {
    // x: string | number
    console.log(x);

    // y: string | boolean
    console.log(y);
  }
}

/**
 * The in operator narrowing
 */
type Fish = {
  swim: () => void
};

type Bird = {
  fly: () => void
};

function move(animal: Fish | Bird): void {
  if ('swim' in animal) {
    // animal: Fish
    return animal.swim();
  }

  // animal: Bird
  return animal.fly();
}

/**
 * instanceof narrowing
 */
function logValue(input: Date | string): void {
  if (input instanceof Date) {
    // input: Date
    console.log(input.toUTCString());
  } else {
    // input: string
    console.log(input.toUpperCase());
  }
}

/**
 * Assignments
 */
// random: string | number
let random = Math.random() < 0.5 ? 10 : 'hello world!';

random = 1;

// random: number
console.log(random);

random = 'goodbye!';

// random: string
console.log(random);

/**
 * Control flow analysis
 */
function controlFlowAnalysis(): string | number {
  let random: string | number | boolean;

  random = Math.random() < 0.5;

  // random: boolean
  console.log(random);

  if (Math.random() < 0.5) {
    random = 'hello';

    // random: string
    console.log(random);
  } else {
    random = 100;

    // random: number
    console.log(random);
  }

  // random: string | number
  return random;
}

/**
 * Using type predicates
 */
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

let pet: Fish | Bird = {
  swim: () => {},
  fly: () => {},
};

if (isFish(pet)) {
  // pet: Fish
  pet.swim();
} else {
  // pet: Bird
  pet.fly();
}

/**
 * Discriminated unions
 */
interface Circle {
  kind: 'circle';
  radius: number;
}

interface Square {
  kind: 'square';
  sideLength: number;
}

type Shape = Circle | Square;

function getArea(shape: Shape): number {
  if (shape.kind === 'circle') {
    // shape: Circle
    return Math.PI * shape.radius ** 2;
  }

  // shape: Square
  return Math.PI * shape.sideLength ** 2;
}
