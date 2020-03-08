webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./services/CanvasService.ts":
/*!***********************************!*\
  !*** ./services/CanvasService.ts ***!
  \***********************************/
/*! exports provided: CanvasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasService", function() { return CanvasService; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _contsants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contsants */ "./contsants.ts");
/* harmony import */ var _maths_Square__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../maths/Square */ "./maths/Square.ts");
/* harmony import */ var _maths_Vec3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../maths/Vec3 */ "./maths/Vec3.ts");
/* harmony import */ var _maths_Hexagon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../maths/Hexagon */ "./maths/Hexagon.ts");







var SHAPE_COLOR = _contsants__WEBPACK_IMPORTED_MODULE_3__["colors"].theme.pinkSand;
var CanvasService =
/*#__PURE__*/
function () {
  function CanvasService() {
    var _this = this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CanvasService);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "canvas", void 0);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "context", void 0);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "square", void 0);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "hexagon", void 0);

    window.addEventListener('resize', function () {
      return _this.sizeCanvas();
    });
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CanvasService, [{
    key: "init",
    value: function init() {
      var canvas = document.getElementById('canvas');

      if (!canvas) {
        throw new Error('No canvas rendered.');
      }

      var width = canvas.clientWidth,
          height = canvas.clientHeight;
      canvas.width = width;
      canvas.height = height;
      this.canvas = canvas;
      this.context = canvas.getContext('2d');
      var center = this.getCanvasCenter(canvas);
      var hexCenter = center.clone().translate(-width / 3.75, -height / 2.5, 0);
      this.hexagon = new _maths_Hexagon__WEBPACK_IMPORTED_MODULE_6__["Hexagon"](this.getHexWidth(canvas), hexCenter, SHAPE_COLOR);
      var sqCenter = center.translate(width / 5, height / 3, 0);
      this.square = new _maths_Square__WEBPACK_IMPORTED_MODULE_4__["Square"](this.getSqWidth(canvas), sqCenter, SHAPE_COLOR);
    }
  }, {
    key: "sizeCanvas",
    value: function sizeCanvas() {
      var canvas = this.canvas;
      var _this$canvas = this.canvas,
          width = _this$canvas.clientWidth,
          height = _this$canvas.clientHeight;
      canvas.width = width;
      canvas.height = height;
      var center = this.getCanvasCenter(canvas);
      var hexCenter = center.clone().translate(-width / 3.75, -height / 2.5, 0);
      this.hexagon.assignProperties(this.getHexWidth(canvas), hexCenter, SHAPE_COLOR);
      var sqCenter = center.translate(width / 5, height / 3, 0);
      this.square.assignProperties(this.getSqWidth(canvas), sqCenter, SHAPE_COLOR);
    }
  }, {
    key: "startDrawing",
    value: function startDrawing() {
      var _this2 = this;

      var loop = function loop() {
        _this2.context.clearRect(0, 0, _this2.context.canvas.width, _this2.context.canvas.height);

        _this2.hexagon.draw(_this2.context);

        _this2.hexagon.rotate(0.5);

        _this2.square.draw(_this2.context);

        _this2.square.rotate(0.75);

        window.requestAnimationFrame(loop);
      };

      loop();
    }
  }, {
    key: "getCanvasCenter",
    value: function getCanvasCenter(canvas) {
      var width = canvas.width,
          height = canvas.height;
      return new _maths_Vec3__WEBPACK_IMPORTED_MODULE_5__["Vec3"](width / 2, height / 2, 0);
    }
  }, {
    key: "getHexWidth",
    value: function getHexWidth(canvas) {
      return canvas.width * canvas.height * 1e-4;
    }
  }, {
    key: "getSqWidth",
    value: function getSqWidth(canvas) {
      return canvas.width * canvas.height * 1e-4;
    }
  }], [{
    key: "getInstance",
    value: function getInstance() {
      if (!this.instance) {
        this.instance = new CanvasService();
      }

      return this.instance;
    }
  }]);

  return CanvasService;
}();

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(CanvasService, "instance", void 0);

/***/ })

})
//# sourceMappingURL=index.js.cae48ebd3231c0d4dd7d.hot-update.js.map