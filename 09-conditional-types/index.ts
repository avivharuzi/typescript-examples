interface Animal {
  live(): void;
}

interface Dog extends Animal {
  woof(): void;
}

// type AnimalConditional1 = number
type AnimalConditional1 = Dog extends Animal ? number : string;

// type AnimalConditional2 = string
type AnimalConditional2 = RegExp extends Animal ? number : string;

type MessageOf<T> = T extends { message: unknown } ? T['message'] : never;

interface Email {
  message: string;
}

interface Dog {
  bark(): void;
}

// type EmailMessageContents = string
type EmailMessageContents = MessageOf<Email>;

// type DogMessageContents = never
type DogMessageContents = MessageOf<Dog>;

/**
 * Inferring Within Conditional Types
 */
type Flatten<Type> = Type extends Array<infer Item> ? Item : Type;

// type FlattenStr = string
type FlattenStr = Flatten<string[]>;

// type FlattenNum = number
type FlattenNum = Flatten<number>;

/**
 * Distributive Conditional Types
 */
type ToArray<Type> = Type extends any ? Type[] : never;

// type StrArrOrNumArr = string[] | number[]
type StrArrOrNumArr = ToArray<string | number>;
