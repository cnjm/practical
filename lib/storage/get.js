"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var get = function get(arg) {
  if (!arg) {
    return false;
  }

  var obj = null;

  try {
    obj = JSON.parse(localStorage.getItem(arg));
  } catch (e) {
    obj = localStorage.getItem(arg);
  }

  return obj || false;
};

var _default = get;
exports.default = _default;
module.exports = exports.default;