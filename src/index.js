
exports.min = function min(array) {
  if (!Array.isArray(array) || array.length === 0) return 0;
  return result = array.reduce((minimal, value) => {
    if (minimal > value) minimal = value;
    return minimal;
  }, array[0]);
};

exports.max = function max(array) {
  if (!Array.isArray(array) || array.length === 0) return 0;
  return result = array.reduce((maximal, value) => {
    if (maximal < value) maximal = value;
    return maximal;
  }, array[0]);
};

exports.avg = function avg(array) {
  if (!Array.isArray(array) || array.length === 0) return 0;
  let sum = array.reduce((sum, value) => {
    return sum += value;
  }, 0);
  return sum / array.length;
};
