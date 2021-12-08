/**
 * boolean
 */
let isDone = false; // type: boolean
const hasHome = true; // type: true
const hasCar: boolean = true; // type: boolean

/**
 * number
 */
let age = 25; // type: number
const burjKhalifaHeight = 828; // type: 828
const burjKhalifaHighestFloor = 163; // type: number

/**
 * string
 */
let color = 'blue'; // type: string
const firstName = 'Aviv'; // type: 'Aviv'
const sentence: string = `Hello, my name is ${firstName}`; // type: string

/**
 * Array
 */
const tvProviders = ['Netflix', 'Apple TV', 'Prime Video']; // type: string[]
const days: string[] = ['sunday', 'monday']; // type: string[]
const years: Array<string> = ['2000', '2001', '2002']; // type: string[]

/**
 * Tuple
 */
let justTuple: [string, number] = ['hello', 10]; // type: [string, number]

/**
 * Enum
 */
enum Direction {
  Up, // 0
  Right, // 1
  Bottom, // 2
  Left, // 3
}

enum UniqueDirection {
  Up = 10, // 10
  Right, // 11
  Bottom, // 12
  Left, // 13
}

enum TvProvider {
  Netflix = 'Netflix',
  AppleTV = 'Apple TV',
  PrimeVideo = 'Prime Video',
}

const enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

/**
 * any
 */
let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = false;

/**
 * void
 */
function printName(name: string): void {
  console.log(name);
}

printName('Aviv');

/**
 * undefined
 */
const undefinedValue: undefined = undefined;

/**
 * null
 */
const nullValue: null = null;

/**
 * never
 */
function error(message: string): never {
  throw new Error(message);
}

// return: never
function fail() {
  return error('Something failed');
}

function infiniteLoop(): never {
  while (true) {
    //
  }
}

/**
 * Interface
 */
interface LabelledValue {
  label: string;
}

// Optional properties
interface SquareConfig {
  color?: string;
  width?: number;
}

// Read only properties
interface Point {
  readonly x: number;
  readonly y: number;
}

interface Animal {
  name: string;
}

// Extending an interface
interface Bear extends Animal {
  honey: boolean;
}

/**
 * Object
 */
// The parameter's type annotation is an object type
function getFullSize(size: { width: number; height: number }): number {
  return size.width * size.height;
}

getFullSize({ width: 1920, height: 1080 });

// Optional properties
function printFullName(fullName: { firstName: string; lastName?: string }): void {
  // console.log(fullName.lastName.toUpperCase()); // might crash if fullName.lastName wasn't provided!
  if (fullName.lastName !== undefined) {
    console.log(fullName.lastName.toUpperCase());
  }

  // A safe alternative using modern JavaScript syntax with optional chaining (?.)
  console.log(fullName.lastName?.toUpperCase());
}

// Both of those functions are OK, because lastName is optionally which can be undefined or string
printFullName({ firstName: 'Bob' });
printFullName({ firstName: 'Alice', lastName: 'Alisson' });

/**
 * Union
 */
function printYear(year: string | number): void {
  if (typeof year === 'string') {
    // We can access to string properties or methods since TypeScript knows now it's a string
    console.log(year);
  } else {
    // We can access to number properties or methods since TypeScript knows now it's a number
    console.log(year.toString());
  }
}

// return: number[] | string
function getFirstThree(x: number[] | string) {
  // Because both arrays and strings have a slice method we can access it without checking the type
  return x.slice(0, 3);
}

/**
 * Type Alias
 */
type Size = {
  width: number;
  height: number;
};

// Type alias with union
type stringOrNumber = string | number;

type Person = {
  name: string
}

// Extending a type via intersections
type Teacher = Person & {
  profession: string;
}

/**
 * Type Assertion
 */
const videoElement = document.getElementById('video') as HTMLVideoElement;

// We can also use the angle-bracket syntax
const audioElement = <HTMLAudioElement>document.getElementById('audio');

/**
 * Literal Type
 */
function printText(text: string, alignment: 'left' | 'right' | 'center'): void {
  console.log(text, alignment);
}

// Numeric literal types work the same way
function compare(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1;
}

interface Options {
  width: number;
}

// Combine with non-literal types
function configure(options: Options | 'auto'): void {
  console.log(options);
}

// Change the inference by adding a type assertion in object literal
const someRequest = { url: 'https://example.com', method: 'GET' as 'GET' };

function handleRequest(url: string, method: string): void {
  console.log(url, method);
}

// Change the inference by adding a type assertion in function call argument
handleRequest(someRequest.url, someRequest.method as 'GET');

// Convert the entire object to be type literals with as const
const req = { url: 'https://example.com', method: 'GET' } as const;
handleRequest(req.url, req.method);

/**
 * Non-null Assertion Operator (Postfix!)
 */
function liveDangerously(x?: number | null) {
  // No error
  console.log(x!.toFixed());
}

/**
 * bigint
 */
const oneHundred = BigInt(100); // type: bigint
const anotherHundred: bigint = 100n; // type: bigint

/**
 * symbol
 */
const myFirstSymbol = Symbol('myFirstSymbol'); // type: symbol
const mySecondSymbol: symbol = Symbol('mySecondSymbol'); // type: symbol
