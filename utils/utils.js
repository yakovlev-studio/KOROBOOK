import { Dimensions, Platform } from "react-native";

const { width: viewportWidth, height: viewportHeight } = Dimensions.get("window");

export const wp = percentage => Math.round((percentage * viewportWidth) / 100);
export const hp = percentage => Math.round((percentage * viewportHeight) / 100);
export const calculatePercentOfTotal = (percent, total) => Math.round((percent * total) / 100);
export const renderPlatformSpecificIcon = iconName => {
  return Platform.OS === "android" ? `md-${iconName}` : `ios-${iconName}`;
};

export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties
  };
};

/**
 *
 * @param {*} [a, b] - sorted array of integers
 * @param {*} c - criteria integer, condition we compare other two numbers out of
 * @returns further number to criteria integer
 */
function furtherNumberOutOfTwo([a, b], c) {
  if (Math.abs(c - b) > Math.abs(c - a)) {
    return b;
  }
  return a;
}

/**
 *
 * @param {*} array - sorted array
 * @param {*} value - value to insert
 * @returns index of an inserted value
 */
function sortedIndex(array, value) {
  var low = 0,
    high = array.length;

  while (low < high) {
    var mid = (low + high) >>> 1;
    if (array[mid] < value) low = mid + 1;
    else high = mid;
  }
  return low;
}

/**
 *
 *
 * @param {*} coordinate - value to check if in the center of an array
 * @param {*} point0 - first edge point
 * @param {*} point1 - second edge point
 * @returns true if value's index === 1 and false in not
 */
function isValueInTheMiddleOfSortedArray(coordinate, point0, point1) {
  var axis = [point0, point1];
  var index = sortedIndex(axis, coordinate);
  if (index !== 1) {
    return false;
  }
  return true;
}

/**
 *
 *
 * @param {*} a
 * @param {*} b
 * @returns true if both arrays are equal
 */
function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

/**
 *
 *
 * @param {*} f
 * @param {*} g
 * @returns
 */
function compose(f, g) {
  return function(...args) {
    return f(g(...args));
  };
}

/**
 *
 *
 * @param {*} fns
 * @returns
 */
function produceCalculation(...fns) {
  return fns.reduce(compose);
}

export {
  furtherNumberOutOfTwo,
  sortedIndex,
  isValueInTheMiddleOfSortedArray,
  arraysEqual,
  compose,
  produceCalculation
};
