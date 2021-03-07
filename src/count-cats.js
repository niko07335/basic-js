const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let a = 0;
  for (i = 0; i < matrix.length; i += 1) {
    for (j = 0; j < matrix[i].length; j += 1) {
      if (matrix[i][j] === '^^') a += 1;
    }
  }
  return a;
};
