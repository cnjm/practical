"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

require("core-js/modules/es.object.keys.js");

require("core-js/modules/es.array.splice.js");

var _isType = require("../_internal/isType.js");

var _set = _interopRequireDefault(require("./set.js"));

var _get = _interopRequireDefault(require("./get.js"));

var _clear = _interopRequireDefault(require("./clear.js"));

var getTarget = function getTarget(arr, subKey) {
  var result = null;
  var objArr = [];

  outfor: for (var i = 0; i < arr.length; i++) {
    if ((0, _isType.isObject)(arr[i])) {
      objArr = Object.keys(arr[i]);

      for (var j = 0; j < objArr.length; j++) {
        if (objArr[j] === subKey) {
          result = {
            index: i,
            value: arr[i]
          };
          break outfor;
        }
      }
    }
  }

  return result || false;
};

var que = function que(arg) {
  var method = arg.method,
      key = arg.key,
      subKey = arg.subKey,
      value = arg.value,
      position = arg.position;

  if (!key || !(0, _isType.isString)(key)) {
    return false;
  }

  var arr = (0, _get.default)(key) || [];

  if ((0, _isType.isNumber)(subKey)) {
    if (method === "clear") {
      arr.splice(subKey, 1);
      return (0, _set.default)(key, arr);
    }

    if (method === "set") {
      arr[subKey] = value || "";
      return (0, _set.default)(key, arr);
    }

    return arr[subKey];
  }

  if (method === "clear") {
    if (subKey && (0, _isType.isString)(subKey)) {
      var tag = getTarget(arr, subKey);

      if (tag) {
        arr.splice(tag.index, 1);
        return (0, _set.default)(key, arr);
      }
    }

    return (0, _clear.default)(key);
  } else if (method === "set") {
    if (value) {
      if (subKey && (0, _isType.isString)(subKey)) {
        var _tag = getTarget(arr, subKey);

        var temp = null;

        if (_tag) {
          arr.splice(_tag.index, 1);
          temp = _tag.value;
          temp[subKey] = value;
        } else {
          temp = (0, _defineProperty2.default)({}, subKey, value);
        }

        if (position === "unshift") {
          arr.unshift(temp);
        } else if (position === "push") {
          arr.push(temp);
        } else {
          arr.splice(_tag.index, 0, temp);
        }

        return (0, _set.default)(key, arr);
      }
    }

    return false;
  } else {
    if (subKey && (0, _isType.isString)(subKey)) {
      return getTarget(arr, subKey).value || false;
    }

    return arr;
  }
};

var _default = que;
exports.default = _default;
module.exports = exports.default;