"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isType = require("../_internal/isType.js");

var copy = function copy(str) {
  var el = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "body";

  if (!document || !(0, _isType.isString)(str)) {
    return false;
  }

  var input = document.createElement('input');
  var a = document.querySelector(el);
  input.value = str;
  a.append(input);
  input.select();
  document.execCommand('Copy');
  a.removeChild(input);
  return true;
};

var _default = copy;
exports.default = _default;
module.exports = exports.default;