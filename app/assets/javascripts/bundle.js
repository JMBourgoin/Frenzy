/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _javascript_pie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./javascript/pie */ "./javascript/pie.js");
/* harmony import */ var _javascript_board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./javascript/board */ "./javascript/board.js");
/* harmony import */ var _javascript_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./javascript/timer */ "./javascript/timer.js");



var timer = new _javascript_timer__WEBPACK_IMPORTED_MODULE_2__["default"]();
var topPie = new _javascript_pie__WEBPACK_IMPORTED_MODULE_0__["default"](388, 199);
var bottomPie = new _javascript_pie__WEBPACK_IMPORTED_MODULE_0__["default"](388, 630);
var centerPie = new _javascript_pie__WEBPACK_IMPORTED_MODULE_0__["default"](388, 410);
var leftTopPie = new _javascript_pie__WEBPACK_IMPORTED_MODULE_0__["default"](186, 308);
var leftBottomPie = new _javascript_pie__WEBPACK_IMPORTED_MODULE_0__["default"](186, 502);
var rightTopPie = new _javascript_pie__WEBPACK_IMPORTED_MODULE_0__["default"](592, 309);
var rightBottomPie = new _javascript_pie__WEBPACK_IMPORTED_MODULE_0__["default"](592, 501);
timer.start();
var pieArray = [topPie, bottomPie, centerPie, leftTopPie, leftBottomPie, rightTopPie, rightBottomPie];

var startGameHandler = function startGameHandler(e) {};

pieArray.forEach(function (pie) {
  return pie.render();
});
document.addEventListener('click', startGameHandler, false);

/***/ }),

/***/ "./javascript/board.js":
/*!*****************************!*\
  !*** ./javascript/board.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Board =
/*#__PURE__*/
function () {
  function Board() {
    _classCallCheck(this, Board);

    this.canvas = document.getElementById("myCanvas");
    this.ctx = this.canvas.getContext("2d");
    this.render = this.render.bind(this);
  }

  _createClass(Board, [{
    key: "draw",
    value: function draw() {
      var ctx = this.ctx;
      var image = new Image();
      image.addEventListener('load', function () {
        ctx.drawImage(image, 0, 0);
      }, false);
      image.src = './app/assets/images/frenzyboard.png';
    }
  }, {
    key: "render",
    value: function render() {
      this.ctx.beginPath();
      this.ctx.arc(375, 325, 325, 0, Math.PI * 2, false);
      this.ctx.fillStyle = "#212121";
      this.ctx.fill();
      this.ctx.closePath();
    }
  }]);

  return Board;
}();

;
/* harmony default export */ __webpack_exports__["default"] = (Board);

/***/ }),

/***/ "./javascript/pie.js":
/*!***************************!*\
  !*** ./javascript/pie.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Pie =
/*#__PURE__*/
function () {
  function Pie(x, y) {
    _classCallCheck(this, Pie);

    this.x = x;
    this.y = y;
  }

  _createClass(Pie, [{
    key: "draw",
    value: function draw() {
      setInterval(render, 10);
    }
  }, {
    key: "render",
    value: function render() {
      var canvas = document.getElementById("myCanvas");
      var ctx = canvas.getContext("2d");
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.arc(this.x, this.y, 70, 0, Math.PI * 2, false);
      ctx.strokeStyle = "#212121";
      ctx.stroke();
      ctx.closePath();
    }
  }]);

  return Pie;
}();

;
/* harmony default export */ __webpack_exports__["default"] = (Pie);

/***/ }),

/***/ "./javascript/timer.js":
/*!*****************************!*\
  !*** ./javascript/timer.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Timer =
/*#__PURE__*/
function () {
  function Timer() {
    _classCallCheck(this, Timer);

    this.canvas = document.getElementById("myCanvas");
    this.ctx = this.canvas.getContext("2d");
    this.gradient = this.ctx.createLinearGradient(20, 0, 220, 0);
    this.gradient.addColorStop(0, 'green');
    this.gradient.addColorStop(.5, 'yellow');
    this.gradient.addColorStop(1, 'red');
    this.render = this.render.bind(this);
    this.draw = this.draw.bind(this);
    this.start = this.start.bind(this);
    this.x = .05;
  }

  _createClass(Timer, [{
    key: "start",
    value: function start() {
      setInterval(this.draw, 50);
    }
  }, {
    key: "draw",
    value: function draw() {
      this.ctx.clearRect(0, 0, 800, 800);
      var color = '';

      if (this.x < 1) {
        color = 'green';
        this.render(this.x, color);
      } else if (this.x < 1.6 && this.x > .7) {
        color = 'yellow';
        this.render(this.x, color);
      } else if (this.x <= 2) {
        color = 'red';
        this.render(this.x, color);
      } else {
        this.x = 0;
      }

      this.x += .01;
    }
  }, {
    key: "render",
    value: function render(interval, color) {
      var wid = 15 + this.x * 25;
      this.ctx.beginPath();
      this.ctx.lineWidth = wid;
      this.ctx.arc(388, 410, 110, 0, Math.PI * interval, false);
      this.ctx.strokeStyle = color;
      this.ctx.stroke();
      this.ctx.closePath();
    }
  }]);

  return Timer;
}();

/* harmony default export */ __webpack_exports__["default"] = (Timer);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map