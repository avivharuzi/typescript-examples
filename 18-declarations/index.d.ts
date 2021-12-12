/**
 * Objects with Properties
 */
declare namespace myLib {
  function makeGreeting(s: string): string;

  let numberOfGreetings: number;
}

/**
 * Overloaded Functions
 */
interface Widget {
}

declare function getWidget(n: number): Widget;
declare function getWidget(s: string): Widget[];

/**
 * Reusable Types (Interfaces)
 */
interface GreetingSettings {
  greeting: string;
  duration?: number;
  color?: string;
}

declare function greet(setting: GreetingSettings): void;

/**
 * Reusable Types (Type Aliases)
 */
type GreetingLike = string | (() => string) | MyGreeter;

declare function greet(g: GreetingLike): void;

/**
 * Organizing Types
 */
declare namespace GreetingLib {
  interface LogOptions {
    verbose?: boolean;
  }

  interface AlertOptions {
    modal: boolean;
    title?: string;
    color?: string;
  }
}

// You can also create nested namespaces in one declaration
declare namespace GreetingLib.Options {
  // Refer to via GreetingLib.Options.Log
  interface Log {
    verbose?: boolean;
  }

  interface Alert {
    modal: boolean;
    title?: string;
    color?: string;
  }
}

/**
 * Classes
 */
declare class Greeter {
  constructor(greeting: string);

  greeting: string;

  showGreeting(): void;
}

/**
 * Global Variables
 */
declare var foo: number;

/**
 * Global Functions
 */
declare function greet(greeting: string): void;
