module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"static/development/pages/index.js": 0
/******/ 	};
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/dist/next-server/lib/router-context.js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCI/NDEyNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../next-server/lib/router-context\n");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/dist/next-server/lib/utils.js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCI/MzI2ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../next-server/lib/utils\n");

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Footer\", function() { return Footer; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/feral/Projects/ricardomatias.github.io/components/Footer.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\nconst Footer = props => __jsx(\"div\", {\n  className: \"w-full bg-black p-16\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 2,\n    columnNumber: 5\n  }\n}, __jsx(\"ul\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 3,\n    columnNumber: 9\n  }\n}, __jsx(\"li\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 4,\n    columnNumber: 13\n  }\n}, \"GITHUB\"), __jsx(\"li\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 13\n  }\n}, \"TWITTER\"), __jsx(\"li\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 13\n  }\n}, \"INSTAGRAM\")));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvb3Rlci5qcz9mMjU2Il0sIm5hbWVzIjpbIkZvb3RlciIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQU8sTUFBTUEsTUFBTSxHQUFJQyxLQUFELElBQ2xCO0FBQUssV0FBUyxFQUFDLHNCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKLEVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhKLENBREosQ0FERyIsImZpbGUiOiIuL2NvbXBvbmVudHMvRm9vdGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEZvb3RlciA9IChwcm9wcykgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWJsYWNrIHAtMTZcIj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPkdJVEhVQjwvbGk+XG4gICAgICAgICAgICA8bGk+VFdJVFRFUjwvbGk+XG4gICAgICAgICAgICA8bGk+SU5TVEFHUkFNPC9saT5cbiAgICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbik7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Footer.js\n");

/***/ }),

/***/ "./components/home/Title.js":
/*!**********************************!*\
  !*** ./components/home/Title.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/feral/Projects/ricardomatias.github.io/components/home/Title.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nconst items = ['ricardo', 'matias'];\n\nconst Header = () => {\n  return __jsx(\"div\", {\n    className: \"container  mb-4 md:pt-40 h-screen mx-auto relative flex flex-col z-50 content-between\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 3\n    }\n  }, __jsx(\"div\", {\n    className: \"flex flex-col flex-grow\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 4\n    }\n  }, __jsx(\"div\", {\n    className: \"header-title font-title text-gray-200 inline-block tracking-widest z-10\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 5\n    }\n  }, items.map((word, index) => __jsx(\"div\", {\n    key: word,\n    className: \"trails-text\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }\n  }, __jsx(\"h2\", {\n    className: `${index == 1 ? 'md:ml-64 text-right md:text-left' : ''} md:text-7xl text-5xl`,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 8\n    }\n  }, word)))), __jsx(\"div\", {\n    className: \"header-title font-grot text-gray-200 tracking-widest pt-10 flex md:justify-start justify-center md:pt-40 sm:text-2xl md:text-4xl z-10\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 6\n    }\n  }, \"CREATIVE DEVELOPER\"))), __jsx(\"div\", {\n    className: \"flex justify-center text-xs italic\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 4\n    }\n  }, __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 5\n    }\n  }, \"SCROLL DOWN\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hvbWUvVGl0bGUuanM/ZWQ2YyJdLCJuYW1lcyI6WyJpdGVtcyIsIkhlYWRlciIsIm1hcCIsIndvcmQiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUVBLE1BQU1BLEtBQUssR0FBRyxDQUFFLFNBQUYsRUFBYSxRQUFiLENBQWQ7O0FBRUEsTUFBTUMsTUFBTSxHQUFHLE1BQU07QUFFcEIsU0FDQztBQUFLLGFBQVMsRUFBQyx1RkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBSyxhQUFTLEVBQUMseUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUssYUFBUyxFQUFDLHlFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRUQsS0FBSyxDQUFDRSxHQUFOLENBQVUsQ0FBQ0MsSUFBRCxFQUFPQyxLQUFQLEtBQ1Y7QUFDQyxPQUFHLEVBQUVELElBRE47QUFFQyxhQUFTLEVBQUMsYUFGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBR0M7QUFBSSxhQUFTLEVBQUcsR0FBRUMsS0FBSyxJQUFJLENBQVQsR0FBYSxrQ0FBYixHQUFrRCxFQUFHLHVCQUF2RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWdHRCxJQUFoRyxDQUhELENBREEsQ0FERixDQURELEVBVUM7QUFBSyxhQUFTLEVBQUMsdUlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREQsQ0FWRCxDQURELEVBZUM7QUFBSyxhQUFTLEVBQUMsb0NBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREQsQ0FmRCxDQUREO0FBcUJBLENBdkJEOztBQXlCZUYscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2hvbWUvVGl0bGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgaXRlbXMgPSBbICdyaWNhcmRvJywgJ21hdGlhcycgXTtcblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgIG1iLTQgbWQ6cHQtNDAgaC1zY3JlZW4gbXgtYXV0byByZWxhdGl2ZSBmbGV4IGZsZXgtY29sIHotNTAgY29udGVudC1iZXR3ZWVuXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZmxleC1ncm93XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXRpdGxlIGZvbnQtdGl0bGUgdGV4dC1ncmF5LTIwMCBpbmxpbmUtYmxvY2sgdHJhY2tpbmctd2lkZXN0IHotMTBcIj5cblx0XHRcdFx0XHR7aXRlbXMubWFwKCh3b3JkLCBpbmRleCkgPT4gKFxuXHRcdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0XHRrZXk9e3dvcmR9XG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInRyYWlscy10ZXh0XCI+XG5cdFx0XHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9e2Ake2luZGV4ID09IDEgPyAnbWQ6bWwtNjQgdGV4dC1yaWdodCBtZDp0ZXh0LWxlZnQnIDogJyd9IG1kOnRleHQtN3hsIHRleHQtNXhsYH0+e3dvcmR9PC9oMj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdCkpfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoZWFkZXItdGl0bGUgZm9udC1ncm90IHRleHQtZ3JheS0yMDAgdHJhY2tpbmctd2lkZXN0IHB0LTEwIGZsZXggbWQ6anVzdGlmeS1zdGFydCBqdXN0aWZ5LWNlbnRlciBtZDpwdC00MCBzbTp0ZXh0LTJ4bCBtZDp0ZXh0LTR4bCB6LTEwXCI+XG5cdFx0XHRcdFx0PGRpdj5DUkVBVElWRSBERVZFTE9QRVI8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciB0ZXh0LXhzIGl0YWxpY1wiPlxuXHRcdFx0XHQ8cD5TQ1JPTEwgRE9XTjwvcD5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/home/Title.js\n");

/***/ }),

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Layout; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout.module.css */ \"./components/layout.module.css\");\n/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_layout_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer */ \"./components/Footer.js\");\nvar _jsxFileName = \"/Users/feral/Projects/ricardomatias.github.io/components/layout.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nfunction Layout({\n  children,\n  title = 'RICARDO MATIAS'\n}) {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 9\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 13\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 17\n    }\n  }, title), __jsx(\"meta\", {\n    charSet: \"utf-8\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 17\n    }\n  }), __jsx(\"meta\", {\n    httpEquiv: \"x-ua-compatible\",\n    content: \"ie=edge\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 17\n    }\n  }), __jsx(\"meta\", {\n    name: \"viewport\",\n    content: \"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, minimal-ui\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 17\n    }\n  }), __jsx(\"meta\", {\n    name: \"mobile-web-app-capable\",\n    content: \"yes\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 17\n    }\n  }), __jsx(\"meta\", {\n    name: \"apple-mobile-web-app-capable\",\n    content: \"yes\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 17\n    }\n  }), __jsx(\"meta\", {\n    name: \"format-detection\",\n    content: \"telephone=no\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 17\n    }\n  }), __jsx(\"meta\", {\n    name: \"description\",\n    content: \"Freelance Javascript Software Developer based in Berlin.\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 17\n    }\n  }), __jsx(\"meta\", {\n    name: \"author\",\n    content: \"Ricardo Matias\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 17\n    }\n  }), __jsx(\"meta\", {\n    name: \"cf-2fa-verify\",\n    content: \"bc3597bed4824c5\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 17\n    }\n  }), __jsx(\"link\", {\n    rel: \"canonical\",\n    href: \"https://ricardomatias.net/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 17\n    }\n  }), __jsx(\"link\", {\n    href: \"https://fonts.googleapis.com/css2?family=Sen:wght@300;400;500;600&display=swap\",\n    rel: \"stylesheet\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 17\n    }\n  }), __jsx(\"link\", {\n    href: \"https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700;900&display=swap\",\n    rel: \"stylesheet\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 17\n    }\n  }), __jsx(\"link\", {\n    href: \"https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600&display=swap\",\n    rel: \"stylesheet\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 17\n    }\n  }), __jsx(\"link\", {\n    href: \"https://fonts.googleapis.com/css2?family=Gothic+A1:wght@300;400;500;600&display=swap\",\n    rel: \"stylesheet\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 17\n    }\n  }), __jsx(\"link\", {\n    rel: \"shortcut icon\",\n    href: \"img/favicon.ico\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 17\n    }\n  })), __jsx(\"div\", {\n    id: _layout_module_css__WEBPACK_IMPORTED_MODULE_2___default.a['outer-container'],\n    className: \"h-full w-full text-gray-200 relative\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }\n  }, children, __jsx(_Footer__WEBPACK_IMPORTED_MODULE_3__[\"Footer\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 17\n    }\n  })));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC5qcz8wOWE3Il0sIm5hbWVzIjpbIkxheW91dCIsImNoaWxkcmVuIiwidGl0bGUiLCJzdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxDQUFnQjtBQUMzQkMsVUFEMkI7QUFFM0JDLE9BQUssR0FBRztBQUZtQixDQUFoQixFQUdaO0FBQ0MsU0FDSSxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVFBLEtBQVIsQ0FESixFQUVJO0FBQU0sV0FBTyxFQUFDLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBR0k7QUFBTSxhQUFTLEVBQUMsaUJBQWhCO0FBQWtDLFdBQU8sRUFBQyxTQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEosRUFJSTtBQUFNLFFBQUksRUFBQyxVQUFYO0FBQXNCLFdBQU8sRUFBQyx3RkFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpKLEVBS0k7QUFBTSxRQUFJLEVBQUMsd0JBQVg7QUFBb0MsV0FBTyxFQUFDLEtBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMSixFQU1JO0FBQU0sUUFBSSxFQUFDLDhCQUFYO0FBQTBDLFdBQU8sRUFBQyxLQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkosRUFPSTtBQUFNLFFBQUksRUFBQyxrQkFBWDtBQUE4QixXQUFPLEVBQUMsY0FBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBKLEVBUUk7QUFBTSxRQUFJLEVBQUMsYUFBWDtBQUF5QixXQUFPLEVBQUMsMERBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSSixFQVNJO0FBQU0sUUFBSSxFQUFDLFFBQVg7QUFBb0IsV0FBTyxFQUFDLGdCQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEosRUFVSTtBQUFNLFFBQUksRUFBQyxlQUFYO0FBQTJCLFdBQU8sRUFBQyxpQkFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZKLEVBV0k7QUFBTSxPQUFHLEVBQUMsV0FBVjtBQUFzQixRQUFJLEVBQUMsNEJBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFYSixFQVlJO0FBQU0sUUFBSSxFQUFDLGdGQUFYO0FBQTRGLE9BQUcsRUFBQyxZQUFoRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWkosRUFhSTtBQUFNLFFBQUksRUFBQywyRkFBWDtBQUF1RyxPQUFHLEVBQUMsWUFBM0c7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWJKLEVBY0k7QUFBTSxRQUFJLEVBQUMsc0ZBQVg7QUFBa0csT0FBRyxFQUFDLFlBQXRHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFkSixFQWVJO0FBQU0sUUFBSSxFQUFDLHNGQUFYO0FBQWtHLE9BQUcsRUFBQyxZQUF0RztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZkosRUFnQkk7QUFBTSxPQUFHLEVBQUMsZUFBVjtBQUEwQixRQUFJLEVBQUMsaUJBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFoQkosQ0FESixFQW1CSTtBQUFLLE1BQUUsRUFBRUMseURBQU0sQ0FBQyxpQkFBRCxDQUFmO0FBQW9DLGFBQVMsRUFBQyxzQ0FBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLRixRQURMLEVBRUksTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosQ0FuQkosQ0FESjtBQTBCSCIsImZpbGUiOiIuL2NvbXBvbmVudHMvbGF5b3V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2xheW91dC5tb2R1bGUuY3NzJztcbmltcG9ydCB7IEZvb3RlciB9IGZyb20gJy4vRm9vdGVyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHtcbiAgICBjaGlsZHJlbixcbiAgICB0aXRsZSA9ICdSSUNBUkRPIE1BVElBUycsXG59KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgICAgICAgICAgPG1ldGEgaHR0cEVxdWl2PVwieC11YS1jb21wYXRpYmxlXCIgY29udGVudD1cImllPWVkZ2VcIiAvPlxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wLCBtYXhpbXVtLXNjYWxlPTEuMCwgdXNlci1zY2FsYWJsZT1ubywgbWluaW1hbC11aVwiIC8+XG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cIm1vYmlsZS13ZWItYXBwLWNhcGFibGVcIiBjb250ZW50PVwieWVzXCIgLz5cbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiYXBwbGUtbW9iaWxlLXdlYi1hcHAtY2FwYWJsZVwiIGNvbnRlbnQ9XCJ5ZXNcIiAvPlxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJmb3JtYXQtZGV0ZWN0aW9uXCIgY29udGVudD1cInRlbGVwaG9uZT1ub1wiIC8+XG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkZyZWVsYW5jZSBKYXZhc2NyaXB0IFNvZnR3YXJlIERldmVsb3BlciBiYXNlZCBpbiBCZXJsaW4uXCIgLz5cbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiYXV0aG9yXCIgY29udGVudD1cIlJpY2FyZG8gTWF0aWFzXCIgLz5cbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiY2YtMmZhLXZlcmlmeVwiIGNvbnRlbnQ9XCJiYzM1OTdiZWQ0ODI0YzVcIiAvPlxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImNhbm9uaWNhbFwiIGhyZWY9XCJodHRwczovL3JpY2FyZG9tYXRpYXMubmV0L1wiIC8+XG4gICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9U2VuOndnaHRAMzAwOzQwMDs1MDA7NjAwJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQ6d2dodEAzMDA7NDAwOzUwMDs3MDA7OTAwJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVdvcmsrU2Fuczp3Z2h0QDMwMDs0MDA7NTAwOzYwMCZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Hb3RoaWMrQTE6d2dodEAzMDA7NDAwOzUwMDs2MDAmZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCJpbWcvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgPGRpdiBpZD17c3R5bGVzWydvdXRlci1jb250YWluZXInXX0gY2xhc3NOYW1lPVwiaC1mdWxsIHctZnVsbCB0ZXh0LWdyYXktMjAwIHJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0ZyYWdtZW50PlxuICAgIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layout.js\n");

/***/ }),

/***/ "./components/layout.module.css":
/*!**************************************!*\
  !*** ./components/layout.module.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"outer-container\": \"layout_outer-container__3X8VS\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC5tb2R1bGUuY3NzP2FhYmYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwib3V0ZXItY29udGFpbmVyXCI6IFwibGF5b3V0X291dGVyLWNvbnRhaW5lcl9fM1g4VlNcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layout.module.css\n");

/***/ }),

/***/ "./lib/sketches.js":
/*!*************************!*\
  !*** ./lib/sketches.js ***!
  \*************************/
/*! exports provided: getSketches, getSketchesIds, getSketchById, pickRandomSketch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getSketches\", function() { return getSketches; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getSketchesIds\", function() { return getSketchesIds; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getSketchById\", function() { return getSketchById; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pickRandomSketch\", function() { return pickRandomSketch; });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gray-matter */ \"gray-matter\");\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var snarkdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! snarkdown */ \"snarkdown\");\n/* harmony import */ var snarkdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(snarkdown__WEBPACK_IMPORTED_MODULE_3__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nconst sketchsDir = path__WEBPACK_IMPORTED_MODULE_1___default.a.join(process.cwd(), 'sketches');\nfunction getSketches() {\n  const ids = getSketchesIds();\n  return ids.map(getSketchById);\n}\n;\nfunction getSketchesIds() {\n  return fs__WEBPACK_IMPORTED_MODULE_0___default.a.readdirSync(sketchsDir).filter(filename => path__WEBPACK_IMPORTED_MODULE_1___default.a.extname(filename) == '.md').map(filename => filename.replace('.md', ''));\n}\nfunction getSketchById(id) {\n  const sketch = fs__WEBPACK_IMPORTED_MODULE_0___default.a.readFileSync(path__WEBPACK_IMPORTED_MODULE_1___default.a.join(sketchsDir, `${id}.md`), {\n    encoding: 'utf8'\n  });\n  const {\n    data,\n    content\n  } = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(sketch);\n  return _objectSpread(_objectSpread({}, data), {}, {\n    content: snarkdown__WEBPACK_IMPORTED_MODULE_3___default()(content)\n  });\n}\nfunction pickRandomSketch(sketches, id) {\n  const pool = sketches.filter(sketch => sketch !== id);\n  const roll = Math.floor(Math.random() * (pool.length + 1));\n  const idx = Math.max(Math.min(roll, pool.length - 1), 0);\n  return pool[idx];\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvc2tldGNoZXMuanM/ZTkwNiJdLCJuYW1lcyI6WyJza2V0Y2hzRGlyIiwicGF0aCIsImpvaW4iLCJwcm9jZXNzIiwiY3dkIiwiZ2V0U2tldGNoZXMiLCJpZHMiLCJnZXRTa2V0Y2hlc0lkcyIsIm1hcCIsImdldFNrZXRjaEJ5SWQiLCJmcyIsInJlYWRkaXJTeW5jIiwiZmlsdGVyIiwiZmlsZW5hbWUiLCJleHRuYW1lIiwicmVwbGFjZSIsImlkIiwic2tldGNoIiwicmVhZEZpbGVTeW5jIiwiZW5jb2RpbmciLCJkYXRhIiwiY29udGVudCIsIm1hdHRlciIsInNuYXJrZG93biIsInBpY2tSYW5kb21Ta2V0Y2giLCJza2V0Y2hlcyIsInBvb2wiLCJyb2xsIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwiaWR4IiwibWF4IiwibWluIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxVQUFVLEdBQUdDLDJDQUFJLENBQUNDLElBQUwsQ0FBVUMsT0FBTyxDQUFDQyxHQUFSLEVBQVYsRUFBeUIsVUFBekIsQ0FBbkI7QUFFTyxTQUFTQyxXQUFULEdBQXVCO0FBQzdCLFFBQU1DLEdBQUcsR0FBR0MsY0FBYyxFQUExQjtBQUVBLFNBQU9ELEdBQUcsQ0FBQ0UsR0FBSixDQUFRQyxhQUFSLENBQVA7QUFDQTtBQUFBO0FBRU0sU0FBU0YsY0FBVCxHQUEwQjtBQUNoQyxTQUFPRyx5Q0FBRSxDQUFDQyxXQUFILENBQWVYLFVBQWYsRUFDTFksTUFESyxDQUNHQyxRQUFELElBQWNaLDJDQUFJLENBQUNhLE9BQUwsQ0FBYUQsUUFBYixLQUEwQixLQUQxQyxFQUVMTCxHQUZLLENBRUFLLFFBQUQsSUFBY0EsUUFBUSxDQUFDRSxPQUFULENBQWlCLEtBQWpCLEVBQXdCLEVBQXhCLENBRmIsQ0FBUDtBQUdBO0FBRU0sU0FBU04sYUFBVCxDQUF1Qk8sRUFBdkIsRUFBMkI7QUFDakMsUUFBTUMsTUFBTSxHQUFHUCx5Q0FBRSxDQUFDUSxZQUFILENBQWdCakIsMkNBQUksQ0FBQ0MsSUFBTCxDQUFVRixVQUFWLEVBQXVCLEdBQUVnQixFQUFHLEtBQTVCLENBQWhCLEVBQW1EO0FBQUVHLFlBQVEsRUFBRTtBQUFaLEdBQW5ELENBQWY7QUFDQSxRQUFNO0FBQUVDLFFBQUY7QUFBUUM7QUFBUixNQUFvQkMsa0RBQU0sQ0FBQ0wsTUFBRCxDQUFoQztBQUVBLHlDQUFXRyxJQUFYO0FBQWlCQyxXQUFPLEVBQUVFLGdEQUFTLENBQUNGLE9BQUQ7QUFBbkM7QUFDQTtBQUVNLFNBQVNHLGdCQUFULENBQTBCQyxRQUExQixFQUFvQ1QsRUFBcEMsRUFBd0M7QUFDOUMsUUFBTVUsSUFBSSxHQUFHRCxRQUFRLENBQUNiLE1BQVQsQ0FBaUJLLE1BQUQsSUFBWUEsTUFBTSxLQUFLRCxFQUF2QyxDQUFiO0FBQ0EsUUFBTVcsSUFBSSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLE1BQWlCSixJQUFJLENBQUNLLE1BQUwsR0FBYyxDQUEvQixDQUFYLENBQWI7QUFDQSxRQUFNQyxHQUFHLEdBQUdKLElBQUksQ0FBQ0ssR0FBTCxDQUFTTCxJQUFJLENBQUNNLEdBQUwsQ0FBU1AsSUFBVCxFQUFlRCxJQUFJLENBQUNLLE1BQUwsR0FBYyxDQUE3QixDQUFULEVBQTBDLENBQTFDLENBQVo7QUFFQSxTQUFPTCxJQUFJLENBQUNNLEdBQUQsQ0FBWDtBQUNBIiwiZmlsZSI6Ii4vbGliL3NrZXRjaGVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gJ2ZzJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IG1hdHRlciBmcm9tICdncmF5LW1hdHRlcic7XG5pbXBvcnQgc25hcmtkb3duIGZyb20gJ3NuYXJrZG93bic7XG5cbmNvbnN0IHNrZXRjaHNEaXIgPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ3NrZXRjaGVzJyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTa2V0Y2hlcygpIHtcblx0Y29uc3QgaWRzID0gZ2V0U2tldGNoZXNJZHMoKTtcblxuXHRyZXR1cm4gaWRzLm1hcChnZXRTa2V0Y2hCeUlkKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTa2V0Y2hlc0lkcygpIHtcblx0cmV0dXJuIGZzLnJlYWRkaXJTeW5jKHNrZXRjaHNEaXIpXG5cdFx0LmZpbHRlcigoZmlsZW5hbWUpID0+IHBhdGguZXh0bmFtZShmaWxlbmFtZSkgPT0gJy5tZCcpXG5cdFx0Lm1hcCgoZmlsZW5hbWUpID0+IGZpbGVuYW1lLnJlcGxhY2UoJy5tZCcsICcnKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTa2V0Y2hCeUlkKGlkKSB7XG5cdGNvbnN0IHNrZXRjaCA9IGZzLnJlYWRGaWxlU3luYyhwYXRoLmpvaW4oc2tldGNoc0RpciwgYCR7aWR9Lm1kYCksIHsgZW5jb2Rpbmc6ICd1dGY4JyB9KTtcblx0Y29uc3QgeyBkYXRhLCBjb250ZW50IH0gPSBtYXR0ZXIoc2tldGNoKTtcblx0XG5cdHJldHVybiB7Li4uZGF0YSwgY29udGVudDogc25hcmtkb3duKGNvbnRlbnQpIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwaWNrUmFuZG9tU2tldGNoKHNrZXRjaGVzLCBpZCkge1xuXHRjb25zdCBwb29sID0gc2tldGNoZXMuZmlsdGVyKChza2V0Y2gpID0+IHNrZXRjaCAhPT0gaWQpO1xuXHRjb25zdCByb2xsID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHBvb2wubGVuZ3RoICsgMSkpO1xuXHRjb25zdCBpZHggPSBNYXRoLm1heChNYXRoLm1pbihyb2xsLCBwb29sLmxlbmd0aCAtIDEpLCAwKTtcblxuXHRyZXR1cm4gcG9vbFtpZHhdO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/sketches.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ \"next/dynamic\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_home_Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/home/Title */ \"./components/home/Title.js\");\n/* harmony import */ var _lib_sketches__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/sketches */ \"./lib/sketches.js\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\nvar _jsxFileName = \"/Users/feral/Projects/ricardomatias.github.io/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst Gallery = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../components/home/Gallery */ \"./components/home/Gallery.js\")), {\n  ssr: false,\n  loadableGenerated: {\n    webpack: () => [/*require.resolve*/(/*! ../components/home/Gallery */ \"./components/home/Gallery.js\")],\n    modules: ['../components/home/Gallery']\n  }\n});\nconst LandingScene = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../components/scenes/Landing */ \"./components/scenes/Landing.js\")), {\n  ssr: false,\n  loadableGenerated: {\n    webpack: () => [/*require.resolve*/(/*! ../components/scenes/Landing */ \"./components/scenes/Landing.js\")],\n    modules: ['../components/scenes/Landing']\n  }\n});\nasync function getStaticProps() {\n  const sketches = Object(_lib_sketches__WEBPACK_IMPORTED_MODULE_3__[\"getSketches\"])();\n  return {\n    props: {\n      sketches\n    }\n  };\n}\n\nconst HomePage = ({\n  sketches\n}) => {\n  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 3\n    }\n  }, __jsx(\"div\", {\n    className: \"w-full h-full\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 4\n    }\n  }, __jsx(\"section\", {\n    className: \"h-screen relative mx-auto\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 5\n    }\n  }, __jsx(_components_home_Title__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 6\n    }\n  }), __jsx(LandingScene, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 6\n    }\n  })), __jsx(Gallery, {\n    className: \"h-screen container mx-auto\",\n    sketches: sketches,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 5\n    }\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkdhbGxlcnkiLCJkeW5hbWljIiwic3NyIiwiTGFuZGluZ1NjZW5lIiwiZ2V0U3RhdGljUHJvcHMiLCJza2V0Y2hlcyIsImdldFNrZXRjaGVzIiwicHJvcHMiLCJIb21lUGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxPQUFPLEdBQUdDLG1EQUFPLENBQUMsTUFBTSwrSUFBUCxFQUE2QztBQUFFQyxLQUFHLEVBQUUsS0FBUDtBQUFBO0FBQUEsd0NBQS9CLGdFQUErQjtBQUFBLGNBQS9CLDRCQUErQjtBQUFBO0FBQUEsQ0FBN0MsQ0FBdkI7QUFDQSxNQUFNQyxZQUFZLEdBQUdGLG1EQUFPLENBQUMsTUFBTSxtSkFBUCxFQUErQztBQUFFQyxLQUFHLEVBQUUsS0FBUDtBQUFBO0FBQUEsd0NBQWpDLG9FQUFpQztBQUFBLGNBQWpDLDhCQUFpQztBQUFBO0FBQUEsQ0FBL0MsQ0FBNUI7QUFFTyxlQUFlRSxjQUFmLEdBQWdDO0FBQ3RDLFFBQU1DLFFBQVEsR0FBR0MsaUVBQVcsRUFBNUI7QUFDQSxTQUFPO0FBQ05DLFNBQUssRUFBRTtBQUFFRjtBQUFGO0FBREQsR0FBUDtBQUdBOztBQUVELE1BQU1HLFFBQVEsR0FBRyxDQUFDO0FBQUVIO0FBQUYsQ0FBRCxLQUFrQjtBQUNsQyxTQUNDLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQVMsYUFBUyxFQUFDLDJCQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsRUFFQyxNQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZELENBREQsRUFLQyxNQUFDLE9BQUQ7QUFBUyxhQUFTLEVBQUMsNEJBQW5CO0FBQWdELFlBQVEsRUFBRUEsUUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxELENBREQsQ0FERDtBQVdBLENBWkQ7O0FBY2VHLHVFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnXG5pbXBvcnQgVGl0bGUgZnJvbSAnLi4vY29tcG9uZW50cy9ob21lL1RpdGxlJztcbmltcG9ydCB7IGdldFNrZXRjaGVzIH0gZnJvbSAnLi4vbGliL3NrZXRjaGVzJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnO1xuXG5jb25zdCBHYWxsZXJ5ID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJy4uL2NvbXBvbmVudHMvaG9tZS9HYWxsZXJ5JyksIHsgc3NyOiBmYWxzZSB9KTtcbmNvbnN0IExhbmRpbmdTY2VuZSA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuLi9jb21wb25lbnRzL3NjZW5lcy9MYW5kaW5nJyksIHsgc3NyOiBmYWxzZSB9KTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuXHRjb25zdCBza2V0Y2hlcyA9IGdldFNrZXRjaGVzKCk7XG5cdHJldHVybiB7XG5cdFx0cHJvcHM6IHsgc2tldGNoZXMgfSxcblx0fVxufVxuXG5jb25zdCBIb21lUGFnZSA9ICh7IHNrZXRjaGVzIH0pID0+IHtcblx0cmV0dXJuIChcblx0XHQ8TGF5b3V0PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsXCI+XG5cdFx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT1cImgtc2NyZWVuIHJlbGF0aXZlIG14LWF1dG9cIj5cblx0XHRcdFx0XHQ8VGl0bGUgLz5cblx0XHRcdFx0XHQ8TGFuZGluZ1NjZW5lIC8+XG5cdFx0XHRcdDwvc2VjdGlvbj5cblx0XHRcdFx0PEdhbGxlcnkgY2xhc3NOYW1lPVwiaC1zY3JlZW4gY29udGFpbmVyIG14LWF1dG9cIiBza2V0Y2hlcz17c2tldGNoZXN9IC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L0xheW91dD5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/feral/Projects/ricardomatias.github.io/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "easy-peasy":
/*!*****************************!*\
  !*** external "easy-peasy" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"easy-peasy\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJlYXN5LXBlYXN5XCI/Y2MyNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJlYXN5LXBlYXN5LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZWFzeS1wZWFzeVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///easy-peasy\n");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiP2E0MGQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///fs\n");

/***/ }),

/***/ "gray-matter":
/*!******************************!*\
  !*** external "gray-matter" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"gray-matter\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmF5LW1hdHRlclwiP2Y4YmMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZ3JheS1tYXR0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmF5LW1hdHRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///gray-matter\n");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/dynamic\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2R5bmFtaWNcIj82ZDNmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvZHluYW1pYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZHluYW1pY1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/dynamic\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCI/NzRiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwYXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///path\n");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCI/MzgzMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwcm9wLXR5cGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///prop-types\n");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types-exact\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzLWV4YWN0XCI/OGUxYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwcm9wLXR5cGVzLWV4YWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlcy1leGFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///prop-types-exact\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-is\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiPzBkMzIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtaXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-is\n");

/***/ }),

/***/ "react-spring":
/*!*******************************!*\
  !*** external "react-spring" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-spring\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zcHJpbmdcIj9lZTg4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LXNwcmluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXNwcmluZ1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-spring\n");

/***/ }),

/***/ "react-three-fiber":
/*!************************************!*\
  !*** external "react-three-fiber" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-three-fiber\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC10aHJlZS1maWJlclwiP2M3NjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtdGhyZWUtZmliZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10aHJlZS1maWJlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-three-fiber\n");

/***/ }),

/***/ "resize-observer-polyfill":
/*!*******************************************!*\
  !*** external "resize-observer-polyfill" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"resize-observer-polyfill\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZXNpemUtb2JzZXJ2ZXItcG9seWZpbGxcIj8xZjJhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlc2l6ZS1vYnNlcnZlci1wb2x5ZmlsbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlc2l6ZS1vYnNlcnZlci1wb2x5ZmlsbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///resize-observer-polyfill\n");

/***/ }),

/***/ "snarkdown":
/*!****************************!*\
  !*** external "snarkdown" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"snarkdown\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzbmFya2Rvd25cIj83MDAxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InNuYXJrZG93bi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNuYXJrZG93blwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///snarkdown\n");

/***/ }),

/***/ "three":
/*!************************!*\
  !*** external "three" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"three\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0aHJlZVwiP2U4YzUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoidGhyZWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0aHJlZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///three\n");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"url\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmxcIj82MWU4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InVybC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVybFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///url\n");

/***/ })

/******/ });