webpackHotUpdate_N_E("pages/home",{

/***/ "./firebaseConfig.js":
/*!***************************!*\
  !*** ./firebaseConfig.js ***!
  \***************************/
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/home/firebaseConfig.js":
false,

/***/ "./pages/home/index.js":
/*!*****************************!*\
  !*** ./pages/home/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _layout_mainlayout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../layout/mainlayout */ "./layout/mainlayout/index.js");
/* harmony import */ var _component_pages__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../component/pages */ "./component/pages/index.js");
/* harmony import */ var _firebaseConfig__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../firebaseConfig */ "./firebaseConfig.js");
/* harmony import */ var _service_toast__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../service/toast */ "./service/toast.js");








var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var Home = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Home, _React$Component);

  var _super = _createSuper(Home);

  function Home() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Home);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      bannerImg: '',
      productList: [],
      productLoder: true,
      about: {
        createDate: '',
        text: '',
        updatedDate: ''
      },
      allPromos: []
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var allPromos = this.state.allPromos;
      _firebaseConfig__WEBPACK_IMPORTED_MODULE_11__["db"].collection("banner").doc("001").get().then(function (docRef) {
        var _docRef$data = docRef.data(),
            b_img = _docRef$data.b_img;

        allPromos.push('1');

        _this2.setState({
          bannerImg: b_img,
          allPromos: allPromos
        });
      })["catch"](function (error) {
        Object(_service_toast__WEBPACK_IMPORTED_MODULE_12__["Toast"])({
          type: 'danger',
          message: 'Internal server error 500',
          title: 'Error'
        });
      });
      _firebaseConfig__WEBPACK_IMPORTED_MODULE_11__["db"].collection("product").where("active", "==", true).get().then(function (querySnapshot) {
        var data = querySnapshot.docs.map(function (doc) {
          console.log('LOG 1', doc.data());
          return _objectSpread({
            id: doc.id
          }, doc.data());
        });
        console.log('LOG 2', data);
        allPromos.push('2');

        _this2.setState({
          productList: data,
          productLoder: false,
          allPromos: allPromos
        });
      })["catch"](function (error) {
        Object(_service_toast__WEBPACK_IMPORTED_MODULE_12__["Toast"])({
          type: 'danger',
          message: 'Internal server error 500',
          title: 'Error'
        });
      });
      _firebaseConfig__WEBPACK_IMPORTED_MODULE_11__["db"].collection("about").doc("001").get().then(function (docRef) {
        allPromos.push('3');

        _this2.setState({
          about: docRef.data(),
          isLoder: false,
          allPromos: allPromos
        }); // console.log(docRef.data())

      })["catch"](function (error) {
        Object(_service_toast__WEBPACK_IMPORTED_MODULE_12__["Toast"])({
          type: 'danger',
          message: 'Internal server error 500',
          title: 'Error'
        });

        _this2.setState({
          isLoder: false
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          bannerImg = _this$state.bannerImg,
          productList = _this$state.productList,
          productLoder = _this$state.productLoder,
          about = _this$state.about,
          allPromos = _this$state.allPromos;
      return __jsx("div", null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, null, __jsx("title", null, "NRS CHICKEN"), __jsx("link", {
        rel: "icon",
        href: "/favicon.ico"
      }), __jsx("script", {
        src: "https://smtpjs.com/v3/smtp.js"
      })), __jsx(_layout_mainlayout__WEBPACK_IMPORTED_MODULE_9__["default"], {
        headerLoder: !(allPromos.length !== 3)
      }, allPromos.length === 3 ? __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx(_component_pages__WEBPACK_IMPORTED_MODULE_10__["Banner"], {
        bannerImg: bannerImg
      }), __jsx(_component_pages__WEBPACK_IMPORTED_MODULE_10__["Product"], {
        productList: productList,
        productLoder: productLoder
      }), __jsx(_component_pages__WEBPACK_IMPORTED_MODULE_10__["ContactUs"], null), __jsx(_component_pages__WEBPACK_IMPORTED_MODULE_10__["About"], {
        about: about
      })) : ""));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZmlyZWJhc2VDb25maWcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2hvbWUvaW5kZXguanMiXSwibmFtZXMiOlsiZmlyZWJhc2UiLCJhcHBzIiwibGVuZ3RoIiwiaW5pdGlhbGl6ZUFwcCIsImFwaUtleSIsImF1dGhEb21haW4iLCJkYXRhYmFzZVVSTCIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwiYXBwIiwiZGIiLCJmaXJlc3RvcmUiLCJIb21lIiwiYmFubmVySW1nIiwicHJvZHVjdExpc3QiLCJwcm9kdWN0TG9kZXIiLCJhYm91dCIsImNyZWF0ZURhdGUiLCJ0ZXh0IiwidXBkYXRlZERhdGUiLCJhbGxQcm9tb3MiLCJzdGF0ZSIsImNvbGxlY3Rpb24iLCJkb2MiLCJnZXQiLCJ0aGVuIiwiZG9jUmVmIiwiZGF0YSIsImJfaW1nIiwicHVzaCIsInNldFN0YXRlIiwiZXJyb3IiLCJUb2FzdCIsInR5cGUiLCJtZXNzYWdlIiwidGl0bGUiLCJ3aGVyZSIsInF1ZXJ5U25hcHNob3QiLCJkb2NzIiwibWFwIiwiY29uc29sZSIsImxvZyIsImlkIiwiaXNMb2RlciIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUksQ0FBQ0Esb0RBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxNQUFuQixFQUEyQjtBQUN2QkYsc0RBQVEsQ0FBQ0csYUFBVCxDQUF1QjtBQUNuQkMsVUFBTSxFQUFFLHlDQURXO0FBRW5CQyxjQUFVLEVBQUUseUJBRk87QUFHbkJDLGVBQVcsRUFBRSw2Q0FITTtBQUluQkMsYUFBUyxFQUFFLFNBSlE7QUFLbkJDLGlCQUFhLEVBQUUscUJBTEk7QUFNbkJDLHFCQUFpQixFQUFFLGFBTkE7QUFPbkJDLFNBQUssRUFB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QVBWLENBTkYsQ0FERjtBQWtCRDs7OztFQS9FK0I0Qiw0Q0FBSyxDQUFDQyxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2hvbWUuMmUzNTE0MTg0NmQxNzMxMzMxMzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvYXBwXCJcclxuaW1wb3J0IFwiZmlyZWJhc2UvYXV0aFwiXHJcbmltcG9ydCBcImZpcmViYXNlL3N0b3JhZ2VcIlxyXG5pbXBvcnQgJ2ZpcmViYXNlL2RhdGFiYXNlJztcclxuaW1wb3J0ICdmaXJlYmFzZS9maXJlc3RvcmUnO1xyXG5cclxuaWYgKCFmaXJlYmFzZS5hcHBzLmxlbmd0aCkge1xyXG4gICAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcCh7XHJcbiAgICAgICAgYXBpS2V5OiBcIkFJemFTeUMyR0lrMXBuQXRUZERnbi1VaXFJRFczeTRFR3k0NDhwZ1wiLFxyXG4gICAgICAgIGF1dGhEb21haW46IFwibnJzLWNtcy5maXJlYmFzZWFwcC5jb21cIixcclxuICAgICAgICBkYXRhYmFzZVVSTDogXCJodHRwczovL25ycy1jbXMtZGVmYXVsdC1ydGRiLmZpcmViYXNlaW8uY29tXCIsXHJcbiAgICAgICAgcHJvamVjdElkOiBcIm5ycy1jbXNcIixcclxuICAgICAgICBzdG9yYWdlQnVja2V0OiBcIm5ycy1jbXMuYXBwc3BvdC5jb21cIixcclxuICAgICAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCI5NDgyNjkwMzQ2NlwiLFxyXG4gICAgICAgIGFwcElkOiBcIjE6OTQ4MjY5MDM0NjY6d2ViOjI0ZmU1MWNjZTkyZTFjYjJlMzlkZDNcIlxyXG4gICAgfSk7XHJcblxyXG59IGVsc2Uge1xyXG4gICAgZmlyZWJhc2UuYXBwKClcclxufVxyXG4vLyAgZXhwb3J0IGNvbnN0IGF1dGggPSBhcHAuYXV0aCgpO1xyXG4vLyBleHBvcnQgY29uc3Qgc3RvcmFnZSA9IGZpcmViYXNlLnN0b3JhZ2UoKS5yZWYoKTtcclxuZXhwb3J0IGNvbnN0IGRiID0gZmlyZWJhc2UuZmlyZXN0b3JlKCk7XHJcbi8vICBleHBvcnQgZGVmYXVsdCBhcHAiLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTWFpbmxheW91dCBmcm9tICcuLi8uLi9sYXlvdXQvbWFpbmxheW91dCdcbmltcG9ydCB7IEJhbm5lciwgUHJvZHVjdCwgQWJvdXQsIENvbnRhY3RVcyB9IGZyb20gJy4uLy4uL2NvbXBvbmVudC9wYWdlcydcbmltcG9ydCB7IGRiIH0gZnJvbSBcIi4uLy4uL2ZpcmViYXNlQ29uZmlnXCI7XG5pbXBvcnQgeyBUb2FzdCB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlL3RvYXN0XCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXG4gIHN0YXRlID0ge1xuICAgIGJhbm5lckltZzogJycsXG4gICAgcHJvZHVjdExpc3Q6IFtdLFxuICAgIHByb2R1Y3RMb2RlcjogdHJ1ZSxcbiAgICBhYm91dDoge1xuICAgICAgY3JlYXRlRGF0ZTogJycsXG4gICAgICB0ZXh0OiAnJyxcbiAgICAgIHVwZGF0ZWREYXRlOiAnJ1xuICAgIH0sXG4gICAgYWxsUHJvbW9zOiBbXVxuICB9XG5cblxuXG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgbGV0IHsgYWxsUHJvbW9zIH0gPSB0aGlzLnN0YXRlO1xuICAgIGRiLmNvbGxlY3Rpb24oXCJiYW5uZXJcIiwpLmRvYyhcIjAwMVwiKS5nZXQoKS50aGVuKChkb2NSZWYpID0+IHtcbiAgICAgIGxldCB7IGJfaW1nIH0gPSBkb2NSZWYuZGF0YSgpO1xuICAgICAgYWxsUHJvbW9zLnB1c2goJzEnKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBiYW5uZXJJbWc6IGJfaW1nLCBhbGxQcm9tb3MgfSlcbiAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHsgXG4gICAgICAgVG9hc3QoeyB0eXBlOiAnZGFuZ2VyJywgbWVzc2FnZTogJ0ludGVybmFsIHNlcnZlciBlcnJvciA1MDAnLCB0aXRsZTogJ0Vycm9yJyB9KVxuICAgICAgfSlcblxuICAgIGRiLmNvbGxlY3Rpb24oXCJwcm9kdWN0XCIpXG4gICAgLndoZXJlKFwiYWN0aXZlXCIsIFwiPT1cIiwgdHJ1ZSkuZ2V0KCkudGhlbigocXVlcnlTbmFwc2hvdCkgPT4ge1xuICAgICAgbGV0IGRhdGEgPSBxdWVyeVNuYXBzaG90LmRvY3MubWFwKGRvYyA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdMT0cgMScsIGRvYy5kYXRhKCkpO1xuXG4gICAgICAgIHJldHVybiB7IGlkOiBkb2MuaWQsIC4uLmRvYy5kYXRhKCkgfVxuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZygnTE9HIDInLCBkYXRhKTtcbiAgICAgIGFsbFByb21vcy5wdXNoKCcyJyk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgcHJvZHVjdExpc3Q6IGRhdGEsIHByb2R1Y3RMb2RlcjogZmFsc2UsIGFsbFByb21vcyB9KVxuICAgIH0pLmNhdGNoKChlcnJvcikgPT4geyBcbiAgICAgICBUb2FzdCh7IHR5cGU6ICdkYW5nZXInLCBtZXNzYWdlOiAnSW50ZXJuYWwgc2VydmVyIGVycm9yIDUwMCcsIHRpdGxlOiAnRXJyb3InIH0pXG4gICAgICB9KVxuXG5cbiAgICBkYi5jb2xsZWN0aW9uKFwiYWJvdXRcIikuZG9jKFwiMDAxXCIpLmdldCgpLnRoZW4oKGRvY1JlZikgPT4ge1xuICAgICAgYWxsUHJvbW9zLnB1c2goJzMnKVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFib3V0OiBkb2NSZWYuZGF0YSgpLCBpc0xvZGVyOiBmYWxzZSwgYWxsUHJvbW9zIH0pXG4gICAgICAvLyBjb25zb2xlLmxvZyhkb2NSZWYuZGF0YSgpKVxuICAgIH0pLmNhdGNoKChlcnJvcikgPT4geyBcbiAgICAgIFRvYXN0KHsgdHlwZTogJ2RhbmdlcicsIG1lc3NhZ2U6ICdJbnRlcm5hbCBzZXJ2ZXIgZXJyb3IgNTAwJywgdGl0bGU6ICdFcnJvcicgfSkgXG4gICAgICB0aGlzLnNldFN0YXRlKHsgaXNMb2RlcjogZmFsc2UgfSlcbiAgICAgfSlcbiAgfVxuXG5cblxuICBcblxuXG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7IGJhbm5lckltZywgcHJvZHVjdExpc3QsIHByb2R1Y3RMb2RlciwgYWJvdXQsIGFsbFByb21vcyB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiA+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5OUlMgQ0hJQ0tFTjwvdGl0bGU+XG4gICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9zbXRwanMuY29tL3YzL3NtdHAuanNcIj48L3NjcmlwdD5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8TWFpbmxheW91dCBoZWFkZXJMb2Rlcj17IShhbGxQcm9tb3MubGVuZ3RoICE9PSAzKX0+XG4gICAgICAgICAge2FsbFByb21vcy5sZW5ndGggPT09IDMgP1xuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPEJhbm5lciBiYW5uZXJJbWc9e2Jhbm5lckltZ30gLz5cbiAgICAgICAgICAgICAgPFByb2R1Y3QgcHJvZHVjdExpc3Q9e3Byb2R1Y3RMaXN0fSBwcm9kdWN0TG9kZXI9e3Byb2R1Y3RMb2Rlcn0gLz5cbiAgICAgICAgICAgICAgPENvbnRhY3RVcyAvPlxuICAgICAgICAgICAgICA8QWJvdXQgYWJvdXQ9e2Fib3V0fSAvPlxuICAgICAgICAgICAgPC8+IDogXCJcIn1cbiAgICAgICAgPC9NYWlubGF5b3V0PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9