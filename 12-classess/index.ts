class EmptyCls {
}

/**
 * Fields
 */
class PointCls {
  x?: number;
  y?: number;
}

const pointCls = new PointCls();
pointCls.x = 0;
pointCls.y = 0;

class PointCls2 {
  x = 0;
  y = 0;
}

const pointCls2 = new PointCls2();
console.log(`${pointCls2.x}, ${pointCls2.y}`); // 0, 0

class NoInitializeCls {
  name!: string; // Not initialized, but no error
}

/**
 * readonly
 */
class ReadonlyCls {
  readonly name: string = 'world';

  constructor(otherName?: string) {
    if (otherName !== undefined) {
      this.name = otherName;
    }
  }

  err(): void {
    // this.name = 'not ok'; // Cannot assign to 'name' because it is a read-only property
  }
}

const g = new ReadonlyCls();

// g.name = 'also not ok'; // Cannot assign to 'name' because it is a read-only property

/**
 * Constructors
 */
class PointCls3 {
  x: number;
  y: number;

  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
}

/**
 * Super Calls
 */
class BaseCls {
  x = 0;
}

class DerivedCls extends BaseCls {
  constructor() {
    // Prints a wrong value in ES5; throws exception in ES6
    // console.log(this.x); // 'super' must be called before accessing 'this' in the constructor of a derived class
    super();
  }
}

/**
 * Methods
 */
class PointCls4 {
  x = 10;
  y = 10;

  scale(n: number): void {
    this.x *= n;
    this.y *= n;
  }
}

/**
 * Getters / Setters
 */
class GetAndSetCls {
  _length = 0;

  get length(): number {
    return this._length;
  }

  set length(value) {
    this._length = value;
  }
}

class ThingCls {
  _size = 0;

  get size(): number {
    return this._size;
  }

  set size(value: string | number | boolean) {
    let num = Number(value);

    // Don't allow NaN, Infinity, etc

    if (!Number.isFinite(num)) {
      this._size = 0;
      return;
    }

    this._size = num;
  }
}

/**
 * Index Signatures
 */
class IndexSignatureCls {
  [key: string]: boolean | ((key: string) => boolean);

  check(key: string) {
    return this[key] as boolean;
  }
}

/**
 * implements Clauses
 */
interface Pingable {
  ping(): void;
}

class Sonar implements Pingable {
  ping(): void {
    console.log('ping!');
  }
}

/**
 * extends Clauses
 */
class AnimalCls {
  move(): void {
    console.log('Moving along!');
  }
}

class DogCls extends AnimalCls {
  woof(times: number): void {
    for (let i = 0; i < times; i++) {
      console.log('woof!');
    }
  }
}

const dogCls = new DogCls();
// Base class method
dogCls.move();
// Derived class method
dogCls.woof(3);

/**
 * Overriding Methods
 */
class BaseCls2 {
  greet(): void {
    console.log('Hello, world!');
  }
}

class DerivedCls2 extends BaseCls2 {
  override greet(name?: string): void {
    if (name === undefined) {
      super.greet();
    } else {
      console.log(`Hello, ${name.toUpperCase()}`);
    }
  }
}

const derivedCls2 = new DerivedCls2();
derivedCls2.greet();
derivedCls2.greet('reader');

/**
 * Member Visibility
 */
class RobotCls {
  public sayHi(): void {
    console.log('hi!');
  }
}

const robotCls = new RobotCls();
robotCls.sayHi();

class RobotCls2 {
  public sayHi(): void {
    console.log(`Hello, ${this.getName()}`);
  }

  protected getName(): string {
    return 'Robot';
  }
}

class SpecialRobotCls2 extends RobotCls2 {
  public howdy(): void {
    // OK to access protected member here
    console.log('Howdy, ' + this.getName());
  }
}

const specialRobotCls2 = new SpecialRobotCls2();
specialRobotCls2.sayHi(); // OK
// specialRobotCls2.getName(); // Property 'getName' is protected and only accessible within class 'Greeter' and its subclasses

class PrivateCls {
  private x = 0;

  doSomething(): void {
    // Can access this.x only inside this class
    console.log(this.x);
  }
}

const privateCls = new PrivateCls();

// console.log(privateCls.x); // Can't access from outside the class

class DerivedPrivateCls extends PrivateCls {
  // x = 1; // Class 'Derived' incorrectly extends base class 'Base'. Property 'x' is private in type 'Base' but not in type 'Derived'
}

class DogCls2 {
  #barkAmount = 0;
  personality = 'happy';

  doSomething(): void {
    // Can access this.#barkAmount only inside this class
    console.log(this.#barkAmount);
  }
}

/**
 * Static Members
 */
class StaticCls {
  static x = 0;

  static printX(): void {
    console.log(StaticCls.x);
  }
}

console.log(StaticCls.x);
StaticCls.printX();

class StaticCls2 {
  private static x = 0;

  static printX(): void {
    console.log(StaticCls2.x);
  }
}

// console.log(StaticCls2.x); // Property 'x' is private and only accessible within class 'StaticCls2'

class StaticClsBase {
  static getGreeting() {
    return 'Hello world';
  }
}

class StaticClsDerived extends StaticClsBase {
  myGreeting = StaticClsDerived.getGreeting();
}

/**
 * Generic Classes
 */
class BoxCls<Type> {
  contents: Type;

  constructor(value: Type) {
    this.contents = value;
  }
}

// b: Box<string>
const boxCls = new BoxCls('hello!');

/**
 * this based type guards
 */
class FileSystemCls {
  isFile(): this is FileRepCls {
    return this instanceof FileRepCls;
  }

  isDirectory(): this is DirectoryCls {
    return this instanceof DirectoryCls;
  }

  isNetworked(): this is NetworkedCls & this {
    return this.networked;
  }

  constructor(public path: string, private networked: boolean) {
  }
}

class FileRepCls extends FileSystemCls {
  constructor(path: string, public content: string) {
    super(path, false);
  }
}

class DirectoryCls extends FileSystemCls {
  children: FileSystemCls[] = [];
}

interface NetworkedCls {
  host: string;
}

const fileSystemCls: FileSystemCls = new FileRepCls('foo/bar.txt', 'foo');

if (fileSystemCls.isFile()) {
  // fileSystemCls: FileRep;
  console.log(fileSystemCls.content);
} else if (fileSystemCls.isDirectory()) {
  // fso: DirectoryCls
  console.log(fileSystemCls.children);
} else if (fileSystemCls.isNetworked()) {
  // fileSystemCls: NetworkedCls & FileSystemCls
  console.log(fileSystemCls.host);
}

/**
 * Parameter Properties
 */
class ParamsCls {
  constructor(
    public readonly x: number,
    protected y: number,
    private z: number,
  ) {
  }

  doSomething(): void {
    console.log(this.x, this.y, this.z);
  }
}

const paramsCls = new ParamsCls(1, 2, 3);
// paramsCls.x: number
console.log(paramsCls.x);

// console.log(paramsCls.z); // Property 'z' is private and only accessible within class 'Params'

/**
 * abstract Classes and Members
 */
abstract class BaseAbstractCls {
  abstract getName(): string;

  printName(): void {
    console.log(`Hello, ${this.getName()}`);
  }
}

// const baseAbstractCls = new BaseAbstractCls(); // Cannot create an instance of an abstract class

class DerivedAbstractCls extends BaseAbstractCls {
  getName(): string {
    return 'world';
  }
}

const derivedAbstractCls = new DerivedAbstractCls();
derivedAbstractCls.printName();
