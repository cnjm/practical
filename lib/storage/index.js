"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _get = _interopRequireDefault(require("./get.js"));

var _getAll = _interopRequireDefault(require("./getAll.js"));

var _set = _interopRequireDefault(require("./set.js"));

var _setAll = _interopRequireDefault(require("./setAll.js"));

var _clear = _interopRequireDefault(require("./clear.js"));

var _default = {
  get: _get.default,
  getAll: _getAll.default,
  set: _set.default,
  setAll: _setAll.default,
  clear: _clear.default
};
exports.default = _default;
module.exports = exports.default;