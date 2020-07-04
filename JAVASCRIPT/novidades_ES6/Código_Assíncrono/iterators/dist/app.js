/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	"use strict";
	
	var _RandomNumbers;
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var RandomNumbers = (_RandomNumbers = {}, _defineProperty(_RandomNumbers, Symbol.iterator, function () {
		return this;
	}), _defineProperty(_RandomNumbers, "next", function next() {
		var number = Math.floor(Math.random() * 5),
		    isEven = number % 2 === 0;
	
		return { value: number, done: !isEven };
	}), _RandomNumbers);
	
	var numbers = RandomNumbers[Symbol.iterator]();
	console.log([].concat(_toConsumableArray(numbers)));
	
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;
	
	try {
		for (var _iterator = numbers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var number = _step.value;
	
			console.log(number);
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}
	
	var Fibonacci = _defineProperty({}, Symbol.iterator, function () {
		var _ref;
	
		var n1 = 1,
		    n2 = 1;
	
		return _ref = {}, _defineProperty(_ref, Symbol.iterator, function () {
			return this;
		}), _defineProperty(_ref, "next", function next() {
			var current = n2;
			n2 = n1;
			n1 = n1 + current;
			return { value: current, done: false };
		}), _ref;
	});
	
	var fib = Fibonacci[Symbol.iterator]();
	console.log(fib.next());
	console.log(fib.next());
	console.log(fib.next());
	console.log(fib.next());

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map