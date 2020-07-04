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
	
	var myPromise = new Promise(function (resolve, reject) {
		setTimeout(function () {
			resolve(500);
		}, 2000);
	});
	
	myPromise.then(function (value) {
		console.log("My Value: " + value);
		return 900;
	}).then(function (value) {
		console.log("My Value: " + value);
		return 100;
	});
	
	var p1 = new Promise(function (resolve, reject) {
		setTimeout(function () {
			resolve(500);
		}, 2000);
	});
	
	var p2 = Promise.resolve(77);
	
	Promise.all([p1, p2]).then(function (value) {
		console.log(value);
	});

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map