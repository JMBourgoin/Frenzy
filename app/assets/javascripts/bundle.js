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
var ymargin = rect.y; // -------------------------------------------------------

window.addEventListener('click', function (e) {
  e.preventDefault();
  var x = e.pageX - xmargin;
  var y = e.pageY - ymargin;
  var topPie = game.board.topPie;
  var bottomPie = game.board.bottomPie;
  var leftTopPie = game.board.leftTopPie;
  var leftBottomPie = game.board.leftBottomPie;
  var rightTopPie = game.board.rightTopPie;
  var rightBottomPie = game.board.rightBottomPie;

  if (x > 318 && x < 458 && y > 106 && y < 244) {
    console.log('click1');
    game.board.handleClick(e, topPie);
  } else if (x > 318 && x < 458 && y > 536 && y < 681) {
    console.log('click4');
    game.board.handleClick(e, bottomPie);
  } else if (x > 114 && x < 257 && y > 214 && y < 357) {
    console.log('click6');
    game.board.handleClick(e, leftTopPie);
  } else if (x > 114 && x < 257 && y > 407 && y < 550) {
    console.log('click5');
    game.board.handleClick(e, leftBottomPie);
  } else if (x > 518 && x < 661 && y > 214 && y < 357) {
    console.log('click2');
    game.board.handleClick(e, rightTopPie);
  } else if (x > 518 && x < 661 && y > 407 && y < 550) {
    console.log('click3');
    game.board.handleClick(e, rightBottomPie);
  }
}); // window.addEventListener('mousemove', function(e){
//     e.preventDefault();
//     let x = (e.pageX - xmargin);
//     let y = (e.pageY -ymargin);
//     console.log('x: ' + x);
//     console.log('y: ' + y);
// });

/***/ }),

/***/ "./javascript/board.js":
/*!*****************************!*\
  !*** ./javascript/board.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wedgeCollection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wedgeCollection */ "./javascript/wedgeCollection.js");
/* harmony import */ var _pie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pie */ "./javascript/pie.js");
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timer */ "./javascript/timer.js");
/* harmony import */ var _center__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./center */ "./javascript/center.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var Board =
/*#__PURE__*/
function () {
  function Board() {
    _classCallCheck(this, Board);

    this.wedges = new _wedgeCollection__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.wedges.createWedges();
    this.center = new _center__WEBPACK_IMPORTED_MODULE_3__["default"](388, 383, this.wedges);
    this.timer = new _timer__WEBPACK_IMPORTED_MODULE_2__["default"](this.center);
    this.topPie = new _pie__WEBPACK_IMPORTED_MODULE_1__["default"](388, 173, this.center);
    this.bottomPie = new _pie__WEBPACK_IMPORTED_MODULE_1__["default"](388, 605, this.center);
    this.leftTopPie = new _pie__WEBPACK_IMPORTED_MODULE_1__["default"](185, 283, this.center);
    this.leftBottomPie = new _pie__WEBPACK_IMPORTED_MODULE_1__["default"](185, 475, this.center);
    this.rightTopPie = new _pie__WEBPACK_IMPORTED_MODULE_1__["default"](589, 283, this.center);
    this.rightBottomPie = new _pie__WEBPACK_IMPORTED_MODULE_1__["default"](590, 475, this.center);
    this.handleClick = this.handleClick.bind(this);
  }

  _createClass(Board, [{
    key: "handleClick",
    value: function handleClick(e, pie) {
      var timer = this.timer;
      var wedges = this.wedges;
      e.preventDefault();
      e.stopPropagation();
      pie.handleClick(e, timer, wedges);
    }
  }, {
    key: "render",
    value: function render() {
      this.timer.draw();
      this.topPie.render();
      this.bottomPie.render();
      this.center.render();
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
  function Center(x, y, wedges) {
    _classCallCheck(this, Center);

    this.x = x;
    this.y = y;
    this.wedges = wedges;
    var startWedge = this.wedges.randomWedge();
    this.wedge = [startWedge];
    this.render = this.render.bind(this);
    this.wedgePos = {
      0: {
        xv: this.x - 40,
        yv: this.y - 74
      },
      1: {
        xv: this.x - 3,
        yv: this.y - 66
      },
      2: {
        xv: this.x - 4,
        yv: this.y - 2
      },
      3: {
        xv: this.x - 40,
        yv: this.y - 6
      },
      4: {
        xv: this.x - 75,
        yv: this.y - 3
      },
      5: {
        xv: this.x - 75,
        yv: this.y - 66
      }
    };
    this.addWedge = this.addWedge.bind(this);
  }

  _createClass(Center, [{
    key: "addWedge",
    value: function addWedge() {
      this.wedge = [];
      var newWedge = this.wedges.randomWedge();
      return this.wedge.push(newWedge);
    } // Canvas Rendering logic

  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var canvas = document.getElementById("myCanvas");
      var ctx = canvas.getContext("2d");
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.arc(this.x, this.y, 70, 0, Math.PI * 2, false);
      ctx.strokeStyle = "#212121";
      ctx.stroke();
      ctx.closePath();

      if (this.wedge.length > 0) {
        this.wedge.forEach(function (wedge) {
          var num = wedge.num;
          var x = _this.wedgePos[num].xv;
          var y = _this.wedgePos[num].yv;
          return ctx.drawImage(wedge.image, x, y);
        });
      }
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
  function Pie(x, y, center) {
    _classCallCheck(this, Pie);

    this.x = x;
    this.y = y;
    this.wedgeNums = [];
    this.colors = [];
    this.wedges = [];
    this.center = center;
    this.render = this.render.bind(this);
    this.wedgePos = {
      0: {
        xv: this.x - 40,
        yv: this.y - 74
      },
      1: {
        xv: this.x - 3,
        yv: this.y - 66
      },
      2: {
        xv: this.x - 4,
        yv: this.y - 2
      },
      3: {
        xv: this.x - 40,
        yv: this.y - 6
      },
      4: {
        xv: this.x - 75,
        yv: this.y - 3
      },
      5: {
        xv: this.x - 75,
        yv: this.y - 66
      }
    };
    this.wedgeValid = this.wedgeValid.bind(this);
  }

  _createClass(Pie, [{
    key: "wedgeValid",
    value: function wedgeValid(wedge) {
      return this.wedgeNums.includes(wedge.num) ? false : true;
    }
  }, {
    key: "addWedge",
    value: function addWedge(wedge) {
      this.wedgeNums.push(wedge.num);
      this.colors.push(wedge.color);
      this.wedges.push(wedge);
    }
  }, {
    key: "full",
    value: function full() {
      return this.wedges.length === 6 ? true : false;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.wedges = [];
      this.colors = [];
      this.wedgeNums = [];
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
    value: function handleClick(e, timer, wedges) {
      e.preventDefault();
      var wedge = this.center.wedge[0];

      if (this.wedgeValid(wedge)) {
        timer.reset();
        this.addWedge(wedge);
      }

      if (this.full()) {
        this.clear();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var canvas = document.getElementById("myCanvas");
      var ctx = canvas.getContext("2d");
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.arc(this.x, this.y, 70, 0, Math.PI * 2, false);
      ctx.strokeStyle = "#212121";
      ctx.stroke();
      ctx.closePath();

      if (this.wedges.length > 0) {
        this.wedges.forEach(function (wedge) {
          var num = wedge.num;
          var x = _this.wedgePos[num].xv;
          var y = _this.wedgePos[num].yv;
          return ctx.drawImage(wedge.image, x, y);
        });
      } // ctx.addHitRegion({id: this.region});
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
  function Timer(center) {
    _classCallCheck(this, Timer);

    this.center = center;
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
        color = '#00FF00';
        this.render(this.x, color);
      } else if (this.x < 1.6 && this.x > .7) {
        color = 'yellow';
        this.render(this.x, color);
      } else if (this.x <= 2) {
        color = 'red';
        this.render(this.x, color);
      } else {
        this.center.addWedge();
        this.x = 0;
      }

      this.x += .025;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.center.addWedge();
      this.x = .01;
    }
  }, {
    key: "render",
    value: function render(interval, color) {
      var wid = 15 + this.x * 18;
      this.ctx.beginPath();
      this.ctx.lineWidth = wid;
      this.ctx.arc(388, 383, 110, 0, Math.PI * interval, false);
      this.ctx.strokeStyle = color;
      this.ctx.stroke();
      this.ctx.closePath();
    }
  }]);

  return Timer;
}();

/* harmony default export */ __webpack_exports__["default"] = (Timer);

/***/ }),

/***/ "./javascript/wedgeCollection.js":
/*!***************************************!*\
  !*** ./javascript/wedgeCollection.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var WedgeCollection =
/*#__PURE__*/
function () {
  function WedgeCollection() {
    _classCallCheck(this, WedgeCollection);

    this.wedges = [0, 1, 2, 3, 4, 5];
    this.colors = ["p", "g", "o"];
    this.purples = [];
    this.oranges = [];
    this.greens = [];
    this.createWedges = this.createWedges.bind(this);
    this.randomWedge = this.randomWedge.bind(this);
  }

  _createClass(WedgeCollection, [{
    key: "createWedges",
    value: function createWedges() {
      var _this = this;

      var oranges = ['o0', 'o1', 'o2', 'o3', 'o4', 'o5'];
      var purples = ['p0', 'p1', 'p2', 'p3', 'p4', 'p5'];
      var greens = ['g0', 'g1', 'g2', 'g3', 'g4', 'g5'];
      greens.forEach(function (pic) {
        var img = new Image();
        img.src = "./app/assets/images/wedges/".concat(pic, ".png");
        return _this.greens.push(img);
      });
      purples.forEach(function (pic) {
        var img = new Image();
        img.src = "./app/assets/images/wedges/".concat(pic, ".png");
        return _this.purples.push(img);
      });
      oranges.forEach(function (pic) {
        var img = new Image();
        img.src = "./app/assets/images/wedges/".concat(pic, ".png");
        return _this.oranges.push(img);
      });
    }
  }, {
    key: "randomNum",
    value: function randomNum(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
  }, {
    key: "randomWedge",
    value: function randomWedge() {
      var num = this.randomNum(6);
      var color = this.colors[this.randomNum(3)];
      var img = '';

      if (color === 'g') {
        img = this.greens[num];
      } else if (color === 'p') {
        img = this.purples[num];
      } else if (color === 'o') {
        img = this.oranges[num];
      } // switch(color){
      //     case 'g':
      //         img = this.greens[num];
      //     case 'p':
      //         img = this.purples[num];
      //     case 'o':
      //         img = this.oranges[num];
      // }


      return {
        num: num,
        color: color,
        image: img
      };
    }
  }]);

  return WedgeCollection;
}();

/* harmony default export */ __webpack_exports__["default"] = (WedgeCollection);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map