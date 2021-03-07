const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) return "Unable to determine the time of year!";
  const mounth = Date.prototype.getMonth.call(date);

  if (mounth >= 0 && mounth < 2 || mounth === 11) return 'winter';
    else if  (mounth >= 2 && mounth < 5) return 'spring';
    else if  (mounth >= 5 && mounth < 8) return 'summer';
    else if  (mounth >= 8 && mounth < 11) return 'autumn';А
};
