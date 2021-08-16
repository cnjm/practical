"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isBrowser = _interopRequireDefault(require("../_internal/isBrowser.js"));

var testMap = {
  Windows: /Windows/,
  MacOS: /Macintosh/,
  Linux: /Linux|X11/,
  Android: /Android|Adr/,
  IOS: /like Mac OS X/,
  Mobile: /Mobi|iPh|480/,
  Tablet: /Tablet|Pad|Nexus 7/,
  WeChat: /MicroMessenger/,
  IPhone: /iPhone|iPod/,
  IPad: /iPad/
};
var userAgent = _isBrowser.default ? window.navigator.userAgent : '';

var uaCheck = function uaCheck(type) {
  return testMap[type].test(userAgent);
};

var _default = uaCheck;
exports.default = _default;
module.exports = exports.default;