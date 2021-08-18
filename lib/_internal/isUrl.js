"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isUrl = void 0;

var _isType = require("./isType.js");

var isUrl = function isUrl(url) {
  return (0, _isType.isString)(url) && /^https?:\/\//.test(url);
};

exports.isUrl = isUrl;