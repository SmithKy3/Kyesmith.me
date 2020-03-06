webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/ContactDetails.tsx":
/*!***************************************!*\
  !*** ./components/ContactDetails.tsx ***!
  \***************************************/
/*! exports provided: ContactDetails, StyledLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactDetails", function() { return ContactDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledLink", function() { return StyledLink; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _contsants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contsants */ "./contsants.ts");

var _jsxFileName = "D:\\Documents\\Creations\\git\\Kyesmith.me-src\\components\\ContactDetails.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: inline-block;\n  width: 20vw;\n  font-family: 'Baloo Chettan';\n  font-size: 125%;\n  color: ", ";\n  text-decoration: underline;\n\n  > a {\n    color: ", ";\n\n    &:hover {\n      cursor: pointer;\n      color: ", ";\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var ContactDetails = function ContactDetails(props) {
  var emailMe = 'mailto:"smithkye@live.co.uk?subject=Hey Kye!';
  var linkMe = 'https://uk.linkedin.com/in/kye-smith-121429165';
  return props.isOpened && __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx(StyledLink, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("a", {
    href: emailMe,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Email me")), __jsx(StyledLink, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("a", {
    href: linkMe,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Find me on LinkedIn")));
};
var StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span(_templateObject(), _contsants__WEBPACK_IMPORTED_MODULE_3__["colors"].minimal.raffia, _contsants__WEBPACK_IMPORTED_MODULE_3__["colors"].minimal.raffia, _contsants__WEBPACK_IMPORTED_MODULE_3__["colors"].cameoPink);

/***/ })

})
//# sourceMappingURL=index.js.e92c9aa1739868be36c7.hot-update.js.map