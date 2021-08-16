"use strict";

require("core-js/modules/es.array.slice.js");

require("core-js/modules/es.function.name.js");

require("core-js/modules/es.array.from.js");

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.symbol.iterator.js");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/es.weak-map.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.regexp.constructor.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.regexp.to-string.js");

require("core-js/modules/es.set.js");

require("core-js/modules/es.map.js");

require("core-js/modules/es.weak-set.js");

require("core-js/modules/es.array.includes.js");

require("core-js/modules/es.string.includes.js");

require("core-js/modules/es.object.get-own-property-descriptors.js");

require("core-js/modules/es.object.get-prototype-of.js");

require("core-js/modules/es.symbol.js");

require("core-js/modules/web.dom-collections.for-each.js");

require("core-js/modules/es.reflect.own-keys.js");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var isComplexDataType = function isComplexDataType(obj) {
  return ((0, _typeof2.default)(obj) === 'object' || typeof obj === 'function') && obj !== null;
};

var cloneDeep = function cloneDeep(obj) {
  var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new WeakMap();
  if (hash.has(obj)) return hash.get(obj);
  var type = [Date, RegExp, Set, Map, WeakMap, WeakSet];
  if (type.includes(obj.constructor)) return new obj.constructor(obj);
  var allDesc = Object.getOwnPropertyDescriptors(obj);
  var cloneObj = Object.create(Object.getPrototypeOf(obj), allDesc);
  var symKeys = Object.getOwnPropertySymbols(obj);

  if (symKeys.length > 0) {
    symKeys.forEach(function (symKey) {
      cloneObj[symKey] = isComplexDataType(obj[symKey]) ? cloneDeep(obj[symKey], hash) : obj[symKey];
    });
  }

  hash.set(obj, cloneObj);

  var _iterator = _createForOfIteratorHelper(Reflect.ownKeys(obj)),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var key = _step.value;
      cloneObj[key] = isComplexDataType(obj[key]) && typeof obj[key] !== 'function' ? cloneDeep(obj[key], hash) : obj[key];
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return cloneObj;
};

var _default = cloneDeep;
exports.default = _default;
module.exports = exports.default;