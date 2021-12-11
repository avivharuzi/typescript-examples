import './global-scope';

// From global scope
console.log(MY_GLOBAL_VALUE);

import './private';

// console.log(MY_PRIVATE_VALUE); // Can't access to MY_PRIVATE_VALUE

import getUnicorn from './default';

getUnicorn();

import { getMultiDiamonds } from './specific-exports';

getMultiDiamonds(10);

import { diamond as DIAMOND } from './specific-exports';

console.log(DIAMOND);

import mage, { mage as MAGE } from './mixed-exports';

console.log(mage);
console.log(MAGE);

import * as specific from './specific-exports';

specific.getMultiDiamonds(100);

import type { Spider } from './export-type';

const spider: Spider = {
  eyes: 4,
  legs: 8,
};

console.log(spider);

import { REAL_DOG, type Dog } from './export-type';

const dog: Dog = {
  breeds: [],
  yearOfBirth: 2021,
};

console.log(dog);
console.log(REAL_DOG);
