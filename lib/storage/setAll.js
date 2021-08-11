"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.for-each.js");

require("core-js/modules/es.object.keys.js");

var _set = _interopRequireDefault(require("./set.js"));

var setAll = function setAll(obj) {
  Object.keys(obj).forEach(function (name) {
    (0, _set.default)(name, obj[name]);
  });
  return true;
};

var _default = setAll;
exports.default = _default;
module.exports = exports.default;