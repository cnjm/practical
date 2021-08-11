"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isType = require("../utils/isType.js");

var set = function set() {
  for (var _len = arguments.length, arg = new Array(_len), _key = 0; _key < _len; _key++) {
    arg[_key] = arguments[_key];
  }

  if (arg.length <= 0 || arg.length > 3) {
    return false;
  }

  if (arg.length === 1) {
    localStorage.setItem(arg[0], "");
    return true;
  }

  if ((0, _isType.isObject)(arg[1]) || (0, _isType.isArray)(arg[1]) || (0, _isType.isString)(arg[1])) {
    if (arg.length === 2) {
      localStorage.setItem(arg[0], (0, _isType.isObject)(arg[1]) || (0, _isType.isArray)(arg[1]) ? JSON.stringify(arg[1]) : arg[1]);
      return true;
    }

    if (arg.length === 3) {
      //三个参数默认单存
      var obj = JSON.parse(localStorage.getItem(arg[0]));
      obj[arg[1]] = arg[2];
      localStorage.setItem(arg[0], JSON.stringify(obj));
      return true;
    }
  }

  return false;
};

var _default = set;
exports.default = _default;
module.exports = exports.default;