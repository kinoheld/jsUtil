/**
 * Returns a new array with unique values. Does not work
 * for multidimensional arrays.
 * @param {Array} array
 * @return {Array}
 */
function arrayUnique(array) {
  return array.filter((elem, pos, arr) => arr.indexOf(elem) === pos);
}

export { arrayUnique };
