
exports.min = function min (array) {
  if (!array || array.length == 0) return 0; 
  let minimal = array[0];
  result = array.reduce((minimal, value) => {
    if (minimal > value) minimal = value;
    return minimal;
  }, minimal);
  return result;
}

exports.max = function max (array) {
  if (!array || array.length == 0) return 0; 
  let maximal = array[0];
  result = array.reduce((maximal, value) => {
    if (maximal < value) maximal = value;
    return maximal;
  }, maximal);
  return result;
}

exports.avg = function avg (array) {
  if (!array || array.length == 0) return 0; 
  let sum = 0;
  result = array.map(value => {
    sum = sum + value;
  });
  return sum/array.length;
}
