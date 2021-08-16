"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isType = require("../_internal/isType.js");

var set = function set() {
  if (arguments.length <= 0 || arguments.length > 2) {
    return false;
  }

  if (arguments.length === 1) {
    localStorage.setItem(arguments.length <= 0 ? undefined : arguments[0], "");
    return true;
  }

  if ((0, _isType.isObject)(arguments.length <= 1 ? undefined : arguments[1]) || (0, _isType.isArray)(arguments.length <= 1 ? undefined : arguments[1]) || (0, _isType.isString)(arguments.length <= 1 ? undefined : arguments[1])) {
    if (arguments.length === 2) {
      localStorage.setItem(arguments.length <= 0 ? undefined : arguments[0], (0, _isType.isObject)(arguments.length <= 1 ? undefined : arguments[1]) || (0, _isType.isArray)(arguments.length <= 1 ? undefined : arguments[1]) ? JSON.stringify(arguments.length <= 1 ? undefined : arguments[1]) : arguments.length <= 1 ? undefined : arguments[1]);
      return arguments.length <= 1 ? undefined : arguments[1];
    }
  }

  return false;
};

var _default = set;
exports.default = _default;
module.exports = exports.default;