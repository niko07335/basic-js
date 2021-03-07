const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw "Error";

  let res = [];
  for (let i = 0; i < arr.length; i += 1) {
    let a = 0;
    switch (arr[i]) {
      case "--discard-next":
        i += 1;
        break;

      case "--double-next":
        if (i !== arr.length - 1) {
          res.push(arr[i + 1]);
        }
        break;

      case "--discard-prev":
        if (res.length !== 0 && arr[i - 2] !== '--discard-next') res.pop()
        break;

      case "--double-prev":
        if (res.length !== 0 && arr[i - 2] !== '--discard-next') res.push(arr[i - 1]);
        break;

      default:
        res.push(arr[i]);
    }
  }
  return res;
}
