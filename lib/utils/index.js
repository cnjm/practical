"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _copy = _interopRequireDefault(require("./copy.js"));

var _cloneDeep = _interopRequireDefault(require("./cloneDeep.js"));

var _uaCheck = _interopRequireDefault(require("./uaCheck.js"));

var _default = {
  copy: _copy.default,
  cloneDeep: _cloneDeep.default,
  uaCheck: _uaCheck.default
};
exports.default = _default;
module.exports = exports.default;