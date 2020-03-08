webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./services/PerspectiveService.ts":
/*!****************************************!*\
  !*** ./services/PerspectiveService.ts ***!
  \****************************************/
/*! exports provided: PerspectiveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerspectiveService", function() { return PerspectiveService; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");



var LISTEN_RATE = 60;
var PERSPECTIVE_FACTOR = 1 / 1000;
var PerspectiveService =
/*#__PURE__*/
function () {
  function PerspectiveService() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PerspectiveService);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "centerX", void 0);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "centerY", void 0);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "counter", void 0);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "wrapperElement", void 0);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "recipient", void 0);

    this.centerX = 0;
    this.centerY = 0;
    this.counter = 1;
    window.addEventListener('resize', this.setCenter);
    window.addEventListener('mousemove', this.updatePerspective);
    this.setCenter();
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PerspectiveService, [{
    key: "setCenter",
    value: function setCenter() {
      var perspectiveWrapper = document.getElementById('perspectiveWrapper');
      var clientWidth = perspectiveWrapper.clientWidth,
          clientHeight = perspectiveWrapper.clientHeight;
      this.centerX = clientWidth / 2;
      this.centerY = clientHeight / 2;
    }
  }, {
    key: "updatePerspective",
    value: function updatePerspective(event) {
      var isTimeToUpdate = LISTEN_RATE % this.counter === 0;

      if (!isTimeToUpdate) {
        this.counter = 1 + (this.counter || 0);
        return;
      }

      var clientX = event.clientX,
          clientY = event.clientY;
      var xAngle = (clientX - this.centerX) * PERSPECTIVE_FACTOR;
      var yAngle = (clientY - this.centerY) * PERSPECTIVE_FACTOR;
      var perspectiveRecipient = document.getElementById('perspectiveRecipient');
      perspectiveRecipient.style.transform = "rotateX(".concat(xAngle, "deg) rotateY(").concat(yAngle, "deg)");
      this.counter = 1;
    }
  }], [{
    key: "getInstance",
    value: function getInstance() {
      if (!this.instance) {
        this.instance = new PerspectiveService();
      }

      return this.instance;
    }
  }]);

  return PerspectiveService;
}();

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(PerspectiveService, "instance", void 0);

/***/ })

})
//# sourceMappingURL=index.js.31e53d35e73902e29571.hot-update.js.map