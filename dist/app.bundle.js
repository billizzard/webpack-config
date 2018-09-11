var home =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/ 	var jsonpArray = window["webpackJsonphome"] = window["webpackJsonphome"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./index.js","vendors~app"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"../node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/styles.scss */ \"./styles/styles.scss\");\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _js_public_print_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/public/print.js */ \"./js/public/print.js\");\n/* harmony import */ var _js_public_print_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_public_print_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _js_public_esLast_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/public/esLast.js */ \"./js/public/esLast.js\");\n/* harmony import */ var _js_public_esLast_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_public_esLast_js__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n//import Icon from './icon.png';\n\n\n\nfunction component() {\n  let element = document.createElement('div');\n  var btn = document.createElement('button');\n\n  element.innerHTML = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.join(['Hello', 'webpack'], ' ');\n\n   btn.innerHTML = 'Click me and check the console!';\n   btn.onclick = _js_public_print_js__WEBPACK_IMPORTED_MODULE_3___default.a;\n   btn.onclick = (e) => {\nconsole.log(e);\n   \t_js_public_esLast_js__WEBPACK_IMPORTED_MODULE_4___default.a.sum(2,3)};\n\n   element.appendChild(btn);\n\n  // var myIcon = new Image();\n  // myIcon.src = Icon;\n\n // element.appendChild(myIcon);\n\n  return element;\n}\n\ndocument.body.appendChild(component());\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ob21lLy4vaW5kZXguanM/NDFmNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVCO0FBQ0Y7QUFDUztBQUM5QjtBQUMyQztBQUNFOztBQUU3QztBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCLDZDQUFDOztBQUV2QjtBQUNBLGlCQUFpQiwwREFBTztBQUN4QjtBQUNBO0FBQ0EsSUFBSSwyREFBUTs7QUFFWjs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiLi9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvc3R5bGVzLnNjc3MnO1xuLy9pbXBvcnQgSWNvbiBmcm9tICcuL2ljb24ucG5nJztcbmltcG9ydCBwcmludE1lIGZyb20gJy4vanMvcHVibGljL3ByaW50LmpzJztcbmltcG9ydCBzb21lTWF0aCBmcm9tICcuL2pzL3B1YmxpYy9lc0xhc3QuanMnO1xuXG5mdW5jdGlvbiBjb21wb25lbnQoKSB7XG4gIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHZhciBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICBlbGVtZW50LmlubmVySFRNTCA9IF8uam9pbihbJ0hlbGxvJywgJ3dlYnBhY2snXSwgJyAnKTtcblxuICAgYnRuLmlubmVySFRNTCA9ICdDbGljayBtZSBhbmQgY2hlY2sgdGhlIGNvbnNvbGUhJztcbiAgIGJ0bi5vbmNsaWNrID0gcHJpbnRNZTtcbiAgIGJ0bi5vbmNsaWNrID0gKGUpID0+IHtcbmNvbnNvbGUubG9nKGUpO1xuICAgXHRzb21lTWF0aC5zdW0oMiwzKX07XG5cbiAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYnRuKTtcblxuICAvLyB2YXIgbXlJY29uID0gbmV3IEltYWdlKCk7XG4gIC8vIG15SWNvbi5zcmMgPSBJY29uO1xuXG4gLy8gZWxlbWVudC5hcHBlbmRDaGlsZChteUljb24pO1xuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudCgpKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./index.js\n");

/***/ }),

/***/ "./js/public/esLast.js":
/*!*****************************!*\
  !*** ./js/public/esLast.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar SomeMath = function () {\n\tfunction SomeMath() {\n\t\t_classCallCheck(this, SomeMath);\n\t}\n\n\t_createClass(SomeMath, [{\n\t\tkey: \"sum\",\n\t\tvalue: function sum() {\n\t\t\tvar sum = 0;\n\n\t\t\tfor (var _len = arguments.length, numbers = Array(_len), _key = 0; _key < _len; _key++) {\n\t\t\t\tnumbers[_key] = arguments[_key];\n\t\t\t}\n\n\t\t\tfor (var i = 0; i < numbers.length; i++) {\n\t\t\t\tsum += numbers[i];\n\t\t\t}\n\n\t\t\tconsole.log(sum);\n\n\t\t\treturn sum;\n\t\t}\n\t}]);\n\n\treturn SomeMath;\n}();\n\nexports.default = new SomeMath();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ob21lLy4vanMvcHVibGljL2VzTGFzdC5qcz8zNWVkIl0sIm5hbWVzIjpbIlNvbWVNYXRoIiwic3VtIiwibnVtYmVycyIsImkiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLFE7Ozs7Ozs7d0JBQ1c7QUFDZixPQUFJQyxNQUFNLENBQVY7O0FBRGUscUNBQVRDLE9BQVM7QUFBVEEsV0FBUztBQUFBOztBQUVmLFFBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJRCxRQUFRRSxNQUE1QixFQUFvQ0QsR0FBcEMsRUFBeUM7QUFDeENGLFdBQU9DLFFBQVFDLENBQVIsQ0FBUDtBQUNBOztBQUVERSxXQUFRQyxHQUFSLENBQVlMLEdBQVo7O0FBRUEsVUFBT0EsR0FBUDtBQUNBOzs7Ozs7a0JBR2EsSUFBSUQsUUFBSixFIiwiZmlsZSI6Ii4vanMvcHVibGljL2VzTGFzdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFNvbWVNYXRoIHtcblx0c3VtKC4uLm51bWJlcnMpIHtcblx0XHRsZXQgc3VtID0gMDtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG51bWJlcnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHN1bSArPSBudW1iZXJzW2ldO1xuXHRcdH1cblx0XHRcblx0XHRjb25zb2xlLmxvZyhzdW0pO1xuXG5cdFx0cmV0dXJuIHN1bTtcblx0fVxufSBcblxuZXhwb3J0IGRlZmF1bHQgbmV3IFNvbWVNYXRoKCk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./js/public/esLast.js\n");

/***/ }),

/***/ "./js/public/print.js":
/*!****************************!*\
  !*** ./js/public/print.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = printMe;\nfunction printMe() {\n  console.log('I get called from print.js!');\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ob21lLy4vanMvcHVibGljL3ByaW50LmpzP2JmMzQiXSwibmFtZXMiOlsicHJpbnRNZSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7O2tCQUF3QkEsTztBQUFULFNBQVNBLE9BQVQsR0FBbUI7QUFDaENDLFVBQVFDLEdBQVIsQ0FBWSw2QkFBWjtBQUNEIiwiZmlsZSI6Ii4vanMvcHVibGljL3ByaW50LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJpbnRNZSgpIHtcbiAgY29uc29sZS5sb2coJ0kgZ2V0IGNhbGxlZCBmcm9tIHByaW50LmpzIScpO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/public/print.js\n");

/***/ }),

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ob21lLy4vc3R5bGUuY3NzP2QyM2IiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiLi9zdHlsZS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./style.css\n");

/***/ }),

/***/ "./styles/styles.scss":
/*!****************************!*\
  !*** ./styles/styles.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ob21lLy4vc3R5bGVzL3N0eWxlcy5zY3NzPzIwZWYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiLi9zdHlsZXMvc3R5bGVzLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/styles.scss\n");

/***/ })

/******/ });