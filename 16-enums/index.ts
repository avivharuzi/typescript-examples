/**
 * Numeric enums
 */
enum RegularDirection {
  Up, // 0
  Down, // 1
  Left, // 2
  Right, // 3
}

enum ModifyDirection {
  Up = 1,
  Down, // 2
  Left, // 3
  Right, // 4
}

enum UserResponse {
  No = 0,
  Yes = 1,
}

declare function respondTo(recipient: string, message: UserResponse): void;

respondTo('Princess Caroline', UserResponse.Yes);

/**
 * String enums
 */
enum StrDirection {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
}

/**
 * Heterogeneous enums
 */
enum BooleanLikeHeterogeneousEnum {
  No = 0,
  Yes = 'YES',
}

/**
 * Computed and constant members
 */
enum FileAccess {
  None, // constant members
  Read = 1 << 1,
  Write = 1 << 2,
  ReadWrite = Read | Write,
  G = '123'.length, // computed member
}

/**
 * const enums
 */
const enum ConstDirection {
  Up,
  Down,
  Left,
  Right,
}

const constDirections = [
  ConstDirection.Up,
  ConstDirection.Down,
  ConstDirection.Left,
  ConstDirection.Right,
];
