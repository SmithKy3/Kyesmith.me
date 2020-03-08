webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./services/AnimationService.ts":
/*!**************************************!*\
  !*** ./services/AnimationService.ts ***!
  \**************************************/
/*! exports provided: AnimationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationService", function() { return AnimationService; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _CanvasService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CanvasService */ "./services/CanvasService.ts");
/* harmony import */ var _PerspectiveService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PerspectiveService */ "./services/PerspectiveService.ts");





var AnimationService =
/*#__PURE__*/
function () {
  function AnimationService() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AnimationService);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "canvasDrawer", void 0);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "perspectiveService", void 0);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AnimationService, [{
    key: "init",
    value: function init() {
      this.canvasDrawer = _CanvasService__WEBPACK_IMPORTED_MODULE_3__["CanvasService"].getInstance();
      this.perspectiveService = _PerspectiveService__WEBPACK_IMPORTED_MODULE_4__["PerspectiveService"].getInstance();
      this.canvasDrawer.init();
      this.perspectiveService.init();
    }
  }, {
    key: "startDrawing",
    value: function startDrawing() {
      this.canvasDrawer.startDrawing();
    }
  }], [{
    key: "getInstance",
    value: function getInstance() {
      if (!this.instance) {
        this.instance = new AnimationService();
      }

      return this.instance;
    }
  }]);

  return AnimationService;
}();

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(AnimationService, "instance", void 0);

/***/ })

})
//# sourceMappingURL=index.js.378e4b9d7e8e81402640.hot-update.js.map