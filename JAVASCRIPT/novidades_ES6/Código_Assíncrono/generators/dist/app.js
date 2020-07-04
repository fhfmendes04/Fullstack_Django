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
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _marked = [myCounter, myGenerator].map(regeneratorRuntime.mark);
	
	function myCounter() {
		var i;
		return regeneratorRuntime.wrap(function myCounter$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						i = 0;
	
					case 1:
						if (false) {
							_context.next = 6;
							break;
						}
	
						_context.next = 4;
						return i++;
	
					case 4:
						_context.next = 1;
						break;
	
					case 6:
					case "end":
						return _context.stop();
				}
			}
		}, _marked[0], this);
	}
	
	var counter = myCounter();
	var counterValue = counter.next();
	
	console.log(counterValue);
	
	function myGenerator() {
		return regeneratorRuntime.wrap(function myGenerator$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						return _context2.delegateYield([1, 2, 3, 4, 5], "t0", 1);
	
					case 1:
					case "end":
						return _context2.stop();
				}
			}
		}, _marked[1], this);
	}
	
	var myGen = myGenerator();
	console.log(myGen.next());
	console.log(myGen.next());
	console.log(myGen.next());

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map