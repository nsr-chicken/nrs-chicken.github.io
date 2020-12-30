webpackHotUpdate_N_E("pages/home",{

/***/ "./pages/home/firebaseConfig.js":
/*!**************************************!*\
  !*** ./pages/home/firebaseConfig.js ***!
  \**************************************/
/*! exports provided: db */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "db", function() { return db; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/index.esm.js");
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/database */ "./node_modules/firebase/database/dist/index.esm.js");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");






if (!firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].apps.length) {
  firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].initializeApp({
    apiKey: "AIzaSyC2GIk1pnAtTdDgn-UiqIDW3y4EGy448pg",
    authDomain: "nrs-cms.firebaseapp.com",
    databaseURL: "https://nrs-cms-default-rtdb.firebaseio.com",
    projectId: "nrs-cms",
    storageBucket: "nrs-cms.appspot.com",
    messagingSenderId: "94826903466",
    appId: "1:94826903466:web:24fe51cce92e1cb2e39dd3"
  });
} else {
  firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].app();
} //  export const auth = app.auth();
// export const storage = firebase.storage().ref();


var db = firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].firestore(); //  export default app

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9tZS9maXJlYmFzZUNvbmZpZy5qcyJdLCJuYW1lcyI6WyJmaXJlYmFzZSIsImFwcHMiLCJsZW5ndGgiLCJpbml0aWFsaXplQXBwIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsImRhdGFiYXNlVVJMIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJhcHAiLCJkYiIsImZpcmVzdG9yZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLENBQUNBLG9EQUFRLENBQUNDLElBQVQsQ0FBY0MsTUFBbkIsRUFBMkI7QUFDdkJGLHNEQUFRLENBQUNHLGFBQVQsQ0FBdUI7QUFDbkJDLFVBQU0sRUFBRSx5Q0FEVztBQUVuQkMsY0FBVSxFQUFFLHlCQUZPO0FBR25CQyxlQUFXLEVBQUUsNkNBSE07QUFJbkJDLGFBQVMsRUFBRSxTQUpRO0FBS25CQyxpQkFBYSxFQUFFLHFCQUxJO0FBTW5CQyxxQkFBaUIsRUFBRSxhQU5BO0FBT25CQyxTQUFLLEVBQUU7QUFQWSxHQUF2QjtBQVVILENBWEQsTUFXTztBQUNIVixzREFBUSxDQUFDVyxHQUFUO0FBQ0gsQyxDQUNEO0FBQ0E7OztBQUNPLElBQU1DLEVBQUUsR0FBR1osb0RBQVEsQ0FBQ2EsU0FBVCxFQUFYLEMsQ0FDUCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ob21lLjAzYTdmYzAxZGI4OWVkNTlkYTc2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2FwcFwiXHJcbmltcG9ydCBcImZpcmViYXNlL2F1dGhcIlxyXG5pbXBvcnQgXCJmaXJlYmFzZS9zdG9yYWdlXCJcclxuaW1wb3J0ICdmaXJlYmFzZS9kYXRhYmFzZSc7XHJcbmltcG9ydCAnZmlyZWJhc2UvZmlyZXN0b3JlJztcclxuXHJcbmlmICghZmlyZWJhc2UuYXBwcy5sZW5ndGgpIHtcclxuICAgIGZpcmViYXNlLmluaXRpYWxpemVBcHAoe1xyXG4gICAgICAgIGFwaUtleTogXCJBSXphU3lDMkdJazFwbkF0VGREZ24tVWlxSURXM3k0RUd5NDQ4cGdcIixcclxuICAgICAgICBhdXRoRG9tYWluOiBcIm5ycy1jbXMuZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgICAgICAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly9ucnMtY21zLWRlZmF1bHQtcnRkYi5maXJlYmFzZWlvLmNvbVwiLFxyXG4gICAgICAgIHByb2plY3RJZDogXCJucnMtY21zXCIsXHJcbiAgICAgICAgc3RvcmFnZUJ1Y2tldDogXCJucnMtY21zLmFwcHNwb3QuY29tXCIsXHJcbiAgICAgICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiOTQ4MjY5MDM0NjZcIixcclxuICAgICAgICBhcHBJZDogXCIxOjk0ODI2OTAzNDY2OndlYjoyNGZlNTFjY2U5MmUxY2IyZTM5ZGQzXCJcclxuICAgIH0pO1xyXG5cclxufSBlbHNlIHtcclxuICAgIGZpcmViYXNlLmFwcCgpXHJcbn1cclxuLy8gIGV4cG9ydCBjb25zdCBhdXRoID0gYXBwLmF1dGgoKTtcclxuLy8gZXhwb3J0IGNvbnN0IHN0b3JhZ2UgPSBmaXJlYmFzZS5zdG9yYWdlKCkucmVmKCk7XHJcbmV4cG9ydCBjb25zdCBkYiA9IGZpcmViYXNlLmZpcmVzdG9yZSgpO1xyXG4vLyAgZXhwb3J0IGRlZmF1bHQgYXBwIl0sInNvdXJjZVJvb3QiOiIifQ==