"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.regexp.to-string.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.replace.js");

require("core-js/modules/es.array.slice.js");

require("core-js/modules/es.string.pad-start.js");

require("core-js/modules/es.array.concat.js");

var _isType = require("../utils/isType.js");

var dateFormat = function dateFormat(date, format, isUTC) {
  if (!(0, _isType.isNumber)(date) && !(0, _isType.isString)(date) && !(0, _isType.isDate)(date)) {
    throw new Error('The first parameter must be number, string, Date object');
  }

  var d = date;

  if ((0, _isType.isNumber)(date) || (0, _isType.isString)(date)) {
    d = new Date(date);
  }

  if (!(0, _isType.isString)(format)) {
    return d.toString();
  }

  var year = isUTC ? d.getUTCFullYear().toString() : d.getFullYear().toString();
  var month = isUTC ? (d.getUTCMonth() + 1).toString() : (d.getMonth() + 1).toString();
  var day = isUTC ? d.getUTCDate().toString() : d.getDate().toString();
  var hour = isUTC ? d.getUTCHours().toString() : d.getHours().toString();
  var hour12 = (hour % 12).toString();
  var amOrPm = hour < 12 ? 'AM' : 'PM';
  var minute = isUTC ? d.getUTCMinutes().toString() : d.getMinutes().toString();
  var second = isUTC ? d.getUTCSeconds().toString() : d.getSeconds().toString();
  var millisecond = isUTC ? d.getUTCMilliseconds().toString() : d.getMilliseconds().toString();
  return format.replace(/(^|[^Y])YYYY([^Y]|$)/g, "$1".concat(year, "$2")).replace(/(^|[^Y])YY([^Y]|$)/g, "$1".concat(String(year).slice(-2), "$2")).replace(/(^|[^M])MM([^M]|$)/g, "$1".concat(month.padStart(2, '0'), "$2")).replace(/(^|[^M])M([^M]|$)/g, "$1".concat(month, "$2")).replace(/(^|[^D])DD([^D]|$)/g, "$1".concat(day.padStart(2, '0'), "$2")).replace(/(^|[^D])D([^D]|$)/g, "$1".concat(day, "$2")).replace(/(^|[^H])HH([^H]|$)/g, "$1".concat(hour.padStart(2, '0'), "$2")).replace(/(^|[^H])H([^H]|$)/g, "$1".concat(hour, "$2")).replace(/(^|[^h])hh([^h]|$)/g, "$1".concat(hour12.padStart(2, '0'), "$2")).replace(/(^|[^h])h([^h]|$)/g, "$1".concat(hour12, "$2")).replace(/(^|[^A])A([^A]|$)/g, "$1".concat(amOrPm, "$2")).replace(/(^|[^a])a([^a]|$)/g, "$1".concat(amOrPm.toLowerCase(), "$2")).replace(/(^|[^m])mm([^m]|$)/g, "$1".concat(minute.padStart(2, '0'), "$2")).replace(/(^|[^m])m([^m]|$)/g, "$1".concat(minute, "$2")).replace(/(^|[^s])ss([^s]|$)/g, "$1".concat(second.padStart(2, '0'), "$2")).replace(/(^|[^s])s([^s]|$)/g, "$1".concat(second, "$2")).replace(/(^|[^S]+)([S]+)([^S]+|$)/g, function (match, s1, s2, s3) {
    var msStr = millisecond.padStart(3, '0');

    for (var i = 3; i < s2.length; i++) {
      msStr += '0';
    }

    msStr = msStr.slice(0, s2.length);
    return "".concat(s1).concat(msStr).concat(s3);
  });
};

var _default = dateFormat;
exports.default = _default;
module.exports = exports.default;