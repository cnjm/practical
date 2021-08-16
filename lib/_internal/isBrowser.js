"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined';
var _default = isBrowser;
exports.default = _default;
module.exports = exports.default;