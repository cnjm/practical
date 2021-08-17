"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.regexp.to-string.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.replace.js");

require("core-js/modules/es.number.constructor.js");

var toDecimal2 = function toDecimal2(x, digit) {
  var f = parseFloat(x);

  if (isNaN(f)) {
    return false;
  }

  f = Math.round(x * digit) / digit;
  var s = f.toString();
  var rs = s.indexOf('.');

  if (rs < 0) {
    rs = s.length;
    s += '.';
  }

  while (s.length <= rs + 2) {
    s += '0';
  }

  return s;
};

var regToYuan = function regToYuan(fen) {
  var digit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  var num = fen;
  num = fen * 0.01;
  num += '';
  var reg = num.indexOf('.') > -1 ? /(\d{1,3})(?=(?:\d{3})+\.)/g : /(\d{1,3})(?=(?:\d{3})+$)/g;
  num = num.replace(reg, '$1');
  num = toDecimal2(num, digit);
  return Number(num);
};

var _default = regToYuan;
exports.default = _default;
module.exports = exports.default;