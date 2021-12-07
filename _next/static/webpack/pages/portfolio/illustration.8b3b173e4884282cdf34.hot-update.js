webpackHotUpdate_N_E("pages/portfolio/illustration",{

/***/ "./pages/portfolio/illustration.js":
/*!*****************************************!*\
  !*** ./pages/portfolio/illustration.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Project; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _page_components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../page-components/layout */ \"./page-components/layout/index.js\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.module.scss */ \"./pages/portfolio/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_photo_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/photo-grid */ \"./components/photo-grid/index.js\");\n\nvar _jsxFileName = \"/Users/mostafa/Projects/sarah-alirezaee-source/pages/portfolio/illustration.js\";\n\n\n\nvar projectsData = {\n  title: 'Illustration'\n};\nvar images = [{\n  src: '/images/illustrations/001.png',\n  thumbnail: '/images/illustrations/thumbnails/001.jpg'\n}, {\n  src: '/images/illustrations/002.png',\n  thumbnail: '/images/illustrations/thumbnails/002.jpg'\n}, {\n  src: '/images/illustrations/003.png',\n  thumbnail: '/images/illustrations/thumbnails/003.jpg'\n}, {\n  src: '/images/illustrations/004.png',\n  thumbnail: '/images/illustrations/thumbnails/004.jpg'\n}, {\n  src: '/images/illustrations/005.png',\n  thumbnail: '/images/illustrations/thumbnails/005.jpg'\n}, {\n  src: '/images/illustrations/006.png',\n  thumbnail: '/images/illustrations/thumbnails/006.jpg'\n}, {\n  src: '/images/illustrations/007.png',\n  thumbnail: '/images/illustrations/thumbnails/007.jpg'\n}, {\n  src: '/images/illustrations/008.png',\n  thumbnail: '/images/illustrations/thumbnails/008.jpg'\n}, {\n  src: '/images/illustrations/009.png',\n  thumbnail: '/images/illustrations/thumbnails/009.jpg'\n}, {\n  src: '/images/illustrations/010.jpg',\n  thumbnail: '/images/illustrations/thumbnails/010.jpg'\n}, {\n  src: '/images/illustrations/011.png',\n  thumbnail: '/images/illustrations/thumbnails/011.jpg'\n}, {\n  src: '/images/illustrations/012.jpg',\n  thumbnail: '/images/illustrations/thumbnails/012.jpg'\n}];\nfunction Project() {\n  var title = projectsData.title;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_page_components_layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    pageTitle: \"Sarah Alirezaee - Portfolio - \".concat(title),\n    title: title,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.galleryContainer,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_photo_grid__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        images: images,\n        aspectRatio: 1.7\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 64,\n    columnNumber: 9\n  }, this);\n}\n_c = Project;\n\nvar _c;\n\n$RefreshReg$(_c, \"Project\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9ydGZvbGlvL2lsbHVzdHJhdGlvbi5qcz8xNmU0Il0sIm5hbWVzIjpbInByb2plY3RzRGF0YSIsInRpdGxlIiwiaW1hZ2VzIiwic3JjIiwidGh1bWJuYWlsIiwiUHJvamVjdCIsInN0eWxlcyIsImdhbGxlcnlDb250YWluZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxZQUFZLEdBQUc7QUFDakJDLE9BQUssRUFBRTtBQURVLENBQXJCO0FBSUEsSUFBTUMsTUFBTSxHQUFHLENBQ1g7QUFDSUMsS0FBRyxFQUFFLCtCQURUO0FBRUlDLFdBQVMsRUFBRTtBQUZmLENBRFcsRUFLWDtBQUNJRCxLQUFHLEVBQUUsK0JBRFQ7QUFFSUMsV0FBUyxFQUFFO0FBRmYsQ0FMVyxFQVNYO0FBQ0lELEtBQUcsRUFBRSwrQkFEVDtBQUVJQyxXQUFTLEVBQUU7QUFGZixDQVRXLEVBYVg7QUFDSUQsS0FBRyxFQUFFLCtCQURUO0FBRUlDLFdBQVMsRUFBRTtBQUZmLENBYlcsRUFpQlg7QUFDSUQsS0FBRyxFQUFFLCtCQURUO0FBRUlDLFdBQVMsRUFBRTtBQUZmLENBakJXLEVBcUJYO0FBQ0lELEtBQUcsRUFBRSwrQkFEVDtBQUVJQyxXQUFTLEVBQUU7QUFGZixDQXJCVyxFQXlCWDtBQUNJRCxLQUFHLEVBQUUsK0JBRFQ7QUFFSUMsV0FBUyxFQUFFO0FBRmYsQ0F6QlcsRUE2Qlg7QUFDSUQsS0FBRyxFQUFFLCtCQURUO0FBRUlDLFdBQVMsRUFBRTtBQUZmLENBN0JXLEVBaUNYO0FBQ0lELEtBQUcsRUFBRSwrQkFEVDtBQUVJQyxXQUFTLEVBQUU7QUFGZixDQWpDVyxFQXFDWDtBQUNJRCxLQUFHLEVBQUUsK0JBRFQ7QUFFSUMsV0FBUyxFQUFFO0FBRmYsQ0FyQ1csRUF5Q1g7QUFDSUQsS0FBRyxFQUFFLCtCQURUO0FBRUlDLFdBQVMsRUFBRTtBQUZmLENBekNXLEVBNkNYO0FBQ0lELEtBQUcsRUFBRSwrQkFEVDtBQUVJQyxXQUFTLEVBQUU7QUFGZixDQTdDVyxDQUFmO0FBbURlLFNBQVNDLE9BQVQsR0FBbUI7QUFDOUIsTUFBTUosS0FBSyxHQUFHRCxZQUFZLENBQUNDLEtBQTNCO0FBRUEsc0JBQ0kscUVBQUMsK0RBQUQ7QUFDSSxhQUFTLDBDQUFvQ0EsS0FBcEMsQ0FEYjtBQUVJLFNBQUssRUFBRUEsS0FGWDtBQUFBLDJCQUlJO0FBQUssZUFBUyxFQUFFSywwREFBTSxDQUFDQyxnQkFBdkI7QUFBQSw2QkFDSSxxRUFBQyw4REFBRDtBQUFXLGNBQU0sRUFBRUwsTUFBbkI7QUFBMkIsbUJBQVcsRUFBRTtBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVVIO0tBYnVCRyxPIiwiZmlsZSI6Ii4vcGFnZXMvcG9ydGZvbGlvL2lsbHVzdHJhdGlvbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vcGFnZS1jb21wb25lbnRzL2xheW91dCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJztcbmltcG9ydCBQaG90b0dyaWQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9waG90by1ncmlkJztcblxuY29uc3QgcHJvamVjdHNEYXRhID0ge1xuICAgIHRpdGxlOiAnSWxsdXN0cmF0aW9uJyxcbn07XG5cbmNvbnN0IGltYWdlcyA9IFtcbiAgICB7XG4gICAgICAgIHNyYzogJy9pbWFnZXMvaWxsdXN0cmF0aW9ucy8wMDEucG5nJyxcbiAgICAgICAgdGh1bWJuYWlsOiAnL2ltYWdlcy9pbGx1c3RyYXRpb25zL3RodW1ibmFpbHMvMDAxLmpwZydcbiAgICB9LFxuICAgIHtcbiAgICAgICAgc3JjOiAnL2ltYWdlcy9pbGx1c3RyYXRpb25zLzAwMi5wbmcnLFxuICAgICAgICB0aHVtYm5haWw6ICcvaW1hZ2VzL2lsbHVzdHJhdGlvbnMvdGh1bWJuYWlscy8wMDIuanBnJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBzcmM6ICcvaW1hZ2VzL2lsbHVzdHJhdGlvbnMvMDAzLnBuZycsXG4gICAgICAgIHRodW1ibmFpbDogJy9pbWFnZXMvaWxsdXN0cmF0aW9ucy90aHVtYm5haWxzLzAwMy5qcGcnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHNyYzogJy9pbWFnZXMvaWxsdXN0cmF0aW9ucy8wMDQucG5nJyxcbiAgICAgICAgdGh1bWJuYWlsOiAnL2ltYWdlcy9pbGx1c3RyYXRpb25zL3RodW1ibmFpbHMvMDA0LmpwZydcbiAgICB9LFxuICAgIHtcbiAgICAgICAgc3JjOiAnL2ltYWdlcy9pbGx1c3RyYXRpb25zLzAwNS5wbmcnLFxuICAgICAgICB0aHVtYm5haWw6ICcvaW1hZ2VzL2lsbHVzdHJhdGlvbnMvdGh1bWJuYWlscy8wMDUuanBnJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBzcmM6ICcvaW1hZ2VzL2lsbHVzdHJhdGlvbnMvMDA2LnBuZycsXG4gICAgICAgIHRodW1ibmFpbDogJy9pbWFnZXMvaWxsdXN0cmF0aW9ucy90aHVtYm5haWxzLzAwNi5qcGcnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHNyYzogJy9pbWFnZXMvaWxsdXN0cmF0aW9ucy8wMDcucG5nJyxcbiAgICAgICAgdGh1bWJuYWlsOiAnL2ltYWdlcy9pbGx1c3RyYXRpb25zL3RodW1ibmFpbHMvMDA3LmpwZydcbiAgICB9LFxuICAgIHtcbiAgICAgICAgc3JjOiAnL2ltYWdlcy9pbGx1c3RyYXRpb25zLzAwOC5wbmcnLFxuICAgICAgICB0aHVtYm5haWw6ICcvaW1hZ2VzL2lsbHVzdHJhdGlvbnMvdGh1bWJuYWlscy8wMDguanBnJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBzcmM6ICcvaW1hZ2VzL2lsbHVzdHJhdGlvbnMvMDA5LnBuZycsXG4gICAgICAgIHRodW1ibmFpbDogJy9pbWFnZXMvaWxsdXN0cmF0aW9ucy90aHVtYm5haWxzLzAwOS5qcGcnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHNyYzogJy9pbWFnZXMvaWxsdXN0cmF0aW9ucy8wMTAuanBnJyxcbiAgICAgICAgdGh1bWJuYWlsOiAnL2ltYWdlcy9pbGx1c3RyYXRpb25zL3RodW1ibmFpbHMvMDEwLmpwZydcbiAgICB9LFxuICAgIHtcbiAgICAgICAgc3JjOiAnL2ltYWdlcy9pbGx1c3RyYXRpb25zLzAxMS5wbmcnLFxuICAgICAgICB0aHVtYm5haWw6ICcvaW1hZ2VzL2lsbHVzdHJhdGlvbnMvdGh1bWJuYWlscy8wMTEuanBnJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBzcmM6ICcvaW1hZ2VzL2lsbHVzdHJhdGlvbnMvMDEyLmpwZycsXG4gICAgICAgIHRodW1ibmFpbDogJy9pbWFnZXMvaWxsdXN0cmF0aW9ucy90aHVtYm5haWxzLzAxMi5qcGcnXG4gICAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3QoKSB7XG4gICAgY29uc3QgdGl0bGUgPSBwcm9qZWN0c0RhdGEudGl0bGU7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8TGF5b3V0XG4gICAgICAgICAgICBwYWdlVGl0bGU9eyBgU2FyYWggQWxpcmV6YWVlIC0gUG9ydGZvbGlvIC0gJHt0aXRsZX1gIH1cbiAgICAgICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5nYWxsZXJ5Q29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICA8UGhvdG9HcmlkIGltYWdlcz17aW1hZ2VzfSBhc3BlY3RSYXRpbz17MS43fSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgICk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/portfolio/illustration.js\n");

/***/ })

})