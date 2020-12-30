webpackHotUpdate_N_E("pages/home",{

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
/* harmony import */ var _firebaseConfig__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./firebaseConfig */ "./pages/home/firebaseConfig.js");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9tZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJIb21lIiwiYmFubmVySW1nIiwicHJvZHVjdExpc3QiLCJwcm9kdWN0TG9kZXIiLCJhYm91dCIsImNyZWF0ZURhdGUiLCJ0ZXh0IiwidXBkYXRlZERhdGUiLCJhbGxQcm9tb3MiLCJzdGF0ZSIsImRiIiwiY29sbGVjdGlvbiIsImRvYyIsImdldCIsInRoZW4iLCJkb2NSZWYiLCJkYXRhIiwiYl9pbWciLCJwdXNoIiwic2V0U3RhdGUiLCJlcnJvciIsIlRvYXN0IiwidHlwZSIsIm1lc3NhZ2UiLCJ0aXRsZSIsIndoZXJlIiwicXVlcnlTbmFwc2hvdCIsImRvY3MiLCJtYXAiLCJjb25zb2xlIiwibG9nIiwiaWQiLCJpc0xvZGVyIiwibGVuZ3RoIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBQ3FCQSxJOzs7Ozs7Ozs7Ozs7Ozs7O2dOQUdYO0FBQ05DLGVBQVMsRUFBRSxFQURMO0FBRU5DLGlCQUFXLEVBQUUsRUFGUDtBQUdOQyxrQkFBWSxFQUFFLElBSFI7QUFJTkMsV0FBSyxFQUFFO0FBQ0xDLGtCQUFVLEVBQUUsRUFEUDtBQUVMQyxZQUFJLEVBQUUsRUFGRDtBQUdMQyxtQkFBVyxFQUFFO0FBSFIsT0FKRDtBQVNOQyxlQUFTLEVBQUU7QUFUTCxLOzs7Ozs7O3dDQWVZO0FBQUE7O0FBQUEsVUFDWkEsU0FEWSxHQUNFLEtBQUtDLEtBRFAsQ0FDWkQsU0FEWTtBQUVsQkUseURBQUUsQ0FBQ0MsVUFBSCxDQUFjLFFBQWQsRUFBeUJDLEdBQXpCLENBQTZCLEtBQTdCLEVBQW9DQyxHQUFwQyxHQUEwQ0MsSUFBMUMsQ0FBK0MsVUFBQ0MsTUFBRCxFQUFZO0FBQUEsMkJBQ3pDQSxNQUFNLENBQUNDLElBQVAsRUFEeUM7QUFBQSxZQUNuREMsS0FEbUQsZ0JBQ25EQSxLQURtRDs7QUFFekRULGlCQUFTLENBQUNVLElBQVYsQ0FBZSxHQUFmOztBQUNBLGNBQUksQ0FBQ0MsUUFBTCxDQUFjO0FBQUVsQixtQkFBUyxFQUFFZ0IsS0FBYjtBQUFvQlQsbUJBQVMsRUFBVEE7QUFBcEIsU0FBZDtBQUNELE9BSkQsV0FJUyxVQUFDWSxLQUFELEVBQVc7QUFBR0MscUVBQUssQ0FBQztBQUFFQyxjQUFJLEVBQUUsUUFBUjtBQUFrQkMsaUJBQU8sRUFBRSwyQkFBM0I7QUFBd0RDLGVBQUssRUFBRTtBQUEvRCxTQUFELENBQUw7QUFBZ0YsT0FKdkc7QUFNQWQseURBQUUsQ0FBQ0MsVUFBSCxDQUFjLFNBQWQsRUFDQ2MsS0FERCxDQUNPLFFBRFAsRUFDaUIsSUFEakIsRUFDdUIsSUFEdkIsRUFDNkJaLEdBRDdCLEdBQ21DQyxJQURuQyxDQUN3QyxVQUFDWSxhQUFELEVBQW1CO0FBQ3pELFlBQUlWLElBQUksR0FBR1UsYUFBYSxDQUFDQyxJQUFkLENBQW1CQyxHQUFuQixDQUF1QixVQUFBaEIsR0FBRyxFQUFJO0FBQ3ZDaUIsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosRUFBcUJsQixHQUFHLENBQUNJLElBQUosRUFBckI7QUFFQTtBQUFTZSxjQUFFLEVBQUVuQixHQUFHLENBQUNtQjtBQUFqQixhQUF3Qm5CLEdBQUcsQ0FBQ0ksSUFBSixFQUF4QjtBQUNELFNBSlUsQ0FBWDtBQUtBYSxlQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLEVBQXFCZCxJQUFyQjtBQUNBUixpQkFBUyxDQUFDVSxJQUFWLENBQWUsR0FBZjs7QUFDQSxjQUFJLENBQUNDLFFBQUwsQ0FBYztBQUFFakIscUJBQVcsRUFBRWMsSUFBZjtBQUFxQmIsc0JBQVksRUFBRSxLQUFuQztBQUEwQ0ssbUJBQVMsRUFBVEE7QUFBMUMsU0FBZDtBQUNELE9BVkQsV0FVUyxVQUFDWSxLQUFELEVBQVc7QUFBR0MscUVBQUssQ0FBQztBQUFFQyxjQUFJLEVBQUUsUUFBUjtBQUFrQkMsaUJBQU8sRUFBRSwyQkFBM0I7QUFBd0RDLGVBQUssRUFBRTtBQUEvRCxTQUFELENBQUw7QUFBZ0YsT0FWdkc7QUFhQWQseURBQUUsQ0FBQ0MsVUFBSCxDQUFjLE9BQWQsRUFBdUJDLEdBQXZCLENBQTJCLEtBQTNCLEVBQWtDQyxHQUFsQyxHQUF3Q0MsSUFBeEMsQ0FBNkMsVUFBQ0MsTUFBRCxFQUFZO0FBQ3ZEUCxpQkFBUyxDQUFDVSxJQUFWLENBQWUsR0FBZjs7QUFDQSxjQUFJLENBQUNDLFFBQUwsQ0FBYztBQUFFZixlQUFLLEVBQUVXLE1BQU0sQ0FBQ0MsSUFBUCxFQUFUO0FBQXdCZ0IsaUJBQU8sRUFBRSxLQUFqQztBQUF3Q3hCLG1CQUFTLEVBQVRBO0FBQXhDLFNBQWQsRUFGdUQsQ0FHdkQ7O0FBQ0QsT0FKRCxXQUlTLFVBQUNZLEtBQUQsRUFBVztBQUNsQkMscUVBQUssQ0FBQztBQUFFQyxjQUFJLEVBQUUsUUFBUjtBQUFrQkMsaUJBQU8sRUFBRSwyQkFBM0I7QUFBd0RDLGVBQUssRUFBRTtBQUEvRCxTQUFELENBQUw7O0FBQ0EsY0FBSSxDQUFDTCxRQUFMLENBQWM7QUFBRWEsaUJBQU8sRUFBRTtBQUFYLFNBQWQ7QUFDQSxPQVBGO0FBUUQ7Ozs2QkFRUTtBQUFBLHdCQUMwRCxLQUFLdkIsS0FEL0Q7QUFBQSxVQUNEUixTQURDLGVBQ0RBLFNBREM7QUFBQSxVQUNVQyxXQURWLGVBQ1VBLFdBRFY7QUFBQSxVQUN1QkMsWUFEdkIsZUFDdUJBLFlBRHZCO0FBQUEsVUFDcUNDLEtBRHJDLGVBQ3FDQSxLQURyQztBQUFBLFVBQzRDSSxTQUQ1QyxlQUM0Q0EsU0FENUM7QUFFUCxhQUNFLG1CQUNFLE1BQUMsZ0RBQUQsUUFDRSxtQ0FERixFQUVFO0FBQU0sV0FBRyxFQUFDLE1BQVY7QUFBaUIsWUFBSSxFQUFDO0FBQXRCLFFBRkYsRUFHRTtBQUFRLFdBQUcsRUFBQztBQUFaLFFBSEYsQ0FERixFQU1FLE1BQUMsMERBQUQ7QUFBWSxtQkFBVyxFQUFFLEVBQUVBLFNBQVMsQ0FBQ3lCLE1BQVYsS0FBcUIsQ0FBdkI7QUFBekIsU0FDR3pCLFNBQVMsQ0FBQ3lCLE1BQVYsS0FBcUIsQ0FBckIsR0FDQyxtRUFDRSxNQUFDLHdEQUFEO0FBQVEsaUJBQVMsRUFBRWhDO0FBQW5CLFFBREYsRUFFRSxNQUFDLHlEQUFEO0FBQVMsbUJBQVcsRUFBRUMsV0FBdEI7QUFBbUMsb0JBQVksRUFBRUM7QUFBakQsUUFGRixFQUdFLE1BQUMsMkRBQUQsT0FIRixFQUlFLE1BQUMsdURBQUQ7QUFBTyxhQUFLLEVBQUVDO0FBQWQsUUFKRixDQURELEdBTU8sRUFQVixDQU5GLENBREY7QUFrQkQ7Ozs7RUEzRStCOEIsNENBQUssQ0FBQ0MsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ob21lLjg0MWI4MzcxZTQ4ZjZlMjJhNTI3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTWFpbmxheW91dCBmcm9tICcuLi8uLi9sYXlvdXQvbWFpbmxheW91dCdcbmltcG9ydCB7IEJhbm5lciwgUHJvZHVjdCwgQWJvdXQsIENvbnRhY3RVcyB9IGZyb20gJy4uLy4uL2NvbXBvbmVudC9wYWdlcydcbmltcG9ydCB7IGRiIH0gZnJvbSBcIi4vZmlyZWJhc2VDb25maWdcIjtcbmltcG9ydCB7IFRvYXN0IH0gZnJvbSBcIi4uLy4uL3NlcnZpY2UvdG9hc3RcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cbiAgc3RhdGUgPSB7XG4gICAgYmFubmVySW1nOiAnJyxcbiAgICBwcm9kdWN0TGlzdDogW10sXG4gICAgcHJvZHVjdExvZGVyOiB0cnVlLFxuICAgIGFib3V0OiB7XG4gICAgICBjcmVhdGVEYXRlOiAnJyxcbiAgICAgIHRleHQ6ICcnLFxuICAgICAgdXBkYXRlZERhdGU6ICcnXG4gICAgfSxcbiAgICBhbGxQcm9tb3M6IFtdXG4gIH1cblxuXG5cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBsZXQgeyBhbGxQcm9tb3MgfSA9IHRoaXMuc3RhdGU7XG4gICAgZGIuY29sbGVjdGlvbihcImJhbm5lclwiLCkuZG9jKFwiMDAxXCIpLmdldCgpLnRoZW4oKGRvY1JlZikgPT4ge1xuICAgICAgbGV0IHsgYl9pbWcgfSA9IGRvY1JlZi5kYXRhKCk7XG4gICAgICBhbGxQcm9tb3MucHVzaCgnMScpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJhbm5lckltZzogYl9pbWcsIGFsbFByb21vcyB9KVxuICAgIH0pLmNhdGNoKChlcnJvcikgPT4geyAgVG9hc3QoeyB0eXBlOiAnZGFuZ2VyJywgbWVzc2FnZTogJ0ludGVybmFsIHNlcnZlciBlcnJvciA1MDAnLCB0aXRsZTogJ0Vycm9yJyB9KX0pXG5cbiAgICBkYi5jb2xsZWN0aW9uKFwicHJvZHVjdFwiKVxuICAgIC53aGVyZShcImFjdGl2ZVwiLCBcIj09XCIsIHRydWUpLmdldCgpLnRoZW4oKHF1ZXJ5U25hcHNob3QpID0+IHtcbiAgICAgIGxldCBkYXRhID0gcXVlcnlTbmFwc2hvdC5kb2NzLm1hcChkb2MgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnTE9HIDEnLCBkb2MuZGF0YSgpKTtcblxuICAgICAgICByZXR1cm4geyBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH1cbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2coJ0xPRyAyJywgZGF0YSk7XG4gICAgICBhbGxQcm9tb3MucHVzaCgnMicpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByb2R1Y3RMaXN0OiBkYXRhLCBwcm9kdWN0TG9kZXI6IGZhbHNlLCBhbGxQcm9tb3MgfSlcbiAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHsgIFRvYXN0KHsgdHlwZTogJ2RhbmdlcicsIG1lc3NhZ2U6ICdJbnRlcm5hbCBzZXJ2ZXIgZXJyb3IgNTAwJywgdGl0bGU6ICdFcnJvcicgfSl9KVxuXG5cbiAgICBkYi5jb2xsZWN0aW9uKFwiYWJvdXRcIikuZG9jKFwiMDAxXCIpLmdldCgpLnRoZW4oKGRvY1JlZikgPT4ge1xuICAgICAgYWxsUHJvbW9zLnB1c2goJzMnKVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFib3V0OiBkb2NSZWYuZGF0YSgpLCBpc0xvZGVyOiBmYWxzZSwgYWxsUHJvbW9zIH0pXG4gICAgICAvLyBjb25zb2xlLmxvZyhkb2NSZWYuZGF0YSgpKVxuICAgIH0pLmNhdGNoKChlcnJvcikgPT4geyBcbiAgICAgIFRvYXN0KHsgdHlwZTogJ2RhbmdlcicsIG1lc3NhZ2U6ICdJbnRlcm5hbCBzZXJ2ZXIgZXJyb3IgNTAwJywgdGl0bGU6ICdFcnJvcicgfSkgXG4gICAgICB0aGlzLnNldFN0YXRlKHsgaXNMb2RlcjogZmFsc2UgfSlcbiAgICAgfSlcbiAgfVxuXG5cblxuICBcblxuXG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7IGJhbm5lckltZywgcHJvZHVjdExpc3QsIHByb2R1Y3RMb2RlciwgYWJvdXQsIGFsbFByb21vcyB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiA+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5OUlMgQ0hJQ0tFTjwvdGl0bGU+XG4gICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9zbXRwanMuY29tL3YzL3NtdHAuanNcIj48L3NjcmlwdD5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8TWFpbmxheW91dCBoZWFkZXJMb2Rlcj17IShhbGxQcm9tb3MubGVuZ3RoICE9PSAzKX0+XG4gICAgICAgICAge2FsbFByb21vcy5sZW5ndGggPT09IDMgP1xuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPEJhbm5lciBiYW5uZXJJbWc9e2Jhbm5lckltZ30gLz5cbiAgICAgICAgICAgICAgPFByb2R1Y3QgcHJvZHVjdExpc3Q9e3Byb2R1Y3RMaXN0fSBwcm9kdWN0TG9kZXI9e3Byb2R1Y3RMb2Rlcn0gLz5cbiAgICAgICAgICAgICAgPENvbnRhY3RVcyAvPlxuICAgICAgICAgICAgICA8QWJvdXQgYWJvdXQ9e2Fib3V0fSAvPlxuICAgICAgICAgICAgPC8+IDogXCJcIn1cbiAgICAgICAgPC9NYWlubGF5b3V0PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9