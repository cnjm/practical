"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isType = require("../_internal/isType.js");

var diff = function diff(date1, date2, unit) {
  var roundFunc = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function (num) {
    return Math.round(num);
  };
  var d1 = (0, _isType.isDate)(date1) ? date1 : new Date(date1);
  var d2 = (0, _isType.isDate)(date2) ? date2 : new Date(date2);
  var dateDiff = d2.getTime() - d1.getTime();
  var result = 0;

  switch (unit) {
    case 'Y':
      result = roundFunc(dateDiff / (365 * 24 * 60 * 60 * 1000));
      break;

    case 'M':
      result = roundFunc(dateDiff / (30 * 24 * 60 * 60 * 1000));
      break;

    case 'D':
      result = roundFunc(dateDiff / (24 * 60 * 60 * 1000));
      break;

    case 'h':
      result = roundFunc(dateDiff / (60 * 60 * 1000));
      break;

    case 'm':
      result = roundFunc(dateDiff / (60 * 1000));
      break;

    case 's':
      result = roundFunc(dateDiff / 1000);
      break;

    case 'ms':
    default:
      result = dateDiff;
      break;
  }

  return result;
};

var _default = diff;
exports.default = _default;
module.exports = exports.default;