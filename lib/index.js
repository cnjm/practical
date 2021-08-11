"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("./date/index.js"));

var _index2 = _interopRequireDefault(require("./storage/index.js"));

// import * as date from './date/index.js'
var _default = {
  date: _index.default,
  storage: _index2.default
};
exports.default = _default;
module.exports = exports.default;