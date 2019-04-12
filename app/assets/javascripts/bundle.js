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
/* harmony import */ var _javascript_game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./javascript/game */ "./javascript/game.js");




var game = new _javascript_game__WEBPACK_IMPORTED_MODULE_3__["default"]();
game.start(); // -----------------------------------------------------

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var rect = canvas.getBoundingClientRect();
var xmargin = rect.x;
var ymargin = rect.x; // -------------------------------------------------------

window.addEventListener('click', function (e) {
  var x = e.pageX - xmargin;
  var y = e.pageY - ymargin;
  var topPie = game.board.topPie;
  var bottomPie = game.board.bottomPie;
  var leftTopPie = game.board.leftTopPie;
  var leftBottomPie = game.board.leftBottomPie;
  var rightTopPie = game.board.rightTopPie;
  var rightBottomPie = game.board.rightBottomPie;

  if (x > 353 && x < 423 && y > 164 && y < 234) {
    console.log('click1');
    game.board.handleClick(topPie);
  } else if (x > 353 && x < 423 && y > 595 && y < 665) {
    game.board.handleClick(bottomPie);
  } else if (x > 151 && x < 221 && y > 273 && y < 343) {
    game.board.handleClick(leftTopPie);
  } else if (x > 151 && x < 221 && y > 467 && y < 502) {
    game.board.handleClick(leftBottomPie);
  } else if (x > 557 && x < 627 && y > 274 && y > 344) {
    game.board.handleCick(rightTopPie);
  } else if (x > 557 && x < 627 && y > 274 && y > 344) {
    game.board.handleClick(rightBottomPie);
  }
}); // window.addEventListener('mousemove', function (e) {
//     ctx.x = e.pageX;
//     ctx.y = e.pageY;
//     console.log("x: " + ctx.x);
//     console.log("y: " + ctx.y);
//   });

/***/ }),

/***/ "./javascript/board.js":
/*!*****************************!*\
  !*** ./javascript/board.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pie */ "./javascript/pie.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Board =
/*#__PURE__*/
function () {
  function Board() {
    _classCallCheck(this, Board);

    this.topPie = new _pie__WEBPACK_IMPORTED_MODULE_0__["default"](388, 199, 'top');
    this.bottomPie = new _pie__WEBPACK_IMPORTED_MODULE_0__["default"](389, 631, 'bottom');
    this.centerPie = new _pie__WEBPACK_IMPORTED_MODULE_0__["default"](389, 410, 'center');
    this.leftTopPie = new _pie__WEBPACK_IMPORTED_MODULE_0__["default"](186, 308, 'leftTop');
    this.leftBottomPie = new _pie__WEBPACK_IMPORTED_MODULE_0__["default"](186, 502, 'leftBottom');
    this.rightTopPie = new _pie__WEBPACK_IMPORTED_MODULE_0__["default"](592, 309, 'rightTop');
    this.rightBottomPie = new _pie__WEBPACK_IMPORTED_MODULE_0__["default"](592, 501, 'rightBottom');
  }

  _createClass(Board, [{
    key: "handleClick",
    value: function handleClick(pie) {
      debugger;
      pie.handleClick();
    }
  }, {
    key: "render",
    value: function render() {
      this.topPie.render();
      this.bottomPie.render();
      this.centerPie.render();
      this.leftTopPie.render();
      this.leftBottomPie.render();
      this.rightTopPie.render();
      this.rightBottomPie.render();
    }
  }]);

  return Board;
}();

/* harmony default export */ __webpack_exports__["default"] = (Board);

/***/ }),

/***/ "./javascript/center.js":
/*!******************************!*\
  !*** ./javascript/center.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Center =
/*#__PURE__*/
function () {
  function Center(x, y) {
    _classCallCheck(this, Center);

    this.x = x;
    this.y = y;
    this.wedge = '';
    this.color = '';
    this.render = this.render.bind(this);
    this.draw = this.draw.bind(this);
  }

  _createClass(Center, [{
    key: "addWedge",
    value: function addWedge(_ref) {
      var wedge = _ref.wedge,
          color = _ref.color;
      this.wedge = wedge;
      this.color = color;
    } // Canvas Rendering logic

  }, {
    key: "draw",
    value: function draw() {
      setInterval(this.render, 10);
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

  return Center;
}();

;
/* harmony default export */ __webpack_exports__["default"] = (Center);

/***/ }),

/***/ "./javascript/game.js":
/*!****************************!*\
  !*** ./javascript/game.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _board_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board.js */ "./javascript/board.js");
/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timer.js */ "./javascript/timer.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Game =
/*#__PURE__*/
function () {
  function Game() {
    _classCallCheck(this, Game);

    this.board = new _board_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.timer = new _timer_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.score = 0;
    this.level = 1;
    this.lives = 3;
    this.render = this.render.bind(this);
    this.intervalId = '';
  }

  _createClass(Game, [{
    key: "start",
    value: function start() {
      this.intervalId = setInterval(this.render, 60);
    }
  }, {
    key: "stop",
    value: function stop() {
      clearInterval(this.intervalId);
    }
  }, {
    key: "render",
    value: function render(level) {
      this.level = level;
      this.timer.draw();
      this.board.render();
    }
  }]);

  return Game;
}();

/* harmony default export */ __webpack_exports__["default"] = (Game);

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
  function Pie(x, y, region) {
    _classCallCheck(this, Pie);

    this.x = x;
    this.y = y;
    this.region = region;
    this.wedges = [];
    this.colors = [];
    this.render = this.render.bind(this);
  }

  _createClass(Pie, [{
    key: "wedgeValid",
    value: function wedgeValid(wedge) {
      this.wedges.includes(wedge) ? false : true;
    }
  }, {
    key: "addWedge",
    value: function addWedge(wedge, color) {
      if (this.wedgeValid(wedge)) {
        this.wedges.push(wedge);
        this.colors.push(color);
      }
    }
  }, {
    key: "full",
    value: function full() {
      this.pieces.length === 6 ? true : false;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.wedges = [];
      this.colors = [];
    }
  }, {
    key: "score",
    value: function score() {
      var colorCounts = {
        green: 0,
        purple: 0,
        orange: 0
      };

      for (var i = 0; i < this.colors.length; i++) {
        switch (this.colors[i]) {
          case "green":
            colorCounts.green += 1;

          case "purple":
            colorCounts.purple += 1;

          case "orange":
            colorCounts.orange += 1;
        }
      }

      var uniqueColors = new Set(this.colors);
      var colorCountsArr = Object.values(colorCounts).sort;
      var colorCountHigh = colorCountsArr[colorCountsArr.length - 1];

      if (uniqueColors.length === 1) {
        return 10;
      } else if (colorCountHigh === 5) {
        return 5;
      } else if (colorCountHigh >= 3) {
        return 2;
      } else {
        return 1;
      }
    }
  }, {
    key: "handleClick",
    value: function handleClick(event) {
      alert('click');
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
      ctx.closePath(); // ctx.addHitRegion({id: this.region});
      // canvas.addEventListener('click', this.handleClick(event));
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
/* harmony import */ var _center__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./center */ "./javascript/center.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Timer =
/*#__PURE__*/
function () {
  function Timer() {
    _classCallCheck(this, Timer);

    this.center = new _center__WEBPACK_IMPORTED_MODULE_0__["default"](388, 410);
    this.canvas = document.getElementById("myCanvas");
    this.ctx = this.canvas.getContext("2d");
    this.render = this.render.bind(this);
    this.draw = this.draw.bind(this);
    this.x = .01;
  }

  _createClass(Timer, [{
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

      this.x += .025;
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