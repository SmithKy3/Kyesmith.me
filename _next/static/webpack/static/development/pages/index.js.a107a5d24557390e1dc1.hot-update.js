webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/ContactMe.tsx":
/*!**********************************!*\
  !*** ./components/ContactMe.tsx ***!
  \**********************************/
/*! exports provided: ContactMe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactMe", function() { return ContactMe; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _contsants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../contsants */ "./contsants.ts");
/* harmony import */ var _ContactDetails__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ContactDetails */ "./components/ContactDetails.tsx");






var _jsxFileName = "D:\\Documents\\Creations\\git\\Kyesmith.me-src\\components\\ContactMe.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6__["createElement"];

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: ", ";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 12vw;\n  height: 20vh;\n  padding: 10px;\n  background: white;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin: 0 0 0 80%;\n  width: 3vh;\n  height: 3vh;\n  text-decoration: none;\n  border: none;\n  font-size: 3vh;\n  font-weight: 800;\n  color: ", ";\n  background: white;\n\n  &:hover {\n    cursor: pointer;\n  }\n\n  &:focus {\n    outline: none;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: ", ";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 6vw;\n  height: 7vh;\n  background: white;\n\n  text-align: left;\n  color: ", ";\n  font-size: 2.5vh;\n  font-family: 'Baloo Chettan';\n\n  &:hover {\n    cursor: pointer;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: fixed;\n  z-index: 10;\n  top: 2vh;\n  right: ", "vw;\n  transition: right 1s;\n  width: 30vw;\n  height: 8vh;\n  background: none;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var ContactMe =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ContactMe, _React$Component);

  function ContactMe() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ContactMe);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(ContactMe).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ContactMe, [{
    key: "render",
    value: function render() {
      return __jsx(ContactWrapper, {
        rightMargin: this.props.rightMargin,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, __jsx(PullOutTab, {
        onClick: this.props.handleShow,
        isOpened: this.props.isOpened,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, "Contact", __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }), "Me"), __jsx(DetailsWrapper, {
        isOpened: this.props.isOpened,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, __jsx(CloseButton, {
        onClick: this.props.handleHide,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "X"), __jsx(_ContactDetails__WEBPACK_IMPORTED_MODULE_9__["ContactDetails"], {
        isOpened: this.props.isOpened,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      })));
    }
  }]);

  return ContactMe;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);
var ContactWrapper = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div(_templateObject(), function (props) {
  return props.rightMargin;
});
var PullOutTab = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div(_templateObject2(), function (props) {
  return props.isOpened ? 'none' : 'block';
}, _contsants__WEBPACK_IMPORTED_MODULE_8__["colors"].gordini);
var CloseButton = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].button(_templateObject3(), _contsants__WEBPACK_IMPORTED_MODULE_8__["colors"].minimal.raffia);
var DetailsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div(_templateObject4(), function (props) {
  return !props.isOpened ? 'none' : 'inline-block';
});

/***/ })

})
//# sourceMappingURL=index.js.a107a5d24557390e1dc1.hot-update.js.map