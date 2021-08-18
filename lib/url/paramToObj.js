"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.split.js");

require("core-js/modules/es.string.replace.js");

var _isUrl = require("../_internal/isUrl.js");

var paramToObj = function paramToObj(url) {
  if (!(0, _isUrl.isUrl)(url)) {
    return false;
  }

  var search = url.split('?')[1];

  if (!search) {
    return {};
  }

  return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"').replace(/\+/g, ' ') + '"}');
};

var _default = paramToObj;
exports.default = _default;
module.exports = exports.default;