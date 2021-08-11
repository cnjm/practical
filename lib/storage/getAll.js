"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.for-each.js");

require("core-js/modules/es.object.keys.js");

var _get = _interopRequireDefault(require("./get.js"));

var getAll = function getAll() {
  var obj = {};
  Object.keys(localStorage).forEach(function (name) {
    obj[name] = (0, _get.default)(name);
  });
  return obj;
};

var _default = getAll;
exports.default = _default;
module.exports = exports.default;