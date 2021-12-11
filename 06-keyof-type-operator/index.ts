/**
 * The keyof type operator
 */
type Spider = {
  eyes: number;
  legs: number
};

// type SpiderKeyof = keyof Spider
type SpiderKeyof = keyof Spider;

type UnknownArray = {
  [index: number]: unknown
};

// type UnknownArrayKeyof = number
type UnknownArrayKeyof = keyof UnknownArray;

type MapStringBoolean = {
  [key: string]: boolean
};

// type MapStringBooleanKeyof = string | number
type MapStringBooleanKeyof = keyof MapStringBoolean;
