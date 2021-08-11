"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _format = _interopRequireDefault(require("./format.js"));

var _diff = _interopRequireDefault(require("./diff.js"));

var _default = {
  format: _format.default,
  diff: _diff.default
};
exports.default = _default;
module.exports = exports.default;