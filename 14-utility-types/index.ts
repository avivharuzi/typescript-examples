/**
 * Partial<Type>
 *
 * Constructs a type with all properties of Type set to optional.
 */
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return {
    ...todo,
    ...fieldsToUpdate,
  };
}

const todo = {
  title: 'organize desk',
  description: 'clear clutter',
  completed: false,
};

const updatedTodo = updateTodo(todo, {
  description: 'throw out trash',
});

/**
 * Required<Type>
 *
 * Constructs a type consisting of all properties of Type set to required.
 */
interface Props {
  a?: number;
  b?: string;
}

const props: Props = {
  a: 5,
};

// const props2: Required<Props> = { a: 5 }; // Property 'b' is missing in type '{ a: number; }' but required in type 'Required<Props>'

/**
 * Readonly<Type>
 *
 * Constructs a type with all properties of Type set to readonly, meaning the properties of the constructed type cannot be reassigned.
 */
const todoReadonly: Readonly<Todo> = {
  title: 'Delete',
  description: 'Delete inactive users',
  completed: false,
};

// todoReadonly.title = 'Hello'; // Cannot assign to 'title' because it is a read-only property

/**
 * Record<Keys, Type>
 *
 * Constructs an object type whose property keys are Keys and whose property values are Type.
 */
interface CatInfo {
  age: number;
  breed: string;
}

type CatName = 'miffy' | 'boris' | 'mordred';

const cats: Record<CatName, CatInfo> = {
  miffy: {
    age: 10,
    breed: 'Persian',
  },
  boris: {
    age: 5,
    breed: 'Maine Coon',
  },
  mordred: {
    age: 16,
    breed: 'British Shorthair',
  },
};

// cats: Record<CatName, CatInfo>
console.log(cats);

/**
 * Pick<Type, Keys>
 *
 * Constructs a type by picking the set of properties Keys (string literal or union of string literals) from Type.
 */
type TodoPreview = Pick<Todo, 'title' | 'completed'>;

const todoPreview: TodoPreview = {
  title: 'Clean room',
  completed: false,
};

// todoPreview: TodoPreview
console.log(todoPreview);

/**
 * Omit<Type, Keys>
 *
 * Constructs a type by picking all properties from Type and then removing Keys (string literal or union of string literals).
 */
type TodoPreview2 = Omit<Todo, 'description'>;

const todoPreview2: TodoPreview2 = {
  title: 'Clean room',
  completed: false,
};

// todoPreview2: TodoPreview2
console.log(todoPreview2);

/**
 * Exclude<Type, ExcludedUnion>
 *
 * Constructs a type by excluding from Type all union members that are assignable to ExcludedUnion.
 */
// type ExcludeExample = 'b' | 'c'
type ExcludeExample = Exclude<'a' | 'b' | 'c', 'a'>;

// type ExcludeExample2 = 'c'
type ExcludeExample2 = Exclude<'a' | 'b' | 'c', 'a' | 'b'>;

// type ExcludeExample3 = string | number
type ExcludeExample3 = Exclude<string | number | (() => void), Function>;

/**
 * Extract<Type, Union>
 *
 * Constructs a type by extracting from Type all union members that are assignable to Union.
 */
// type ExtractExample = 'a'
type ExtractExample = Extract<'a' | 'b' | 'c', 'a' | 'f'>;

// type ExtractExample2 = () => void
type ExtractExample2 = Extract<string | number | (() => void), Function>;

/**
 * NonNullable<Type>
 *
 * Constructs a type by excluding null and undefined from Type.
 */
// type NonNullableExample = string | number
type NonNullableExample = NonNullable<string | number | undefined>;

// type NonNullableExample2 = string[]
type NonNullableExample2 = NonNullable<string[] | null | undefined>;

/**
 * Parameters<Type>
 *
 * Constructs a tuple type from the types used in the parameters of a function type Type.
 */
declare function parametersExampleFunc(input: { a: number; b: string }): void;

// type ParametersExample = []
type ParametersExample = Parameters<() => string>;

// type ParametersExample2 = [input: string]
type ParametersExample2 = Parameters<(input: string) => void>;

// type ParametersExample3 = [input: unknown]
type ParametersExample3 = Parameters<<T>(input: T) => T>;

// type ParametersExample4 = [input: { a: number; b: string }]
type ParametersExample4 = Parameters<typeof parametersExampleFunc>;

// type ParametersExample5 = unknown[]
type ParametersExample5 = Parameters<any>;

// type ParametersExample6 = never
type ParametersExample6 = Parameters<never>;

// type ParametersExample7 = never
// type ParametersExample7 = Parameters<string>; // Type 'string' does not satisfy the constraint '(...args: any) => any'

// type ParametersExample8 = never
// type ParametersExample8 = Parameters<Function>; // Type 'Function' does not satisfy the constraint '(...args: any) => any'. Type 'Function' provides no match for the signature '(...args: any): any'

/**
 * ConstructorParameters<Type>
 *
 * Constructs a tuple or array type from the types of a constructor function type.
 */
// type ConstructorParametersExample = [message?: string]
type ConstructorParametersExample = ConstructorParameters<ErrorConstructor>;

// type ConstructorParametersExample2 = string[]
type ConstructorParametersExample2 = ConstructorParameters<FunctionConstructor>;

// type ConstructorParametersExample3 = [pattern: string | RegExp, flags?: string]
type ConstructorParametersExample3 = ConstructorParameters<RegExpConstructor>;

// type ConstructorParametersExample4 = unknown[]
type ConstructorParametersExample4 = ConstructorParameters<any>;

// type ConstructorParametersExample5 = never
// type ConstructorParametersExample5 = ConstructorParameters<Function>; // Type 'Function' does not satisfy the constraint 'abstract new (...args: any) => any'. Type 'Function' provides no match for the signature 'new (...args: any): any'

/**
 * ReturnType<Type>
 *
 * Constructs a type consisting of the return type of function Type.
 */
declare function returnTypeExampleFunc(): { a: number; b: string };

// type ReturnTypeExample = string
type ReturnTypeExample = ReturnType<() => string>;

// type ReturnTypeExample2 = void
type ReturnTypeExample2 = ReturnType<(s: string) => void>;

// type ReturnTypeExample3 = unknown
type ReturnTypeExample3 = ReturnType<<T>() => T>;

// type ReturnTypeExample4 = number[]
type ReturnTypeExample4 = ReturnType<<T extends U, U extends number[]>() => T>;

// type ReturnTypeExample5 = { a: number; b: string; }
type ReturnTypeExample5 = ReturnType<typeof returnTypeExampleFunc>;

// type ReturnTypeExample6 = any
type ReturnTypeExample6 = ReturnType<any>;

// type ReturnTypeExample7 = never
type ReturnTypeExample7 = ReturnType<never>;

// type ReturnTypeExample8 = any
// type ReturnTypeExample8 = ReturnType<string>; Type 'string' does not satisfy the constraint '(...args: any) => any'

// type ReturnTypeExample9 = any
// type ReturnTypeExample9 = ReturnType<Function>; // Type 'Function' does not satisfy the constraint '(...args: any) => any'. Type 'Function' provides no match for the signature '(...args: any): any'

/**
 * InstanceType<Type>
 *
 * Constructs a type consisting of the instance type of a constructor function in Type.
 */
class Magician {
  name = 'Merlin';
}

// type InstanceTypeExample = Magician
type InstanceTypeExample = InstanceType<typeof Magician>;

// type InstanceTypeExample2 = any
type InstanceTypeExample2 = InstanceType<any>;

// type InstanceTypeExample3 = never
type InstanceTypeExample3 = InstanceType<never>;

// type InstanceTypeExample4 = any
// type InstanceTypeExample4 = InstanceType<string>; // Type 'string' does not satisfy the constraint 'abstract new (...args: any) => any'

// type InstanceTypeExample5 = any
// type InstanceTypeExample5 = InstanceType<Function>; // Type 'Function' does not satisfy the constraint 'abstract new (...args: any) => any'. Type 'Function' provides no match for the signature 'new (...args: any): any'

/**
 * ThisParameterType<Type>
 *
 * Extracts the type of the this parameter for a function type, or unknown if the function type has no this parameter.
 */
function toHex(this: Number) {
  return this.toString(16);
}

function numberToString(n: ThisParameterType<typeof toHex>) {
  return toHex.apply(n);
}

/**
 * OmitThisParameter<Type>
 *
 * Removes the this parameter from Type.
 */
function toHex2(this: Number) {
  return this.toString(16);
}

const fiveToHex: OmitThisParameter<typeof toHex2> = toHex.bind(5);

// fiveToHex: () => string
console.log(fiveToHex());

/**
 * ThisType<Type>
 *
 * This utility does not return a transformed type. Instead, it serves as a marker for a contextual this type.
 */
type ThisTypeExample<D, M> = {
  data?: D;
  methods?: M & ThisType<D & M>; // Type of 'this' in methods is D & M
};

function thisTypeExampleFunc<D, M>(desc: ThisTypeExample<D, M>): D & M {
  let data: object = desc.data || {};
  let methods: object = desc.methods || {};
  return { ...data, ...methods } as D & M;
}

let thisTypeExample = thisTypeExampleFunc({
  data: { x: 0, y: 0 },
  methods: {
    moveBy(dx: number, dy: number) {
      this.x += dx; // Strongly typed this
      this.y += dy; // Strongly typed this
    },
  },
});

thisTypeExample.x = 10;
thisTypeExample.y = 20;
thisTypeExample.moveBy(5, 5);

/**
 * Uppercase<StringType>
 */
// type WithUpper = 'HELLO'
type WithUpper = Uppercase<'hello'>;

/**
 * Lowercase<StringType>
 */
// type WithLower = 'hello'
type WithLower = Lowercase<'HELLO'>;

/**
 * Capitalize<StringType>
 */
// WithCapitalize = 'Hello'
type WithCapitalize = Capitalize<'hello'>;

/**
 * Uncapitalize<StringType>
 */
// WithUncapitalize = 'hELLO'
type WithUncapitalize = Uncapitalize<'HELLO'>;
