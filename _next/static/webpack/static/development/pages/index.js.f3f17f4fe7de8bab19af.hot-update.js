webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Bio/Bio.tsx":
/*!********************************!*\
  !*** ./components/Bio/Bio.tsx ***!
  \********************************/
/*! exports provided: Bio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bio", function() { return Bio; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _contsants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../contsants */ "./contsants.ts");
/* harmony import */ var _FeatureWall__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FeatureWall */ "./components/Bio/FeatureWall.tsx");
var _jsxFileName = "D:\\Documents\\Creations\\git\\Kyesmith.me-src\\components\\Bio\\Bio.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];




var Bio = function Bio() {
  return __jsx(PerspectiveContainer, {
    id: "perspectiveWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx(BioWrapper, {
    id: "perspectiveRecipient",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, _contsants__WEBPACK_IMPORTED_MODULE_2__["bio"].title), __jsx(Body, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, _contsants__WEBPACK_IMPORTED_MODULE_2__["bio"].body, "\xA0For now, feel free to view the source code for the page in it's current state\xA0", __jsx(A, {
    href: "https://github.com/SmithKy3/Kyesmith.me-src",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "here."))), __jsx(_FeatureWall__WEBPACK_IMPORTED_MODULE_3__["FeatureWall"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }));
};
var PerspectiveContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Bio__PerspectiveContainer",
  componentId: "sc-1sil1c1-0"
})(["position:fixed;z-index:-1;top:20vh;left:30vw;width:40vw;height:50vh;perspective:50px;@media screen and (max-width:600px){width:70vw;height:60vh;left:15vw;}"]);
var BioWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Bio__BioWrapper",
  componentId: "sc-1sil1c1-1"
})(["position:absolute;z-index:10;top:0;left:0;width:100%;height:100%;background:white;border:3px solid ", ";transform:rotateX(0deg) rotateY(0deg);transition:transform 0.25s;"], _contsants__WEBPACK_IMPORTED_MODULE_2__["colors"].theme.cloud);
var Title = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Bio__Title",
  componentId: "sc-1sil1c1-2"
})(["position:absolute;top:10%;left:0;width:100%;height:10%;text-align:center;font-family:Calistoga;font-size:2vw;color:", ";@media screen and (max-width:600px){font-size:3vw;}"], _contsants__WEBPACK_IMPORTED_MODULE_2__["colors"].theme.stormBlue);
var Body = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Bio__Body",
  componentId: "sc-1sil1c1-3"
})(["position:absolute;top:25%;left:20%;width:60%;height:content-max;border-width:0 0 0 10px;border-color:", ";text-align:justify;font-family:'Baloo Chettan 2';font-weight:400;font-size:1.25vw;color:", ";@media screen and (max-width:600px){font-size:2.5vw;}"], _contsants__WEBPACK_IMPORTED_MODULE_2__["colors"].theme.teal, _contsants__WEBPACK_IMPORTED_MODULE_2__["colors"].theme.stormBlue);
var A = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a.withConfig({
  displayName: "Bio__A",
  componentId: "sc-1sil1c1-4"
})(["color:", ";text-decoration:underline;&:hover{cursor:pointer;color:", ";}"], _contsants__WEBPACK_IMPORTED_MODULE_2__["colors"].theme.stormBlue, _contsants__WEBPACK_IMPORTED_MODULE_2__["colors"].theme.pinkSand);

/***/ }),

/***/ "./components/Bio/FeatureWall.tsx":
/*!****************************************!*\
  !*** ./components/Bio/FeatureWall.tsx ***!
  \****************************************/
/*! exports provided: FeatureWall */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureWall", function() { return FeatureWall; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _contsants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../contsants */ "./contsants.ts");
var _jsxFileName = "D:\\Documents\\Creations\\git\\Kyesmith.me-src\\components\\Bio\\FeatureWall.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];



var FeatureWall = function FeatureWall() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(FeatureStripe, {
    color: _contsants__WEBPACK_IMPORTED_MODULE_2__["colors"].theme.stormBlue,
    position: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), __jsx(FeatureStripe, {
    color: _contsants__WEBPACK_IMPORTED_MODULE_2__["colors"].theme.teal,
    position: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), __jsx(FeatureStripe, {
    color: _contsants__WEBPACK_IMPORTED_MODULE_2__["colors"].theme.suburst,
    position: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }));
};
var FeatureStripe = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "FeatureWall__FeatureStripe",
  componentId: "sc-19sybq8-0"
})(["position:fixed;z-index:-10 top:", "vh;left:0;width:100vw;height:10vh;background:", ";"], function (props) {
  return 25 + props.position * 10;
}, function (props) {
  return props.color;
});

/***/ })

})
//# sourceMappingURL=index.js.f3f17f4fe7de8bab19af.hot-update.js.map