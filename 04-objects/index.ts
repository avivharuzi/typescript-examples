/**
 * Optional Properties
 */
type PaintShape = {
  kind: string;
};

interface PaintOptions {
  shape: PaintShape;
  x?: number;
  y?: number;
}

function paintShape(options: PaintOptions): void {
  // x: number | undefined
  let x = options.x;

  // y: number | undefined
  let y = options.y;

  // x: number
  x = options.x === undefined ? 0 : options.x;

  // y: number
  y = options.y === undefined ? 0 : options.y;

  console.log(x, y);
}

function paintShape2({ shape, x = 0, y = 0 }: PaintOptions): void {
  // x: number
  console.log('x coordinate at', x);

  // y: number
  console.log('y coordinate at', y);

  console.log(shape);
}

const shape: PaintShape = { kind: 'circle' };
paintShape({ shape });
paintShape({ shape, x: 100 });
paintShape({ shape, y: 100 });
paintShape({ shape, x: 100, y: 100 });

/**
 * readonly Properties
 */
interface SomeReadOnlyType {
  readonly prop: string;
}

function doSomethingReadonly(some: SomeReadOnlyType): void {
  // We can read from 'obj.prop'
  console.log(`prop has the value '${some.prop}'.`);

  // But we can't re-assign it
  // some.prop = 'hello'; // Cannot assign to 'prop' because it is a read-only property
}

interface Home {
  readonly resident: {
    name: string;
    age: number
  };
}

function visitForBirthday(home: Home): void {
  // We can read and update properties from 'home.resident'
  console.log(`Happy birthday ${home.resident.name}!`);
  home.resident.age++;
}

function evict(home: Home): void {
  // But we can't write to the 'resident' property itself on a 'Home'
  // home.resident = {
  //   name: 'Victor the Evictor',
  //   age: 42,
  // };
  // Cannot assign to 'resident' because it is a read-only property
  console.log(home);
}

/**
 * Index Signatures
 */
interface StringArray {
  [index: number]: string;
}

const myArray: StringArray = ['hi', 'there'];
// secondItem: string
const secondItem = myArray[1];

interface NumberOrStringDictionary {
  [index: string]: number | string;

  length: number;
  name: string;
}

interface ReadonlyStringArray {
  readonly [index: number]: string;
}

let myArray2: ReadonlyStringArray = ['wow', 'again', 'ah'];

// myArray2[2] = 'Mallory'; // Index signature in type 'ReadonlyStringArray' only permits reading

/**
 * Extending Types
 */
interface BasicAddress {
  name?: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
}

interface AddressWithUnit extends BasicAddress {
  unit: string;
}

interface Colorful {
  color: string;
}

interface Circle {
  radius: number;
}

interface ColorfulCircle extends Colorful, Circle {
}

function drawColorfulCircle(circle: ColorfulCircle): void {
  console.log(`Color was ${circle.color}`);
  console.log(`Radius was ${circle.radius}`);
}

/**
 * Intersection Types
 */
type ColorfulCircle2 = Colorful & Circle;

/**
 * Generic Object Types
 */
interface Box<Type> {
  contents: Type;
}

// OR
type Box2<Type> = {
  contents: Type;
};

let box: Box<string>;

function setContents<Type>(box: Box<Type>, newContents: Type): void {
  box.contents = newContents;
}

/**
 * The Array Type
 */
function doSomethingWithArray(values: Array<string>): void {
  console.log(values);
}

let doSomethingArray: string[] = ['one', 'two'];

// either of these work!
doSomethingWithArray(doSomethingArray);
doSomethingWithArray(new Array('one', 'two'));

/**
 * The ReadonlyArray Type
 */
function doStuffWithReadOnlyArray(values: ReadonlyArray<string>): void {
  // We can read from 'values'...
  console.log(`The first value is ${values[0]}`);

  // ...but we can't mutate 'values'
  // values.push('hello!'); // Property 'push' does not exist on type 'readonly string[]'
}

const roArray: ReadonlyArray<string> = ['red', 'green', 'blue'];
doStuffWithReadOnlyArray(roArray);

/**
 * Tuple Types
 */
function doSomethingTuple(pair: [string, number]): void {
  // first: string
  const first = pair[0];

  // second: number
  const second = pair[1];

  console.log(first, second);

  const [firstDestructing, secondDestructing] = pair;

  // firstDestructing: string
  console.log(firstDestructing);

  // secondDestructing: number
  console.log(secondDestructing);
}

doSomethingTuple(['hello', 42]);

type Either2dOr3d = [number, number, number?];

function setCoordinate(coord: Either2dOr3d): void {
  // z: number | undefined
  const [x, y, z] = coord;

  // coord.length: 2 | 3
  console.log(`Provided coordinates had ${coord.length} dimensions, ${x} ${y} ${z}`);
}

type StringNumberBooleans = [string, number, ...boolean[]];
type StringBooleansNumber = [string, ...boolean[], number];
type BooleansStringNumber = [...boolean[], string, number];

const stringNumberBooleans: StringNumberBooleans = ['hello', 1];
const stringBooleansNumber: StringNumberBooleans = ['beautiful', 2, true];
const booleansStringNumber: StringNumberBooleans = [
  'world',
  3,
  true,
  false,
  true,
  false,
  true,
];

/**
 * readonly Tuple Types
 */
function doSomethingReadonlyTuple(pair: readonly [string, number]): void {
  console.log(pair);
}

let point = [3, 4] as const;
