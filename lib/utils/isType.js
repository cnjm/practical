"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isArray = exports.isObject = exports.isString = exports.isNumber = exports.isDate = void 0;

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.match.js");

var reg = ['Null', 'Undefined', 'Object', 'Array', 'String', 'Number', 'Boolean', 'Function', 'RegExp'];

var isType = function isType(o) {
  var s = Object.prototype.toString.call(o);
  return s.match(/\[object (.*?)\]/)[1].toLowerCase();
};

var isDate = function isDate(o) {
  return isType(o) === "date";
};

exports.isDate = isDate;

var isNumber = function isNumber(o) {
  return isType(o) === "number";
};

exports.isNumber = isNumber;

var isString = function isString(o) {
  return isType(o) === "string";
};

exports.isString = isString;

var isObject = function isObject(o) {
  return isType(o) === "object";
};

exports.isObject = isObject;

var isArray = function isArray(o) {
  return isType(o) === "array";
};

exports.isArray = isArray;