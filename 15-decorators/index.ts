import 'reflect-metadata';

/**
 * Class Decorators
 */
function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

@sealed
class BugReport {
  type = 'report';
  title: string;

  constructor(title: string) {
    this.title = title;
  }
}

const bugReport = new BugReport('some report');
console.log(bugReport.title);

function reportableClassDecorator<T extends { new(...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    reportingURL = 'https://www.google.com';
  };
}

@reportableClassDecorator
class BugReport2 {
  type = 'report';
  title: string;

  constructor(title: string) {
    this.title = title;
  }
}

const bugReport2 = new BugReport2('Needs dark mode');
console.log(bugReport2.title); // Prints 'Needs dark mode'
console.log(bugReport2.type); // Prints 'report'
// console.log(bugReport2.reportingURL); // Property 'reportingURL' does not exist on type 'BugReport'.

/**
 * Method Decorators
 */
function enumerable(value: boolean) {
  return function (
    _target: any,
    _propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    descriptor.enumerable = value;
  };
}

class EnumerableCls {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  @enumerable(false)
  greet(): string {
    return `Hello, ${this.name}`;
  }
}

const enumerableCls = new EnumerableCls('Aviv');
console.log(enumerableCls.greet());

/**
 * Accessor Decorators
 */
function configurable(value: boolean) {
  return function (
    _target: any,
    _propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    descriptor.configurable = value;
  };
}

class ConfigurableCls {
  private readonly _x: number;
  private readonly _y: number;

  constructor(x: number, y: number) {
    this._x = x;
    this._y = y;
  }

  @configurable(false)
  get x() {
    return this._x;
  }

  @configurable(false)
  get y() {
    return this._y;
  }
}

const configurableCls = new ConfigurableCls(1, 2);
console.log(configurableCls.x, configurableCls.y);

/**
 * Property Decorators
 */

const formatMetadataKey = Symbol('format');

function format(formatString: string) {
  return Reflect.metadata(formatMetadataKey, formatString);
}

function getFormat(target: any, propertyKey: string) {
  return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
}

class FormatCls {
  @format('Hello, %s')
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  greet(): string {
    let formatString = getFormat(this, 'greeting');
    return formatString.replace('%s', this.greeting);
  }
}

const formatCls = new FormatCls('Hi there');
console.log(formatCls.greet());

/**
 * Parameter Decorators
 */
const requiredMetadataKey = Symbol('required');

function required(
  target: Object,
  propertyKey: string | symbol,
  parameterIndex: number,
) {
  let existingRequiredParameters: number[] = Reflect.getOwnMetadata(
    requiredMetadataKey,
    target,
    propertyKey,
  ) || [];
  existingRequiredParameters.push(parameterIndex);
  Reflect.defineMetadata(
    requiredMetadataKey,
    existingRequiredParameters,
    target,
    propertyKey,
  );
}

function validate(
  target: any,
  propertyName: string,
  descriptor: TypedPropertyDescriptor<Function>,
) {
  let method = descriptor.value!;

  descriptor.value = function () {
    let requiredParameters: number[] = Reflect.getOwnMetadata(
      requiredMetadataKey,
      target,
      propertyName,
    );
    if (requiredParameters) {
      for (let parameterIndex of requiredParameters) {
        if (parameterIndex >= arguments.length || arguments[parameterIndex] === undefined) {
          throw new Error('Missing required argument.');
        }
      }
    }
    return method.apply(this, arguments);
  };
}

class BugReport3 {
  type = 'report';
  title: string;

  constructor(title: string) {
    this.title = title;
  }

  // @ts-ignore
  @validate
  print(@required verbose: boolean): string {
    if (verbose) {
      return `type: ${this.type}\ntitle: ${this.title}`;
    } else {
      return this.title;
    }
  }
}

const bugReport3 = new BugReport3('other report');
console.log(bugReport3.print(true));
