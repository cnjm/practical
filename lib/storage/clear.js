"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isType = require("../utils/isType.js");

var clear = function clear(key) {
  if ((0, _isType.isString)(key)) {
    localStorage.removeItem(key);
  } else {
    localStorage.clear();
  }

  return true;
};

var _default = clear;
exports.default = _default;
module.exports = exports.default;