/**
 * Generic Types
 */
function getSelfValue<Type>(input: Type): Type {
  return input;
}

let getSelfValue2: <Type>(input: Type) => Type = getSelfValue;

let getSelfValue3: { <Type>(input: Type): Type } = getSelfValue;

interface GenericSelfValueFn {
  <Type>(input: Type): Type;
}

let getSelfValue4: GenericSelfValueFn = getSelfValue;

interface GenericSelfValueFn2<Type> {
  (input: Type): Type;
}

let getSelfValue5: GenericSelfValueFn2<number> = getSelfValue;

// selfValue: string
let selfValue = getSelfValue<string>('cat');

// selfValue2: string
const selfValue2 = getSelfValue<string>('cat');

// selfValue3: 'cat'
const selfValue3 = getSelfValue<'cat'>('cat');

// selfValue4: string
let selfValue4 = getSelfValue('cat');

// selfValue5: 'cat'
const selfValue5 = getSelfValue('cat');

/**
 * Generic Classes
 */
class MyGenericCls<Type> {
  zeroValue?: Type;
  add?: (x: Type, y: Type) => Type;
}

let myGenericCls = new MyGenericCls<number>();
myGenericCls.zeroValue = 0;
myGenericCls.add = (x, y): number => {
  return x + y;
};

/**
 * Generic Constraints
 */
interface Lengthwise {
  length: number;
}

function lengthwise<Type extends Lengthwise>(input: Type): Type {
  console.log(input.length);
  return input;
}

// lengthwise(3); // Argument of type 'number' is not assignable to parameter of type 'Lengthwise'

lengthwise({ length: 10, value: 3 });

/**
 * Using Type Parameters in Generic Constraints
 */
function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}

// aProperty: number
const aProperty = getProperty({ a: 1, b: 2, c: 3, d: 4 }, 'a');

// getProperty({ a: 1, b: 2, c: 3, d: 4 }, 'm'); // Argument of type '"m"' is not assignable to parameter of type '"a" | "b" | "c" | "d"'

/**
 * Using Class Types in Generics
 */
function createCls<Type>(cls: { new(): Type }): Type {
  return new cls();
}

class BeeKeeper {
  hasMask = true;
}

class ZooKeeper {
  nameTag = 'Mikle';
}

class Animal {
  numLegs = 4;
}

class Bee extends Animal {
  keeper = new BeeKeeper();
}

class Lion extends Animal {
  keeper = new ZooKeeper();
}

function createClsInstance<A extends Animal>(cls: new () => A): A {
  return new cls();
}

// lionNameTag: string
const lionNameTag = createClsInstance(Lion).keeper.nameTag;
// beeHasMask: boolean
const beeHasMask = createClsInstance(Bee).keeper.hasMask;
