/**
 * Function Type Expressions
 */
function greeter(fn: (input: string) => void): void {
  fn('Hello, World');
}

function printToConsole(input: string): void {
  console.log(input);
}

greeter(printToConsole);

// Using type alias
type GreetFunction = (input: string) => void;

function greeter2(fn: GreetFunction) {
  fn('Hello, World 2');
}

greeter(printToConsole);

/**
 * Call Signatures
 */
type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
};

function doSomething(fn: DescribableFunction) {
  console.log(`${fn.description} returned ${fn(6)}`);
}

/**
 * Construct Signatures
 */
type SomeConstructor = {
  new(s: string): Date;
};

function fn(ctor: SomeConstructor) {
  return new ctor('hello');
}

interface CallOrConstruct {
  new(s: string): Date;

  (n?: number): number;
}

/**
 * Generic Functions
 */
function firstElement<Type>(arr: Type[]): Type | undefined {
  return arr[0];
}

// firstElement1: string | undefined
const firstElement1 = firstElement(['a', 'b', 'c']);
// firstElement2: number | undefined
const firstElement2 = firstElement([1, 2, 3]);
// firstElement3: undefined
const firstElement3 = firstElement([]);

/**
 * Inference
 */
function map<Input, Output>(
  arr: Input[],
  func: (arg: Input) => Output,
): Output[] {
  return arr.map(func);
}

// parsed: number[]
const parsed = map(['1', '2', '3'], (n) => parseInt(n));

/**
 * Constraints
 */
function longest<Type extends { length: number }>(a: Type, b: Type) {
  if (a.length >= b.length) {
    return a;
  } else {
    return b;
  }
}

// longerArray: number[]
const longerArray = longest([1, 2], [1, 2, 3]);
// longerString: 'alice' | 'bob'
const longerString = longest('alice', 'bob');

/**
 * Optional Parameters
 */
function f(n?: number): void {
  if (n !== undefined) {
    console.log(n.toFixed()); // 0 arguments
    console.log(n.toFixed(3)); // 1 argument
  }
}

f();
f(10);

function fWithDefault(n = 10): void {
  console.log(n.toFixed()); // 0 arguments
  console.log(n.toFixed(3)); // 1 argument
}

fWithDefault();
fWithDefault(10);

/**
 * Function Overloads
 */
function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}

const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);

/**
 * Declaring this in a Function
 */
interface User {
  id: number;
  admin: boolean;
  becomeAdmin: () => void;
}

const user: User = {
  id: 123,
  admin: false,
  becomeAdmin: function () {
    this.admin = true;
  },
};

interface DB {
  filterUsers(filter: (this: User) => boolean): User[];
}

const db: DB = {
  filterUsers(cb): User[] {
    const users: User[] = [];
    return users.filter(cb);
  },
};
const admins = db.filterUsers(function (this: User) {
  return this.admin;
});

/**
 * Rest Parameters and Arguments
 */
function multiply(by: number, ...nums: number[]) {
  return nums.map((num) => by * num);
}

// multiplied: number[]
const multiplied = multiply(10, 1, 2, 3, 4);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
arr1.push(...arr2);

// args: [8, 5]
const args = [8, 5] as const; // Inferred as 2-length tuple

const angle = Math.atan2(...args);

/**
 * Parameter Destructuring
 */
type ABC = {
  a: number;
  b: number;
  c: number
};

function sum({ a, b, c }: ABC): void {
  console.log(a + b + c);
}
