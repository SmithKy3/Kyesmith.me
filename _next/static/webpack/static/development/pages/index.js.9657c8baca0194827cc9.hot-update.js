webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./contsants.ts":
/*!**********************!*\
  !*** ./contsants.ts ***!
  \**********************/
/*! exports provided: colors, bio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return colors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bio", function() { return bio; });
var colors = {
  theme: {
    stormBlue: '#17455E',
    teal: '#194A50',
    suburst: '#D37556',
    pinkSand: '#D8A28C',
    cloud: '#E1DAD2'
  },
  universal: {
    gordini: '#3399FF',
    cameoPink: '#EFBCD5'
  }
};
var bio = {
  title: 'Hey.',
  body: "I'm Kye Smith, I studied Electronic Engineering at the University of Sheffield and now I'm a junior JavaScript developer with experience\n   in Node, React, Redux, Typescript, HTML5 + Canvas, and a touch of C# as well. This is my soon-to-be portfolio page, please excuse the lack of content for now, I'm having to find time outside\n    of my job to work on this. For now, feel free to check out the source code for this page in it's current state"
};

Array.prototype.getNextCyclicEntry = function (startIndex) {
  if (startIndex === this.length - 1) {
    return this[0];
  } else {
    return this[startIndex + 1];
  }
};

Array.prototype.getPreviousCyclicEntry = function (i) {
  if (i === 0) {
    return this[this.length - 1];
  } else {
    return this[i - 1];
  }
};

/***/ })

})
//# sourceMappingURL=index.js.9657c8baca0194827cc9.hot-update.js.map