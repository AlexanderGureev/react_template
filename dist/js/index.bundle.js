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
/******/ 		"index": 0
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
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY3NzL21haW4uY3NzPzExN2YiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiLi9zcmMvY3NzL21haW4uY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/css/main.css\n");

/***/ }),

/***/ "./src/img sync recursive ^\\.\\/.*$":
/*!*******************************!*\
  !*** ./src/img sync ^\.\/.*$ ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./1.png\": \"./src/img/1.png\",\n\t\"./2.png\": \"./src/img/2.png\",\n\t\"./3.png\": \"./src/img/3.png\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tvar id = map[req];\n\tif(!(id + 1)) { // check for number or string\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn id;\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/img sync recursive ^\\\\.\\\\/.*$\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW1nIHN5bmMgXlxcLlxcLy4qJD8wZmQzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zcmMvaW1nIHN5bmMgcmVjdXJzaXZlIF5cXC5cXC8uKiQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vMS5wbmdcIjogXCIuL3NyYy9pbWcvMS5wbmdcIixcblx0XCIuLzIucG5nXCI6IFwiLi9zcmMvaW1nLzIucG5nXCIsXG5cdFwiLi8zLnBuZ1wiOiBcIi4vc3JjL2ltZy8zLnBuZ1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHR2YXIgaWQgPSBtYXBbcmVxXTtcblx0aWYoIShpZCArIDEpKSB7IC8vIGNoZWNrIGZvciBudW1iZXIgb3Igc3RyaW5nXG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBpZDtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2ltZyBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qJFwiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/img sync recursive ^\\.\\/.*$\n");

/***/ }),

/***/ "./src/img/1.png":
/*!***********************!*\
  !*** ./src/img/1.png ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"img/1.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW1nLzEucG5nP2E1OTciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiLi9zcmMvaW1nLzEucG5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcImltZy8xLnBuZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/img/1.png\n");

/***/ }),

/***/ "./src/img/2.png":
/*!***********************!*\
  !*** ./src/img/2.png ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"img/2.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW1nLzIucG5nPzY3NzMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiLi9zcmMvaW1nLzIucG5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcImltZy8yLnBuZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/img/2.png\n");

/***/ }),

/***/ "./src/img/3.png":
/*!***********************!*\
  !*** ./src/img/3.png ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"img/3.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW1nLzMucG5nPzU0MDAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiLi9zcmMvaW1nLzMucG5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcImltZy8zLnBuZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/img/3.png\n");

/***/ }),

/***/ "./src/js/MyForm.js":
/*!**************************!*\
  !*** ./src/js/MyForm.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Collapse = exports.Carousel = exports.BtnGroup = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _classnames = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n\nvar _classnames2 = _interopRequireDefault(_classnames);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar MyForm = function (_React$Component) {\n  _inherits(MyForm, _React$Component);\n\n  function MyForm(props) {\n    _classCallCheck(this, MyForm);\n\n    var _this = _possibleConstructorReturn(this, (MyForm.__proto__ || Object.getPrototypeOf(MyForm)).call(this, props));\n\n    _this.submit = _this.submit.bind(_this);\n    return _this;\n  }\n\n  _createClass(MyForm, [{\n    key: \"submit\",\n    value: function submit(e) {\n      e.preventDefault();\n      console.log(this._title + \" - \" + this._text);\n      console.log(this._title.value + \" - \" + this._text.value);\n      this._title.value = \"\";\n      this._text.value = \"\";\n      this._title.focus();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return _react2.default.createElement(\n        \"div\",\n        { className: \"color-form\" },\n        _react2.default.createElement(\n          \"div\",\n          { className: \"title\" },\n          \"Component: MyForm\"\n        ),\n        _react2.default.createElement(\n          \"form\",\n          { onSubmit: this.submit },\n          _react2.default.createElement(\"input\", {\n            ref: function ref(input) {\n              return _this2._title = input;\n            },\n            type: \"text\",\n            placeholder: \"color title...\",\n            required: true\n          }),\n          _react2.default.createElement(\"input\", {\n            ref: function ref(input) {\n              return _this2._text = input;\n            },\n            type: \"text\",\n            placeholder: \"color text...\",\n            required: true\n          }),\n          _react2.default.createElement(\n            \"button\",\n            null,\n            \"Add color\"\n          )\n        )\n      );\n    }\n  }]);\n\n  return MyForm;\n}(_react2.default.Component);\n\nvar BtnGroup = exports.BtnGroup = function (_React$Component2) {\n  _inherits(BtnGroup, _React$Component2);\n\n  function BtnGroup(props) {\n    _classCallCheck(this, BtnGroup);\n\n    var _this3 = _possibleConstructorReturn(this, (BtnGroup.__proto__ || Object.getPrototypeOf(BtnGroup)).call(this, props));\n\n    _this3.state = {\n      active: null\n    };\n    _this3.isActive = _this3.isActive.bind(_this3);\n    return _this3;\n  }\n\n  _createClass(BtnGroup, [{\n    key: \"isActive\",\n    value: function isActive(e) {\n      this.setState({\n        active: e.target.classList.contains(\"left\") ? \"left\" : \"right\"\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var classNameLeftBtn = (0, _classnames2.default)({\n        \"btn btn-secondary left\": true,\n        active: this.state.active === \"left\"\n      });\n\n      var classNameRightBtn = (0, _classnames2.default)({\n        \"btn btn-secondary right\": true,\n        active: this.state.active === \"right\"\n      });\n\n      return _react2.default.createElement(\n        \"div\",\n        { className: \"btn-group\", role: \"group\" },\n        _react2.default.createElement(\n          \"button\",\n          {\n            type: \"button\",\n            className: classNameLeftBtn,\n            onClick: this.isActive\n          },\n          \"Left\"\n        ),\n        _react2.default.createElement(\n          \"button\",\n          {\n            type: \"button\",\n            className: classNameRightBtn,\n            onClick: this.isActive\n          },\n          \"Right\"\n        )\n      );\n    }\n  }]);\n\n  return BtnGroup;\n}(_react2.default.Component);\n\nvar Carousel = exports.Carousel = function (_React$Component3) {\n  _inherits(Carousel, _React$Component3);\n\n  function Carousel(props) {\n    _classCallCheck(this, Carousel);\n\n    var _this4 = _possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call(this, props));\n\n    _this4.state = {\n      img: 0\n    };\n    _this4.nextImg = _this4.nextImg.bind(_this4);\n    _this4.prevImg = _this4.prevImg.bind(_this4);\n    return _this4;\n  }\n\n  _createClass(Carousel, [{\n    key: \"nextImg\",\n    value: function nextImg(e) {\n      console.log(this.state.img + 1 + \" \" + this.props.images.length);\n      console.log((this.state.img + 1) % this.props.images.length);\n      var img = this.state.img;\n\n      this.setState({\n        img: ++img > 2 ? 0 : img\n      });\n    }\n  }, {\n    key: \"prevImg\",\n    value: function prevImg(e) {\n      var img = this.state.img;\n\n      this.setState({\n        img: --img < 0 ? 2 : img\n      });\n    }\n  }, {\n    key: \"createImg\",\n    value: function createImg() {\n      var _this5 = this;\n\n      var images = this.props.images;\n\n\n      return images.map(function (img, i) {\n        return _react2.default.createElement(\n          \"div\",\n          {\n            key: i,\n            className: (0, _classnames2.default)({\n              \"carousel-item\": true,\n              active: _this5.state.img === i\n            })\n          },\n          _react2.default.createElement(\"img\", {\n            alt: \"\",\n            className: \"d-block w-100\",\n            src: __webpack_require__(\"./src/img sync recursive ^\\\\.\\\\/.*$\")(\"./\" + img)\n          })\n        );\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return _react2.default.createElement(\n        \"div\",\n        { id: \"carousel\", className: \"carousel slide\", \"data-ride\": \"carousel\" },\n        _react2.default.createElement(\n          \"div\",\n          { className: \"carousel-inner\" },\n          this.createImg()\n        ),\n        _react2.default.createElement(\n          \"a\",\n          {\n            className: \"carousel-control-prev\",\n            href: \"#carousel\",\n            role: \"button\",\n            \"data-slide\": \"prev\",\n            onClick: this.prevImg\n          },\n          _react2.default.createElement(\"span\", { className: \"carousel-control-prev-icon\" }),\n          _react2.default.createElement(\n            \"span\",\n            { className: \"sr-only\" },\n            \"Previous\"\n          )\n        ),\n        _react2.default.createElement(\n          \"a\",\n          {\n            className: \"carousel-control-next\",\n            href: \"#carousel\",\n            role: \"button\",\n            \"data-slide\": \"next\",\n            onClick: this.nextImg\n          },\n          _react2.default.createElement(\"span\", { className: \"carousel-control-next-icon\" }),\n          _react2.default.createElement(\n            \"span\",\n            { className: \"sr-only\" },\n            \"Next\"\n          )\n        )\n      );\n    }\n  }]);\n\n  return Carousel;\n}(_react2.default.Component);\n\nvar Collapse = exports.Collapse = function (_Component) {\n  _inherits(Collapse, _Component);\n\n  function Collapse() {\n    var _ref;\n\n    var _temp, _this6, _ret;\n\n    _classCallCheck(this, Collapse);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this6 = _possibleConstructorReturn(this, (_ref = Collapse.__proto__ || Object.getPrototypeOf(Collapse)).call.apply(_ref, [this].concat(args))), _this6), _this6.state = {\n      opened: false\n    }, _this6.isActive = function (e) {\n      e.preventDefault();\n      var opened = _this6.state.opened;\n\n      _this6.setState({\n        opened: !opened\n      });\n    }, _temp), _possibleConstructorReturn(_this6, _ret);\n  }\n\n  _createClass(Collapse, [{\n    key: \"render\",\n    value: function render() {\n      var className = (0, _classnames2.default)({\n        collapse: true,\n        show: this.state.opened\n      });\n      return _react2.default.createElement(\n        \"div\",\n        null,\n        _react2.default.createElement(\n          \"p\",\n          null,\n          _react2.default.createElement(\n            \"a\",\n            { className: \"btn btn-primary\", href: \"#\", onClick: this.isActive },\n            \"Link with href\"\n          )\n        ),\n        _react2.default.createElement(\n          \"div\",\n          { className: className },\n          this.state.opened && _react2.default.createElement(\n            \"div\",\n            { className: \"\" },\n            this.props.text\n          )\n        )\n      );\n    }\n  }]);\n\n  return Collapse;\n}(_react.Component);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvTXlGb3JtLmpzP2MwODQiXSwibmFtZXMiOlsiTXlGb3JtIiwicHJvcHMiLCJzdWJtaXQiLCJiaW5kIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsIl90aXRsZSIsIl90ZXh0IiwidmFsdWUiLCJmb2N1cyIsImlucHV0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJCdG5Hcm91cCIsInN0YXRlIiwiYWN0aXZlIiwiaXNBY3RpdmUiLCJzZXRTdGF0ZSIsInRhcmdldCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiY2xhc3NOYW1lTGVmdEJ0biIsImNsYXNzTmFtZVJpZ2h0QnRuIiwiQ2Fyb3VzZWwiLCJpbWciLCJuZXh0SW1nIiwicHJldkltZyIsImltYWdlcyIsImxlbmd0aCIsIm1hcCIsImkiLCJyZXF1aXJlIiwiY3JlYXRlSW1nIiwiQ29sbGFwc2UiLCJvcGVuZWQiLCJjbGFzc05hbWUiLCJjb2xsYXBzZSIsInNob3ciLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUEsTTs7O0FBQ0osa0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxnSEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsTUFBTCxHQUFjLE1BQUtBLE1BQUwsQ0FBWUMsSUFBWixPQUFkO0FBRmlCO0FBR2xCOzs7OzJCQUNNQyxDLEVBQUc7QUFDUkEsUUFBRUMsY0FBRjtBQUNBQyxjQUFRQyxHQUFSLENBQWUsS0FBS0MsTUFBcEIsV0FBZ0MsS0FBS0MsS0FBckM7QUFDQUgsY0FBUUMsR0FBUixDQUFlLEtBQUtDLE1BQUwsQ0FBWUUsS0FBM0IsV0FBc0MsS0FBS0QsS0FBTCxDQUFXQyxLQUFqRDtBQUNBLFdBQUtGLE1BQUwsQ0FBWUUsS0FBWixHQUFvQixFQUFwQjtBQUNBLFdBQUtELEtBQUwsQ0FBV0MsS0FBWCxHQUFtQixFQUFuQjtBQUNBLFdBQUtGLE1BQUwsQ0FBWUcsS0FBWjtBQUNE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LDRCQUFoQixHQVBGO0FBUUU7QUFBQTtBQUFBLGNBQU0sV0FBVSxTQUFoQjtBQUFBO0FBQUE7QUFSRjtBQVpGLE9BREY7QUF5QkQ7Ozs7RUExRTJCZCxnQkFBTUMsUzs7SUE4RXZCcUIsUSxXQUFBQSxROzs7Ozs7Ozs7Ozs7Ozs2TEFDWG5CLEssR0FBUTtBQUNKb0IsY0FBUTtBQURKLEssU0FJUmxCLFEsR0FBVyxVQUFDZCxDQUFELEVBQU87QUFDaEJBLFFBQUVDLGNBQUY7QUFEZ0IsVUFFVitCLE1BRlUsR0FFQyxPQUFLcEIsS0FGTixDQUVWb0IsTUFGVTs7QUFHaEIsYUFBS2pCLFFBQUwsQ0FBYztBQUNWaUIsZ0JBQVEsQ0FBQ0E7QUFEQyxPQUFkO0FBR0QsSzs7Ozs7NkJBRVE7QUFDUCxVQUFJQyxZQUFZLDBCQUFHO0FBQ2ZDLGtCQUFVLElBREs7QUFFZkMsY0FBTSxLQUFLdkIsS0FBTCxDQUFXb0I7QUFGRixPQUFILENBQWhCO0FBSUEsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsY0FBRyxXQUFVLGlCQUFiLEVBQStCLE1BQUssR0FBcEMsRUFBd0MsU0FBUyxLQUFLbEIsUUFBdEQ7QUFBQTtBQUFBO0FBREYsU0FERjtBQU1FO0FBQUE7QUFBQSxZQUFLLFdBQVdtQixTQUFoQjtBQUNJLGVBQUtyQixLQUFMLENBQVdvQixNQUFYLElBQXFCO0FBQUE7QUFBQSxjQUFLLFdBQVUsRUFBZjtBQUFtQixpQkFBS25DLEtBQUwsQ0FBV3VDO0FBQTlCO0FBRHpCO0FBTkYsT0FERjtBQVlEOzs7O0VBOUIyQjFCLGdCIiwiZmlsZSI6Ii4vc3JjL2pzL015Rm9ybS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjbiBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuXG5jbGFzcyBNeUZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN1Ym1pdCA9IHRoaXMuc3VibWl0LmJpbmQodGhpcyk7XG4gIH1cbiAgc3VibWl0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc29sZS5sb2coYCR7dGhpcy5fdGl0bGV9IC0gJHt0aGlzLl90ZXh0fWApO1xuICAgIGNvbnNvbGUubG9nKGAke3RoaXMuX3RpdGxlLnZhbHVlfSAtICR7dGhpcy5fdGV4dC52YWx1ZX1gKTtcbiAgICB0aGlzLl90aXRsZS52YWx1ZSA9IFwiXCI7XG4gICAgdGhpcy5fdGV4dC52YWx1ZSA9IFwiXCI7XG4gICAgdGhpcy5fdGl0bGUuZm9jdXMoKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sb3ItZm9ybVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+Q29tcG9uZW50OiBNeUZvcm08L2Rpdj5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuc3VibWl0fT5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHJlZj17aW5wdXQgPT4gKHRoaXMuX3RpdGxlID0gaW5wdXQpfVxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJjb2xvciB0aXRsZS4uLlwiXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICByZWY9e2lucHV0ID0+ICh0aGlzLl90ZXh0ID0gaW5wdXQpfVxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJjb2xvciB0ZXh0Li4uXCJcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YnV0dG9uPkFkZCBjb2xvcjwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCdG5Hcm91cCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhY3RpdmU6IG51bGxcbiAgICB9O1xuICAgIHRoaXMuaXNBY3RpdmUgPSB0aGlzLmlzQWN0aXZlLmJpbmQodGhpcyk7XG4gIH1cblxuICBpc0FjdGl2ZShlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhY3RpdmU6IGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImxlZnRcIikgPyBcImxlZnRcIiA6IFwicmlnaHRcIlxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBjbGFzc05hbWVMZWZ0QnRuID0gY24oe1xuICAgICAgXCJidG4gYnRuLXNlY29uZGFyeSBsZWZ0XCI6IHRydWUsXG4gICAgICBhY3RpdmU6IHRoaXMuc3RhdGUuYWN0aXZlID09PSBcImxlZnRcIlxuICAgIH0pO1xuXG4gICAgbGV0IGNsYXNzTmFtZVJpZ2h0QnRuID0gY24oe1xuICAgICAgXCJidG4gYnRuLXNlY29uZGFyeSByaWdodFwiOiB0cnVlLFxuICAgICAgYWN0aXZlOiB0aGlzLnN0YXRlLmFjdGl2ZSA9PT0gXCJyaWdodFwiXG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tZ3JvdXBcIiByb2xlPVwiZ3JvdXBcIj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lTGVmdEJ0bn1cbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLmlzQWN0aXZlfVxuICAgICAgICA+XG4gICAgICAgICAgTGVmdFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lUmlnaHRCdG59XG4gICAgICAgICAgb25DbGljaz17dGhpcy5pc0FjdGl2ZX1cbiAgICAgICAgPlxuICAgICAgICAgIFJpZ2h0XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2Fyb3VzZWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaW1nOiAwXG4gICAgfTtcbiAgICB0aGlzLm5leHRJbWcgPSB0aGlzLm5leHRJbWcuYmluZCh0aGlzKTtcbiAgICB0aGlzLnByZXZJbWcgPSB0aGlzLnByZXZJbWcuYmluZCh0aGlzKTtcbiAgfVxuXG4gIG5leHRJbWcoZSkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuaW1nICsgMSArIFwiIFwiICsgdGhpcy5wcm9wcy5pbWFnZXMubGVuZ3RoKTtcbiAgICBjb25zb2xlLmxvZygodGhpcy5zdGF0ZS5pbWcgKyAxKSAlIHRoaXMucHJvcHMuaW1hZ2VzLmxlbmd0aCk7XG4gICAgbGV0IHsgaW1nIH0gPSB0aGlzLnN0YXRlO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaW1nOiArK2ltZyA+IDIgPyAwIDogaW1nXG4gICAgfSk7XG4gIH1cblxuICBwcmV2SW1nKGUpIHtcbiAgICBsZXQgeyBpbWcgfSA9IHRoaXMuc3RhdGU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpbWc6IC0taW1nIDwgMCA/IDIgOiBpbWdcbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZUltZygpIHtcbiAgICBjb25zdCB7IGltYWdlcyB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiBpbWFnZXMubWFwKChpbWcsIGkpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbih7XG4gICAgICAgICAgICBcImNhcm91c2VsLWl0ZW1cIjogdHJ1ZSxcbiAgICAgICAgICAgIGFjdGl2ZTogdGhpcy5zdGF0ZS5pbWcgPT09IGlcbiAgICAgICAgICB9KX1cbiAgICAgICAgPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJkLWJsb2NrIHctMTAwXCJcbiAgICAgICAgICAgIHNyYz17cmVxdWlyZShgLi4vaW1nLyR7aW1nfWApfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBpZD1cImNhcm91c2VsXCIgY2xhc3NOYW1lPVwiY2Fyb3VzZWwgc2xpZGVcIiBkYXRhLXJpZGU9XCJjYXJvdXNlbFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsLWlubmVyXCI+e3RoaXMuY3JlYXRlSW1nKCl9PC9kaXY+XG4gICAgICAgIDxhXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtY29udHJvbC1wcmV2XCJcbiAgICAgICAgICBocmVmPVwiI2Nhcm91c2VsXCJcbiAgICAgICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgICAgICBkYXRhLXNsaWRlPVwicHJldlwiXG4gICAgICAgICAgb25DbGljaz17dGhpcy5wcmV2SW1nfVxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb25cIiAvPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5QcmV2aW91czwvc3Bhbj5cbiAgICAgICAgPC9hPlxuICAgICAgICA8YVxuICAgICAgICAgIGNsYXNzTmFtZT1cImNhcm91c2VsLWNvbnRyb2wtbmV4dFwiXG4gICAgICAgICAgaHJlZj1cIiNjYXJvdXNlbFwiXG4gICAgICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICAgICAgZGF0YS1zbGlkZT1cIm5leHRcIlxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMubmV4dEltZ31cbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uXCIgLz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+TmV4dDwvc3Bhbj5cbiAgICAgICAgPC9hPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5cbmV4cG9ydCBjbGFzcyBDb2xsYXBzZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgICAgb3BlbmVkOiBmYWxzZVxuICB9O1xuXG4gIGlzQWN0aXZlID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IHsgb3BlbmVkIH0gPSB0aGlzLnN0YXRlO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBvcGVuZWQ6ICFvcGVuZWRcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgY2xhc3NOYW1lID0gY24oe1xuICAgICAgICBjb2xsYXBzZTogdHJ1ZSxcbiAgICAgICAgc2hvdzogdGhpcy5zdGF0ZS5vcGVuZWRcbiAgICB9KTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgaHJlZj1cIiNcIiBvbkNsaWNrPXt0aGlzLmlzQWN0aXZlfT5cbiAgICAgICAgICAgIExpbmsgd2l0aCBocmVmXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICAgIHsgdGhpcy5zdGF0ZS5vcGVuZWQgJiYgPGRpdiBjbGFzc05hbWU9XCJcIj57dGhpcy5wcm9wcy50ZXh0fTwvZGl2PiB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/MyForm.js\n");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ../css/main.css */ \"./src/css/main.css\");\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _MyForm = __webpack_require__(/*! ./MyForm */ \"./src/js/MyForm.js\");\n\nvar _MyForm2 = _interopRequireDefault(_MyForm);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//console.log(React.createElement(MyForm, null, null));\n// const images = [\n//     \"1.png\",\n//     \"2.png\",\n//     \"3.png\",\n//     \"1.png\",\n//     \"2.png\",\n//     \"3.png\"\n// ];\n// ReactDOM.render(<Carousel images={images}/>, document.getElementById(\"root-node\"));\n\n_reactDom2.default.render(_react2.default.createElement(_MyForm.Collapse, null), document.getElementById(\"root-node\"));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXguanM/N2JhNSJdLCJuYW1lcyI6WyJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQUEsbUJBQVNDLE1BQVQsQ0FBZ0IsOEJBQUMsZ0JBQUQsT0FBaEIsRUFBOEJDLFNBQVNDLGNBQVQsQ0FBd0IsV0FBeEIsQ0FBOUIiLCJmaWxlIjoiLi9zcmMvanMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9jc3MvbWFpbi5jc3NcIjtcblxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgQ2Fyb3VzZWwsIHsgQ29sbGFwc2UgfSBmcm9tIFwiLi9NeUZvcm1cIjtcblxuXG4vL2NvbnNvbGUubG9nKFJlYWN0LmNyZWF0ZUVsZW1lbnQoTXlGb3JtLCBudWxsLCBudWxsKSk7XG4vLyBjb25zdCBpbWFnZXMgPSBbXG4vLyAgICAgXCIxLnBuZ1wiLFxuLy8gICAgIFwiMi5wbmdcIixcbi8vICAgICBcIjMucG5nXCIsXG4vLyAgICAgXCIxLnBuZ1wiLFxuLy8gICAgIFwiMi5wbmdcIixcbi8vICAgICBcIjMucG5nXCJcbi8vIF07XG4vLyBSZWFjdERPTS5yZW5kZXIoPENhcm91c2VsIGltYWdlcz17aW1hZ2VzfS8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3Qtbm9kZVwiKSk7XG5cblJlYWN0RE9NLnJlbmRlcig8Q29sbGFwc2UgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdC1ub2RlXCIpKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/index.js\n");

/***/ }),

/***/ 0:
/*!*******************************!*\
  !*** multi ./src/js/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/alexga/Desktop/testReact/src/js/index.js */"./src/js/index.js");


/***/ })

/******/ });