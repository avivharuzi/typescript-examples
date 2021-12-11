type Student = {
  fullName: string,
  age: number,
  hasGraduate: boolean,
};

// type StudentAge = number
type StudentAge = Student['age'];

// type StudentFullNameOrAge = string | number
type StudentFullNameOrAge = Student['fullName' | 'age'];

// type StudentAllTypes = string | number | boolean
type StudentAllTypes = Student[keyof Student];

type FullNameOrHasGraduate = 'fullName' | 'hasGraduate';
// type StudentFullNameOrHasGraduate = string | boolean
type StudentFullNameOrHasGraduate = Student[FullNameOrHasGraduate];

const PersonList = [
  { name: 'Alice', age: 15 },
  { name: 'Bob', age: 23 },
  { name: 'Eve', age: 38 },
];

// type PersonItem = { name: string; age: number; }
type PersonItem = typeof PersonList[number];

// type PersonItemAge = number
type PersonItemAge = typeof PersonList[number]['age'];

// type PersonItemAge2 = number
type PersonItemAge2 = PersonItem['age'];
