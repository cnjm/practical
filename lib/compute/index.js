"use strict";

require("core-js/modules/es.reflect.construct.js");

require("core-js/modules/es.array.slice.js");

require("core-js/modules/es.function.name.js");

require("core-js/modules/es.array.from.js");

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.symbol.iterator.js");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.array.concat.js");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.set.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/web.dom-collections.iterator.js");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/wrapNativeSuper"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var PSet = /*#__PURE__*/function (_Set) {
  (0, _inherits2.default)(PSet, _Set);

  var _super = _createSuper(PSet);

  function PSet() {
    (0, _classCallCheck2.default)(this, PSet);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(PSet, [{
    key: "union",
    value: function union() {
      for (var _len = arguments.length, sets = new Array(_len), _key = 0; _key < _len; _key++) {
        sets[_key] = arguments[_key];
      }

      return PSet.union.apply(PSet, [this].concat(sets));
    }
  }, {
    key: "intersection",
    value: function intersection() {
      return PSet.intersection.apply(PSet, arguments);
    }
  }, {
    key: "difference",
    value: function difference(a, b) {
      return PSet.difference(a, b);
    }
  }, {
    key: "symmetricDifference",
    value: function symmetricDifference(a, b) {
      return PSet.symmetricDifference(a, b);
    }
  }, {
    key: "cartesianProduct",
    value: function cartesianProduct(a, b) {
      return PSet.cartesianProduct(a, b);
    }
  }, {
    key: "powerSet",
    value: function powerSet(a) {
      return PSet.powerSet(a);
    }
  }], [{
    key: "union",
    value: function union(a) {
      var unionSet = new PSet(a);

      for (var _len2 = arguments.length, bSets = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        bSets[_key2 - 1] = arguments[_key2];
      }

      for (var _i = 0, _bSets = bSets; _i < _bSets.length; _i++) {
        var b = _bSets[_i];

        var _iterator = _createForOfIteratorHelper(b),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var bValue = _step.value;
            unionSet.add(bValue);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      return unionSet;
    }
  }, {
    key: "intersection",
    value: function intersection(a) {
      var intersectionSet = new PSet(a);

      for (var _len3 = arguments.length, bSets = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        bSets[_key3 - 1] = arguments[_key3];
      }

      var _iterator2 = _createForOfIteratorHelper(intersectionSet),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var aValue = _step2.value;

          var _iterator3 = _createForOfIteratorHelper(bSets),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var b = _step3.value;

              if (!b.has(aValue)) {
                intersectionSet.delete(aValue);
              }
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return intersectionSet;
    }
  }, {
    key: "difference",
    value: function difference(a, b) {
      var differenceSet = new PSet(a);

      var _iterator4 = _createForOfIteratorHelper(b),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var bValue = _step4.value;

          if (a.has(bValue)) {
            differenceSet.delete(bValue);
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      return differenceSet;
    }
  }, {
    key: "symmetricDifference",
    value: function symmetricDifference(a, b) {
      var symmetric = new PSet();
      var i = symmetric.intersection(a, b);
      return symmetric.union(symmetric.difference(a, i), symmetric.difference(b, i));
    }
  }, {
    key: "cartesianProduct",
    value: function cartesianProduct(a, b) {
      var cartesianProductSet = new PSet();

      var _iterator5 = _createForOfIteratorHelper(a),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var aValue = _step5.value;

          var _iterator6 = _createForOfIteratorHelper(b),
              _step6;

          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
              var bValue = _step6.value;
              cartesianProductSet.add([aValue, bValue]);
            }
          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }

      return cartesianProductSet;
    }
  }, {
    key: "powerSet",
    value: function powerSet(a) {
      var powerSet = new PSet().add(new PSet());

      var _iterator7 = _createForOfIteratorHelper(a),
          _step7;

      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var aValue = _step7.value;

          var _iterator8 = _createForOfIteratorHelper(new PSet(powerSet)),
              _step8;

          try {
            for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
              var set = _step8.value;
              powerSet.add(new PSet(set).add(aValue));
            }
          } catch (err) {
            _iterator8.e(err);
          } finally {
            _iterator8.f();
          }
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }

      return powerSet;
    }
  }]);
  return PSet;
}( /*#__PURE__*/(0, _wrapNativeSuper2.default)(Set));

var _default = PSet;
exports.default = _default;
module.exports = exports.default;