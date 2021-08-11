"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.number.constructor.js");

require("core-js/modules/web.dom-collections.for-each.js");

require("core-js/modules/es.object.keys.js");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _isType = require("../utils/isType.js");

var get = function get() {
  for (var _len = arguments.length, arg = new Array(_len), _key = 0; _key < _len; _key++) {
    arg[_key] = arguments[_key];
  }

  if (arg.length <= 0 || arg.length > 2) {
    return false;
  }

  var obj = null;

  try {
    obj = JSON.parse(localStorage.getItem(arg[0]));
  } catch (e) {
    obj = localStorage.getItem(arg[0]);
  }

  if (arg.length === 1) {
    return obj;
  }

  if (arg.length === 2) {
    if ((0, _isType.isString)(arg[1]) && (0, _isType.isArray)(obj)) {
      var result = null;

      var _loop = function _loop(i) {
        if ((0, _isType.isObject)(obj[i])) {
          Object.keys(obj[i]).forEach(function (name) {
            if (name === arg[1]) {
              result = obj[i][name];
            }
          });
        }

        if (result) {
          return {
            v: result
          };
        }
      };

      for (var i = 0; i < obj.length; i++) {
        var _ret = _loop(i);

        if ((0, _typeof2.default)(_ret) === "object") return _ret.v;
      }

      return obj[Number(arg[1])] || false;
    }

    return obj[arg[1]];
  }

  return false;
};

var _default = get;
exports.default = _default;
module.exports = exports.default;