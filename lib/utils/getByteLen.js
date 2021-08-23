"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.match.js");

var _isType = require("../_internal/isType.js");

var getByteLen = function getByteLen(val, utf8) {
  if (!(0, _isType.isString)(val)) {
    return false;
  }

  if (utf8) {
    var s = val.length;

    for (var i = val.length - 1; i >= 0; i--) {
      var code = val.charCodeAt(i);
      if (code > 0x7f && code <= 0x7ff) s++;else if (code > 0x7ff && code <= 0xffff) s += 2;
      if (code >= 0xDC00 && code <= 0xDFFF) i--;
    }

    return s;
  }

  var len = 0;

  for (var _i = 0; _i < val.length; _i++) {
    var a = val.charAt(_i);

    if (a.match(/[^\x00-\xff]/ig) != null) {
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