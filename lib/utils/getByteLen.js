"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.match.js");

var _isType = require("../_internal/isType.js");

var getByteLen = function getByteLen(val) {
  if (!(0, _isType.isString)(val)) {
    return false;
  }

  var len = 0;

  for (var i = 0; i < val.length; i++) {
    var a = val.charAt(i);

    if (a.match(/[^\x00-\xff]/ig) != null) {
      // \x00-\xff→GBK双字节编码范围内
      len += 2;
    } else {
      len += 1;
    }
  }

  return len;
};

var _default = getByteLen;
exports.default = _default;
module.exports = exports.default;