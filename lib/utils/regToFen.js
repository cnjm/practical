"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.number.constructor.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.regexp.to-string.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.split.js");

require("core-js/modules/es.string.replace.js");

var regToFen = function regToFen(yuan) {
  var digit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  var yuannum = Number(yuan);
  var digitnum = Number(digit);
  var m = 0;
  var s1 = yuannum.toString();
  var s2 = digitnum.toString();

  if (s1.split('.')[1]) {
    m += s1.split('.')[1].length;
  }

  if (s2.split('.')[1]) {
    m += s2.split('.')[1].length;
  }

  return Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m);
};

var _default = regToFen;
exports.default = _default;
module.exports = exports.default;