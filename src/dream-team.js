const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let res = [];
  members.forEach(e => {
    if (typeof e === "string") {
      e = e.trim().charAt(0).toUpperCase();
      res.push(e);
    }
  })
  return res.sort().join('');

};
