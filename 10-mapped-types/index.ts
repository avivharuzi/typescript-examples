type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};

type FeatureFlags = {
  darkMode: () => void;
  newUserProfile: () => void;
};

// type FeatureOptions = { darkMode: boolean; newUserProfile: boolean; }
type FeatureOptions = OptionsFlags<FeatureFlags>;

/**
 * Mapping Modifiers
 */
// Removes 'readonly' attributes from a type's properties
type CreateMutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property];
};

type LockedAccount = {
  readonly id: string;
  readonly name: string;
};

// type UnlockedAccount = { id: string; name: string; }
type UnlockedAccount = CreateMutable<LockedAccount>;

// Removes 'optional' attributes from a type's properties
type Concrete<Type> = {
  [Property in keyof Type]-?: Type[Property];
};

type MaybeUser = {
  id: string;
  name?: string;
  age?: number;
};

// type ConcreteMaybeUser = { id: string; name: string; age: number; }
type ConcreteMaybeUser = Concrete<MaybeUser>;

/**
 * Key Remapping via as
 */
type Getters<Type> = {
  [Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property]
};

interface SpecialPerson {
  name: string;
  age: number;
  location: string;
}

// type LazyPerson = { getName: () => string; getAge: () => number; getLocation: () => string; }
type LazyPerson = Getters<SpecialPerson>;

// Remove the 'kind' property
type RemoveKindField<Type> = {
  [Property in keyof Type as Exclude<Property, 'kind'>]: Type[Property]
};

interface Circle {
  kind: 'circle';
  radius: number;
}

// type KindLessCircle = { radius: number; }
type KindLessCircle = RemoveKindField<Circle>;

type EventConfig<Events extends { kind: string }> = {
  [E in Events as E['kind']]: (event: E) => void;
}

type SquareEvent = {
  kind: 'square',
  x: number,
  y: number
};

type CircleEvent = {
  kind: 'circle',
  radius: number
};

// type Config = { square: (event: SquareEvent) => void; circle: (event: CircleEvent) => void; }
type Config = EventConfig<SquareEvent | CircleEvent>
